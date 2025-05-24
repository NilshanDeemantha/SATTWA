import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/* Your page content will go here */}
        <h1>Welcome to SATTWA Ayurvedic Beauty Care Center</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
