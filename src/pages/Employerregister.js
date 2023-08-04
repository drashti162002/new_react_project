import "../css/Employerregister.css";
import { Container ,Row ,Col, NavLink} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import logo_login_page from '../icons/box.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { postuseremaliotp , postuseremaliotpverify, postemployerregisterUser} from '../Api/Api';
import Swal from "sweetalert2";



function Employerregister(){
    //model open close//
    const [show , setShow] = useState(false)
    const navigate = useNavigate();
   //Employer from state
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [companyName , setCompanyName] = useState('');
    const [emailAddress , setEmailaddress] = useState('');    
    const [moblieNumber , setMoblieNumber] = useState('');
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword]  = useState('');
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [termofUse , setTermofUse] = useState(false);
    const [emailSentotp, setEmailSentOtp] = useState('');

     
// Employer validationfrom state //
const [errorfirstName , setErrorFirstName] = useState('');
const [errorlastName , setErrorLastName] = useState('');
const [errorcompanyName , setErrorCompanyName] = useState('');
const [erroremailAddress , setErrorEmailaddress] = useState('');
const [errormoblieNumber , setErrorMoblieNumber] = useState('');
const [erroruserName , setErrorUserName] = useState('');
const [errorpassword , setErrorPassword] = useState('');
const [errorconfirmPassword , setErrorConfirmPassword] = useState('');
const [errorprivacyPolicy, setErrorPrivacyPolicy] = useState();
const [errortermofUse, setErrorTermofUse] = useState();

const handleClose = () => setShow(false) 

const otpSentEmail = (e) => {
    e.preventDefault();
    var isValid = true;
    if(emailAddress == ''){
        setErrorEmailaddress('Please Enter Email Address');
        isValid = false;
    }else{
        const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailAddress);
      if (!emailRegex) {
        setErrorEmailaddress("Please Enter Vaild Email");
        isValid = false;
      }

    }
    if(isValid){
        setErrorEmailaddress('');
        setShow(true)
        var data ={
            email:emailAddress
        };
        postuseremaliotp(data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
 };

 const otpVarification = (e) => {
    e.preventDefault();
    var data ={
        email: emailAddress,
        otp: emailSentotp
    }
    postuseremaliotpverify(data)
        .then(function (response) {
            console.log('data', data);
            console.log("response", response)
            if (response.data.status === true) {
              setShow(false);
            } else {
              alert(response.data.message);
            }
          })
          .catch(function (error) {
            console.log("error", error);
          });
    
 }

  const employerRegisterData = (e) => {
    e.preventDefault();
    if(!validationData()){
       return false;
    }
    var data = {
      company_name:companyName,
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      mobile_number: moblieNumber,
      username: userName,
      password: password,
     
    };
    postemployerregisterUser(data)
    .then(function (response) {
    console.log('response', response)
    if (response.data.status === true)  {
        // Swal.fire('Registration Successfully!','success')
       Swal.fire("Registration Successfully ", "", "success");
      navigate('/Employerlogin')
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

  const Errorclear = (e) => {
    setErrorFirstName("");
    setErrorLastName("");
    setErrorCompanyName("")
    setErrorEmailaddress("");
    setErrorMoblieNumber("");
    setErrorUserName("");
    setErrorPassword("");
    setErrorConfirmPassword("");
    setErrorPrivacyPolicy("");
    setErrorTermofUse("");
  };

  const validationData = () => {
    Errorclear();
      var isValid = true;
      if(firstName == ''){
          setErrorFirstName('Please Enter firstName');
          isValid = false;
      }
      if(lastName == ''){
          setErrorLastName('Please Enter lastName');
          isValid = false;
      }
      if(companyName == ''){
        setErrorCompanyName('Please Enter companyName');
        isValid = false;
       }
      if(emailAddress == ''){
          setErrorEmailaddress('Please Enter Email Address');
          isValid = false;
      }else{
        const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailAddress);
      if (!emailRegex) {
        setErrorEmailaddress("Please Enter Vaild Email");
        isValid = false;
      }

      }
      if(moblieNumber == ''){
          setErrorMoblieNumber('Please Enter moblieNumber');
          isValid = false;
      }
      if(userName == ''){
          setErrorUserName('Please Enter userName');
          isValid = false;
      }  else {
        const isValidUsername = /^[a-zA-Z0-9_]{3,20}$/.test(userName);
        if (!isValidUsername) {
            setErrorUserName("Please Enter Vaild UserName");
            isValid = false;
        }
      }    
      if(password == ''){
          setErrorPassword('Please Enter password');
          isValid = false;
      }
      if(confirmPassword == ''){
          setErrorConfirmPassword('Please Enter confirmPassword');
          isValid = false;
      }else {
        if (password.length) {
          if (password !== confirmPassword) {
            setErrorConfirmPassword("Confirm Password Is Not Match");
            isValid = false;
          }
        }
      }
      if(privacyPolicy == false){
          setErrorPrivacyPolicy('Please Check');
          isValid = false;
      }
      if(termofUse == false){
          setErrorTermofUse('Please Check');
          isValid = false;
      }
      return isValid;
  };

    
    return(    
     // Employerregistr page //

    <div className='all_userregister_full_page'>    
       <Row className="m-0 all_col_center image_user_background">
         <Col lg={5}>
            <Container>
            <Row className='all_contant_cenetr background_white_all_page'>
                <Col lg={12} className='image_logo_col'>
                    <img src={logo_login_page} alt='logo' className='logo_login_page'></img>
                    <div> Turn-to</div>
                </Col>  

                <Col>
                    <h2 className='text-center'>Employer Register Form</h2>
                    <Form>
                        <Form.Group className="mb-1" controlId="formGroupEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" 
                             name='firstName'
                             value={firstName}
                             onChange={(e)=>setFirstName(e.target.value)}/>
                            <span className='errormsg'>{errorfirstName}</span>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGroupPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" 
                             name='lastName'
                             value={lastName}
                             onChange={(e)=>setLastName(e.target.value)}/>
                            <span className='errormsg'>{errorlastName}</span>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGroupEmail">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company Name" 
                             name='companyName'
                             value={companyName}
                             onChange={(e)=>setCompanyName(e.target.value)}/>
                            <span className='errormsg'>{errorcompanyName}</span>
                        </Form.Group>
                        <Row>
                            <Col lg={12}>
                              <Form.Label>Email address</Form.Label>
                            </Col>
                            <Col lg={8} md={9}>
                              <Form.Control type="email" placeholder="Enter email/ Username" 
                               name='email'
                               value={emailAddress}
                               onChange={(e)=>setEmailaddress(e.target.value)}/>
                                <span className='errormsg'>{erroremailAddress}</span>

                            </Col>
                            <Col lg={4} md={3} className="text-end">
                                <button className='sign_in_button' onClick={otpSentEmail}>Get Otp</button>
                            </Col>
                        </Row>
                        <Form.Group className="mb-1" controlId="formGroupEmail"> 
                            <Form.Label>Moblie Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Moblie Number" 
                             name='moblieNumber'
                             value={moblieNumber}
                             onChange={(e)=>setMoblieNumber(e.target.value)}/>
                              <span className='errormsg'>{errormoblieNumber}</span>

                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGroupEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" 
                             name='userName'
                             value={userName}
                             onChange={(e)=>setUserName(e.target.value)}/>
                              <span className='errormsg'>{erroruserName}</span>

                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGroupEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" 
                             name='password'
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}/>
                                <span className='errormsg'>{errorpassword}</span>

                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGroupEmail">
                            <Form.Label>Confirm Your Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Confirm Your Password" 
                             name='confirmPassword'
                             value={confirmPassword}
                             onChange={(e)=>setConfirmPassword(e.target.value)}/>
                                <span className='errormsg'>{errorconfirmPassword}</span>

                        </Form.Group>
                                <div class="form-check lable_color">
                                    <input class="form-check-input" id="flexCheckDefault" 
                                     type="checkbox"
                                     checked={privacyPolicy}
                                     onChange={(e)=>setPrivacyPolicy(e.target.checked)}/>
                                    <label class="form-check-label text-muted" for="flexCheckDefault">
                                        I agree to the <a href='#'>Privacy policy</a>
                                    </label>
                                    <span className='errormsg'>{errorprivacyPolicy}</span>


                                </div>
                                <div class="form-check lable_color">
                                    <input class="form-check-input" 
                                     type="checkbox"
                                     checked={termofUse}
                                     onChange={(e)=>setTermofUse(e.target.checked)}
                                     id="flexCheckChecked"/>
                                    <label class="form-check-label" for="flexCheckChecked">
                                        I agree to the <a href='#'>Term of Use</a>
                                    </label>
                                    <span className='errormsg'>{errortermofUse}</span>


                                </div>
                       
                       
                        <div className='sign_button_main'>
                            <button className='sign_in_button' onClick={employerRegisterData}> SIGN Up </button>
                            <p className='my-2'>Already have an account ? <a href='/Employerlogin' className='color_link'> Sign In</a></p>
                        </div>    
                    </Form>
                </Col>
            </Row>
            </Container>
         </Col>
         <Col className='small_screen_back_height'></Col>
       </Row>

       <Modal
      centered
      show={show}
      onHide={()=>handleClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Enter OTP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="OTP">
        <Form.Label>OTP Sent on test@gmail.com</Form.Label>
          <Form.Control type="Number" className="modelinput" value={emailSentotp}
              onChange={(e) => setEmailSentOtp(e.target.value)} placeholder="Enter 6 Digit OTP" />
        
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <button className='close_in_button' onClick={()=>handleClose()}>Close</button>
        <button className='submit_in_button' onClick={otpVarification}>Submit</button>
      </Modal.Footer>
      </Modal>
    </div>
    )
}
export default Employerregister;