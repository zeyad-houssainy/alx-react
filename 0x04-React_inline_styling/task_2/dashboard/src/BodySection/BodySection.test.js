import React from "react";
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe("Testing BodySection Component", () => {
    it("checking that shallowing the component should render correctly the children and one h2 element", () => {
        const wrapper = shallow(<BodySection title="test title"><p>test Text</p></BodySection>)
        const findHeaderText = wrapper.find("h2").text()
        const findParagraphText = wrapper.find("p").text()
        expect(findHeaderText).toEqual("test title");
        expect(findParagraphText).toEqual("test Text");
    })
})