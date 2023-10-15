import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function home(){
    return(
        <>
        <Navbar />
        <Hero/>
        <div className='home-background' style={{color:"blue"}}>
        
        </div>
        </>
    )
}
export default home;
