import "./App.css";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./componets/Navigation";
import Mainpage from "./pages/Mainpage";
import Mapbackground from "./pages/Mapbackgroun";
import Profile from "./pages/Profile";
function App() {


  return (
    <>
    <div >
    <Mapbackground/>
    </div>
      <BrowserRouter>
      <div className="all_rout_page">
        <Navigation >
          {/* <div style={{position:"absolute", zIndex:1}}>
            <Allinputgroup/>
            <Cardsection/>
          </div> */}
          
          <Routes>
            <Route path="/" element={<Mainpage/>}/>
            <Route path="/Profile" element={<Profile/>}/>
          </Routes>

          {/* <Profile/> */}
         
        </Navigation>

      </div>  
      </BrowserRouter>

    </>
  );
}

export default App;
