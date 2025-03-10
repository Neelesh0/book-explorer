import { fetchBooks } from "../api/googleBooksApi";
import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";
import { FaBook } from 'react-icons/fa';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    const results = await fetchBooks(query);

    navigate("/books", { state: { books: results } });
  };

  return (
    <div className="home-container">
      <h1 className="title"> <FaBook/> Book Explorer</h1>
      <p className="subtitle">Find books by title, author, or genre</p>
      
      <div className="search-section">
        <SearchForm onSearch={handleSearch} />
      </div>
    </div>
  );
};


export default Home;
