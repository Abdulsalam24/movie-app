import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/nav.scss";
import MovieContext from "../context/MovieContext";
import SearchInput from "./SearchInput";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const { setNavSearch, navSearch } = useContext(MovieContext);
  const { pathname } = useLocation();


  return (
    <nav>
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <h1>
              <Link to="/">HOM</Link>
            </h1>
          </div>
          {/* <ul>
            <li>
              <Link to="/">movies</Link>
            </li>
            <li>
              <Link to="/">people</Link>
            </li>
          </ul> */}
        </div>
        <div className="right">
          <ul>
            <li onClick={() => setNavSearch(!navSearch)}>
              <FaSearch />
            </li>
          </ul>
        </div>
      </div>

      {navSearch && !pathname.includes("movie-search") && (
        <div className="search">
          <SearchInput />
        </div>
      )}
    </nav>
  );
}

export default Nav;
