import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import NestedCondition from "../../NestedCondition";
const feature = loadFeature("./src/__tests__/feature/NestedCondition.feature");

defineFeature(feature, (test) => {
  test("NestedCondition Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: NestedCondition;
    given("NestedCondition given load", () => {
      wrapperApp = shallow(<NestedCondition />);
      expect(wrapperApp.exists()).toBeTruthy();
    });

    when("NestedCondition when load", () => {
      instance = wrapperApp.instance() as NestedCondition;
      expect(wrapperApp.exists()).toBeTruthy();
    });

    then("render the component with isLoggedIn true", () => {
      wrapperApp = shallow(<NestedCondition />);
      wrapperApp.setState({ isLoggedIn: true });
      expect(wrapperApp.contains(<p>Welcome, user!</p>)).toBe(true);
    });

    then("render the component with isAdmin true", () => {
      wrapperApp = shallow(<NestedCondition />);
      wrapperApp.setState({ isLoggedIn: true, isAdmin: true });
      expect(
        wrapperApp.contains([<p>Welcome, user!</p>, <p>You are an admin.</p>])
      ).toBe(true);
    });

    then("render the handleclick", () => {
      wrapperApp = shallow(<NestedCondition />);
      wrapperApp.find("#button").simulate("click");
      expect(wrapperApp.state()).toEqual({
        isLoggedIn: true,
        isAdmin: true,
        role: "basic",
      });
      expect(
        wrapperApp.contains([<p>Welcome, user!</p>, <p>You are an admin.</p>])
      ).toBe(true);
    });

    then("render the admin button", () => {
        wrapperApp = shallow(<NestedCondition />);
        wrapperApp.setState({ isLoggedIn: true, isAdmin: true });
        wrapperApp.find("#admin").simulate("click");
        expect(wrapperApp.state()).toEqual({
          isLoggedIn: true,
          isAdmin: true,
          role: "admin",
        });
        // expect(
        //   wrapperApp.contains([<p>Welcome, user!</p>, <p>You are an admin.</p>])
        // ).toBe(true);
      });
  });
});
