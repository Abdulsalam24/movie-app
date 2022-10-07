import React, { useContext, useEffect } from "react";

import Movie from "../../Movie";
import Button from "../../Button";
import MovieContext from "../../../context/MovieContext";
import "./popular.scss";
function Popular() {
  const { filtered } = useContext(MovieContext);

  return (
    <div className="popular">
      <div className="container">
        <div className="popular-select">
          <h2>What's Popular</h2>
          <Button />
        </div>
        <div className="carousel-div">
          <div className="carousel">
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
