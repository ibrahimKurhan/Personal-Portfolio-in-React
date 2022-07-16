import React, { Component } from "react";
import styles from "../Contact/Contact.module.scss";
import github from "../../../Image/github.png";
import cv from "../../../Image/cv.png";
import ibkCV from "../../../Static/ibkCV.pdf";
import linkedinn from "../../../Image/linkedin2.png";

export default class Contac extends Component {
  render() {
    return (
      <div className={ styles.information }>
        <div className={ styles.get }>Get in touch</div>
        <div className={ styles.HR }>
          <hr />
        </div>
        <div className={ styles.social }>
          <div className={ styles.link }>
            <a href="https://github.com/ibkibk" target="_blank">
              <img src={ github } alt="Link to GitHub" />
            </a>
          </div>
          <div className={ styles.link }>
            <a href={ ibkCV } target="_blank">
              <img src={ cv } alt="Link to CV" />
            </a>
          </div>
          <div className={ styles.link }>
            <a
              href="https://www.linkedin.com/in/ibrahim-kurhan-6971a827/"
              target="_blank"
            >
              <img src={ linkedinn } alt="Link to LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
