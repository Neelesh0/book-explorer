import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import { useFavorites } from "../context/FavoritesContext";

const BookList = ({ books, }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  return (
    <div className="book-list-container">
      {books.length === 0 ? (
        <div className="no-books">
          <h3>No books found</h3>
        </div>
      ) : (
        <div className="book-list">
          {books.map((book) => {
            const isFavorite = favorites.some((fav) => fav.id === book.id);

            return (
              <div key={book.id} className="book-card">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-image"
                />
                <h3 className="book-title">{book.volumeInfo.title}</h3>
                <p className="book-author">
                  {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author"}
                </p>

                <div className="btn-group">
                  <Link to={`/book/${book.id}`} className="details-btn">
                    <button>View Details</button>
                  </Link>

                  <button className="fav-btn" onClick={() => (isFavorite ? removeFavorite(book.id) : addFavorite(book))}>
                    {isFavorite ? "Remove from Favorites ❌" : "Add to Favorites ❤️"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default BookList;
