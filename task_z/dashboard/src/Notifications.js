import React from "react";
import "./Notifications.css";
import getLatestNotification from "./utils";
import closeIcon from "./close-icon.png";

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{position:"absolute" }}></button>
    </div>
  );
};

export default Notifications;
