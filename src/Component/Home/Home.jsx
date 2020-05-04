import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.scss";
import IBK from "../../Image/IBK.png";
import Particles from "react-particles-js";
import Contact from "./Contact/Contact";
import Contac from "./Contact/Contact";

export default class Home extends Component {
  render() {
    return (
      <>
        <a name="home" />
        <div className={styles.top} id={styles.home}>
          <div className={styles.header}>
            <div className={styles.head}>Hello I'm Ibrahim Kurhan</div>
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
        {/* <Contact /> */}
      </>
    );
  }
}
