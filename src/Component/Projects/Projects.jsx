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
        link1: "https://github.com/ibkibk/the-drop-x-nology",
        link2: "https://the-drop-x-nology.web.app/",
        // link: [
        //   "https://the-drop-x-nology.web.app/",
        // "https://the-drop-x-nology.web.app/",
        // ],
      },
      {
        id: 2,
        name: "The Movie DB",
        image: imdb,
        description: "secon",
        link1: "https://github.com/ibkibk/The-movie-imdb",
        link2: "https://moviedb-a9346.web.app",
      },
      {
        id: 3,
        name: "Weather App",
        image: weather,

        description:
          "This project includes 3 APPs: Weather API,One Question Quiz,Football Team Organiser ",
        link1: "https://github.com/ibkibk/WeatherAPP",
        link2: "https://weather-app-ded9f.web.app/home",
      },
      {
        id: 4,
        name: "Memory Game",
        image: memory,
        description: "Built by using Javascript,CSS and HTML",
        link1: "https://github.com/ibkibk/game-memory",
        link2: "https://ibkibk.github.io/game-memory/",
      },
      {
        id: 5,
        name: "Morse Code",
        image: morse,
        description: "Built by using Javascript,CSS and HTML",
        link1: "https://github.com/ibkibk/morse-code/tree/master",
        link2: "https://ibkibk.github.io/morse-code/",
      },
      {
        id: 6,
        name: "WASP GAME",
        image: wasp,
        description: "Built by using Javascript,CSS and HTML",
        link1: "https://github.com/ibkibk/Wasp-Game",
        link2: "https://ibkibk.github.io/Wasp-Game/",
      },
    ],
  };

  render() {
    let projectsCards = this.state.projects.map((pro) => {
      return <Project className={style.data} key={pro.id} pro={pro} />;
    });
    return (
      <>
        <a name="projects" />
        <div className={style.row}>
          <div className={style.headerWrapper}>
            <div className={style.header}>Project</div>
          </div>
          <div className={style.projectWrapper}>
            <div className={style.allProjects}>{projectsCards}</div>
          </div>
        </div>
      </>
    );
  }
}
