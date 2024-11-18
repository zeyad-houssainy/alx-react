import React from 'react';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

//aphrodite
const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(5px)",
  },
  "75%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  hideItem: {
    display: "none"
  },
  notifications: {
    padding: "1em",
    border: "2px dashed red",
    width: "400px",
    marginLeft: "auto",
    position: "relative",
    "@media (max-width: 900px)": {
      backgroundColor: "white",
      width: "100vw",
      height: "100vw",
      borderBottom: "2px solid black",
      padding: "0",
      margin: "0",
      fontSize: "20px",
      top: "0",
    },
  },
  notificationsParagraph: {
    margin: "0",
  },
  ul: {
    "@mwdia (max-width: 900px)": {
      border: "1px solid red",
      margin: "0",
      padding: "0",
    },
  },
  menuItem: {
    margin: "0",
    textAlign: "end",
    backgroundColor: "#fff8f8",
  },
  closeIcon: {
    height: "10px",
    width: "10px",
    justifyContent: "center",
    alignSelf: "center",
  },
  closeButton: {
    position: "absolute",
    top: "12px",
    right: "12px",
    border: "none",
    background: "none",
    padding: "0",
  },
  bounceAnimation: {
    ":hover": {
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: "1s, 500ms",
      animationIterationCount: "3",
      cursor: "pointer",
    },
  },
});


// React Component
  class Notifications extends React.Component {
    constructor(props) {
      super(props);
      this.displayDrawer = props.displayDrawer;
      this.listNotifications = props.listNotifications;
      this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
      console.log(`Notification (${id}) has been marked as read`);
    };

    shouldComponentUpdate(newProps) {
      return (
        newProps.listNotifications.length >
          this.props.listNotifications.length ||
        newProps.displayDrawer !== this.props.displayDrawer
      );
    }

    render() {
      return (
        <>
          <div
            className={css([
              styles.menuItem,
              styles.bounceAnimation,
              this.props.displayDrawer ? styles.hideItem : "",
            ])}
            onClick={this.props.handleDisplayDrawer}
          >
            <p>Your notifications</p>
          </div>
          {this.props.displayDrawer && (
            <div className={css([styles.notifications])}>
              <p className={css(styles.notificationsParagraph)}>
                Here is the list of notifications
              </p>
              <button
                className={css(styles.closeButton)}
                onClick={() => {
                  console.log("Close button has been clicked")
                  this.props.handleHideDrawer()
                }}
              >
                <img
                  src={closeIcon}
                  alt="close icon"
                  className={css(styles.closeIcon)}
                />
              </button>
              <ul className={css(styles.ul)}>
                {this.listNotifications.length > 0 ? (
                  this.listNotifications.map((notification) => {
                    return (
                      <NotificationItem
                        key={notification.id}
                        id={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={this.markAsRead}
                      />
                    );
                  })
                ) : (
                  <NotificationItem value={"No new notification for now"} />
                )}
              </ul>
            </div>
          )}
        </>
      );
    }
  }

  Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    id: PropTypes.number,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
  };
  
  Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {}
  };

  export default Notifications;

