import { render, screen } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import RenderRoutes from "../RenderRoutes";
import { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import mockRoutes from "../../test-utils/mocks/mockRoutes";
import IRoutes from "../../types/IRoutes";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: (): JSX.Element => <>falseNavigate</>,
}));

const mockSimpleRoutes: IRoutes = [mockRoutes[0], mockRoutes[1]];

describe("Given a RenderRoutes component", () => {
  describe("When instantiated with a list of routes", () => {
    test("Then it should render the components specified by said list", async () => {
      render(
        <Suspense>
          <RenderRoutes routes={mockSimpleRoutes} isLogged={true} />
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
            <RenderRoutes routes={mockSimpleRoutes} isLogged={true} />
          </Suspense>
        </MemoryRouter>
      );

      expect(await screen.findByText("falseNavigate")).toBeInTheDocument();
    });
  });
});
