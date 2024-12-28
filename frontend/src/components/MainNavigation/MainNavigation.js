// MainNavigation.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { AiFillHome, AiFillPicture } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";

const MainNavigation = () => {


  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const LogoutHandler = () => {
    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Display logout success toast
    toast.success('Logout successful!');

    // Perform logout
    signOut();

    // Navigate to the home page
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom px-5">
          <NavLink to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-4 fw-bold">
            <img src="assetImages/icon.png" alt="logo img" width="100" />
          </NavLink>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" className="nav-link px-2 link-secondary">Home</NavLink></li>
            <li><NavLink to="/gallery" className="nav-link px-2 link-dark">Videos</NavLink></li>
            {isAuthenticated() && (
              <li><NavLink to="/profile" className="nav-link px-2 link-dark">Profile</NavLink></li>
            )}
          </ul>

          <div className="col-md-3 text-end">
            {!isAuthenticated() ? (
              <>
                <a href="login" className="btn btn-outline-primary me-2">
                  <FaSignInAlt /> Login
                </a>
                <a href="register" className="btn btn-primary">
                  <FaUserPlus /> Register
                </a>
              </>
            ) : (
              <button className="btn btn-primary" onClick={LogoutHandler}>
                <FaSignOutAlt /> Logout
              </button>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default MainNavigation;