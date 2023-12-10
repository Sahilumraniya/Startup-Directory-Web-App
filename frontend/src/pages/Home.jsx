// frontend/src/Home.js
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const [startups, setStartups] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [indsutryOption, setIndsutryOption] = useState([]);

  useEffect(() => {
    fetchIndustryOptions();
    fetchData();
  }, [currentPage, selectedFilter]);

  const fetchData = () => {
    setLoading(true);
    const apiUrl =
      selectedFilter === "All"
        ? `${import.meta.env.VITE_APP_API_URL}/api/v1/startups?page=${
            currentPage + 1
          }&pageSize=${itemsPerPage}`
        : `${import.meta.env.VITE_APP_API_URL}/api/v1/startups?page=${
            currentPage + 1
          }&pageSize=${itemsPerPage}&filter=${selectedFilter}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("cp : ", currentPage);
        console.log(data);
        setStartups(data.data);
        setTotalPages(() => data.totalStartup);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    console.log(currentPage, totalPages);
    setCurrentPage(Math.min(currentPage, totalPages));
  };

  const fetchIndustryOptions = () => {
    fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/startups/uniqueIndustry`)
      .then((response) => response.json())
      .then((data) => setIndsutryOption(["All", ...data.data]))
      .catch((error) =>
        console.error("Error fetching industry verticals:", error)
      );
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-48">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center my-4">
          Discover the Future: Navigate the Startup Ecosystem with Our
          Interactive Directory – 🚀 Explore, Filter, and Connect with
          Innovative Ventures Redefining Industries.
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <label className="mb-2 text-sm md:text-base lg:text-lg xl:text-xl">Filter by Industry:</label>
        <select
          className="w-2/3 sm:w-1/4 p-2 border border-gray-300 rounded-md text-black text-sm md:text-base lg:text-lg xl:text-xl"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          {indsutryOption.map((industryVertical) => (
            <option className="mx-5" key={industryVertical} value={industryVertical}>
              {industryVertical}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center gap-x-px mx-5">
            {startups.length != 0 ? (
              startups.map((startup) => (
                <Card key={startup.SNo} startup={startup} />
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

export default Home;
