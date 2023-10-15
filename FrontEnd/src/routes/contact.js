import React from 'react';
import Navbar from "../components/Navbar";
import "./contact.css";
import Footer from "./footer";
import { Container, Row, Col } from "react-bootstrap";
export default function contact() {
  return (   
  <div>
    <Navbar/>
    <form action="">
      <div class="title">
        <h6>CONTACT</h6>
      </div>
      <div class="half">
        <div class="item">
          <label for="name">NAME</label>
          <input type="text" id = "name"></input>
        </div>
        <div class="item">
          <label for="email">EMAIL</label>
          <input type="text" id = "email"></input>
        </div>
      </div>
      <div class="full">
        <label for="message">MESSAGE</label>
        <textarea name="" id = "message"></textarea>
      </div>
      <div class="action">
        <input type="submit" value = "SEND MESSAGE"></input>
        <input type="reset" value = "RESET"></input>
      </div>
      <div class="icons">
        <a href="" class = "fa-brands fa-twitter"></a>
        <a href="" class = "fa-brands fa-facebook"></a>
        <a href="" class = "fa-brands fa-instagram"></a>
        <a href="" class = "fa-brands fa-github"></a>
      </div>
    </form>
    <Footer/>
  </div>
  
  );
}