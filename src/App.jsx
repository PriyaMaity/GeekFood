import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";
import Hero from "./components/HeroComponent/Hero";
import Card from "./components/CardComponent/Card";
import Grid from "./components/GridComponent/Grid";
import Footer from "./components/FooterComponent/Footer";
import "./App.css";
import Quotes from "./components/QuotesPage/Quotes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Card />
              <Grid />
              <Footer />
            </>
          }
        />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
