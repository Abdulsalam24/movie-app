import axios from 'axios'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
const MovieContext = createContext()


export const MovieContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //search
  const [movieSearched, setMovieSearched] = useState([]);
  const [searchedFiltered, setSearchedFiltered] = useState([]);

  console.log(searchedFiltered, 'searchedFilteredsearchedFilteredsearchedFiltered')

  const [cat, setCat] = useState('');


  const fetchMovie = async (cat) => {
    setCat(cat)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${cat}/popular?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1`
    );

    setPopular(data.results);
    setFiltered(data.results);
  };

  const searchHandle = async (text) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1&include_adult=false&query=${text}`
    );

    setSearchedFiltered(data.results)
    setMovieSearched(data.results)
    navigate(`/movie-search/${text}`)
  };





  return (
    <MovieContext.Provider value={{
      fetchMovie,
      setFiltered,
      setPopular,
      searchHandle,
      setSearchedFiltered,
      searchedFiltered,
      cat,
      popular,
      filtered,
      movieSearched,
    }}>
      {
        children
      }
    </MovieContext.Provider>
  )
}

export default MovieContext