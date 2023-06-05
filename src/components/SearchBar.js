import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search-input">Enter Search Term</label>
        <div className="input-container">
          <input
            id="search-input"
            value={term}
            onChange={handleChange}
            placeholder="Search images..."
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
