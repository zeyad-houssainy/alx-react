import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

const App = ({ isLoggedIn }) => (
  // Class name app was not added
  <>
    <Notifications listNotifications={listNotifications} />
    <Header />
    {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
    <Footer />
  </>
);

// you can use API to get this from database
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {id: 3, type:"urgent", html:getLatestNotification()},
];

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
