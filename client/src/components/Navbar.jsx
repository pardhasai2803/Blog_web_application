import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const location = useLocation().search; // To make write disappear for users while editing a post.
  const edit=`/write${location}`;
  console.log(location);

  const destination = currentUser !== null ? "/write" : "/login"; //To make Nullusers go to login page if they attempt to write.
  const profile = currentUser !== null ? "/profile" : "/login";

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
        <Link to={profile}>
            <span>{currentUser?.username}</span>
          </Link>
          {currentUser?
           (<span onClick={logout}>Logout</span>)
            :  (<Link className="link" to="/login">
               Login</Link>
          )}
         {location.includes('edit') ? 
           (<span></span>) :
            (<span className="write">
            <Link className="link" to={destination}>
              Write
            </Link>
          </span>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;