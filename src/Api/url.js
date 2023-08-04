var base_url = "http://157.245.141.40:3000/api/v1/";
var base_url_employer = base_url + "employer/";

const api = {
    sendOTP: base_url + "auth/sendOTP",
    verifyOTP: base_url + "auth/verifyOTP",
    userRegister: base_url + "auth/registerUser",
    userLogin: base_url + "auth/loginUser",
    employerRegister: base_url + "auth/registerEmployer",
    employerLogin: base_url + "auth/loginEmployer",
    getDashboardFilterData: base_url + "user/job/filter-data",
}

export default api;