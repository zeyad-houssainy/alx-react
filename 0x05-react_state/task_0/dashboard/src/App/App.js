import React from "react";
import PropTypes from "prop-types";
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
import AppContext, {user, logOut} from "./AppContext"

// Test React Features files
import TestingInlineStyle from "../testingFeature/sampleText";
import TestReactFeatureWithBorder from "../testingFeature/TestingFeature";
import ReactStateFunctionTest from "../testingFeature/reactStateFeature";


//Aphrodite CSS styling 
reset();
const cssVars = {
  mainColor: "#e01d3f",
  fontSizeGeneric: "1em",
  fontFamilyDefault: `Arial, Helvetica, sans-serif`,
  fontSizeHeader: "1.5em",
};

const styles = StyleSheet.create({
  app: {
    height: "100vh",
    width: "100vw",
  },
  body: {
    height: "100vh",
    width: "100vw",
    borderBottom: `3px solid ${cssVars.mainColor}`,
    borderTop: `3px solid ${cssVars.mainColor}`,
    // color: "#e01d3f",
  },
  // test aphrodite object
  test: {
    border: "1px solid red",
    backgroundColor: "#fcb103",
  },
});

const mockListCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

//mock inputs
// const mockListNotifications = [
//   { id: 1, type: "default", value: "New course available" },
//   { id: 2, type: "urgent", value: "New resume available" },
//   { id: 3, type: "urgent", html: getLatestNotification() }, // {__html: getLatestNotification()} use this instead but will not get deisred output
// ];
const mockListNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } }
];

// App Class Component 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.listenerAdded = false;
    this.isLoggedIn = props.isLoggedIn;
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
    };
  }

  // Hide/Display Drawer 
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  //LogIn/logOut functions
  logIn(email, password) {
    this.setState({email, password, isLoggedIn: true});
  }

  logOut() {
    this.setState({email: "", password: "", isLoggedIn:false})
  }

  // Component lifecycle
  componentDidMount = () => {
    if (!this.listenerAdded) {
      // window.addEventListener("keydown", this.handleKeyDown);
      console.log(user)
      // add this line below to make the component run only once
      this.listenerAdded = true;
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown);
  };

  // Component render
  render() {
    //destruct state variables
    const { isLoggedIn } = this.state.user;
    const { displayDrawer } = this.state;
    const contextVal = { user: this.state.user, logOut: this.state.logOut };

    return (
      <AppContext.Provider value={{ contextVal }}>
        <Notifications
          listNotifications={mockListNotifications}
          displayDrawer={this.statedisplayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        <body>
          <div className={css(styles.body)}>
            {isLoggedIn ? ( // this line might be incorrect
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={mockListCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p className={css(styles.test)}>I'm Batman 🦇</p>
              <img
                src="https://media.giphy.com/media/V1FPUW4nB97bi/giphy.gif?cid=ecf05e477ro1ueyzskifwlf6xkarpx8pc3imf540774z21u1&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="Batman Image"
                width="55%"
                height="300"
              />
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/0q6LuUqGLUiCPP1cbdwFs3?utm_source=generator"
                width="55%"
                height="20%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>{" "}
            </BodySection>
          </div>
        </body>
        <Footer />
        {/* Testing React Features below  */}
        <TestingInlineStyle style={styles.test} />
        <TestReactFeatureWithBorder className={css(styles.test)} />
        <ReactStateFunctionTest />
      </AppContext.Provider>
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
  isLoggedIn: false,
  logOut: () => {},
};


export default App;
