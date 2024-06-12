import React from 'react';
import Notifications from './Notifications';
import {shallow} from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Notifications Component tests', () => {
	it('Runs without crash', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper).toBeDefined();
	});

	it('un-organized list is defined', () => {
		const wrapper = shallow(<notifications />);
		expect(wrapper.find("ul")).toBeDefined();
	});

	it("list length is equal to 3", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("ul").children()).toHaveLength(3);
	})
	
		it("Each list item is wrapped in an <ul> element", () => {
		  const wrapper = shallow(<Notifications />);
		  wrapper.find("li").forEach((node) => {
			expect(node.equals("ul"));
		  });
		});

	it("component renders NotificationItem elements", () => {
		const wrapper = shallow(<Notifications />);
		wrapper.find("ul").forEach((node) => {
			expect(node.equals(<NotificationItem />))
		})
	});

	it("element renders the right html", () => {
		const wrapper = shallow(<Notifications />)
		expect(wrapper.find("p").prop("children")).toBe("Here is the list of notifications")
	});

	it('renders the text Here is the list of notifications', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
	});
});
