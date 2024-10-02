import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App Component tests", () => {
  it("Runs without crash", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it("App contain the 'Notifications' component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toEqual(true);
  });

  it("App contain the 'Header' component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it("App contain the 'Login' component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  it("App contain the 'Footer' component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toEqual(true);
  });

  //isLoggedin is false => 
  //  Login is displayed
  //  CourseList is not displayed
  it("check that CourseList is not displayed", () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });

  // Describe a new case, when isLoggedIn is true, and add two checks: 
  //   The first one should verify that the Login component is not included. 
  //   The second one should verify that the CourseList component is included
  it("when logged in, Login not included & CousreList included", () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Login />)).toBe(false)
    expect(wrapper.contains(<CourseList />)).toBe(true);
  });
});
