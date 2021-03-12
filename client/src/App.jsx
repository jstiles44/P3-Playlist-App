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


function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  })

  const clearUser = () => setUser(null)
  return (
    <div className="App">
      {loading ? (<div className="main-loading-container">
              <div className="loading-logo">SongsU</div>
            </div>) :
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/sign-up">
            <SignUp setUser={setUser} />
          </Route>
          <Route exact path="/sign-in">
            <SignIn setUser={setUser} />
          </Route>
          <Route exact path="/sign-out">
            <SignOut setUser={setUser} clearUser={clearUser} />
          </Route>
          <Route exact path="/explore">
            <Explore user={user} />
          </Route>
          <Route exact path="/explore/:id">
            <Details user={user} setUser={setUser} />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} setUser={setUser}/>
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
