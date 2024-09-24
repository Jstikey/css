import "./App.css";
import { Login } from "./form";
import { NavBar } from "../src/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "./button";
import { Home } from "./home";

export const App = () => {
  return (
    <Router>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="form" element={<Login />} />
            <Route path="button" element={<Button />} />
          </Route>
        </Routes>
      </NavBar>
    </Router>
  );
};
export default App;
