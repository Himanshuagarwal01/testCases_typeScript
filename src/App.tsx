import React, { Component } from "react";
import Formikform from "./Formikform";
interface iState {
  isOpen: boolean;
}
export default class App extends Component<any, iState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Button variant="contained" color="primary">
          Primary
        </Button> */}
        <Formikform />
      </div>
    );
  }
}
