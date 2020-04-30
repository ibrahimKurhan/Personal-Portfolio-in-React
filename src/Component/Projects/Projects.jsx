import React, { Component } from "react";
import Project from "../Projects/Project/Project";
import style from "../Projects/Projects.module.scss";

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "The Drop Clinet Project",
        image: "images/Screenshot 2020-04-03 at 22.17.01.png",
        description: "A web-app build with React and Firebase",
        links: [
          "https://the-drop-x-nology.web.app/",
          "https://the-drop-x-nology.web.app/",
        ],
      },
      {
        id: 2,
        name: "The Movie DB",
        image: "Defender",
        description: "secon",
        links: ["Germany", "England"],
      },
      {
        id: 3,
        name: "Weather App",
        image: "weather-app",
        description:
          "This project includes 3 APPs: Weather API,One Question Quiz,Football Team Organiser ",
        links: [
          "https://weather-app-ded9f.web.app/home",
          "https://github.com/ibkibk/WeatherAPP",
        ],
      },
      {
        id: 4,
        name: "Memory Game",
        image: "images/Screenshot 2020-04-03 at 21.52.51.png",
        description: "Built by using Javascript,CSS and HTML",
        links: [
          "https://github.com/ibkibk/game-memory/blob/gh-pages/app.js",
          "https://ibkibk.github.io/game-memory/",
        ],
      },
      {
        id: 5,
        name: "Morse Code",
        image: "images/Screenshot 2020-04-03 at 22.26.30.png",
        description: "Built by using Javascript,CSS and HTML",
        links: [
          "https://github.com/ibkibk/morse-code/blob/gh-pages/app.js",
          "https://ibkibk.github.io/morse-code/",
        ],
      },
      {
        id: 6,
        name: "Morse Code",
        image: "images/Screenshot 2020-04-03 at 22.26.30.png",
        description: "Built by using Javascript,CSS and HTML",
        links: [
          "https://github.com/ibkibk/morse-code/blob/gh-pages/app.js",
          "https://ibkibk.github.io/morse-code/",
        ],
      },
    ],
  };

  render() {
    let projectsCards = this.state.projects.map((pro) => {
      return (
        <div className={style.projectBox}>
          <Project className={style.data} key={pro.id} pro={pro} />
        </div>
      );
    });
    return (
      <div className={style.row}>
        <div className={style.projectWrapper}>
          <div className={style.allProjects}>{projectsCards}</div>
        </div>
        <div className={style.headerWrapper}>
          <div className={style.header}>Project</div>
        </div>
      </div>
    );
  }
}
