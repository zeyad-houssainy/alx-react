import React from "react";

const WithLogging = (WrapperComponent) => {

    class NewComponent extends React.Component {

        componentDidMount() {
            console.log(`Component ${WrapperComponent.name || "Component"} is mounted`);
        }
        
        componentWillUnmount() {
            console.log(`Component ${WrapperComponent.name || "Component"} is going to unmount`);
        }
        
        render() {
            return <WrapperComponent {...this.props} />;
        }
    }
    NewComponent.displayName = `WithLogging(${WrapperComponent.name || "Component"})`; 
    // console.log(NewComponent.name);
    return NewComponent;
}


export default WithLogging;
