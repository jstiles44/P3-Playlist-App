import './App.css';
import Details from "./screens/Details/Details"
import Explore from "./screens/Explore/Explore"
import Home from "./screens/Home/Home"
import Profile from "./screens/Profile/Profile"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"
import SignOut from "./screens/SignOut/SignOut"
import { Route, Switch, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-out">
          <SignOut />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/explore/:id">
          <Details />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
