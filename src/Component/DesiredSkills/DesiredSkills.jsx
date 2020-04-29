import React, { Component } from "react";
import styles from "../DesiredSkills/DesiredSkills.module.scss";
import ingta from "../../Image/instagram.png";

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
                    src={ingta}
                    alt="Link to GitHub"
                  />
                  Node.js
                </li>
                <li>
                  <img
                    className={styles.image}
                    src={ingta}
                    alt="Link to GitHub"
                  />
                  Pyton
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <img
                    className={styles.image}
                    src={ingta}
                    alt="Link to GitHub"
                  />
                  Angular.js
                </li>
                <li>
                  <img
                    className={styles.image}
                    src={ingta}
                    alt="Link to GitHub"
                  />
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
