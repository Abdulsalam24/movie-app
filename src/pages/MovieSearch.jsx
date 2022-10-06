import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeachedMovie from "../components/home/SeachedMovie";
import SearchInput from "../components/searchInput/SearchInput";
import MovieContext from "../context/MovieContext";
import "../assets/styles/movieSearch.scss";
import Spinner from "../components/Spinner";
import SearchResults from "../components/home/SearchResults";

function MovieSearch() {
  const { searchedFiltered, searchHandle, isLoading, isError } =
    useContext(MovieContext);
  const { search } = useParams();

  useEffect(() => {
    searchHandle(search);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>There are no movies that matched your query.</h1>;
  }
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
