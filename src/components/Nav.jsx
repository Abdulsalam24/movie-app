import React, { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../assets/styles/nav.scss";
import MovieContext from "../context/MovieContext";
import SearchInput from "./SearchInput";

function Nav() {
  const { setNavSearch, navSearch } = useContext(MovieContext);

  return (
    <nav>
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <h1>
              <Link to="/">HOM</Link>
            </h1>
          </div>
          <ul>
            <li>
              <Link to="/">movies</Link>
            </li>
            <li>
              <Link to="/">people</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li onClick={() => setNavSearch(!navSearch)}>search</li>
          </ul>
        </div>
        <div className="menu">
          <AiOutlineMenuFold fill="#ffffff" />
        </div>
      </div>
      {navSearch && (
        <div className="search">
          <SearchInput />
        </div>
      )}
    </nav>
  );
}

export default Nav;
