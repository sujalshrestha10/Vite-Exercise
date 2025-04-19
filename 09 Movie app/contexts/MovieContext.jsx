import { createContext, useState, useEffect } from "react";
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavs) => [...prevFavs, movie]);
  };
  const removeFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };
  const value = {
    favorites,
    addToFavorites,
    removeFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
