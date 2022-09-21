import RenderRoutes from "./components/RenderRoutes";
import { Suspense } from "react";

const App = (): JSX.Element => (
  <div className="app">
    <Suspense fallback="Loading...">
      <RenderRoutes />
    </Suspense>
  </div>
);

export default App;
