import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import { StyleSheet, css, reset } from "aphrodite";

// Component Files
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom"
import BodySection from "../BodySection/BodySection"

// Test React Features files
import TestingInlineStyle from "../testingFeature/sampleText";
import TestReactFeatureWithBorder from "../testingFeature/TestingFeature";


//Aphrodite CSS styling 
reset();

const styles = StyleSheet.create({
  redText: {
    color: "red",
  },
});


// App Class Component 
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

  render() {
    const mockListCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const mockListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotification() }, // {__html: getLatestNotification()} use this instead but will not get deisred output
    ];


    return (
      <>
        <Notifications listNotifications={mockListNotifications} />
        <Header />
        {this.props.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={mockListCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p className={css(styles.redText)}>I'm Batman 🦇</p>
        </BodySection>
        <Footer />
        <TestingInlineStyle style={styles.redText} />
        <TestReactFeatureWithBorder />
      </>
    );
  }
}

//PropType Configurations
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
// Default Props Configurations
App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};


export default App;
