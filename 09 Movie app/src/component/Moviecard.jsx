import "../css/MovieCard.css";
import { useMovieContext } from "../../contexts/MovieContext";
export default function MovieCard({ movie }) {
  const { addToFavorites, removeFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie Poster"
          />
          <div className="movie-overlay">
            <button
              onClick={onFavoriteClick}
              className={`favorite-btn ${favorite ? "active" : ""}`}
            >
              ❤
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}
