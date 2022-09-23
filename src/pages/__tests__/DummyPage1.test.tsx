import { render, screen } from "@testing-library/react";
import DummyPage1 from "../DummyPage1";

describe("Given a DummyPage1 component", () => {
  describe("When instantiated", () => {
    test("Then it should display a heading with a dummy text", () => {
      const dummyText = "Hi! This is a false page (1)";

      render(<DummyPage1 />);

      const heading = screen.getByRole("heading", {
        name: dummyText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
