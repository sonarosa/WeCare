import React from 'react';
import "./slider.css";
window.red = 0;
window.green = 0;
window.blue = 0;
function func_1(value) {
    window.red = value;
    change_bg();
} 
function func_2(value) {
    window.green = value;
    change_bg();
}
function func_3(value) {
    window.blue = value;
    change_bg();
}
function change_bg() {
    document.getElementById("output").innerHTML = window.red+", "+window.green+", "+window.blue;
    document.body.style.backgroundColor = "rgb("+window.red+","+window.green+","+window.blue+")";
}
function slider(){
    return(
        <>
    <div>
    <input type="range" min="0" max="255" value="0" onmousemove="func_1(this.value)" /><br />
    <input type="range" min="0" max="255" value="0" onmousemove="func_2(this.value)" /><br />
    <input type="range" min="0" max="255" value="0" onmousemove="func_3(this.value)" /><br />
    <span id="output">0, 0, 0</span>
    </div>
        </>
    )
}
export default slider;
