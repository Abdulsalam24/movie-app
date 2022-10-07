import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";

import "../assets/styles/singleMovie.scss";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function SingleMovie() {
  const { singleMovie, fetchMovie, isLoading, cat, isError } =
    useContext(MovieContext);

  const movieUrl =
    cat === "tv"
      ? "https://www.themoviedb.org/t/p/w600_and_h700_bestv2"
      : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

  const { id, type } = useParams();

  useEffect(() => {
    fetchMovie(id, type);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>There are no movies that matched your query.</h1>;
  }

  return (
    <div className="single-movie">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${movieUrl}${singleMovie.backdrop_path}`,
        }}
      >
        <BackButton
          url={`/movie-search/${singleMovie.name || singleMovie.title}`}
        />

        <div className="flex">
          <div className="img">
            <img
              src={`${movieUrl}/${singleMovie.poster_path}`}
              alt={singleMovie.name || singleMovie.title}
            />
          </div>
          <div className="info">
            <div className="name">
              <h1>
                {singleMovie.title || singleMovie.name} {""}
                <span className="year">
                  (
                  {singleMovie.release_date?.slice(0, 4) ||
                    singleMovie.first_air_date?.slice(0, 4)}
                  )
                </span>
              </h1>
            </div>
            <div className="movie-genre">
              <span>
                {singleMovie.release_date || singleMovie.first_air_date}
              </span>
              {/* {
                singleMovie.production_countries[0].map((i) => i.iso_3166_1)
              } */}
              <div className="genre">
                {singleMovie.genres?.map((name, index) => (
                  <span key={name.id}>{name.name}</span>
                ))}
              </div>
            </div>

            <div className="rate">
              <div className="score">
                <p>
                  <span>
                    {singleMovie.vote_average
                      ?.toString()
                      .slice(0, 3)
                      .split(".")}
                    %
                  </span>
                </p>

                <p>
                  user <br />
                  score
                </p>
              </div>
            </div>
            <div className="tagline">
              <p>{singleMovie.tagline}</p>
            </div>
            <div className="overview">
              <h4>Overview</h4>
              <p>{singleMovie.overview}</p>
            </div>

            <div className="creator">
              {singleMovie.created_by?.map((creator, index) => (
                <div key={index}>
                  <h4>{creator.name}</h4>
                  <p>creator</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="thumnail"></div>
      </div>
    </div>
  );
}

export default SingleMovie;
