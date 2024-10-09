import React from "react"
import CourseList from "./CourseList"
import { shallow } from "enzyme"


describe("CourseList Test Cases", () => {
    it("Render without crash", () => {
        const wrapper = shallow(<CourseList />)
        expect(wrapper).toBeDefined()
        })
        
        
    it("Check that it renders the 5 different rows", () => {
        const wrapper = shallow(<CourseList />);
        wrapper.find("table").forEach((node) => {
            expect(node.equals(<CourseList />))
        })
    });
})
