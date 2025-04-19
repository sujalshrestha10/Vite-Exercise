import { useState, useEffect } from "react";
import "../css/Home.css";
import MovieCard from "../component/Moviecard";
import { getPopularMovies, searchMovies } from "../services/api";
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch {
        setError("Error fetching popular movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const HandleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load some movies");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <>
      <div className="home">
        <form className="search-form" onSubmit={HandleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        {error && <div className="err">{error}</div>}
        {loading ? (
          <div className="loading">Loading </div>
        ) : (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
