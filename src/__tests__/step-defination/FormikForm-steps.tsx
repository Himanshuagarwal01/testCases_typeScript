import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import Formikform from "../../Formikform";
const feature = loadFeature("./src/__tests__/feature/FormikForm.feature");

defineFeature(feature, (test) => {
  test("FormikForm Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: Formikform;

    given("FormikForm given load", () => {
      wrapperApp = shallow(<Formikform />);
      expect(wrapperApp.exists()).toBeTruthy();
    });

    when("FormikForm when load", () => {
      instance = wrapperApp.instance() as Formikform;
      expect(wrapperApp.exists()).toBeTruthy();
    });
    then("render the component with valid values", () => {
      wrapperApp = shallow(<Formikform />);
      wrapperApp
        .find("#email1")
        .simulate("change", { target: { value: "test@gmail.com" } });
      wrapperApp
        .find("#password1")
        .simulate("change", { target: { value: "12345" } });

      wrapperApp.find("#submit").simulate("submit");
      const resetFormMock = jest.fn();
      const formikTest = wrapperApp.findWhere(
        (node) => node.prop("data-testid") === "formiktest"
      );
      expect(
        instance.handleSubmit(
          { email: "test@gmail.com", password: "12345" },
          { resetForm: resetFormMock }
        )
      ).toEqual({ email: "test@gmail.com", password: "12345" });
      expect(instance.state.submitValues).toEqual({
        email: "test@gmail.com",
        password: "12345",
      });
      expect(formikTest.exists()).toBeTruthy();
    });

    // then("render the component with invalid values", () => {
    //   const mockSubmit = jest.fn();
    //   wrapperApp = shallow(<Formikform handleSubmit={mockSubmit} />);
    //   wrapperApp
    //     .find('[name="email"]')
    //     .simulate("change", { target: { value: "" } });
    //   wrapperApp
    //     .find('[name="password"]')
    //     .simulate("change", { target: { value: "" } });
    //   wrapperApp.setProps({ email: "ytest", password: "" });
    //   console.log("mock1", mockSubmit);
    //   wrapperApp.find('[name="password"]').simulate("submit");

    //   expect(jest.fn()).not.toBeCalled();
    // });
  });
});
