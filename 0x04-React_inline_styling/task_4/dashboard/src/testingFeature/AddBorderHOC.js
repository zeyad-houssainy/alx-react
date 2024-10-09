import React from "react"


const addRedBorder = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    return (
      <div style={{ border: "2px solid red" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
  return EnhancedComponent;
};

export default addRedBorder;