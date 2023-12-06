import React, { Component } from "react";
import * as math from "./Math";

export default class Mocc extends Component {
  multiply = () => {
    math.multiply(21, 2);
  };
  render() {
    return (
      <div>
        <button onClick={this.multiply}>Multiply</button>
      </div>
    );
  }
}
