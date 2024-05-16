import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
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
});
