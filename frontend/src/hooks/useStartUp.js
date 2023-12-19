import { useEffect, useState } from "react";

function useStartUp({ searchQuery, selectedFilter, currentPage, setCurrentPage }) {
  const [startups, setStartups] = useState([]);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    let apiUrl =
      selectedFilter === "All"
        ? `${import.meta.env.VITE_APP_API_URL}/api/v1/startups?page=${
            currentPage + 1
          }&pageSize=${itemsPerPage}&search=${searchQuery}`
        : `${import.meta.env.VITE_APP_API_URL}/api/v1/startups?page=${
            currentPage + 1
          }&pageSize=${itemsPerPage}&filter=${selectedFilter}&search=${searchQuery}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log("cp : ", currentPage);
        // console.log(data);
        setStartups(data.data || []); // Ensure startups is an array
        setTotalPages(() => data.totalStartup || 0);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setLoading(false);
      });
    // console.log(currentPage, totalPages);
    setCurrentPage(Math.min(currentPage, totalPages));
  }, [currentPage, searchQuery,selectedFilter]);

  return [startups, loading, totalPages];
}

export default useStartUp;