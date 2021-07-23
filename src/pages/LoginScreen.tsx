import React from "react";
import { AuthContext } from "../components/AuthProvider/AuthContext";
import LoginForm from "../components/LoginForm";

const LoginScreen: React.FC = () => {
  const { login, loading } = React.useContext(AuthContext);
  const handleLogin = async (data: any) => {
    if (login) {
      await login(data);
    }
  };
  return (
    <div>
      <LoginForm handleLogin={handleLogin} loading={loading} />
    </div>
  );
};

export default LoginScreen;
