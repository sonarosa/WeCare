import React from 'react';
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import "../components/slider.css";
function project(){
    return(
        <>
        <div className='project-body'>
        <h2>Projects</h2>
        <Navbar/>
        <Slider/>
        </div>
        </>
       
    )
}
export default project;
