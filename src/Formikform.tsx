import { Button, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import * as Yup from "yup";
const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter the VALID Email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const initialValues = {
  email: "",
  password: "",
};
interface LoginForm {
  email: String;
  password: String;
}

interface State {
  submitValues: LoginForm | undefined;
}

export default class Formikform extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      submitValues: undefined,
    };
  }
  state = {
    submitValues: undefined,
  };

  handleSubmit = (values: any, {resetForm}:any) => {
    console.log(values);
    this.setState({
      submitValues: values,
    });
    resetForm();
    return values;
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginValidationSchema}
          data-testid="formiktest"
          onSubmit={this.handleSubmit}
        >
          <Form>
            <Stack
              sx={{
                alignItems: "center",
                mx: "auto",
                backgroundColor: "yellow",
                width: "50%",
                mt: 5,
                height: "35vh",
              }}
            >
              <Typography style={{ marginTop: "50px" }}>
                <b>LOGIN FORM </b>
              </Typography>
              <label htmlFor="email">Email:</label>
              <Field name="email" id="email1" label="Email" sx={{ m: 2 }} />
              <ErrorMessage name="email" id="email2" component="div" />
              <label htmlFor="password">Password:</label>
              <Field
                name="password"
                id="password1"
                label="Password"
                sx={{ m: 1 }}
              />
              <ErrorMessage name="password" component="div" />
              <Stack>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  id="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Formik>
      </div>
    );
  }
}
