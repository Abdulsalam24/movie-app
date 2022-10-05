import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeachedMovie from "../components/searchedMovies/SeachedMovie";
import SearchInput from "../components/searchInput/SearchInput";
import MovieContext from "../context/MovieContext";
import SearchResults from "../components/searchResults/SearchResults";
import "../assets/styles/movieSearch.scss";

function MovieSearch() {
  const { searchedFiltered, searchHandle } = useContext(MovieContext);
  const { search } = useParams();

  useEffect(() => {
    searchHandle(search);
  }, []);

  return (
    <div className="movie-search container">
      <SearchInput />
      <div className="flex">
        <SearchResults />
        <div className="seached-movies">
          {searchedFiltered.map((movie) => (
            <SeachedMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSearch;
