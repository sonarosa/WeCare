import { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Signup from "../routes/Signup";
import  { ReactComponent as Logo } from "../images/cart.svg";
class Navbar extends Component {
  state ={clicked :false}
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  
  render() {
    
    return (
      <nav className="NavbarItems">
          <Logo style={{width: "10%",
           height: "10%",
           position: "absolute",
           left:"155px"}}/>
        <h1 className="navbar-logo">
          ShopSense</h1>
          
        <div className="menu-icons" onClick={this.handleClick
        }>
          <i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>
          
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item,index)=>{
            return(
             <li key={index}>
              <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>{item.title}
              </Link>
             </li> 
            )
          })}
          <Link to="/signup">
          <button>Signup
          </button>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;