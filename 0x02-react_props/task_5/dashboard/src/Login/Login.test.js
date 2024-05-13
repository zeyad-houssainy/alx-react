import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

describe('App Component tests', () => {
	it('Runs without crash', () => {
		const login = shallow(<Login />);
		expect(login).toBeDefined();
	});

	it('App renders a div with the class App-body', () => {
		const login = shallow(<Login />);
		expect(login.find('.App-body')).toBeDefined();
	});
});
