import "./App.css";
import {Routes, Route } from "react-router-dom";
import { TaskPage } from "./page/TaskPage";
function App() {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
    </Routes>
  );
}

export default App;
