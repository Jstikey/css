import { NavLink } from "react-router-dom";
import { data, icon } from "./data";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FC, ReactNode } from "react";

interface navbarchildren {
  children: ReactNode;
}

export const NavBar: FC<navbarchildren> = ({ children }) => {
  return (
    <main className="container">
      <>
        <input type="checkbox" id="check" />
        <label className="button bars" htmlFor="check">
          <FaBars />
        </label>
        <div className="side-bar">
          <div className="title">
            <div className="logo">CodingLab</div>
            <input type="check" id="check" />
            <label className="button cancel" htmlFor="check">
              <MdClose />
            </label>
          </div>
          <ul>
            {data.map((data) => (
              <li>
                <NavLink to={data.url || ""} className="a">
                  {data.icon} {data.name}
                </NavLink>
              </li>
            ))}
            <div className="media-icon">
              {icon.map((icon) => (
                <NavLink to="#">{icon.icon}</NavLink>
              ))}
            </div>
          </ul>
        </div>
      </>
      <section className="children">{children}</section>
    </main>
  );
};
