import React, { useState } from "react";
import "./SearchPage.css"; // Link to CSS file
import { MdClear } from "react-icons/md"; // Import clear icon

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const data = [
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence",
    "Web Development",
    "Cyber Security",
    "Python Programming",
    "JavaScript",
    "React Framework",
    "SQL & Databases",
    "Cloud Computing"
  ];

  // Function to handle input change
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  // Function to handle click on search suggestion
  const handleSelect = (value) => {
    setSearchTerm(value); // Set clicked value in the search bar
    setResults([]); // Hide suggestions after selection
  };

  // Function to clear search input
  const clearSearch = () => {
    setSearchTerm("");
    setResults([]);
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Search for Courses & Topics</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        {searchTerm && (
          <MdClear className="clear-icon" onClick={clearSearch} />
        )}
      </div>
      <ul className="search-results">
        {results.map((item, index) => (
          <li key={index} className="search-item" onClick={() => handleSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
