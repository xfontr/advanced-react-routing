import { Routes, Route, Navigate } from "react-router-dom";
import paths from "./configs/paths";
import DummyPage1 from "./Pages/DummyPage1";
import DummyPage2 from "./Pages/DummyPage2";

const App = (): JSX.Element => (
  <div className="app">
    <Routes>
      <Route path={paths.root} element={<Navigate to={paths.home} />} />
      <Route path={paths.home} element={<DummyPage1 />} />
      <Route path={paths.contact} element={<DummyPage2 />} />
    </Routes>
  </div>
);

export default App;
