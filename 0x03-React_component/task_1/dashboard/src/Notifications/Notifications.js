import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => (
  <>
    <div className="menuItem">
      <p>Your notifications</p>
    </div>
    {displayDrawer ? (
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
          {/* <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} /> */}
          {listNotifications.length > 0 ? (
            listNotifications.map((notification) => {
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
