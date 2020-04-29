import React, { Component } from "react";
import styles from "./NavBar.module.scss";

export default class NavBar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 20) {
      document.querySelector("nav").classList.add(styles.floating);
    } else {
      document.querySelector("nav").classList.remove(styles.floating);
    }
  }

  render() {
    return (
      <div>
        <nav className={styles.Nav}>
          <a href="#top" className={styles.brand}>
            Ibrahim Kurhan
          </a>
          <ul className={styles.links}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
          </ul>
        </nav>
        <div className={styles.overlay} />
      </div>
    );
  }
}
