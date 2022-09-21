import RenderRoutes from "./components/RenderRoutes";
import { Suspense } from "react";
import routes from "./routes";

const App = (): JSX.Element => (
  <div className="app">
    <Suspense fallback="Loading...">
      <RenderRoutes routes={routes} />
    </Suspense>
  </div>
);

export default App;
