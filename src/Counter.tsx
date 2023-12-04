import { Button } from "@material-ui/core";
import React, { Component } from "react";
interface State {
  count: Number;
}

export default class Counter extends Component<any, State> {
  state = {
    count: 0,
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className="decrement"
          onClick={this.handleDecrement}
        >
          Decrement
        </Button>
        {this.state.count}
        <Button
          variant="contained"
          color="primary"
          className="increment"
          onClick={this.handleIncrement}
        >
          Increment
        </Button>
      </div>
    );
  }
}
