import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaPhone,
  FaQuestion,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";

export const data = [
  { icon: <FaBars />, name: "Dashboard", url: "/" },
  { icon: <FaLink />, name: "Shortcuts", url: "button" },
  { icon: <RiMenu3Line />, name: "Overview", url: "form" },
  { icon: <BsCalendar2EventFill />, name: "Events" },
  { icon: <FaQuestion />, name: "About" },
  { icon: <GiServerRack />, name: "Services" },
  { icon: <FaPhone />, name: "Contacts" },
  { icon: <FaFacebook />, name: "FaceBook" },
];

export const icon = [
  { icon: <FaFacebook /> },
  { icon: <FaTwitter /> },
  { icon: <FaInstagram /> },
  { icon: <FaYoutube /> },
];
