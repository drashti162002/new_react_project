import React, { useState } from "react";
import "../css/Navigation.css";
import {
  FaTh,
  FaPowerOff,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import avtar_image from "../icons/Group 261.png";
import logo from "../icons/Logo.png";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Offcanvas from "react-bootstrap/Offcanvas";
import profile_pic from "../icons/Mask Group.png";
import profile_back from "../icons/Group.png";
import experience_img from "../icons/Img 1 1.png";
import education_img from "../icons/Frame 2 10.png";
import imb_img from "../icons/IBM.png";
import { VscBellDot } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { LiaCameraRetroSolid } from "react-icons/lia";
import { BsBagPlusFill , BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiGraduationCapFill , RiAddFill } from "react-icons/ri";
import { MdRoomPreferences , MdKeyboardArrowDown} from "react-icons/md";
import UserLogin from "../pages/Employerlogin";

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
        <div style={{width:"100%" , position:"absolute" , top:0}}>
            <div  className={isOpen ? "open_sidebar_padding" : "close_sidebar_padding" }>
            {[false].map((expand) => (
              <Navbar key={expand} expand={expand} className="bg-white navshow shadow-sm">
                <Container fluid>
                  <Navbar.Toggle
                    id="ttt"
                    className="toogle_value"
                    onClick={toggle}
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Brand>
                    <div className="all_nav_item">
                      <NavDropdown
                        title={
                          <span className="profile_droupdwn_menu_name">
                            <img
                              src={profile_pic}
                              className="profile_pic_nav"
                            ></img>{" "}
                            <span className="image_droup_menu">
                            David Greymaax{" "}
                            </span>
                            <span>
                              <MdKeyboardArrowDown />
                            </span>
                          </span>
                        }
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className="back_name_color"
                      >
                        <NavDropdown.Item
                          className="item_menu_color"
                          href="/Userlogin"
                        >
                          Userlogin
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="item_menu_color"
                          href="/Userregister"
                        >
                          Userregister
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="item_menu_color"
                          href="/Employerlogin"
                        >
                         Employerlogin
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="item_menu_color"
                          href="/Employerregister"
                        >
                          Employerregister
                        </NavDropdown.Item>
                      </NavDropdown>
                      <span>
                        <VscBellDot />
                      </span>

                      <span>
                        <FaPowerOff />
                      </span>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <img src={logo} alt="logo" className="logo_image"></img>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                          <div className="icon">{item.icon}</div>
                          <div className="link_text">{item.name}</div>
                        </NavLink>
                      ))}
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
             <main>{children}</main>
            </div>
        </div>
      </div>
            <div className={isOpen ? "sidebar shadow-lg" : "sidenavbar shadow-lg"} style={{position:"fixed", top:0 , left:0}}>
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

    </>
  );
}

export default Navigationmenu;
