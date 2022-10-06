import axios from 'axios'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import tmbd from '../api/tmbd';
const MovieContext = createContext()


export const MovieContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  const navigate = useNavigate()
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //search
  const [movieSearched, setMovieSearched] = useState([]);
  const [searchedFiltered, setSearchedFiltered] = useState([]);

  //single movie
  const [singleMovie, setSingleMovie] = useState({});

  const [cat, setCat] = useState('movie');

  const fetchMovies = async (cat) => {
    setCat(cat)
    try {
      // const { data } = await axios.get(
      //   `https://api.themoviedb.org/3/${cat}/popular?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1`
      // );
      const { data } = await tmbd.get(
        `${cat}/popular`
      );

      setPopular(data.results);
      setFiltered(data.results);
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  };

  const searchHandle = async (text) => {
    setIsLoading(true)
    if (text === "") {
      setIsError(true)
    }
    try {
      const { data } = await tmbd.get(
        `https://api.themoviedb.org/3/search/multi?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1&include_adult=false&query=${text}`
      );

      setSearchedFiltered(data.results)
      setMovieSearched(data.results)
      setIsLoading(false)
      navigate(`/movie-search/${text}`)
    } catch (error) {
      setIsError(true)
    }
  };

  console.log(cat,'22222222ididdiidd')

  const fetchMovie = async (id) => {
    // setIsLoading(true)
    console.log(cat,id,'ididdiidd')
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${cat}/${id}?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US`
      );
      console.log(data, 'idddddddddddddddddd')

      setSingleMovie(data)
      navigate(`/singleMovie/${id}`)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  };

  return (
    <MovieContext.Provider value={{
      fetchMovie,
      fetchMovies,
      setFiltered,
      setPopular,
      searchHandle,
      setSearchedFiltered,
      isError,
      isLoading,
      searchedFiltered,
      setCat,
      cat,
      popular,
      filtered,
      movieSearched,
      singleMovie,
    }}>
      {
        children
      }
    </MovieContext.Provider>
  )
}

export default MovieContext