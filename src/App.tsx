import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename="/sattwa-beauty">
      <Navbar />
      <main className="main-content">
        {/* Your page content will go here */}
        <h1>Welcome to SATTWA Ayurvedic Beauty Care Center</h1>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
