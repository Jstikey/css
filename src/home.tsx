import { NavLink, Outlet } from "react-router-dom";
import { HomeNav } from "./navbar/data";

export const Home = () => {
  return (
    <div>
      <nav className="homeNav">
        <div className="middle">
          {HomeNav.map(({ icon, name }) => (
            <NavLink to="#">
              <p>
                {icon} {name}
              </p>
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
