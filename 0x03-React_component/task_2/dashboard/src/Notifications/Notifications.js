import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


// Create a new markAsRead function within the Notifications class. It accepts one argument: id(number)
// When the function is called, it logs to the console the message “Notification $id has been marked as read
// Pass the function markAsRead to the NotificationItem component as a property

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.displayDrawer = props.displayDrawer;
    this.listNotifications = props.listNotifications;
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {this.displayDrawer ? (
          <div className="notifications">
            <p>Here is the list of notifications</p>
            <button
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                border: "none",
                background: "none",
                padding: "0",
              }}
            >
              <img
                src={closeIcon}
                onClick={() => console.log("Close button has been clicked")}
                alt="close icon"
                className="close-icon"
              />
            </button>
            <ul>
              {this.listNotifications.length > 0 ? (
                this.listNotifications.map((notification) => {
                  return (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                    />
                  );
                })
              ) : (
                <NotificationItem value={"No new notification for now"} />
              )}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  id: PropTypes.number,
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
