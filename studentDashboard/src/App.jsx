import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Footer from "../../src/components/Footer";

const App = () => {
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />

        
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
