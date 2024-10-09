import React from "react";
import addRedBorder from "./AddBorderHOC";

class TestReactFeature extends React.Component {
  constructor(props) {
    super(props);
    this.hasLogged = false; // use this to prevent mount several times
  }

  componentDidMount() {
    if (!this.hasLogged) {
      console.log("ZzZzZzZzZzZzZzZzZz");
      console.log(TestReactFeature);
      console.log(`My name is <${TestReactFeature.name}>`);
      this.hasLogged = true;
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount now......");
  }

  render() {
    return <div>Testing the React Features ... </div>;
  }
}

// Set the displayName property directly on the component class
TestReactFeature.displayName = "Custom Name";

const TestReactFeatureWithBorder = addRedBorder(TestReactFeature);

export default TestReactFeatureWithBorder;
