function SeachedMovie({ movie }) {
  const { overview, name, title, release_date, first_air_date, backdrop_path } =
    movie;

  return (
    <div className="seached-movie">
      <div className="img">
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
      </div>
      <div className="movie-info">
        <h4>{title || name}</h4>
        <span>{release_date || first_air_date}</span>
        <p>
          {overview.slice(0,255)}
          <b>...</b>
        </p>
      </div>
    </div>
  );
}

export default SeachedMovie;
