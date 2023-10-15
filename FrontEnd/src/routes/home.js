import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "./footer";

function home(){
    return(
        <>
        <Navbar />
        <Hero/>
        <div className='home-background' style={{color:"white"}}>
        <Footer/>
        </div>
        </>
    )
}
export default home;
