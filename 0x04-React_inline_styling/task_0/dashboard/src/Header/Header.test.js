import React from "react";
import { shallow } from "enzyme";
import Header from "../Header/Header";

describe("App Component tests", () => {
  it("Runs without crash", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it("App renders a div with the class App-header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".App-header")).toBeDefined();
  });

  it("App renders an 'img' tag", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists("img")).toEqual(true);
  });

	it("App renders an 'h1' tag", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists("h1")).toEqual(true);
	});
});