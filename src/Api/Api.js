import axios from "axios";
import api from './url';

//send otp//
export const postuseremaliotp = (data) => {
    return axios.post(api.sendOTP, data);
};
//otpvarification//
export const postuseremaliotpverify = (data) => {
    return axios.post(api.verifyOTP, data);
};
// user Register
export const postuserregisterUser = (data) => {
    return axios.post(api.userRegister, data);
 }
// user Login
export const postuserlogin = (data) => {
    return axios.post(api.userLogin, data);
}
// user Register Employer
export const postemployerregisterUser = (data) => {
    return axios.post(api.employerRegister, data);
  }
  // user Login Employer
  export const postemployerlogin = (data) => {
    return axios.post(api.employerLogin, data);
  }
  // Dashbord Dropdown Data get 
export const getdashborddropdown = () => {
    return axios.get(api.getDashboardFilterData);
  }  