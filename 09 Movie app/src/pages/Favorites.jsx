import "../css/Favorites.css";
import { useMovieContext } from "../../contexts/useMoviecontext";
import MovieCard from "../component/Moviecard";
export default function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites && favorites.length > 0) {
    return (
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  } else
    return (
      <>
        <h1>No favorites movies yet</h1>
        <p>Start adding movies here so that it will appear here</p>
      </>
    );
}
