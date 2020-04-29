import React, { Component } from "react";
import styles from "./Skills.module.scss";
import ingta from "../../Image/instagram.png";

export default class Skills extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sklillsWrapper}>
          <div className={styles.skills}>SKILLS</div>
        </div>
        <div className={styles.topped}>
          <div className={styles.eachSkills}>What I have</div>
          <div className={styles.hope}>
            <div>
              <ul>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  html
                </li>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  css
                </li>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  java
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  html
                </li>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  css
                </li>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  java
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  html
                </li>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  css
                </li>
                <li>
                  <img src={ingta} alt="Link to GitHub" />
                  java
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
