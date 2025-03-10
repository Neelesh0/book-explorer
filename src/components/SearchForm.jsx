import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !author && !keyword) {
      setError("Please enter at least one field before searching");
      return;
    }

    let query = "";
    if (title) query += `intitle:${title}`;
    if (author) query += `+inauthor:${author}`;
    if (keyword) query += `+subject:${keyword}`;

    setError("");
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group">
        <input type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="text"
          placeholder="Keyword/Genre"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      <button type="submit">Search</button>

    </form>
  );
};

export default SearchForm;
