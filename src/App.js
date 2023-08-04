import "./App.css";
import React, { useState , useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./componets/Navigation";
import { useLocation } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Mapbackground from "./pages/Mapbackgroun";
import Profile from "./pages/Profile";
import Employerlogin from "./pages/Employerlogin";
import Userlogin from "./pages/Userlogin";
import Employerregister from './pages/Employerregister';
import Userregister from './pages/Userregister';

function App() {

  const [condition, setCondition] = useState("")

  var pathname = "";
  var data = "";

  function HeaderView() {
    const location = useLocation();
    pathname = location.pathname;
    console.log('path',pathname )
    return <span>Path : {location.pathname}</span>
  }
  HeaderView()
  console.log(pathname)


  var Routepath = [
    "/Employerlogin",
    "/Userlogin",
    "/Employerregister",
    "/Userregister"

  ]

  const showSidebar = () => {
    data = Routepath.includes(pathname)
    console.log('data' , data)
    setCondition(data)

  }

  useEffect(() => {
    // HeaderView();
    showSidebar();

  }, [pathname]);


  return (
    <>
    {/* <div >
    <Mapbackground/>
    </div> */}
       <div>

        {condition ? "" : 
          
          <Navigation >
            <Routes>
              <Route path="/" element={<Mainpage/>}/>
              <Route path="/Profile" element={<Profile/>}/>
            </Routes>
          </Navigation>

        }
        </div>

        <div>
          <Routes>
              <Route path="/Employerlogin" element={<Employerlogin/>}/>
              <Route path="/Userlogin" element={ <Userlogin/>}/>
              <Route path="/Employerregister" element={<Employerregister/>}/>
              <Route path="/Userregister" element={<Userregister/>}/>
          </Routes>
        </div>
     
      {/* <div className="all_rout_page"> */}
          {/* <div style={{position:"absolute", zIndex:1}}>
            <Allinputgroup/>
            <Cardsection/>
          </div> */}
      

    </>
  );
}

export default App;
