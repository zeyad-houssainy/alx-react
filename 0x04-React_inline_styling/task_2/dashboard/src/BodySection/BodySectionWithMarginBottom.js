import React from "react"
import BodySection from "./BodySection"
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


//aphrodite
const styles = StyleSheet.create({
    bodySectionWithMargin:{
        marginBottom: "40px",
        border: "2px solid blue" // temp
    }
})

// React Component
export default class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={css(styles.bodySectionWithMargin)}>
            <BodySection {...this.props} />
          </div>
        );
    }
}

BodySectionWithMarginBottom.prototypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />,
};

