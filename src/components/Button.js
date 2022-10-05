import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../context/MovieContext';

const Button = () => {

  const { popular, cat, setFiltered, fetchMovie } =
    useContext(MovieContext);

  const [genre, setGenre] = useState(0);



  useEffect(() => {
    if (genre === 0) {
      setFiltered(popular)
      return;
    }
    const filtered = popular.filter((movie) => movie.genre_ids.includes(genre))
    setFiltered(filtered)
  }, [genre])


  return (
    <div className="button">
      <div className="btn">
        <button
          className={cat === 'movie' ? 'active' : ''}
          onClick={() => fetchMovie('movie')}>
          Streaming
        </button>


        <button
          className={cat === 'tv' ? 'active' : ''}
          onClick={() => fetchMovie('tv')}>
          Tv
        </button>
      </div>


      <div className="btn">
        <button
          className={genre === 0 ? 'active' : ''}
          onClick={() => setGenre(0)}>
          All
        </button>
        {
          cat === 'tv' ? (
            <button
              className={genre === 18 ? 'active' : ""}
              onClick={() => setGenre(18)}>
              Action
            </button>
          ) : (
            <button
              className={genre === 28 ? 'active' : ""}
              onClick={() => setGenre(28)}>
              Action
            </button>
          )
        }





        <button
          className={genre === 35 ? 'active' : ''}
          onClick={() => setGenre(35)}>
          Comedy
        </button>
      </div>
    </div>
  )
}

export default Button