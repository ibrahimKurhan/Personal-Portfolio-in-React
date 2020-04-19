import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import ibrahim from "../../Image/ibrahim.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.photographer}>
          <h1>About</h1>
        </section>

        <section className={styles.designer}>
          <h1>Skills</h1>
        </section>

        <section className={styles.developer}>
          <h1>Project</h1>
        </section>
      </div>
    );
  }
}
