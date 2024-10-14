import React from "react";
import PropTypes from "prop-types";


export default class BodySection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}


BodySection.prototypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

BodySection.defaultProps = {
  children: <React.Fragment />,
};