import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import "../assets/styles/singleMovie.scss";
import Spinner from "../components/Spinner";

function SingleMovie() {
  const { singleMovie, fetchMovie, isLoading, isError } =
    useContext(MovieContext);

  // const {
  //   name,
  //   overview,
  //   first_air_date,
  //   backdrop_path,
  //   poster_path,
  //   genres,
  //   vote_average,
  //   tagline,
  //   created_by,
  // } = singleMovie;
  console.log(singleMovie, "singleMoviesingleMovie");

  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id);
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
          backgroundImage: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${singleMovie.backdrop_path}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex">
          <div className="img">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${singleMovie.poster_path}`}
              alt={singleMovie.name}
            />
          </div>
          <div className="info">
            <div className="name">
              <h1>
                {singleMovie.name}{" "}
                <span className="year">{singleMovie.first_air_date}</span>
              </h1>
              {/* {genres.map((name) => (
              <p>{name}</p>
            ))} */}
            </div>
            <div className="rate">
              <p>{singleMovie.vote_average}</p>
              <p>
                user <br />
                score
              </p>
            </div>
            <div className="tagline">
              <p>{singleMovie.tagline}</p>
            </div>
            <div className="overview">
              <h4>Overview</h4>
              <p>{singleMovie.overview}</p>
            </div>
            <div className="creator">
              {/* {created_by.map((creator) => (
              <div>
                <h4>{creator}</h4>
                <p>creator</p>
              </div>
            ))} */}
            </div>
          </div>
        </div>
        <div className="thumnail">
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
