import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../test-utils/Wrapper";
import Layout from "../Layout";

describe("Given a Layout component", () => {
  const text = "Hello";
  const mockSetter = jest.fn() as React.Dispatch<React.SetStateAction<boolean>>;

  describe("When instantiated with a logged user and a text as a child", () => {
    test("Then it should render the page layout and said child", () => {
      render(
        <Layout isLogged={true} setIsLogged={mockSetter}>
          {text}
        </Layout>,
        { wrapper: Wrapper }
      );

      const logButton = screen.getByRole("button", { name: "Log out" });
      const childText = screen.getByText(text);

      expect(logButton).toBeInTheDocument();
      expect(childText).toBeInTheDocument();
    });

    test("When clicked the log button, it should call the setter function passed as props", async () => {
      render(
        <Layout isLogged={true} setIsLogged={mockSetter}>
          {text}
        </Layout>,
        { wrapper: Wrapper }
      );

      const logButton = screen.getByRole("button", { name: "Log out" });
      await userEvent.click(logButton);

      expect(mockSetter).toHaveBeenCalled();
    });
  });

  describe("When instantiated with a not logged user", () => {
    test("Then the log button should display 'Log in'", () => {
      render(
        <Layout isLogged={false} setIsLogged={mockSetter}>
          {text}
        </Layout>,
        { wrapper: Wrapper }
      );

      const logButton = screen.getByRole("button", { name: "Log in" });

      expect(logButton).toBeInTheDocument();
    });
  });
});
