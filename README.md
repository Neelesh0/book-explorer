# Book Explorer

A simple book search application that allows users to find books using the **Google Books API**. Users can search for books by **title, author, or genre**, book details, and add/remove favorites.

# Features
 Search books by **title, author, or genre**  
 View book details with **cover image, author, and description**  
 Add or remove books from **favorites**  
 Responsive design for **desktop**  
 **React Router** for smooth navigation  
 Error handling for **invalid searches**  


# Tech Stack
 **Frontend:** React.js, React Router, Context API  
 **State Management:** useState, useEffect, Context API  
 **Styling:** CSS (flexbox & grid)  
 **API:** Google Books API  

# Project Structure
📦 Book Explorer
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 BookList.js  --> Displays book results
 ┃ ┃ ┣ 📜 SearchForm.js  --> Search input form
 ┃ ┃ ┣ 📜 Favorites.js  --> Manages favorite books
 ┃ ┃ ┗ 📜 Loader.js  --> Spinner for loading state
 ┃ ┣ 📂 context
 ┃ ┃ ┗ 📜 FavoritesContext.js  --> Handles favorite books
 ┃ ┣ 📂 api
 ┃ ┃ ┗ 📜 googleBooksApi.js  --> API request handling
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.js  --> Main search page
 ┃ ┃ ┗ 📜 BookDetails.js  --> Individual book details
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 styles.css
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┗ 📜 .gitignore

# Approach
**Routing**: Implemented using react-router-dom for seamless navigation between pages.
**Form Handling**: The SearchForm component collects input and passes it to the fetchBooks API call.
**State Management**: Uses useState and useEffect for managing search results and Context API for handling favorites.
**Trade-offs**: Chose Context API instead of Redux for simplicity, making it easier to manage global state.

