function Moviecard({ movie }) {
  function onFavoriteClick() {
    alert('clicked')
  }
  return (
    <div classname="movie-card">
      <div classname=" movie-poster">
        <img src={movie.url} alt={movie.poster} />
        <div classname={movie.overlay}>
          <button classname="favorite_btn" onClick={onFavoriteClick}>
            {' '}
          </button>
        </div>
      </div>

      <div classname="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default Moviecard