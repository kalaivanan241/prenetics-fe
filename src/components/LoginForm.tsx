import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import TextField from "./TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export interface LoginFormProps {
  handleLogin: (data: any) => void;
  loading: boolean;
  errors?: any;
}

export interface SignInData {
  email: string;
  password: string;
}

const initialSigninData: SignInData = {
  email: "",
  password: "",
};

const LoginForm: React.FC<LoginFormProps> = ({
  handleLogin,
  loading,
  errors,
}) => {
  const onSubmitData = (data: SignInData) => {
    handleLogin(data);
  };

  const history = useHistory();
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center pb-2">Login</Card.Title>
        <Formik
          validateOnChange={false}
          initialValues={initialSigninData}
          validationSchema={schema}
          onSubmit={(data) => onSubmitData(data)}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="email"
                label="Email"
                required
                placeholder={"Enter Username"}
                disabled={false}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                required
                placeholder={"password"}
                disabled={false}
              />
              <div className="d-grid gap-2">
                <Button
                  variant={"primary"}
                  type="submit"
                  className="m-1"
                  size="lg"
                >
                  Login
                </Button>
              </div>
              New user?{" "}
              <Button
                variant="link"
                type="button"
                disabled={false}
                onClick={() => history.push("/signup")}
              >
                Signup
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
