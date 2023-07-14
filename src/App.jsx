import React from "react";
import Problema from "./components/Problema";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Problema />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
