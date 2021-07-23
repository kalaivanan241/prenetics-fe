import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthContext";
import SignupForm, { ISignupFormData } from "../components/SignupForm";
import useApi from "../hooks/useApi";
import { signUpUser } from "../services/authService";

const SignupScreen = () => {
  const { data, loading, error, request } = useApi(signUpUser);
  const { login } = useContext(AuthContext);

  const handleRegister = async (data: ISignupFormData) => {
    const response = await request(data);
    if (!response.ok) {
    } else {
      if (login) {
        login({ email: data.email, password: data.password });
      }
    }
  };

  return (
    <div>
      <SignupForm handleSignUp={handleRegister} disabled={loading} />
    </div>
  );
};

export default SignupScreen;
