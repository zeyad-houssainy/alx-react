import React from "react";
import NotificationItem from "./NotificationItem";
import {shallow} from "enzyme";

describe("NotificationItem tests", () => {
    it("runs without crash", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toBeDefined();
    })

    it("type should be rendered with the data-notification-type attribute", () => {
        const wrapper = shallow(<NotificationItem />);
        wrapper.setProps({type: "default", value: "test"});
        // excpect(wrapper.find("li").prop("data-notification-type")).toBeDefined();
        expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
        expect(wrapper.text()).toEqual("test");
    });

    it("html rendered with dangerouslySetInnerHTML attribute", () => {
        const wrapper = shallow(<NotificationItem />);
        wrapper.setProps({html: "<u>test</u>"});
        expect(wrapper.find("li").prop("dangerouslySetInnerHTML")).toEqual({__html: "<u>test</u>"});
    });
    
// Add the test below later
    // Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
    // it("renders the correct html for type and value props", () => {
    //     const wrapper = shallow(<NotificationItem />);
    //     wrapper.setProps({ value: "test"});
    //     expect(wrapper.text()).toEqual("test");
    // });


})
