import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="sun"></div>
      <div className="wrapper">
        <div className=" card front-face">
          <img src="hairman.jpg" alt="" />
        </div>
        <div className=" card back-face">
          <img src="hairman.jpg" alt="" />
          <div className="info">
            <div className="title">codingLab</div>
            <p>
              user interface designer and <br /> front-end developer
            </p>
          </div>
          <ul>
            <a href="#">
              <FaFacebook className="font" />
            </a>
            <a href="#">
              <FaTwitter className="font" />
            </a>
            <a href="#">
              <FaInstagram className="font" />
            </a>
            <a href="#">
              <FaYoutube className="font" />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
