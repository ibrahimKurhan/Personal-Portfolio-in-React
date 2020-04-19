import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.scss";
import ibrahim from "../../Image/ibrahim.jpg";
export default class Home extends Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        <div className={styles.header}>
          <img src={ibrahim} alt="" />
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
      </>
    );
  }
}
