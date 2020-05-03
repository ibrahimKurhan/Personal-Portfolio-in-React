import React, { Component } from "react";
import styles from "./Skills.module.scss";
import DesiredSkills from "./DesiredSkills/DesiredSkills";
import react from "../../Image/react.png";
import jquery from "../../Image/jquery.png";
import html from "../../Image/html.png";
import css from "../../Image/css.png";
import sass from "../../Image/sass.png";
import js from "../../Image/js.png";
import firebase from "../../Image/firebase.png";
import github from "../../Image/githubb.png";
import bash from "../../Image/bash.png";

export default class Skills extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Javascript",
        image: { js },
      },
      {
        id: 2,
        name: "React.js",
        imgage: { react },
      },
      {
        id: 3,
        name: "Jquery",
        imgage: { jquery },
      },
      {
        id: 4,
        name: "HTML",
        image: { html },
      },
      {
        id: 5,
        name: "css",
        image: { css },
      },
      {
        id: 6,
        name: "BASH",
        imgage: { bash },
      },
    ],
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sklillsWrapper}>
          <div className={styles.skills}>SKILLS</div>
        </div>
        <div className={styles.main}>
          <div className={styles.topped}>
            <div className={styles.eachSkills}>What I have</div>
            <div className={styles.hope}>
              <div>
                <ul>
                  <li>
                    <img src={js} />
                    Javascript
                  </li>
                  <li>
                    <img src={react} />
                    React.js
                  </li>
                  <li>
                    <img src={jquery} />
                    Jquery
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={html} />
                    HTML
                  </li>
                  <li>
                    <img src={css} />
                    CSS3
                  </li>
                  <li>
                    <img src={sass} />
                    SASS
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={firebase} />
                    Firebase
                  </li>
                  <li>
                    <img src={github} />
                    Git/Github
                  </li>
                  <li>
                    <img src={bash} />
                    Bash
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <DesiredSkills />
        </div>
      </div>
    );
  }
}
