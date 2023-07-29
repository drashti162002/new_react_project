import { Col , Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Form from 'react-bootstrap/Form';


function Newtestcompo(){
    return(
        <Row className=''>
            <Col className='d-flex align-items-center  my-1 pe-md-0' md={3}>
                <BsSearch  style={{fontSize:"27px" }}/>
                <Form.Control type="text" placeholder="What position are you looking for?" />
            </Col>
            <Col className='d-flex align-items-center  my-1 p-md-0' xs={10} md={3}>
            <CiLocationOn style={{fontSize:"27px" }}/>
                <Form.Control type="text" placeholder="Loaction" />
            </Col>
            <Col className='d-flex align-items-center  my-1 p-md-0' style={{backgroundColor:'purple'}} xs={2} md={2}>
                <BsSearch style={{fontSize:"27px" ,}}/>
            </Col>
        </Row>
    )
}
export default Newtestcompo;