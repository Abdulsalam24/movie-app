import axios from 'axios'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
const MovieContext = createContext()


export const MovieContextProvider = ({ children }) => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [movieSearched, setMovieSearched] = useState([]);

  const [text, setText] = useState("");
  const [cat, setCat] = useState('');

  const navigate = useNavigate()

  const fetchMovie = async (cat) => {
    setCat(cat)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${cat}/popular?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1`
    );

    setPopular(data.results);
    setFiltered(data.results);
  };

  // https://api.themoviedb.org/3/search/movie?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1&include_adult=false


  const searchHandle = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6c288757e59a68ab616ba95e467779dc&language=en-US&page=1&include_adult=false&query=${text}`
    );

    setMovieSearched(data.results)
    navigate(`/movie-search/${text}`)
  };


  return (
    <MovieContext.Provider value={{
      fetchMovie,
      setFiltered,
      setPopular,
      searchHandle,
      setText,
      cat,
      text,
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