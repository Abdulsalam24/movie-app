import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../../context/MovieContext";

function SearchResults() {
  const { movieSearched, searchedFiltered, setSearchedFiltered } =
    useContext(MovieContext);

  const movies = movieSearched.filter((e) => {
    return e.media_type === "movie";
  });
  const tv = movieSearched.filter((e) => {
    return e.media_type === "tv";
  });

  const changeMedia = (media) => {
    const filtered = movieSearched.filter(
      (movie) => movie.media_type === media
    );
    setSearchedFiltered(filtered);
  };

  return (
    <div className="search-results">
      <div className="result-head">
        <p>Search Results</p>
      </div>

      <ul>
        <li onClick={() => changeMedia("movie")}>
          Movie <span>({movies.length})</span>
        </li>
        <li onClick={() => changeMedia("tv")}>
          Tv Shows<span>({tv.length})</span>
        </li>
        <li>
          People<span>(0)</span>
        </li>
        <li>
          Collections<span>(0)</span>
        </li>
        <li>
          Keyboards<span>(0)</span>
        </li>
        <li>
          Networks<span>(0)</span>
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;
