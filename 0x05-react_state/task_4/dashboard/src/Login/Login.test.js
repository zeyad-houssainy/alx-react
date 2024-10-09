import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";

describe('App Component tests', () => {
	it('Runs without crash', () => {
		const login = shallow(<Login />);
		expect(login).toBeDefined();
	});

	it('App renders a div with the class App-body', () => {
		const login = shallow(<Login />);
		expect(login.find('.App-body')).toBeDefined();
	});

	it("App renders 'input' element", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists("input")).toEqual(true);
	});

	
	it("App renders 'label' element", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists("label")).toEqual(true);
  });
});
