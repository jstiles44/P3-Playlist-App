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
import Create from './screens/Create/Create.jsx'
import { getPlaylist } from "./services/users"


function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
      const response = await getPlaylist(user.id)
      setPlaylist(response)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },)

  const clearUser = () => {
    setUser(null)
    setPlaylist(null)
    localStorage.clear()
  }
  return (
    <div className="App">
      {loading ? (<div className="main-loading-container">
              <div className="loading-logo">SongsYOÜ</div>
            </div>) :
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/sign-up">
            <SignUp setUser={setUser} setPlaylist={setPlaylist}/>
          </Route>
          <Route exact path="/sign-in">
            <SignIn setUser={setUser} setPlaylist={setPlaylist}/>
          </Route>
          <Route exact path="/sign-out">
            <SignOut setUser={setUser} clearUser={clearUser} />
          </Route>
          <Route exact path="/explore">
            <Explore user={user} />
          </Route>
          <Route exact path="/explore/:id">
            {user ? <Details user={user} setPlaylist={setPlaylist} playlist={playlist}/> : <Redirect to="/sign-up" />}
          </Route>
          <Route exact path="/profile">
            {user ? <Profile user={user} setPlaylist={setPlaylist} playlist={playlist}/> : <div className="loading-container-api-profile">Loading Playlist
        <div className="loader-api"></div>
      </div>}
          </Route>
          {/* <Route exact path="/create">
            {user ? <Create user={user} setUser={setUser}/> : <Redirect to="/sign-up" />}
          </Route> */}
        </Switch>
      }
    </div>
  );
}

export default App;
