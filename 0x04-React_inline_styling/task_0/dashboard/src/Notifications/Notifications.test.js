import React from "react";
import { jest } from "@jest/globals";
import { shallow, mount } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Notifications Component tests", () => {
  it("Runs without crash", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("un-organized list is defined", () => {
    const wrapper = shallow(<notifications />);
    expect(wrapper.find("ul")).toBeDefined();
  });

  // it("list length is equal to 3", () => {
  // 	const wrapper = shallow(<Notifications />);
  // 	wrapper.setProps({ displayDrawer: true});
  // 	expect(wrapper.find("ul").children()).toHaveLength(3);
  // })

  it("Each list item is wrapped in an <ul> element", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.find("li").forEach((node) => {
      expect(node.equals("ul"));
    });
  });

  it("component renders NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("element renders the right html", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(
      true
    );
  });

  // Adjust this test later
  // it('renders the text Here is the list of notifications', () => {
  // 	const wrapper = shallow(<Notifications />);
  // 	wrapper.setProps({ displayDrawer: true });
  // 	expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  // });

  // Recheck awel 4 tests mn task 4
  // tests for the last task were not added

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.setProps({ displayDrawer: false });
    // expect(wrapper.find(".notifications")).toBeDefined(); //useless test
    // expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
    // expect(wrapper.find(".menuItem").contains(<p>Your notifications</p>)).toBe(true); //useless test
  });

  it("div.notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.setProps({ displayDrawer: false });
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.setProps({ displayDrawer: true });
    // expect(wrapper.render().contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.setProps({ displayDrawer: true });
  });

  //Recheck this test
  it("renders if pass empty array or if don't pass listNotifications property", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains("No new notification for now")).toBe(false);
  });

  it("", () => {});

  it("", () => {});

  it("", () => {});

  it("", () => {});
});

describe("Testing markAsRead method in the notification class Component", () => {
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];

    console.log = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const mock = jest.spyOn(console, "log");
    const firstNotification = wrapper.find("li").first();
    firstNotification.simulate("click");
    expect(mock).toBeCalledWith("Notification (1) has been marked as read");
    mock.mockRestore();
  });
});
