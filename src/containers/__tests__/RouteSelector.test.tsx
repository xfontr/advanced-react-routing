import { render, screen } from "@testing-library/react";
import mockRoutes from "../../test-utils/mocks/mockRoutes";
import Wrapper from "../../test-utils/Wrapper";
import RouteSelector from "../RouteSelector";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { Suspense } from "react";
import paths from "../../configs/paths";

describe("Given a RouteSelector component", () => {
  describe("When instantiated with a route that always renders and a logged user", () => {
    test("Then it should render said route", async () => {
      render(
        <Suspense>
          <Routes>
            {RouteSelector({ route: mockRoutes[0], isLogged: true })}
          </Routes>
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

  describe("When instantiated with a route that renders only for logged users and a logged user", () => {
    test("Then it should render said route", async () => {
      const dummyText = "Hi! This is a false page (2)";

      render(
        <MemoryRouter initialEntries={[mockRoutes[2].path]}>
          <Suspense>
            <Routes>
              <Route path={paths.home} element={<>{dummyText}</>} />
              {RouteSelector({ route: mockRoutes[2], isLogged: true })}
            </Routes>
          </Suspense>
        </MemoryRouter>
      );

      const heading = await screen.findByRole("heading", {
        name: dummyText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When instantiated with a route that renders only for logged users and a not logged user", () => {
    test("Then it should not render said route, and redirect to home", async () => {
      const dummyText = "Home page";

      render(
        <MemoryRouter initialEntries={[mockRoutes[2].path]}>
          <Suspense>
            <Routes>
              <Route path={paths.home} element={<>{dummyText}</>} />
              {RouteSelector({ route: mockRoutes[2], isLogged: false })}
            </Routes>
          </Suspense>
        </MemoryRouter>
      );

      const expectedRenderedPage = await screen.findByText(dummyText);

      expect(expectedRenderedPage).toBeInTheDocument();
    });
  });
});
