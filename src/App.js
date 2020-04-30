import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Contact from "./Component/Home/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Component/Skills/Skills";
import Projects from "./Component/Projects/Projects";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Contact />
        <Skills />
        <Projects />
      </div>
    );
  }
}
