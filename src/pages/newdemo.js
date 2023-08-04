import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import loginimg from "../Component/imges/register-bg.2ccde6b9.jpg"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Component/Component.css"
import { Link } from "react-router-dom";
import logoimg from "../Component/imges/box.svg"
import { postemployerregisterUser, postuseremaliotp, postuseremaliotpverify } from "../Api/Api";
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
const EmployerRegister = () => {

  const [show, setShow] = useState(false);
  // user form state
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [emailotp, setEmailOtp] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [privacypolicy, setPrivacypolicy] = useState(false);
  const [termofUse, setTermofUse] = useState(false);
  const [otpverify, setotpverify] = useState(false);

  //  validation State
  const [firstnameerror, setFirstNameError] = useState("");
  const [lastnameerror, setLastNameError] = useState("");
  const [companyNameerror, setCompanyNameError] = useState("");
  const [emailaddresserror, setEmailAddressError] = useState("");
  const [mobilenumbererror, setMobilenumberError] = useState("");
  const [usernameerror, setUserNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [passwordConfirmerror, setPasswordConfirmError] = useState("");
  const [privacypolicyerror, setPrivacypolicyError] = useState("");
  const [termofUseerror, setTermofUseError] = useState("");

  const history = useHistory();
  const handleClose = () => setShow(false);

  const OtpSentEmail = (e) => {
    e.preventDefault();
    var isvalid = true;
    if (emailaddress == "") {
      setEmailAddressError("Please Enter EmailAddress");
      isvalid = false;
    } else {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailaddress);
      if (!emailRegex) {
        setEmailAddressError("Please Enter Vaild Email");
        isvalid = false;
      }
    }
    if (isvalid) {
      setEmailAddressError("");
      setShow(true);
      var data = {
        email: emailaddress,
      };
      postuseremaliotp(data)
        .then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const Otpverification = () => {
    var data = {
      email: emailaddress,
      otp: emailotp,
    };
    postuseremaliotpverify(data)
      .then(function (response) {
        if (response.data.status) {
          setotpverify(true);
          setShow(false);
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const FormClear = (e) => {
    setFirstName("");
    setLastName("");
    setCompanyName("")
    setEmailAddress("");
    setMobilenumber("");
    setEmailOtp("");
    setUserName("");
    setPassword("");
    setPasswordConfirm("");
    setPrivacypolicy("");
    setTermofUse("");
    setotpverify(false);
  };
  const Errorclear = (e) => {
    setFirstNameError("");
    setLastNameError("");
    setCompanyNameError("")
    setEmailAddressError("");
    setMobilenumberError("");
    setUserNameError("");
    setPasswordError("");
    setPasswordConfirmError("");
    setPrivacypolicyError("");
    setTermofUseError("");
  };

  const validation = () => {
    Errorclear();
    var isvalid = true;
    if (firstname == "") {
      setFirstNameError("Please Enter FirstName");
      isvalid = false;
    }
    if (lastname == "") {
      setLastNameError("Please Enter LastName");
      isvalid = false;
    }
    if (companyName == "") {
      setCompanyNameError("Please Enter company Name");
      isvalid = false;
    }
    if (emailaddress == "") {
      setEmailAddressError("Please Enter EmailAddress");
      isvalid = false;
    } else {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailaddress);
      if (!emailRegex) {
        setEmailAddressError("Please Enter Vaild Email");
        isvalid = false;
      }
    }
    if (mobilenumber == "") {
      setMobilenumberError("Please Enter Mobilenumber");
      isvalid = false;
    }
    if (username == "") {
      setUserNameError("Please Enter UserName");
      isvalid = false;
    } else {
      const isValidUsername = /^[a-zA-Z0-9_]{3,20}$/.test(username);
      if (!isValidUsername) {
        setUserNameError("Please Enter Vaild UserName");
        isvalid = false;
      }
    }
    if (password == "") {
      setPasswordError("Please Enter Password");
      isvalid = false;
    }
    if (passwordConfirm == "") {
      setPasswordConfirmError("Please Enter ConfirmPassword");
      isvalid = false;
    } else {
      if (password.length) {
        if (password !== passwordConfirm) {
          setPasswordConfirmError("Confirm Password Is Not Match");
          isvalid = false;
        }
      }
    }
    if (privacypolicy == false) {
      setPrivacypolicyError("Please Check");
    }
    if (termofUse == false) {
      setTermofUseError("Please Check");
    }
    return isvalid;
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    if (!validation()) {
      return false;
    }
    if (!otpverify) {
      setEmailAddressError("Please Verify Your OTP");
      return false;
    } 

    var data = {
      company_name: companyName,
      first_name: firstname,
      last_name: lastname,
      email: emailaddress,
      mobile_number: mobilenumber,
      username: username,
      password: password,
    };

    postemployerregisterUser(data)
      .then(function (response) {
        if (response.data.status) {
          Swal.fire("Registration Successfully ", "", "success");
          FormClear();
          history.push("/employer-login");
        }
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        Swal.fire(error.response.data.error.email, "", "error");
        Swal.fire(error.response.data.error.password, "", "error");
      });
  }

  return (
    <>
     <Row className="rowclass loginimgclass">
        <Col className="forhight" lg={4} >
          <Container>
          <Row className="formcenter bg-white border shadow-lg">
            <Col className="">
              <Row>
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                  <img src={logoimg}/>
                  <span className="fontclas"> Turn-To</span>
                </Col>
              </Row>
              <div className="p-0 p-md-1">
                <h2 className="text-center"> Employer Register Form </h2>
                <Form>
                  <Form.Group className="m-0 mb-1" controlId="First Name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"  value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                         placeholder="Enter First Name" />
                          <span className="eroorclass">{firstnameerror}</span>
                  </Form.Group>
                  <Form.Group className="m-0 mb-1" value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                         controlId="Last Name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                    <span className="eroorclass">{lastnameerror}</span>
                  </Form.Group>
                  <Form.Group className="m-0 mb-1" controlId="Company Name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" 
                     value={companyName}
                     onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter Company Name" />
                       <span className="eroorclass">{companyNameerror}</span>
                  </Form.Group>
                  <Form.Group className="m-0 mb-1" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Row>
                      <Col style={{padding:0}} xs={12} md={9} lg={8} >
                        <Form.Control type="email"  value={emailaddress}
                                onChange={(e) =>
                                  setEmailAddress(e.target.value)
                                }
                                 placeholder="Enter email" />
                                   <span className="eroorclass">{emailaddresserror}</span>
                      </Col>
                      <Col className="text-right"  xs={12}
                              md={3}
                              lg={4}  >
                        <button
                                className="buttonclass "
                                onClick={OtpSentEmail}
                              >
                          Get Otp
                        </button>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-0" controlId="formBasicPassword">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="number"
                        value={mobilenumber}
                        onChange={(e) => setMobilenumber(e.target.value)}
                        placeholder="Enter Mobile Number"
                      />
                      <span className="eroorclass">{mobilenumbererror}</span>
                    </Form.Group>
                  <Form.Group className="m-0 mb-1" controlId="Username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"  value={username}
                        onChange={(e) => setUserName(e.target.value)}
                         placeholder="Enter Username" />
                         <span className="eroorclass">{usernameerror}</span>
                  </Form.Group>
                  <Form.Group className="m-0 mb-1" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <span className="eroorclass">{passworderror}</span>
                  </Form.Group>
                  <Form.Group className="m-0 mb-1" controlId="formBasicConfirm Your Password">
                    <Form.Label>Confirm Your Password</Form.Label>
                    <Form.Control type="Password"  value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Confirm Your Password" />
                        <span className="eroorclass">{passwordConfirmerror}</span>
                  </Form.Group>

                  <Form.Group className="m-0 mb-1" controlId="formBasicCheckbox">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" checked={privacypolicy}
                          onChange={(e) => setPrivacypolicy(!privacypolicy)}  className="form-check-input" />
                        <i className="input-helper"></i>I agree to the
                        <Link to="/privacy-policy" className="purpluecolor">
                          {" "}
                          Privacy policy
                        </Link>
                        <span className="eroorclass">{privacypolicyerror}</span>
                      </label>
                    </div>
                  </Form.Group>
                  <Form.Group className="m-0 mb-1" controlId="formBasicCheckbox">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" 
                        checked={termofUse}
                        onChange={(e) => setTermofUse(!termofUse)}
                        />
                        <i className="input-helper"></i>I agree to the{" "}
                        <Link to="/term-of-use" className="purpluecolor">
                          {" "}
                          Term Of Use
                        </Link>
                        <span className="eroorclass">{termofUseerror}</span>
                      </label>
                    </div>
                  </Form.Group>
                  <div className="text-center">
                  <button className="buttonclass" onClick={FormSubmit}> SIGN UP </button>
                  <p className="my-2">Already have an account ? <b className="purpluecolor"> <Link to="/employer-login" className="purpluecolor" > Sign in</Link> </b></p>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        </Col>
       
      </Row>

      <Modal className="modalcustom" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="OTP">
        <Form.Label>OTP Sent on test@gmail.com</Form.Label>
          <Form.Control type="Number"  value={emailotp}
              onChange={(e) => setEmailOtp(e.target.value)} placeholder="Enter 6 Digit OTP" />
        
        </Form.Group>
        <div className="text-right">
          <Form.Label>Change Email ?</Form.Label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="buttonclass" onClick={Otpverification}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    
    
    </>
  );
};

export default EmployerRegister;
