import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

// describe("App Component tests", () => {
//   it("Runs without crash", () => {
//     const app = shallow(<App />);
//     expect(app).toBeDefined();
//   });

//   it("App renders a div with the class App-header", () => {
//     const app = shallow(<App />);
//     expect(app.find(".App-header")).toBeDefined();
//   });

// });

describe("Notifications Component tests", () => {
    it("Runs without crash", () => {
        const notifications = shallow(<Notifications />)
        expect(notifications).toBeDefined()
    });

    it("renders the text Here is the list of notifications", () => {

    });

    it("renders three list items", () => {});
});