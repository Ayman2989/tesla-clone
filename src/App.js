import React from "react";

import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import TeslaAccount from "./components/teslaaccount/TeslaAccount";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/teslaaccount" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/teslaaccount">
            {user ? <TeslaAccount /> : <Redirect to={Login} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
