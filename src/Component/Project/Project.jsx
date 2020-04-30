import React, { Component } from "react";
import style from "../Project/Project.module.scss";

export default class Project extends Component {
  render() {
    let { id, image, name, description, links } = this.props.pro;
    return (
      <div className={style.cardBox}>
        <div className={style.card}>
          <div className={style.blockwrapper}>
            <div className={style.block}>
              <div className={style.subtitle}>{image}</div>
              <div className={style.title}>{name}</div>
              <div className={style.des}>{description}</div>
              <div className={style.des}>{links}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
