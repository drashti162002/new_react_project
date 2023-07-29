import { Col , Row } from "react-bootstrap";
import "../css/Allinputgroup.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


function Allinputgroup(){
    return(
        <>
        {/* input search item */}

        <div className="all_section">     
        <Row className='m-0'>
            <Col lg={4} md={3} sm={12}  className="pe-md-0 samll_input">
                <div className="search_input shadow-lg">
                    <span><BsSearch/></span>
            
                    <Form.Control type="text" placeholder="What position are you looking for?"/>    
                </div>
            </Col>
            <Col lg={4} md={3} sm={11} xs={11} className="p-md-0 pe-0">
                <div className="search_input1 shadow-lg">
                    <span><CiLocationOn/></span>
                    <Form.Control type="text" placeholder="Loaction"/>    
                </div>
            </Col>
            <Col lg={1} md={1} sm={1} xs={1} className='p-md-0 p-0 icon_center'>
                {/* <div className="search_item shadow-lg"> */}
                    <span className="search_item shadow-lg"><BsSearch/></span>
                {/* </div> */}
            </Col>
        </Row>
       
        </div>


        {/* dropdown menu select */}
        <Row className='m-0'>
            <Col lg={12} md={12} xs={12} className="p-0">
                <div className='all_select_menu '> 

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select aria-label="Default select example">
                    <option>Date Posted</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>


                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select aria-label="Default select example">
                    <option>Exact loaction only</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select aria-label="Default select example">
                    <option>Salary Estimate</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select aria-label="Default select example">
                    <option>Job Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select aria-label="Default select example">
                    <option>Programming Language</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select aria-label="Default select example">
                    <option>Education Level</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>
          
                </div>
            </Col>
        </Row>
        </>
    )
}
export default Allinputgroup;