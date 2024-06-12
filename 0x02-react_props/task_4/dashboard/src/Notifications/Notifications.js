import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

const Notifications = () => (
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
      ></img>
    </button>
    <ul>
      <NotificationItem type="default" value="New course available" />
      <NotificationItem type="urgent" value="New resume available" />
      <NotificationItem type="urgent" html={getLatestNotification()} />
    </ul>
  </div>
);

export default Notifications;
