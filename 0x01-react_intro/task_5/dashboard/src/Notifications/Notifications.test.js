import React from 'react';
import {shallow} from 'enzyme';
import Notifications from './Notifications';

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
		expect(notifications.find('p').text())
			.toBe('Here is the list of notifications');
	});
});
