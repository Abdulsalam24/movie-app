import { useContext, useEffect } from "react";
import Popular from "../components/home/popular/Popular";
import Header from "../components/home/Header";

import Spinner from "../components/Spinner";
// import Header from "../components/Header";
// import Popular from "../components/popular/Popular";
import MovieContext from "../context/MovieContext";

const Home = () => {
  const { fetchMovies, isLoading, isError } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies("movie");
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>Something is wrong</h1>;
  }

  return (
    <div className="app">
      <Header />
      <Popular />
    </div>
  );
};

export default Home;
