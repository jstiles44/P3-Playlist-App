import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/profile">
      Profile
    </NavLink>
    {/* will be adding this back in at a later date once we have admin role set up. we would rather have the code commented out than deleted */}
    {/* <NavLink className='link' to='/create'>
      Submit A Song
    </NavLink> */}
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/explore">
      Explore
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">SongsYOÜ</NavLink>
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  )
}
export default Nav