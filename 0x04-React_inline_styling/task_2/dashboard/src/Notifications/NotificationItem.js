import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

    
    //aphrodite
//     const styles = StyleSheet.create({
//       default: {
//         color: 'red',
//     },
//       urgent: {
//         color: 'blue',
//     },
// });


// React Component
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
