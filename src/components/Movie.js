import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext';

const Movie = ({ movie }) => {

    const { fetchMovie,cat } = useContext(MovieContext);

    const { name, id, title, release_date, first_air_date, backdrop_path } = movie
    console.log(cat, 'moviemoviemoviemoviemoviemoviemoviemovie')

    return (
        <div className="item" onClick={() => fetchMovie(id, cat)}>
            <img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt={title || name} />
            <h4><span>Title :</span> {title || name}</h4>
            <p><span>Date :</span>  {release_date || first_air_date}</p>
        </div>
    )
}


export default Movie