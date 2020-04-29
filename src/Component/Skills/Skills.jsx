import React, { Component } from "react";
import styles from "./Skills.module.scss";

export default class Skills extends Component {
  render() {
    return (
      <div className={styles.top}>
        <div className={styles.header}>
          <div className={styles.T}>Hello I'm Ibrahim Kurhan</div>
          <div className={styles.h}>
            Junior Software Developer based in London
          </div>
          <div className={styles.textbox}>
            <p>
              A recent bootcamp graduate with logical and analytical <br></br>
              skills actively seeking a career in software development,{" "}
              <br></br>
              currently working mostly in front-end programming but eager{" "}
              <br></br>to learn other languages and experience more server-side
              programming.
              <br></br>I love to learn, be challenged and solve problems.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
