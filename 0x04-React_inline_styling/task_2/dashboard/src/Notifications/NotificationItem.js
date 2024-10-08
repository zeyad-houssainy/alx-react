import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

    
    //aphrodite
    const styles = StyleSheet.create({
      default: {
        color: 'red',
    },
      urgent: {
        color: 'blue',
    },
});


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
        <li className={css(this.type == "default" ? styles.default : styles.urgent )}//selecting style based on urgency
            onClick={() => {this.props.markAsRead(this.props.id);}}
            dangerouslySetInnerHTML={this.props.html ? { __html: this.props.html } : undefined}
            >
          {this.props.value}
        </li>
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
