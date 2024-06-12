import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from "prop-types";
import CourseList from '../CourseList/CourseList';
import { prototype } from 'file-loader';

const App = (isLoggedIn) => (
  // Class name app was not added
  <>
    <Notifications />
    <Header />
	{/* {isLoggedIn ? <CourseList /> : <Login />} */}
    <Login />
    <Footer />
  </>
);

// App.propTypes = {
//   isLoggedIn: PropTypes.bool,
// };

// App.defaultProps = {
// 	  isLoggedIn: false,
// };

export default App;

