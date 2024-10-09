import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("CourseListRow Component Tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper).toBeDefined();
  });

  //When isHeader is true:
  //textFirstCell
  it("should render textFirstCell only", () => {
    const wrapper = shallow(<CourseListRow />);
    wrapper.setProps({ isHeader: true, textFirstCell: "test#1", textSecondCell: null });
    expect(wrapper.find("th")).toHaveLength(1)
    });
    
    it("should render textFirstCell correct value", () => {
      const wrapper = shallow(<CourseListRow />);
      wrapper.setProps({ isHeader: true, textFirstCell: "test#1", textSecondCell: null });
      expect(wrapper.find("th").text()).toEqual("test#1");
      });
      
      // it("should render colSpan when render textFirstCell", () => {
        //     const wrapper = shallow(<CourseListRow />);
        //     wrapper.setProps({ isHeader: true, textFirstCell: "test#1", textSecondCell: null });
        //     expect(wrapper.find("colSpan")).toEqual(2);
        // });
        
        //textSecondCell
    it("should render textFirstCell and textSecondCell", () => {
      const wrapper = shallow(<CourseListRow />);
      wrapper.setProps({ isHeader: true, textFirstCell: "test#1", textSecondCell: "test#2" });
      expect(wrapper.find("th")).toHaveLength(2)
    });
          
    //When isHeader is false:
    it("renders two <td> within <tr>", () => {
      const wrapper = shallow(<CourseListRow />);
      wrapper.setProps({ isHeader: false, textFirstCell: "test#1", textSecondCell: "test#2" });
      expect(wrapper.find("tr").children()).toHaveLength(2)
    });
  });
          