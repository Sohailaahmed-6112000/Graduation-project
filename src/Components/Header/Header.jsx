
import React, { useState } from "react";
import { AiFillYoutube, AiOutlineBars } from "react-icons/ai"; // import your logo image
import { CgProfile } from "react-icons/cg"; // import your profile picture image
import { IoMdNotifications } from "react-icons/io";
import './Header.css'

function Header() {

    <header>
      <div className="logo">
        <AiFillYoutube/>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile">
        <CgProfile/>
        
      </div>
      <div className="notifications">
      
        <IoMdNotifications/>

      </div>
    </header>

    
      const [showSidebar, setShowSidebar] = useState(false);

      return (
        <nav>
          <div className="navbar-container">
            <div className="navbar-left">
              <button onClick={() => setShowSidebar(!showSidebar)}>
                <AiOutlineBars/>
              </button>
              <a href="#">YouTube</a>
            </div>
            <div className="navbar-right">
              <input type="text" placeholder="Search" />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          {showSidebar && (
            <div className="sidebar">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Subscriptions</a>
                </li>
                <li>
                  <a href="#">Library</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Watch later</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      );
    }
  

export default Header;
