import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import { Formik } from "formik";
import * as Yup from "yup";

import TextField from "./TextField";
import { useHistory } from "react-router-dom";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Username is Required"),
  lastName: Yup.string().required("Username is Required"),
  email: Yup.string().required("Username is Required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords not must match"),
});

export interface ISignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

const initialFormData: ISignupFormData = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
};

export interface SignupFormProps {
  handleSignUp: (data: ISignupFormData) => void;
  disabled: boolean;
  errors?: any;
}

const SignupForm: React.FC<SignupFormProps> = ({
  handleSignUp,
  disabled,
  errors,
}) => {
  const handleSubmit = (data: ISignupFormData) => {
    handleSignUp(data);
  };

  const history = useHistory();
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center pb-2">Signup</Card.Title>
        <Formik
          validateOnChange={false}
          initialValues={initialFormData}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="firstName"
                label="First Name"
                required
                placeholder={"Enter First Name"}
              />
              <TextField
                type="text"
                name="lastName"
                label="Last Name"
                required
                placeholder={"Enter Last Name"}
              />
              <TextField
                type="date"
                name="dateOfBirth"
                label="Date Of Birth"
                required
                placeholder={"Enter Date of Birth"}
              />
              <TextField
                type="text"
                name="email"
                label="Email"
                required
                placeholder={"Enter Email"}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                required
                placeholder={"password"}
              />
              <TextField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                required
                placeholder={"Confirm Password"}
              />
              <div className="d-grid gap-2">
                <Button
                  variant={"primary"}
                  type="submit"
                  className="m-1"
                  disabled={false}
                  size="lg"
                >
                  Signup
                </Button>
              </div>
              Already have an account?{" "}
              <Button
                variant="link"
                type="button"
                className="m-1"
                onClick={() => history.push("/signin")}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default SignupForm;
