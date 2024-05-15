import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component tests", () => {
  it("Runs without crash", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});
