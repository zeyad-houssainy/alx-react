/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import './Notifications'; // Adjust the path as necessary
import {shallow} from 'enzyme';
import {describe} from 'jest'; // Import the describe function from jest
import {it} from 'jest'; // Import the it function from jest
import {expect} from 'jest'; // Import the expect function from jest

// Describe("App Component tests", () => {
//   it("Runs without crash", () => {
//     const app = shallow(<App />);
//     expect(app).toBeDefined();
//   });

//   it("App renders a div with the class App-header", () => {
//     const app = shallow(<App />);
//     expect(app.find(".App-header")).toBeDefined();
//   });

// });

describe('Notifications Component tests', () => {
	it('Runs without crash', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications).toBeDefined();
	});

	it('un-organized list is defined', () => {
		const notifications = shallow(<notifications />);
		expect(notifications.find('ul')).toBeDefined();
	});

	it('renders three list items', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.find('li')).toHaveLength(3);
	});

	it('renders the text Here is the list of notifications', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.find('p').text()).toBe(
			'Here is the list of notifications',
		);
	});
});
