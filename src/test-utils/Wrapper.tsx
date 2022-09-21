import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: PropsWithChildren): JSX.Element => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default Wrapper;
