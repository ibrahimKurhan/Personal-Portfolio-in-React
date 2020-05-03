import React, { Component } from "react";

export class Skill extends Component {
  render() {
    let { id, image, name } = this.props.pro;

    return (
      <React.Fragment>
        <li>
          <img src={image} />
          {name}
        </li>
      </React.Fragment>
    );
  }
}

export default Skill;
