import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom"
import BodySection from "../BodySection/BodySection"
import TestReactFeature from "../testingFeature/testingFeature";
import WithLogging from "../HOC/WithLogging";

// const NotificationsWithLogging = WithLogging(Notifications);
// const HeaderWithLogging = WithLogging(Header);
// const CourseListWithLogging = WithLogging(CourseList);
// const LoginWithLogging = WithLogging(Login);
// const BodySectionWithLogging = WithLogging(BodySection);
// const FooterWithLogging = WithLogging(Footer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Add an event listener when the component is
  // mounted to listen to when the user is pressing down the keyboard keys
  handleKeyDown = (e) => {
    e.preventDefault();
    if (e.ctrlKey && e.key == "h") {
      alert("Logging you out");
      this.logOut();
    } else {
      console.log(`You pressed ${e.key}`);
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
  };
  
  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown);
  };

  static mockListCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  static mockListNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() }, // {__html: getLatestNotification()} use this instead but will not get deisred output
  ];

  render() {
    return (
      <>
        <Notifications listNotifications={App.mockListNotifications} />
        <Header />
        {this.props.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={App.mockListCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Random text</p>
        </BodySection>
        <Footer />
        {/* <TestReactFeature /> */}
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};


export default WithLogging(App);
