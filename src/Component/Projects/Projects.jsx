import React, { Component } from "react";
import Project from "../Projects/Project/Project";
import style from "../Projects/Projects.module.scss";
import drop from "../../Image/drop.png";
import imdb from "../../Image/imdb.png";
import weather from "../../Image/weather-app.png";
import memory from "../../Image/memory.png";
import morse from "../../Image/morse.png";
import wasp from "../../Image/wasp.png";

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "The Drop Clinet Project",
        image: drop,
        description:
          "Client project created as part of an agile team, pair-programming.Built using React, Firebase, Auth & the Spotify API. For Client use in investment pitches.",
        links: [
          "https://the-drop-x-nology.web.app/",
          "https://the-drop-x-nology.web.app/",
        ],
      },
      {
        id: 2,
        name: "The Movie DB",
        image: imdb,
        description: "secon",
        links: ["Germany", "England"],
      },
      {
        id: 3,
        name: "Weather App",
        image: weather,

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
        image: memory,
        description: "Built by using Javascript,CSS and HTML",
        links: [
          "https://github.com/ibkibk/game-memory/blob/gh-pages/app.js",
          "https://ibkibk.github.io/game-memory/",
        ],
      },
      {
        id: 5,
        name: "Morse Code",
        image: morse,
        description: "Built by using Javascript,CSS and HTML",
        links: [
          "https://github.com/ibkibk/morse-code/blob/gh-pages/app.js",
          "https://ibkibk.github.io/morse-code/",
        ],
      },
      {
        id: 6,
        name: "WASP GAME",
        image: wasp,
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
      return <Project className={style.data} key={pro.id} pro={pro} />;
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
