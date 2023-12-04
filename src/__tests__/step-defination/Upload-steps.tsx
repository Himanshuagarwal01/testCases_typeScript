import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import Upload from "../../Upload";
import Open from "../../Open";
import Close from "../../Close";
const feature = loadFeature("./src/__tests__/feature/Upload.feature");

defineFeature(feature, (test) => {
  test("Upload Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: Upload;
    given("Upload given load", () => {
      wrapperApp = shallow(<Upload />);
      expect(wrapperApp.exists()).toBeTruthy();
    });

    when("Upload when load", () => {
      wrapperApp = shallow(<Upload />);
      expect(wrapperApp.exists()).toBeTruthy();
    });

    then("display open page", () => {
      const wrapper: ShallowWrapper = shallow(<Upload condition={true} />);
      expect(wrapper.find(Open)).toBeTruthy();
    });

    then("display close page", () => {
      const wrapper: ShallowWrapper = shallow(<Upload condition={false} />);
      expect(wrapper.find(Close)).toBeTruthy();
    });

    then("without condition", () => {
      const wrapper: ShallowWrapper = shallow(<Upload />);
      expect(wrapper.find(Close)).toHaveLength(1);
    });

    then("page heading", () => {
      const wrapper: ShallowWrapper = shallow(<Upload />);
      expect(wrapper.find(Open)).toBeTruthy();
      expect(wrapper.find("h1").text()).toEqual("this is the upload page");
    });
  });
});
