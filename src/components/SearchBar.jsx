import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../assets/css/searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
