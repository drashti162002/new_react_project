import React, { useState } from "react";
import "../css/Navigation.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import avtar_image from "../icons/Group 261.png";
import logo from "../icons/Logo.png";

function Navigationmenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);   

  const menuItem = [
    {
      path: "/",
      name: "Dashbord",
      icon: <FaTh />,
    },
    {
      path: "/Profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

  return (
    <>
      {/* sidebar menu */}
      <div className="all_page">
        <div className={isOpen ? "sidebar shadow-lg" : "sidenavbar shadow-lg"}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <img
                src={logo}
                alt="logo"
                className="logo_image"
                onClick={toggle}
              ></img>
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          <div className="avtar_center">
            <img src={avtar_image} alt="avtar" className="avtar_image"></img>
          </div>
        </div>

       
          <main>{children}</main>
      </div>
    </>
  );
}

export default Navigationmenu;
