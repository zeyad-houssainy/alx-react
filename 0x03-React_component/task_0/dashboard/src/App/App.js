import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

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
      e.preventDefault()
      if(e.ctrlKey && e.key == "h") {
        alert("Logging you out");
        this.logOut();
      } else {
        console.log(`You pressed ${e.key}`);
      }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown)
  }
  

  static listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  static listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  render() {
    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <Header />
        {this.props.isLoggedIn ? (
          <CourseList listCourses={this.listCourses} />
        ) : (
          <Login />
        )}
        <Footer />
      </>
    );
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };
}


export default App;
