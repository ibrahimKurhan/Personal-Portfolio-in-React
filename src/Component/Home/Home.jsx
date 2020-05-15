import React, { Component } from "react";
import styles from "./Home.module.scss";
import Typical from "react-typical";
export default class Home extends Component {
  render() {
    return (
      <>
        <a name="home" />
        <div className={styles.top} id={styles.home}>
          <div className={styles.header}>
            <div className={styles.head}>
              Hello I'm{" "}
              <Typical
                loop={Infinity}
                wrapper={"b"}
                steps={["Ibrahim Kurhan", 1000]}
              />
            </div>
            <h2 id="element"></h2>
            <div className={styles.junior}>
              Junior Software Developer based in London
            </div>
            <div className={styles.textbox}>
              <p>
                A recent bootcamp graduate with logical and analytical <br></br>
                skills actively seeking a career in software development,{" "}
                <br></br>
                currently working mostly in front-end programming but eager{" "}
                <br></br>to learn other languages and experience more
                server-side programming.
                <br></br>I love to learn, be challenged and solve problems.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
