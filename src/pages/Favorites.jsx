import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>
                <span style={styles.backArrow} onClick={() => navigate(-1)}> <FaArrowLeft /> </span>
                Favorites
            </h2>

            {favorites.length === 0 ? (
                <p>No favorites added.</p>
            ) : (
                <div className="book-list">
                    {favorites.map((book) => (
                        <div key={book.id} className="book-card">
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                            <h3>{book.volumeInfo.title}</h3>
                            <p>{book.volumeInfo.authors?.join(", ")}</p>

                            <div style={styles.btnGroup}>
                                <Link to={`/book/${book.id}`} style={styles.detailsBtn}>View Details</Link>
                                <button style={styles.removeBtn} onClick={() => removeFavorite(book.id)}>Remove ❌</button>
                            </div>
                        </div>
                    ))}
                </div>
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
    btnGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    },
    detailsBtn: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "8px 12px",
        borderRadius: "5px",
        fontSize: "14px",
        textDecoration: "none",
        textAlign: "center",
        display: "block",
        transition: "0.2s"
    },
    removeBtn: {
        backgroundColor: "#ff4444",
        color: "white",
        padding: "8px 12px",
        border: "none",
        borderRadius: "5px",
        fontSize: "14px",
        cursor: "pointer",
        transition: "0.2s"
    },
    detailsBtnHover: {
        backgroundColor: "#0056b3"
    },
    removeBtnHover: {
        backgroundColor: "#cc0000"
    }
};

export default Favorites;
