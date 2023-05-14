import React from "react";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { MdVideoLibrary, MdHistory, MdSubscriptions } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import "./SideBar.css";

function Sidebar() {
  return<>
  <div className="sidebar">
    <p>Lorem, ipsum dolor.</p>
      <ul className="sidebar-list">
        <li>
          <a href="#">
            <AiFillHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillFire />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdVideoLibrary />
            <span>Library</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdSubscriptions />
            <span>Subscriptions</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdHistory />
            <span>History</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegClock />
            <span>Watch later</span>
          </a>
        </li>
      </ul>
    </div>
  
  </>
    
    
}

export default Sidebar;
