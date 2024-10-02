import React from "react";
import addRedBorder from "./AddBorderHOC"
    
class testReactFeature extends React.Component {
    constructor(props) {
        super(props)
        this.hasLogged = false //use this to prevent mount several times
    }

    componentDidMount() {
        if (!this.hasLogged) {
            // console.log("ZzZzZzZzZzZzZzZzZz");
            // console.log(testReactFeature);
            // console.log(`My name is <${testReactFeature.name}>`);
            // testReactFeature.displayName = "Custome Name"
            // console.log(testReactFeature.displayName);
            // this.hasLogged = true
        }
    }

    componentWillUnmount() {
        // console.log("Component will unmount now......")
    }
    
    render() {
        return(
            <div>Testing the React Features ... </div>
        )
    }
}
const testReactFeatureWithBorder = addRedBorder(testReactFeature)

// const testReactFeatureWithBorder = addRedBorder(testReactFeature);

export default testReactFeatureWithBorder;