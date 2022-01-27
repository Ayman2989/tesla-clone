import React, { useEffect } from "react";

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
import { login, logout, selectUser } from "./features/userSlice";
import TeslaAccount from "./components/teslaaccount/TeslaAccount";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
            {!user ? <Login /> : <TeslaAccount />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
