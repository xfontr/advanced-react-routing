import { render, screen } from "@testing-library/react";
import NotFoundPage from "../NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When instantiated", () => {
    test("Then it should display a heading with a not found heading", () => {
      const notFoundText = "We couldn't find what you are looking for";

      render(<NotFoundPage />);

      const heading = screen.getByRole("heading", {
        name: notFoundText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
