import React, { Component } from "react";
import Formikform from "./Formikform";
import NestedCondition from "./NestedCondition";
import Mocc from "./Mocc";
import Water from "./Water";
import Spiral from "./Spiral";
import Condition from "./Condition";
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
        <NestedCondition />
        <Mocc />
        <Water />
        <Spiral />
        <Condition />

      </div>
    );
  }
}
