import React, { Component } from "react";
import styles from "../Contact/Contact.module.scss";
import github from "../../../Image/github.png";
import linkedin from "../../../Image/linkedin.png";
import cv from "../../../Image/cv.png";
import instagram from "../../../Image/instagram.png";
import ibkCV from "../../../Static/ibkCV.pdf";

export default class Contac extends Component {
  render() {
    return (
      <div className={styles.information}>
        <h2>Get in touch</h2>

        <hr />
        <div className={styles.social}>
          <div>
            <a href="https://github.com/ibkibk" target="_blank">
              <img src={github} alt="Link to GitHub" />
              {/* <p>GitHub</p> */}
            </a>
          </div>
          <div>
            <a href={ibkCV} target="_blank">
              <img src={cv} alt="Link to CV" />
              {/* <p>CV</p> */}
            </a>
          </div>
          {/* <div>
            <a href="#" target="_blank">
              <img src={instagram} alt="Link to Instagram" />
              <p>Instagram</p>
            </a>
          </div> */}
          <div>
            <a
              href="https://www.linkedin.com/in/ibrahim-kurhan-6971a827/"
              target="_blank"
            >
              <img src={linkedin} alt="Link to LinkedIn" />
              {/* <p>l</p> */}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
