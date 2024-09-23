import "./App.css";
import { Login } from "./form";
import { NavBar } from "../src/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "./button";

export const App = () => {
  return (
    <Router>
      <NavBar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="button" element={<Button />} />
        </Routes>
      </NavBar>
    </Router>
  );
};
export default App;
