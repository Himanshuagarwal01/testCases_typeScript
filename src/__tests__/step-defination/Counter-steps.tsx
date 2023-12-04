import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import Counter from "../../Counter";
const feature = loadFeature("./src/__tests__/feature/Counter.feature");

defineFeature(feature, (test) => {
  test("Counter Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: Counter;

    given("Counter given load", () => {
      wrapperApp = shallow(<Counter />);  
      expect(wrapperApp.exists()).toBeTruthy();
    });
    when("Counter when load", () => {
      instance = wrapperApp.instance() as Counter;
      expect(wrapperApp.exists()).toBeTruthy();
    });
    then("increment the count", () => {
      wrapperApp.find('.increment').simulate('click');
      expect(instance.state.count).toBe(1);
    });
    then("decrement the count", () => {
      wrapperApp.find(".decrement").simulate("click");
      expect(instance.state.count).toBe(0);
    });
  });
});
