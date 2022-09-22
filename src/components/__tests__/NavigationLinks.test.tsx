import { render, screen } from "@testing-library/react";
import mockRoutes from "../../test-utils/mocks/mockRoutes";
import Wrapper from "../../test-utils/Wrapper";
import NavigationLinks from "../NavigationLinks";

describe("Given a NavigationLinks component", () => {
  describe("When instantiated with a list of routes and a logged user", () => {
    test("Then it should render all the routes that have a name", () => {
      render(<NavigationLinks isLogged={true} routes={mockRoutes} />, {
        wrapper: Wrapper,
      });

      const expectedLinks = [
        screen.getByRole("link", { name: mockRoutes[1].name }),
        screen.getByRole("link", { name: mockRoutes[2].name }),
      ];
      const totalLinks = screen.getAllByRole("link");

      expectedLinks.forEach((link) => expect(link).toBeInTheDocument());
      expect(totalLinks).toHaveLength(expectedLinks.length);
    });
  });
});
