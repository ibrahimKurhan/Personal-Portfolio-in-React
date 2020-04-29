import React from "react";
import "./App.css";
import Navbar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Contact from "./Component/Home/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes/Routes";
import Skills from "./Component/Skills/Skills";
import DesiredSkills from "./Component/DesiredSkills/DesiredSkills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Skills />
      {/* <DesiredSkills /> */}
      {/* <Routes /> */}
    </div>
  );
}

export default App;
