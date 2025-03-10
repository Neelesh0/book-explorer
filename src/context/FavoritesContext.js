import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    if (!favorites.some((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFavorite = (bookId) => {
    setFavorites(favorites.filter((book) => book.id !== bookId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
