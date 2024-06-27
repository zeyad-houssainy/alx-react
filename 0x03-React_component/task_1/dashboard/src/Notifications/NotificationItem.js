import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

const NotificationItem = ({type, html, value}) => {
    return(
    )

}

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),

  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
