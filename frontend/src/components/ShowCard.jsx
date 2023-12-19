import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import Card from "./Card.jsx";
import useStartUp from "../hooks/useStartUp.js";

const ShowCard = ({ selectedFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const [startups, loading, totalPages] = useStartUp({
    searchQuery,
    selectedFilter,
    currentPage,
    setCurrentPage,
  });

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchQuery("");
      return;
    }
    setSearchQuery(query);
  };

  const handleFilterChange = (event) => {
    console.log("filter change : ", event.target.value);
    setSelectedFilter(event.target.value);
    fetchData();
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <Search searchQuery={searchQuery} onSearch={handleSearch} />

      {loading ? (
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-10 mx-5 my-5">
          {Array.from({ length: itemsPerPage - 7 }, (_, i) => (
            <div
              key={i}
              className="w-full max-w-sm bg-white p-4 mb-4 rounded-md shadow-md relative animated-background"
            ></div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center gap-x-px mx-5">
            {startups.length != 0 ? (
              startups.map((startup) => (
                <Card key={startup._id} startup={startup} />
              ))
            ) : (
              <div className="text-2xl h-[500px] max-h-full flex items-center">
                <p>No data found</p>
              </div>
            )}
          </div>

          <div className="flex justify-between my-4 mx-10">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <p>
              Page {Math.min(currentPage + 1, totalPages)} of {totalPages}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCard;
