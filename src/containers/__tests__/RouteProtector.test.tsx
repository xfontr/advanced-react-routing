import { render, renderHook, screen } from "@testing-library/react";
import paths from "../../configs/paths";
import Wrapper from "../../test-utils/Wrapper";
import RouteProtector from "../RouteProtector";
import { useLocation, Route, MemoryRouter, Routes } from "react-router-dom";
import DummyPage1 from "../../pages/DummyPage1";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <>Outlet</>,
  Navigate: () => <>Navigate</>,
}));

describe("Given a RouteProtector component", () => {
  describe("When instantiated as protected", () => {
    test("Then it should render the Navigate component to change the page", () => {
      render(<RouteProtector isProtected={true} />, { wrapper: Wrapper });

      const navigate = screen.getByText("Navigate");

      expect(navigate).toBeInTheDocument();
    });
  });

  describe("When instantiated as not protected", () => {
    test("Then it should render the page it was meant to", () => {
      render(<RouteProtector isProtected={false} />, { wrapper: Wrapper });

      const outlet = screen.getByText("Outlet");

      expect(outlet).toBeInTheDocument();
    });
  });
});
