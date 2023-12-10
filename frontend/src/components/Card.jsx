// frontend/src/components/Card.js
import React, { useState } from "react";
import "./Card.css"; // Import the CSS file
import Modal from "./Modal";

const Card = ({ startup }) => {
  const gradientColors = ["from-green-400", "to-blue-500"];
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={`card w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto bg-gradient-to-br ${gradientColors.join(
        " "
      )} text-white shadow-md rounded-md overflow-hidden my-4 ${
        startup.SNo % 2 == 0 ? "slide-in-left" : "slide-in-right"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            {startup.StartupName}
          </h2>
          <p className="text-sm">
            {startup.CityLocation}, {startup["Date"]}
          </p>
        </div>
        <button
          className="px-4 py-2 bg-white text-blue-500 rounded-md hover:bg-blue-100 focus:outline-none"
          onClick={() => openModal(startup)}
        >
          View Details
        </button>
      </div>
      <div className="p-4">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">
          {startup["AmountInUSD"] ? `$${startup["AmountInUSD"]} USD` : "N/A"}
        </p>
      </div>
      {isModalOpen && <Modal startup={startup} onClose={closeModal} />}
    </div>
  );
};

export default Card;
