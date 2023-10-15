import React from 'react';
import "../components/Heroabout.css";
import Navbar from "../components/Navbar";
import Heroabout from "../components/Heroabout";
import "./about.css";
function about(){
    return(
        <>
        <div className="about" style={{background:"blue"}}>
            <div className="hero-txt-about">
                <Navbar/> 
                <Heroabout/>   
                          
           </div>
        </div>
        </>
    )
}
export default about;

