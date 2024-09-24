import { NavLink } from "react-router-dom";
import { data, icon } from "./data";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FC, ReactNode, useState } from "react";
import { IconContext } from "react-icons";

interface navbarchildren {
  children: ReactNode;
}

export const NavBar: FC<navbarchildren> = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const FontIcon = ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => {
    return (
      <IconContext.Provider value={{ className }}>
        {children}
      </IconContext.Provider>
    );
  };

  return (
    <main className="container">
      <>
        {sideBar ? (
          <>
            <input type="checkbox" id="check" />
            <label className="button bars labels" htmlFor="check">
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
        ) : (
          <>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="closeBar invisible">
              <FaBars className="btn" />
            </label>

            <div className="glassBar">
              <div className="glassBar-head">
                <h1>JoshTech</h1>
                <input type="check" id="check" />
                <label htmlFor="check" className="closeBar">
                  <MdClose className="btn" />
                </label>
              </div>
              <ul className="linkItems">
                {data.map(({ name, icon, url }, index) => (
                  <li key={index} className="linkItem">
                    <NavLink to={url || ""}>
                      <p>
                        {icon}
                        {name}
                      </p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="iconDiv">
                {icon.map(({ icon }, index) => (
                  <a key={index} href="#">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </>
      <section className="children">{children}</section>
    </main>
  );
};
