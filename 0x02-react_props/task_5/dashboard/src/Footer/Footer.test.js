import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('App Component tests', () => {
	it('Runs without crash', () => {
		const footer = shallow(<Footer />);
		expect(footer).toBeDefined();
	});

	it('App renders a div with the class App-footer', () => {
		const footer = shallow(<Footer />);
		expect(footer.find('.App-footer')).toBeDefined();
	});
});
