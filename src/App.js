import React from "react";
import "./App.css";
import Navbar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Contact from "./Component/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
