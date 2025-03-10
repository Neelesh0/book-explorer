import axios from "axios";

const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${query}&maxResults=20`);
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
