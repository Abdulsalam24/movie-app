import React, { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";

function MovieSearch() {
  const { movieSearched } = useContext(MovieContext);

  useEffect(() => {
    
  }, [])
  

  console.log(movieSearched,'movieSearchedmovieSearchedmovieSearchedmovieSearchedmovieSearched');
  return <div>MovieSearch</div>;
}

export default MovieSearch;
