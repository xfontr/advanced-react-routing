export type RenderOptions = "always" | "logged" | "loggedOut";

export interface RouteType {
  path: string;
  renders: RenderOptions;
  name?: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
}

type IRoutes = RouteType[];

export default IRoutes;
