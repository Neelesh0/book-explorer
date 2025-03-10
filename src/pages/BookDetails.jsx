import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api/googleBooksApi";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const loadBook = async () => {
      setLoading(true);
      const results = await fetchBooks(id);
      setBook(results.find((b) => b.id === id) || null);
      setLoading(false);
    };

    loadBook();
  }, [id]);

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.backArrow} onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </span>
        {book ? book.volumeInfo.title : "Book Details Not Found"}
      </h2>

      {loading ? (
        <Loader />
      ) : book ? (
        <>
          <p>{book.volumeInfo.description || "No description available."}</p>

          <button
            style={styles.favoriteBtn}
            onClick={() => (isFavorite ? removeFavorite(book.id) : addFavorite(book))}
          >
            {isFavorite ? "Remove from Favorites ❌" : "Add to Favorites ❤️"}
          </button>
        </>
      ) : (
        <p style={styles.notFound}>Book details not found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold"
  },
  backArrow: {
    cursor: "pointer",
    marginRight: "25px",
    fontSize: "24px",
    marginLeft: "10px",
    position: "relative",
    top: "3px"
  },
  favoriteBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#ffcc00",
    border: "none",
    borderRadius: "5px"
  },
  notFound: {
    fontSize: "18px",
    color: "red",
    marginTop: "20px"
  }
};

export default BookDetails;
