import { render, screen } from "@testing-library/react";
import { lazy } from "react";
import paths from "../../configs/paths";
import Wrapper from "../../test-utils/Wrapper";
import RenderRoutes from "../RenderRoutes";
import { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: (): JSX.Element => <>falseNavigate</>,
}));

const fakeRoutes = [
  {
    path: paths.root,
    Page: lazy(() => import("../../pages/DummyPage1")),
  },
  {
    path: paths.home,
    navigate: paths.contact,
  },
];

describe("Given a RenderRoutes component", () => {
  describe("When instantiated with a list of routes", () => {
    test("Then it should render the components specified by said list", async () => {
      render(
        <Suspense>
          <RenderRoutes routes={fakeRoutes} />
        </Suspense>,
        { wrapper: Wrapper }
      );

      const dummyText = "Hi! This is a false page (1)";

      const expectedRenderedPage = await screen.findByRole("heading", {
        name: dummyText,
        level: 1,
      });

      expect(expectedRenderedPage).toBeInTheDocument();
    });
  });

  describe("When instantiated with a list of routes, one of which requires to navigate", () => {
    test("Then it should navigate to the specified page", async () => {
      render(
        <MemoryRouter initialEntries={["/home"]}>
          <Suspense>
            <RenderRoutes routes={fakeRoutes} />
          </Suspense>
        </MemoryRouter>
      );

      expect(await screen.findByText("falseNavigate")).toBeInTheDocument();
    });
  });
});
