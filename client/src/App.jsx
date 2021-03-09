import './App.css';
import Details from "./screens/Details/Details"
import Explore from "./screens/Explore/Explore"
import Home from "./screens/Home/Home"
import Profile from "./screens/Profile/Profile"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"
import SignOut from "./screens/SignOut/SignOut"
import { verifyUser } from './services/users'
import { Route, Switch, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"
import { verifyUser } from './services/users'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp user={user} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn user={user} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut user={user} />
        </Route>
        <Route exact path="/explore">
          <Explore user={user} />
        </Route>
        <Route exact path="/explore/:id">
          <Details user={user} />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
