import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";
import Hero from "./components/HeroComponent/Hero";
import Card from "./components/CardComponent/Card";
import Grid from "./components/GridComponent/Grid";
import Footer from "./components/FooterComponent/Footer";
import "./App.css";
import Quotes from "./components/QuotesPage/Quotes";
import Restaurants from "./components/RestaurantsPage/Restaurants";

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
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
