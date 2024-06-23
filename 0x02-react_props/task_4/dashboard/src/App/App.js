import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";


const App = ({ isLoggedIn }) => (
  // Class name app was not added
  <>
    <Notifications />
    <Header />
    {isLoggedIn ? <CourseList /> : <Login />}
    <Footer />
  </>
);

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
