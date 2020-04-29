import React, { Component } from "react";
import styles from "../DesiredSkills/DesiredSkills.module.scss";
import ingta from "../../Image/instagram.png";
import angular from "../../Image/angular.png";
import node from "../../Image/node.png";
import python from "../../Image/python.png";
import UX from "../../Image/UX.png";

export default class DesiredSkills extends Component {
  render() {
    return (
      <div className={styles.topContainer}>
        <div className={styles.first}>
          <div className={styles.wannaHave}>Wanna learn</div>
          <div className={styles.list}>
            <div>
              <ul>
                <li>
                  <img
                    className={styles.image}
                    src={node}
                    alt="Link to GitHub"
                  />
                  Node.js
                </li>
                <li>
                  <img
                    className={styles.image}
                    src={python}
                    alt="Link to GitHub"
                  />
                  Python
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <img
                    className={styles.image}
                    src={angular}
                    alt="Link to GitHub"
                  />
                  Angular.js
                </li>
                <li>
                  <img className={styles.image} src={UX} alt="Link to GitHub" />
                  UX/UI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
