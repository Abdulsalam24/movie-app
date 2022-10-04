import React, { useContext, useEffect, useRef, useState } from "react";

import Movie from "../Movie";
import Button from "../Button";
import { motion } from "framer-motion";
import MovieContext from "../../context/MovieContext";
import "./popular.scss";
function Popular() {
  const { fetchMovie, filtered } = useContext(MovieContext);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    fetchMovie('movie');
  }, []);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  return (
    <div className="popular">
      <div className="container">
        <div className="popular-select">
          <h3>What's Popular</h3>
          <Button />
        </div>
        <div className="carousel-div">
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className="carousel"
          >
            <motion.div
              scroll="x"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {filtered.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
