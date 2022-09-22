import { render, screen } from "@testing-library/react";
import mockRoutes from "../../test-utils/mocks/mockRoutes";
import Wrapper from "../../test-utils/Wrapper";
import NavigationLinks from "../NavigationLinks";

describe("Given a NavigationLinks component", () => {
  const numberOfExpectedLinks = 2;

  describe("When instantiated with a list of routes and a logged user", () => {
    test("Then it should render all the routes that must render always", () => {
      render(<NavigationLinks isLogged={true} routes={mockRoutes} />, {
        wrapper: Wrapper,
      });

      const expectedLink = screen.getByRole("link", {
        name: mockRoutes[1].name,
      });

      const totalLinks = screen.getAllByRole("link");

      expect(expectedLink).toBeInTheDocument();
      expect(totalLinks).toHaveLength(numberOfExpectedLinks);
    });

    test("Then it should render only the routes for logged in users", () => {
      render(<NavigationLinks isLogged={true} routes={mockRoutes} />, {
        wrapper: Wrapper,
      });

      const expectedLink = screen.getByRole("link", {
        name: mockRoutes[2].name,
      });
      const unexpectedLink = screen.queryByRole("link", {
        name: mockRoutes[3].name,
      });

      expect(expectedLink).toBeInTheDocument();
      expect(unexpectedLink).not.toBeInTheDocument();
    });
  });

  describe("When instantiated with a list of routes and a logged out user", () => {
    test("Then it should render only the routes for logged out users", () => {
      render(<NavigationLinks isLogged={false} routes={mockRoutes} />, {
        wrapper: Wrapper,
      });

      const expectedLink = screen.getByRole("link", {
        name: mockRoutes[3].name,
      });
      const unexpectedLink = screen.queryByRole("link", {
        name: mockRoutes[2].name,
      });

      expect(expectedLink).toBeInTheDocument();
      expect(unexpectedLink).not.toBeInTheDocument();
    });
  });
});
