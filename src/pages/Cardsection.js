import '../css/Cardsection.css';
import { Col , Row } from "react-bootstrap";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FiMoreVertical } from "react-icons/fi";
import { BsDot , BsArrow90DegRight , BsBookmark , BsGlobe , BsChevronLeft , BsFlag } from "react-icons/bs";
import { BiBlock , BiLogoFacebook , BiLogoInstagram} from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

function Cardsection(){

    const [show , setShow] = useState(false);

    const handleOpenMenu = () =>{
        setShow(true);
    }

    const handleCloseMenu = () =>{
        setShow(false)
    }

    const cardItem=[
        {
            subtitle:"Linear company",
            name:"Software Engineer",
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
        },
        {
            subtitle:"Notion",
            name:"Junior Ui Designer",
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
        },
        {
            subtitle:"Spline studio",
            name:"Technical Support Engineer",
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
            
        },
        {
            subtitle:"Raycast corp",
            name:"product Designer",
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'

        },
        {
            subtitle:"product",
            name:"Product",
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'

        }
    ]


    const cardiconItem=[
        {
            icon:<CiLocationOn/>,
            nameicon:"Brussels",
            dot:<BsDot/>
        },
        {
            icon:<CiLocationOn/>,
            nameicon:"Full time",
            dot:<BsDot/>
        },
        {
            icon:<CiLocationOn/>,
            nameicon:"50-55k",
            dot:<BsDot/>
            
        },
        {
            icon:<CiLocationOn/>,
            nameicon:"29 min ago",
            dot:<BsDot/>

        }
    ]

    return(
        // All Card show //
        <Row className='m-0'>
             <Col  lg={12} md={12} xs={12} className='d-lg-block d-sm-none small_screen '>
                        <p>430+ Stays</p>
                        <p className="main_name">React js developer jobs in Los Angeles</p>
             </Col>
            {/* card show in col */}
            <Col xxl={6} xl={5} lg={3} md={12}  xs={12} className='part_1_width'>
                <Row>
                    <div className='all_card_height'>                   
                    {
                        cardItem.map((item, index)=>(
                            <Col lg={12} md={12} sm={12} xs={12}>                          
                            <Card className='card_space shadow-lg'>
                            <Card.Body>
                                <Row>                           
                                    <Col lg={11} md={11} sm={11} xs={10} onClick={handleOpenMenu}>
                                        <div >
                                            <p className='card_subtitle'>{item.subtitle}</p>
                                            {/* <p className='card_name'>{item.name}</p> */}
                                        </div>
                                    </Col>

                                    <Col lg={1} md={1} sm={1} xs={2}>

                                        <div className='more_icon'>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                            <span> <FiMoreVertical/></span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#"><span> <BiBlock/></span> Action</Dropdown.Item>
                                                <Dropdown.Item href="#"> <span> <BsBookmark/></span> Another action</Dropdown.Item>
                                                <Dropdown.Item href="#"><span> <BsFlag/></span> Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Col>      

                                    <Col lg={12} md={12} xs={12} onClick={handleOpenMenu}>
                                        <div>
                                           <p className='card_name'>{item.name}</p>
                                        </div>
                                        <div className='icon_card'>
                                            {
                                                cardiconItem.map((item, index) =>(
                                                    <>
                                                    <div className='card_icon_item'> 

                                                    <span> {item.icon}</span>
                                                    <span> {item.nameicon}</span>
                                                    <span> {item.dot}</span>
                                                    </div>
                                                    </>
                                                ))                            
                                            }
                                        </div>

                                    </Col>    

                                     <Col lg={12} md={12} xs={12} onClick={handleOpenMenu}>
                                        <Card.Text className="text-muted all_text" >
                                        {item.text}
                                        </Card.Text>
                                     
                                    </Col>                   
                                </Row>

                            </Card.Body>
                            </Card>
                        </Col>
                    ))
                }     
                    </div>
                </Row>
            </Col>
            
            {             
                <>
                {/* detalis show col */}
                <Col xxl={6} xl={5} lg={3} md={12} xs={12} style={{display: show ? "block" : "none" }} className='all_card_info'>  
                <div>
                        <Row>                           
                            <Col lg={10} md={10} xs={10}>
                                <div onClick={handleOpenMenu}>
                                    <p className='card_subtitle'>Linear company</p>
                                    <p className='card_name'>Software Engineer</p>
                                </div>
                            </Col>

                            <Col lg={2} md={2} xs={2}>
                                <div className='back_iocn mt-3'>

                                  <span className='back_arrow_icon' onClick={handleCloseMenu}><BsChevronLeft/></span>
                                </div>

                            </Col>  

                            <Col lg={12} md={12} xs={12}>
                                <div className='icon_card'>
                                        <div className='card_icon_item'>
                                            <span><CiLocationOn /></span>
                                            <p>Brussels</p>
                                        </div>
                                        <div >
                                            <span><BsDot /></span>
                                        </div>
                                        <div className='card_icon_item'>
                                            <span><CiLocationOn /></span>
                                            <p>Full time</p>
                                        </div>
                                        <div >
                                            <span><BsDot /></span>
                                        </div>
                                        <div className='card_icon_item'>
                                            <span><CiLocationOn /></span>
                                            <p>50-55k</p>
                                        </div>
                                        <div >
                                        <span><BsDot /></span>
                                        </div>
                                        <div className='card_icon_item'>
                                        <span><CiLocationOn /></span>
                                            <p >29 min ago</p>
                                        </div>
                                </div>
                           
                                <div className='all_button_line'>
                                
                                  <div>
                                    <Button className='apply_job'>Apply This job</Button>
                                    <span className='arrow_icon ms-2'><BsArrow90DegRight/></span>
                                    <span className='arrow_icon mx-2'><BsBookmark/></span>
                                    <span className='arrow_icon me-2'><BiBlock/></span>
                                  </div>
                                   
                                   <div>
                                   <Button className='report_job mt-1'>Report job</Button>
                                   </div>

                                </div>
                          
                                <div className='all_description_info'>
                                    <p className=''>Description</p>
                                    <div>
                                        <span><BsGlobe/></span>
                                        <span className='mx-3'><BiLogoFacebook/></span>
                                        <sapn><BiLogoInstagram/></sapn>
                                    </div>
                                </div>

                                <div>
                                    <p className='all_text'>Deall Jobs is Indonesia's largest job portal & mentoring platform. We help people easily find jobs to top Indonesian companies for internship and full-time roles.As you might have already heard about us, we are revolutionizing how Indonesian engage with employers. Many Indonesian students are talented, ambitious, but never found a better opportunity for themselves. Our team is driven by the vision to democratize information and knowledge, thus opportunities. We think what we build will allow Indonesian students to have a chance to self develop and have a better future.</p>
                                    <p className='all_text my-2'>Our founder is a Harvard graduate, and has gathered a strong team with burning passion to help Indonesian discover opportunities they deserve! 🚀 In 1 year, we amassed 2mio+ users, got funded by YCombinator, and awarded the Best App of 2021 by GooglePlay, beating 3 unicorns and tens of others.</p>
                                    <p className='all_text'>We are looking for passionate and committed individuals who look forward to working in a fast-paced entrepreneurial environment. Join us to have the opportunity to make decisions to drive a huge difference and impact for Indonesia youths! Here in Deall, you’ll work closely with our board members. We are preferably looking for applicants who are proficient in both Bahasa and English.</p>
                                </div>

                                <div>
                                    <h4>Requirements</h4>
                                    <ul>
                                        <li>Experience in UX/UI interface design,</li>
                                        <li>Proficiency in Figma application,</li>
                                        <li>Business understanding and ability to adapt projects to user needs,</li>
                                        <li>Good command of English (at least B1 level),</li>
                                        <li>Strong motivation for professional development.</li>
                                    </ul>
                                    </div>
                        
                                    <div>
                                    <h4>Qualifications</h4>
                                    <ul>
                                        <li> Bachelor's (Required)</li>
                                        <li>Full stack developer: 2 years (Required)</li>
                                        <li>Vue.js: 1 year (Required)</li>
                                    </ul>
                                </div>
                            </Col>                            
                        </Row>
                </div>
                </Col>
                </>              
            }
        </Row>
    )
}
export default Cardsection;