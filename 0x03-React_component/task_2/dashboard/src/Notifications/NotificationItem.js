import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";


// In the NotificationItem Class:
//   Modify the li element to call the new function markAsRead on click. It should send the id of the notification
//   Define the new property type and the default property for the new properties

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.html = props.html;
    this.value = props.value;
    // this.markAsRead = this.markAsRead.bind(this)
  }

  render() {
    return (
      <>
        {this.props.type && this.props.value ? (
          <li
            data-notification-type={this.props.type}
            // onClick={() => markAsRead(notification.id)}
            >
            {this.props.value}
          </li>
        ) : null}
        {this.props.html ? (
          <li
          // onClick={() => markAsRead(notification.id)}
            data-notification-type={this.props.type}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          ></li>
        ) : null}
      </>
    );
  }
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
