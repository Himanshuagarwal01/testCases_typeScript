import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import Mocc from "../../Mocc";
import * as math from "../../Math";
const feature = loadFeature("./src/__tests__/feature/Mocc.feature");

// let mockmulttiply = undefined;
jest.mock("../../Math", () => {
  return {
    ...jest.requireActual("../../Math"),
    add: jest.fn(),
  };
});

defineFeature(feature, (test) => {
  test("Mocc Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: Mocc;
    given("Mocc given load", () => {
      wrapperApp = shallow(<Mocc />);
      expect(wrapperApp.exists()).toBeTruthy();
    });
    when("Mocc when load", () => {
      instance = wrapperApp.instance() as Mocc;
      expect(wrapperApp.exists()).toBeTruthy();
    });
    then("render the multiply in the mock", () => {
      // math.add.mockImplementation(()=>25)
      console.log(math.add(12, 1));
      console.log(math.subtract(12, 1));
      console.log(math.multiply(12, 1));
    });
  });
});
