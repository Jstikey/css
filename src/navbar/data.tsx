import {
  FaBars,
  FaBlog,
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLink,
  FaPhone,
  FaQuestion,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";

export const data = [
  { icon: <FaBars />, name: "Dashboard", url: "/" },
  { icon: <FaLink />, name: "Shortcuts", url: "/button" },
  { icon: <RiMenu3Line />, name: "Login", url: "/form" },
  { icon: <BsCalendar2EventFill />, name: "Events", url: "/house" },
  { icon: <FaQuestion />, name: "About", url: "/market" },
  { icon: <GiServerRack />, name: "Services", url: "/try" },
  { icon: <FaPhone />, name: "Contacts", url: "/church" },
  { icon: <FaFacebook />, name: "FaceBook", url: "/school" },
];

export const icon = [
  { icon: <FaFacebook /> },
  { icon: <FaTwitter /> },
  { icon: <FaInstagram /> },
  { icon: <FaYoutube /> },
];

export const HomeNav = [
  { icon: <FaHome />, name: "Home" },
  { icon: <FaBlog />, name: "Blog" },
  { icon: <FaCode />, name: "Code" },
  { icon: <FaEnvelope />, name: "Help" },
  { icon: <FaUser />, name: "About" },
];
