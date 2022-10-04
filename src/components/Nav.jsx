import React from "react";
import {AiOutlineMenuFold} from 'react-icons/ai'
import "../assets/styles/nav.scss";

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <h1>TOMO MOVIES</h1>
          </div>
          <ul>
            <li>movies</li>
            <li>people</li>
            <li>more</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>En</li>
            <li>search</li>
          </ul>
        </div>
        <div className="menu">
            <AiOutlineMenuFold fill="#ffffff"/>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
