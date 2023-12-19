// frontend/src/Home.js
import React, { useState } from "react";
import "./Home.css";

import ShowCard from "../components/ShowCard.jsx";
import Filter from "../components/Filter.jsx";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  // const fetchIndustryOptions = () => {
  //   console.log("fetchIndustryOptions");
  //   fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/startups/uniqueIndustry`)
  //     .then((response) => response.json())
  //     .then((data) => setIndsutryOption(["All", ...data.data]))
  //     .catch((error) =>
  //       console.error("Error fetching industry verticals:", error)
  //     );
  // };

  const handleFilterChange = (event) => {
    console.log("filter change : ", event.target.value);
    setSelectedFilter(event.target.value);
    // fetchData();
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

      <Filter handleFilterChange={handleFilterChange} selectedFilter={selectedFilter} />
      <ShowCard selectedFilter={selectedFilter} />
    </div>
  );
};

export default Home;
