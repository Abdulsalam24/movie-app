import { useContext, useEffect } from "react";
import Popular from "../components/home/popular/Popular";
import Header from "../components/home/Header";

import Spinner from "../components/Spinner";
import MovieContext from "../context/MovieContext";
import RefreshPage from "../components/RefreshPage";

const Home = () => {
  const { fetchMovies, isLoading, isError } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies("movie");
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <RefreshPage/>
  }

  return (
    <div className="app">
      <Header />
      <Popular />
    </div>
  );
};

export default Home;
