import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext';
import movieDefault from '../assets/img/default-movie.png'

const Movie = ({ movie }) => {

    const { fetchMovie, cat } = useContext(MovieContext);

    const { name, id, title, release_date, first_air_date, vote_average, backdrop_path } = movie


    return (
        <div className="item" onClick={() => fetchMovie(id, cat)}>
            <div className="img">
                <img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt={title || name}
                    onError={(error) => {
                        error.target.src = this.movieDefault; 
                    }}
                />

            </div>
            <div className="info">
                <h4>{title || name}</h4>
                <p> {release_date || first_air_date}</p>
            </div>
            <div className="rate">
                <div className="score">
                    <p>
                        <span>
                            {vote_average
                                ?.toString()
                                .slice(0, 3)
                                .split(".")}
                            %
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Movie