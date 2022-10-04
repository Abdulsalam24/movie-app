import React from 'react'

const Movie = ({ movie }) => {

    const { name, title, release_date, first_air_date, backdrop_path } = movie

    return (
        <div className="item">
            <img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt={title || name} />
            <h4><span>Title :</span> {title || name}</h4>
            <p><span>Date :</span>  {release_date || first_air_date}</p>
        </div>
    )
}


export default Movie