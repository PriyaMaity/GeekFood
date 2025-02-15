import React from "react";
import Navbar from "./components/NavbarComponent/Navbar";
import Hero from "./components/HeroComponent/Hero";
import Card from "./components/CardComponent/Card";
import Grid from "./components/GridComponent/Grid";
import Footer from "./components/FooterComponent/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
