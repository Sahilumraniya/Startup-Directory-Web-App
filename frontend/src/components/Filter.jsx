import React, { useState, useEffect } from "react";

const Filter = ({ handleFilterChange, selectedFilter }) => {
  const [indsutryOption, setIndsutryOption] = useState([]);
  // Fetch industry options on component mount
  useEffect(() => {
    // console.log("fetchIndustryOptions");
    fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/startups/uniqueIndustry`)
      .then((response) => response.json())
      .then((data) => setIndsutryOption(["All", ...data.data]))
      .catch((error) =>
        console.error("Error fetching industry verticals:", error)
      );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <label className="mb-2 md:text-base text-xl xl:text-3xl">
        Filter by Industry:
      </label>
      <select
        className="w-2/3 sm:w-1/4 p-2 border border-gray-300 rounded-md text-black text-sm md:text-base lg:text-lg xl:text-xl"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        {indsutryOption.map((industryVertical) => (
          <option
            className="mx-5"
            key={industryVertical}
            value={industryVertical}
          >
            {industryVertical}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
