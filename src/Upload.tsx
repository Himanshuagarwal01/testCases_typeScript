import React, { Component } from "react";
import Open from "./Open";
import Close from "./Close";

interface States {
  open: boolean;
}

export default class Upload extends Component<any, States> {
  constructor(props: any) {
    super(props);
  }
  state = {
    open: false,
  };
  render() {
    return (
      <div>
        <h1>this is the upload page</h1>
        {this.props.condition ? <Open /> : <Close />}
      </div>
    );
  }
}
