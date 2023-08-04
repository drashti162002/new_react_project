import "../css/Profile.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
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
import logo from "../icons/Logo.png";
import { VscBellDot } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { LiaCameraRetroSolid } from "react-icons/lia";
import { BsBagPlusFill , BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiGraduationCapFill , RiAddFill } from "react-icons/ri";
import { MdRoomPreferences , MdKeyboardArrowDown} from "react-icons/md";
import {
  FaTh,
  FaPowerOff,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

function Profile() {
  const [key, setKey] = useState("experience");


  
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
      <div className="profile_page_fix">
        <div className="full_profile_page">
          <div>
            <Row className="m-0 profile_row">
              {/* first left part */}
              <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                <div className="set_all_class_position">
                  <div className="profile_main_set_pic">
                    <img
                      src={profile_back}
                      alt="profile_back"
                      className="profile_back_pic"
                    ></img>
                    <span className="camera_icon">
                      <LiaCameraRetroSolid />
                    </span>
                  </div>

                  <div className="profile_round_pic">
                    <div className="profile_pic_main">
                      <img
                        src={profile_pic}
                        alt="profile_pic"
                        className="profile_pic"
                      ></img>
                      <span className="camera_icon1">
                        <LiaCameraRetroSolid />
                      </span>
                    </div>
                  </div>
                </div>

                <Row>
                  <Col xl={6} md={12} sm={12} className="col_padding">
                    <h3>Kristin W.</h3>
                  </Col>
                  <Col xl={6} md={12} sm={12} className="col_padding">
                    <h5 className="profile_state">
                      New York, United States{" "}
                      <span className="edit_lang">
                        <FiEdit2 />
                      </span>
                    </h5>
                  </Col>
                  <Col md={12} sm={12} className="col_padding">
                    <div>
                      <h5>UI/UX Designer</h5>
                    </div>
                    <div className="all_languages">
                      <span className="all_lang">html</span>
                      <span className="all_lang">css</span>
                      <span className="all_lang">reactjs</span>
                      <span className="all_lang">ui/ux designer</span>
                      <span className="all_lang">nodejs</span>
                      <span className="all_lang">mongodb</span>
                      <span className="edit_lang">
                        <FiEdit2 />
                      </span>
                    </div>
                    <div className="back_about_color mt-2">
                      <h4 className="profile_set_name">About Me</h4>
                      <p>
                        UX design is all about identifying and solving user
                        problems; UI design is all about creating intuitive,
                        aesthetically-pleasing, interactive interfaces. UX
                        design usually comes first in the product development
                        process, followed by UI. The UX designer maps out the
                        bare bones of the user journey; the UI designer then
                        fills it in with visual and interactive elements.
                      </p>
                    </div>

                    <div className="ps-2">
                      <h4 className="profile_set_name mt-2">Contact</h4>
                      <div className="profile_number">
                        <p>
                          <IoCallOutline />
                        </p>
                        <p>+62 xxxx xxx xxxx</p>
                      </div>
                      <div className="profile_number">
                        <p>
                          <CiMail />
                        </p>
                        <p>xxxx@example.com</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>


              {/* second right part */}
              <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                <div className="all_tab_part">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 small_screen_nav_space"
                  >
                    <Tab
                      eventKey="experience"
                      title={
                        <span className="icon-text">
                          <BsBagPlusFill /> Experience
                        </span>
                      }
                    >
                      <Row>
                        <Col md={12} sm={12}>
                          <span className="add_icon mb-3">
                            <RiAddFill />
                          </span>
                        </Col>
                        <Col md={12} sm={12}>
                          <div>
                            <Row className="shadow-lg m-0">
                              <Col md={2} sm={2} xs={2}>
                                <div className="img_crad">
                                  <img
                                    src={imb_img}
                                    alt="imb_image"
                                    className="imb_image"
                                  ></img>
                                </div>
                              </Col>

                              <Col md={9} sm={9} xs={9}>
                                <p className="ui_name"> UI / UX Designer </p>
                                <p className="ibm_name"> IBM Full-time </p>
                                <p className="ibm_name">
                                  {" "}
                                  Feb 2017 – May 2020 . 3 yr 4 mos
                                </p>
                                <p className="ibm_name">
                                  {" "}
                                  Silicon Valley Area, USA{" "}
                                </p>
                              </Col>

                              <Col
                                md={1}
                                sm={1}
                                xs={1}
                                className="icon_col_edit"
                              >
                                <span className="edit_card">
                                  <FiEdit2 />
                                </span>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        {/* <Col md={12}>

                                    <div className=' my-2'>
                                    <Row className='shadow-lg'>

                                
                                    <Col md={2} sm={2}>
                                        <div className='img_crad'>

                                        <img src={imb_img} alt='imb_image'  className='imb_image'></img>
                                        </div>
                                    </Col>

                                    <Col md={9} sm={9}>
                                    <p className="ui_name"> UI / UX Designer </p>
                                    <p className='ibm_name'> IBM Full-time </p>
                                    <p className='ibm_name'> Feb 2017 – May 2020 </p>
                                    <p className='ibm_name'>.  3 yr 4 mos </p>
                                    <p className='ibm_name'> Silicon Valley Area, USA </p>
                                    </Col>

                                    <Col md={1} sm={1} className='icon_col_edit'>
                                        <span className='edit_card'><FiEdit2/></span>
                                    </Col>

                                    </Row>
                                    </div>

                                    </Col> */}

                        <div className="image_center m-2">
                          <img
                            src={experience_img}
                            alt="experience_img"
                            className="experience_img"
                          ></img>
                          <p>Please add previous job details</p>
                        </div>
                      </Row>
                    </Tab>
                    <Tab
                      eventKey="education"
                      title={
                        <span className="icon-text">
                          <RiGraduationCapFill /> Education
                        </span>
                      }
                    >
                       <Col lg={12} md={12} sm={12}>
                      <span className="add_icon">
                        <RiAddFill />
                      </span>
                       </Col>
                      <div className="image_lap_col">                    
                      <div className="main_eduaction_img">
                        <img
                          src={education_img}
                          alt="education_img"
                          className="education_img"
                        ></img>
                      </div>
                   
                      <p className="text-center">
                        Please add educations details
                      </p>
                    </div>
                    </Tab>
                    <Tab
                      eventKey="resume"
                      title={
                        <span className="icon-text">
                          <BsFillFileEarmarkTextFill /> Resume
                        </span>
                      }
                    >
                      <div>
                        <input
                          id="uploadFile"
                          type="file"
                          multiple={true}
                          accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
                        />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="preference"
                      title={
                        <span className="icon-text">
                          <MdRoomPreferences /> Preference
                        </span>
                      }
                    ></Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
