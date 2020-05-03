import React, { Component } from "react";
import style from "../Project/Project.module.scss";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Project extends Component {
  render() {
    let { id, image, name, description, links } = this.props.pro;
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
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                src={links}
                icon={faCode}
                size="4x"
              >
                <a href={links}>{links}</a>
              </FontAwesomeIcon>
              <FontAwesomeIcon
                style={{ cursor: "pointer", marginLeft: "60px" }}
                icon={faGlobe}
                size="4x"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
