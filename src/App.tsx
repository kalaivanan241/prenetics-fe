import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "./components/SignupForm";
import UserDetails from "./components/UserDetails";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetailScreen from "./pages/UserDetailScreen";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signin" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route component={UserDetailScreen} path="/" exact />
          <Route />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
