import React, { PureComponent } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";


// In the NotificationItem Class:
//   Modify the li element to call the new function markAsRead on click. It should send the id of the notification
//   Define the new property type and the default property for the new properties

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.html = props.html;
    this.value = props.value;
    this.id = props.id;
  }

  render() {
    return (
      <>
        {this.props.type && this.props.value ? (
          <li
            onClick={() => {
              this.props.markAsRead(this.props.id);
            }}
            data-notification-type={this.props.type}
          >
            {this.props.value}
          </li>
        ) : null}
        {this.props.html ? (
          <li
            onClick={() => this.props.markAsRead(this.props.id)}
            data-notification-type={this.props.type}
            dangerouslySetInnerHTML={{ __html: this.props.html }} // fix this line
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
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
