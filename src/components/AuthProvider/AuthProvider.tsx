import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { getUser, loginUser } from "../../services/authService";
import { getToken, removeToken, storeToken } from "../../utils/storage";
import { SignInData } from "../LoginForm";
import { AuthContext } from "./AuthContext";

export const authKey = "auth_user";

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(getToken());
  const loginApi = useApi(loginUser);
  const userApi = useApi(getUser);
  const history = useHistory();

  useEffect(() => {
    if (token && !user) {
      handleGetUser();
    }
  }, [token, user]);

  useEffect(() => {
    if (!user) {
      history.push("/signin");
    }
  }, [user]);

  const handleGetUser = async () => {
    try {
      const response = await userApi.request();
      if (!response.ok) {
        return false;
      }
      setUser(response.data);
      return true;
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleLogin = async (user: SignInData) => {
    try {
      console.log(user);
      let response = await loginApi.request(user);
      if (!response.ok) {
        return false;
      }
      setToken(response.data.token);
      storeToken(response.data.token);
      return true;
    } catch (err: any) {
      console.log(user);
      console.log(err.message);
    }
  };

  const handleLogout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: handleLogin,
        logout: handleLogout,
        loading: loginApi.loading || userApi.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
