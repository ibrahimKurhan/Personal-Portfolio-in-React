import React, { Component } from "react";
import style from "../Project/Project.module.scss";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Project extends Component {
  render() {
    let { id, image, name, description, link1, link2 } = this.props.pro;
    return (
      <div className={style.cardBox}>
        <div className={style.card}>
          <div className={style.front}>
            <div className={style.subtitle}>
              <img src={image} />
            </div>
          </div>
          <div className={style.back}>
            <div className={style.title}>{name}</div>
            <div className={style.des}>{description}</div>
            <div className={style.link}>
              <a href={link1} target="_blank">
                {" "}
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  src={link1}
                  icon={faCode}
                  size="4x"
                />
              </a>
              <a href={link2} target="_blank">
                <FontAwesomeIcon
                  src={link2}
                  style={{ cursor: "pointer", marginLeft: "50px" }}
                  icon={faGlobe}
                  size="4x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
