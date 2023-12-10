// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import "./App.css";
import Home from "./pages/Home"; // Assuming you have a Home component
import About from "./pages/About"; // Assuming you have an About component
import Contact from "./pages/Contact"; // Assuming you have a Contact component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
