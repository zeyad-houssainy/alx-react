import React from "react";
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("Testing BodySectionWithMarginBottom Component", () => {
    it('checking that shallowing the component should render correctly a BodySection component ', () => {
            const wrapper = shallow(<BodySectionWithMarginBottom />)
            expect(wrapper.find("BodySection").exists()).toBe(true)
        });

        it("props are passed correctly to the child component", () => {
            const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test text</p></BodySectionWithMarginBottom>)
            expect(wrapper.find("BodySection").props().title).toBe("test title")
            
    });
})