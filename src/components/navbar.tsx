import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { signOut } from "firebase/auth";
import "./navbar.css";
export const Navbar = () => {
  const [user] = useAuthState(auth);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = async () => {
    // Add sign-out logic here
    console.log("User signed out");
    await signOut(auth);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          MySite
        </a>
        <div
          className={`menu-icon ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-links">
              Login
            </a>
          </li>
        </ul>
        <div className="user-info">
          {user && (
            <>
              <span className="username">{user?.displayName}</span>
              <img
                src={user?.photoURL || ""}
                alt="User"
                className="user-avatar"
              />
              <button className="logout-button" onClick={handleSignOut}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>

    // <div>
    //   <Link to="/">Home</Link>
    //   <Link to="/login">Login</Link>

    //   <div>
    //     <p>{user?.displayName}</p>
    //     <img
    //       src={user?.photoURL || ""}
    //       width="50"
    //       height="50"
    //     ></img>
    //   </div>
    // </div>
  );
};
