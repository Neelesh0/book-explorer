import { useLocation, useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";

const BookListPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const books = location.state?.books || [];

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>
                <span style={styles.backArrow} onClick={() => navigate(-1)}> <FaArrowLeft /> </span> Book List
            </h2>

            {books.length === 0 ? <Loader /> : <BookList books={books} />}
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
    }
};

export default BookListPage;
