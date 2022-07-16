import React, { Component } from "react";
import Project from "../Projects/Project/Project";
import style from "../Projects/Projects.module.scss";
import { projects } from "../../Static/proData"
export default class Projects extends Component {


  render() {
    let projectsCards = projects.map((pro) => {
      return <Project className={ style.data } key={ pro.id } pro={ pro } />;
    });
    return (
      <>
        <a name="projects" />
        <div className={ style.row }>
          <div className={ style.headerWrapper }>
            <div className={ style.header }>Project</div>
          </div>
          <div className={ style.projectWrapper }>
            <div className={ style.allProjects }>{ projectsCards }</div>
          </div>
        </div>
      </>
    );
  }
}
