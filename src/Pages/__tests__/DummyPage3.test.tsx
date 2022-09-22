import { render, screen } from "@testing-library/react";
import DummyPage3 from "../DummyPage3";

describe("Given a DummyPage3 component", () => {
  describe("When instantiated", () => {
    test("Then it should display a heading with a dummy text", () => {
      const dummyText = "Hi! This is a false page (3)";

      render(<DummyPage3 />);

      const heading = screen.getByRole("heading", {
        name: dummyText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
