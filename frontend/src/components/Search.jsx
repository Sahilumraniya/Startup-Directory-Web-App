import React, { useState, useEffect } from "react";

const Search = ({ onSearch, searchQuery }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const handleInputChange = (e) => {
    console.log("search : " + e.target.value);
    onSearch(e.target.value.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <label className="mb-2 md:text-base text-xl xl:text-3xl">
        Search by Name:
      </label>
      <input
        className="w-2/3 sm:w-1/4 border-2 border-gray-300 rounded-md p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        placeholder="Search startups..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
