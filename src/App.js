import React from "react";
import "./App.css";
import Navbar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Contact from "./Component/Home/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes/Routes";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Skills />

      {/* <Routes /> */}
    </div>
  );
}

export default App;
