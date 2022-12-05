import React from "react";

function SearchBar({ placeholder }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}
export default SearchBar;
