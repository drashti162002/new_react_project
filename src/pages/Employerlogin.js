import '../css/UserLogin.css';
import { Container ,Row ,Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import logo_login_page from '../icons/box.png';
import { useState } from 'react';
import { postemployerlogin } from '../Api/Api';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Employerlogin(){
const navigate = useNavigate();
    
    // Employer from state //
    const [emailAddress , setEmailaddress] = useState('');
    const [password , setPassword] = useState('');

    // Employer validationfrom state //
    const [erroremailAddress , setErrorEmailaddress] = useState('');
    const [errorpassword , setErrorPassword] = useState('');
   
       const employerLoginData = (e) => {     
        e.preventDefault();
        if(!validationData()){
         return false;
        }
        var data = {
         email:emailAddress,
         password:password
        }
        postemployerlogin(data)
        .then(function(response){
         console.log("response",response)
          if(response.data.status === true){
             navigate('/')
          }
        })
        .catch(function (error) {
         console.log(error.response.data.error);
         if(error.response.data.error.email){
            Swal.fire(error.response.data.error.email, "", "error");
          }else{
            Swal.fire(error.response.data.error.password,"","error");
          }
  
       });
        
       }

       const validationData = () => {
        var isValid = true;
        if(emailAddress == ''){
            setErrorEmailaddress('Email can`t be blank');
            isValid = false;
        }
        // else if(emailAddress == ''){
        if(password == ''){
            setErrorPassword('Password can`t be blank');
            isValid = false;
        }
        return isValid;
    }
    
    return(
    // Employerlogin page //
    <div className='all_user_full_page'>    
       <Row className="m-0 all_col_center image_user_background">
         <Col lg={4}>
            <Container>
            <Row className='all_contant_cenetr background_white_all_page'>
                <Col lg={12} className='image_logo_col'>
                    <img src={logo_login_page} alt='logo' className='logo_login_page'></img>
                    <div> Turn-to</div>
                </Col>  

                <Col>
                    <h2 className='text-center'>Employer Login</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address / Number </Form.Label>
                            <Form.Control type="email" placeholder="Enter email/ Username" 
                             name='email'
                             value={emailAddress}
                             onChange={(e)=>setEmailaddress(e.target.value)}/>
                            <span className='errormsg'>{erroremailAddress}</span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                             name='password'
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}/>
                            <span className='errormsg'>{errorpassword}</span>
                        </Form.Group>
                        <div className='forget_password'>
                            Forget Password
                        </div>
                        <div className='sign_button_main'>
                            <button className='sign_in_button'
                             onClick={employerLoginData}> SIGN IN </button>
                            <p className='my-2'>Don't have an account ? <a href='/Employerregister' className='color_link'> Sign Up</a></p>
                        </div>    
                    </Form>
                </Col>
            </Row>
            </Container>
         </Col>
       </Row>
    </div>
    )
}
export default Employerlogin;