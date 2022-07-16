import React, { Component } from "react";
import styles from "./Skills.module.scss";
import DesiredSkills from "./DesiredSkills/DesiredSkills";
import react from "../../Image/react.png";
import jquery from "../../Image/jquery.png";
import html from "../../Image/html.png";
import css from "../../Image/css.png";
import sass from "../../Image/sass.png";
import js from "../../Image/js.png";
import firebase from "../../Image/firebase.png";
import github from "../../Image/githubb.png";

export default class Skills extends Component {
  render() {
    return (
      <>
        <a name="skills" />
        <div className={ styles.container } id={ styles.skills }>
          <div className={ styles.main }>
            <div className={ styles.topped }>
              <div className={ styles.eachSkills }>Skills I have</div>
              <div className={ styles.hope }>
                <div>
                  <ul>
                    <li>
                      <img src={ js } alt="Javascript" />
                      Javascript
                    </li>
                    <li>
                      <img src={ react } alt="react" />
                      React.js
                    </li>
                    <li>
                      <img src={ jquery } alt="jquery" />
                      Jquery
                    </li>
                    <li>
                      <img src={ github } alt="github" />
                      Git/Github
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <img src={ html } alt="html" />
                      HTML
                    </li>
                    <li>
                      <img src={ css } alt="css" />
                      CSS3
                    </li>
                    <li>
                      <img src={ sass } alt="sass" />
                      SASS
                    </li>
                    <li>
                      <img src={ firebase } alt="firebase" />
                      Firebase
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={ styles.desiredSkills }>
              <DesiredSkills />
            </div>
          </div>
        </div>
      </>
    );
  }
}
