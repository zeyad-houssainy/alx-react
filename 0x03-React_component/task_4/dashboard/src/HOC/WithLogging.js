import React from "react";

const WithLogging = (WrapperComponent) => {
    // const nameOfWrapperComponent = WrapperCom   ponent.displayName || WrapperComponent.name || 'Component';

    class NewComponent extends React.Component {

        componentDidMount() {
            console.log(`Component ${WrapperComponent} is mounted`);
        }
        
        componentWillUnmount() {
            console.log(`Component ${WrapperComponent} is going to unmount`);
        }
        
        render() {
            return <WrapperComponent {...this.props} />;
        }
    }
    NewComponent.displayName = `WithLogging(${WrapperComponent})`; 
    return NewComponent;
}


export default WithLogging;
