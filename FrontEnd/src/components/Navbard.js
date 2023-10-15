
import './Navbard.css';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  { ReactComponent as Logo } from "../images/cart.svg";


const Navbard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([
    "Groceries",
    "Mobiles",
    "Furniture",
    "Lights",
    "Laptops",
  ]);


  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    // Perform search logic or update state as needed
  };
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await fetch('/api/v1/logout', {
        method: 'POST',
        credentials: 'include',
      });
      console.log("log out called");
      setIsLoggingOut(false);
      window.alert("Logged out successfully");
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
      setIsLoggingOut(false);
    }
  }

  const handleRemoveHistory = (indexToRemove) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      newHistory.splice(indexToRemove, 1);
      return newHistory;
    });
  };
  const toggleMenu = (event) => {
    const menu = event.currentTarget.nextElementSibling;
    menu.classList.toggle('navbar-dropdown-menu-visible');
  }

  return (
    <nav className="navbar" style={{ backgroundColor: "black" }}>
      <div method = "POST" onSubmit={handleLogout} className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          ShopSense
          <Logo style={{width: "5%",
           height: "5%",
           position: "absolute",
           left:"160px",
           top:"20px"}}/>
        </Link>
      </div>
      <ul className="navbar-links">
        <div>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Groceries</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/groceries/fruits" className="navbar-dropdown-item">Fruits</Link>
            <Link to="/groceries/vegetables" className="navbar-dropdown-item">Vegetables</Link>
            <Link to="/groceries/dairy" className="navbar-dropdown-item">Dairy & Eggs</Link>
            <Link to="/groceries/bakery" className="navbar-dropdown-item">Bakery</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Fashion</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/fashion/men" className="navbar-dropdown-item">Men's Wear</Link>
            <Link to="/fashion/women" className="navbar-dropdown-item">Women's Wear</Link>
            <Link to="/fashion/kids" className="navbar-dropdown-item">Kids Wear</Link>
            <Link to="/fashion/accessories" className="navbar-dropdown-item">Accessories</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Beauty</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/beauty/skincare" className="navbar-dropdown-item">Skincare</Link>
            <Link to="/beauty/makeup" className="navbar-dropdown-item">Makeup</Link>
            <Link to="/beauty/hair" className="navbar-dropdown-item">Hair</Link>
            <Link to="/beauty/fragrance" className="navbar-dropdown-item">Fragrance</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Electronics</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/electronics/mobiles" className="navbar-dropdown-item">Mobiles</Link>
            <Link to="/electronics/laptops" className="navbar-dropdown-item">Laptops</Link>
            <Link to="/electronics/tv" className="navbar-dropdown-item">TV & Appliances</Link>
            <Link to="/electronics/accessories" className="navbar-dropdown-item">Accessories</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Sports</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/sports/cricket" className="navbar-dropdown-item">Cricket</Link>
            <Link to="/sports/football" className="navbar-dropdown-item">Football</Link>
            <Link to="/sports/tennis" className="navbar-dropdown-item">Sports Wear</Link>
        </div>
        </div>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search"
          className="navbar-search-input"
          value={searchInput}
          onChange={handleInputChange}
        />
        <Link className="navbar-search-icon">
          <FaSearch />
        </Link>
        <Link className="navbar-mic-icon">
          <FaMicrophone />
        </Link>
        {searchInput && (
          <div className="navbar-search-dropdown">
            <p>Search results for "{searchInput}"</p>
            {/* Render search results here */}
          </div>
        )}
      </div>
      <div className="navbar-cart">
        <Link to="/cart" className="navbar-cart-link">
          <i className="fa fa-shopping-cart"></i>
          <Link className="navbar-cart-count">0</Link>
        </Link>
      </div>
      <div className="navbar-dropdown">
        <Link className="navbar-link">Account</Link>
        <div className="navbar-dropdown-menu">
          <Link to="/profile" className="navbar-dropdown-item">Profile</Link>
          <Link to="/wishlist" className="navbar-dropdown-item">Wishlist</Link>
          <Link to="/cart" className="navbar-dropdown-item">Cart</Link>
          <Link to="/orders" className="navbar-dropdown-item">Recent Orders</Link>
          <Link to="/settings" className="navbar-dropdown-item">Customize Settings</Link>
          <Link to="/productcustomize" className="navbar-dropdown-item">Product settings</Link>
          <Link to="/" className="navbar-dropdown-item" onClick={handleLogout}disabled={isLoggingOut}>{isLoggingOut ? 'Logging out...' : 'Logout'}</Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbard;
