// frontend/src/components/Modal.js
import React from "react";

const Modal = ({ startup, onClose }) => {
  const showDate = (date) => {
    const [day, month, year] = date.split("-");
    const d = new Date(`${year}-${month}-${day}`);
    if (isNaN(d) || d == undefined || d == null) {
      console.log(d, date);
      return "N/A";
    }
    return d.toDateString();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md text-black">
        <h2 className="text-xl font-semibold mb-4">{startup.StartupName}</h2>
        <p>
          <strong>City:</strong>{" "}
          {startup.CityLocation ? startup.CityLocation : "N/A"}
        </p>
        <p>
          <strong>Starting Year:</strong> {showDate(startup.date)}
        </p>
        <p>
          <strong>Industry Type:</strong>{" "}
          {startup.IndustryVertical ? startup.IndustryVertical : "N/A"}
        </p>
        <p>
          <strong>Industry:</strong>{" "}
          {startup.SubVertical ? startup.SubVertical : "N/A"}
        </p>
        <p>
          <strong>Investment Type:</strong>{" "}
          {startup.InvestmentType ? startup.InvestmentType : "N/A"}
        </p>
        <p>
          <strong>Investor Name:</strong>{" "}
          {startup.InvestorsName ? startup.InvestorsName : "N/A"}
        </p>
        <p>
          <strong>Funding:</strong>{" "}
          {startup.AmountInUSD ? `$${startup.AmountInUSD} USD` : "N/A"}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
