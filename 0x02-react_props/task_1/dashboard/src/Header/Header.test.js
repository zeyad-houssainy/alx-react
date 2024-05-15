import React from "react";
import { shallow } from "enzyme";
import Header from "../Header/Header";

describe('App Component tests', () => {
    it('Runs without crash', () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
	});

	it('App renders a div with the class App-header', () => {
		const header = shallow(<Header />);
		expect(header.find('.App-header')).toBeDefined();
	});

)