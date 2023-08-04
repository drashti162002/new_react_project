import { Col , Row } from "react-bootstrap";
import "../css/Allinputgroup.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getdashborddropdown } from '../Api/Api'


function Allinputgroup(){
    //onchage value state
    const [jobType, setJobType] = useState('');
    const [programmingLanguage, setProgrammingLanguage] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    //get data set in state 
    const [getJobType, setGetJobType] = useState([]);
    const [getProgrammingLanguage, setGetProgrammingLanguage] = useState([]);
    const [getEducationLevel, setGetEducationLevel] = useState([]);

    useEffect(()=>{
        droupDownMentGet()
    },[])
    const droupDownMentGet = () =>{
        getdashborddropdown()
        .then(function(response){
          console.log("response", response.data);
          setGetJobType(response.data.data.jobTypes);
          setGetProgrammingLanguage(response.data.data.programmingLanguages)
          setGetEducationLevel(response.data.data.educationLevels);
        })
        .catch(function (error) {
            console.log(error); 
          });
    }
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
            <Col lg={4} md={3} sm={11} xs={10} className="p-md-0 pe-0">
                <div className="search_input1 shadow-lg">
                    <span><CiLocationOn/></span>
                    <Form.Control type="text" placeholder="Loaction"/>    
                </div>
            </Col>
            <Col lg={1} md={1} sm={1} xs={2} className='p-md-0 p-0 icon_center'>
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
                <Form.Select >
                    <option>Date Posted</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>


                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select >
                    <option>Exact loaction only</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select >
                    <option>Salary Estimate</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select value={jobType} onChange={(e)=>setJobType(e.target.value)}>
                    {getJobType.map((item, index)=>{
                    return(
                        <option>{item.name}</option>)
                    })}
                 
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select value={programmingLanguage} onChange={(e)=>setProgrammingLanguage(e.target.value)}>
                {getProgrammingLanguage.map((item, index)=>{
                    return(
                        <option>{item.name}</option>)
                    })}
                </Form.Select>
                </div>

                <div className='icon_select_menu shadow-lg'>
                <span><BsSearch/></span>
                <Form.Select  value={educationLevel} onChange={(e)=>setEducationLevel(e.target.value)}>
                {getEducationLevel.map((item, index)=>{
                    return(
                        <option>{item.name}</option>)
                    })}
                </Form.Select>
                </div>
          
                </div>
            </Col>
        </Row>
        </>
    )
}
export default Allinputgroup;