import { useContext, useState } from "react";
import "../assets/styles/header.scss";
import MovieContext from "../context/MovieContext";

function Header() {
  const { searchHandle, setText, text } = useContext(MovieContext);

  return (
    <header>
      <div className="home">
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <div className="form">
          <form onSubmit={searchHandle}>
            <input
              type="text"
              placeholder="Search Movie ;)"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {/* <button>search</button> */}
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
