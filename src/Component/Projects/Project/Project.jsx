import React, { Component } from "react";
import style from "../Project/Project.module.scss";

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
            <div className={style.link}>{links}</div>
          </div>
        </div>
      </div>
    );
  }
}
