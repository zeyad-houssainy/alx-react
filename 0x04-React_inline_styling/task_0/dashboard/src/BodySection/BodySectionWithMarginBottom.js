import React from "react"
import BodySection from "./BodySection"
import "./BodySectionWithMarginBottom.css"
import PropTypes from "prop-types";

export default class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        )
    }
}

BodySectionWithMarginBottom.prototypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />,
};

