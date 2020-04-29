import React, { Component } from "react";
import styles from "./Skills.module.scss";
import ingta from "../../Image/instagram.png";
import DesiredSkills from "../DesiredSkills/DesiredSkills";

export default class Skills extends Component {
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
                    <img src={ingta} />
                    Javascript
                  </li>
                  <li>
                    <img src={ingta} />
                    React.js
                  </li>
                  <li>
                    <img src={ingta} />
                    Jquery
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={ingta} />
                    HTML
                  </li>
                  <li>
                    <img src={ingta} />
                    CSS3
                  </li>
                  <li>
                    <img src={ingta} />
                    SASS
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={ingta} />
                    Firebase
                  </li>
                  <li>
                    <img src={ingta} />
                    Git/Github
                  </li>
                  <li>
                    <img src={ingta} />
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
