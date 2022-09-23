import { render, screen } from "@testing-library/react";
import DummyPage2 from "../DummyPage2";

describe("Given a DummyPage2 component", () => {
  describe("When instantiated", () => {
    test("Then it should display a heading with a dummy text", () => {
      const dummyText = "Hi! This is a false page (2)";

      render(<DummyPage2 />);

      const heading = screen.getByRole("heading", {
        name: dummyText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
