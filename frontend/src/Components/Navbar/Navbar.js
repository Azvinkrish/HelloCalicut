import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import {logoutUserAction} from '../../redux/Features/slices/userSlice'

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const dispatch = useDispatch()

  

  const { userAuth } = useSelector((store) => store?.users);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar bg-gradient-to-r from-black to-blue-500">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="/images/logo_nav.png"
              alt="logo.png"
              className="navbar-img"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Read" className="nav-links" onClick={closeMobileMenu}>
                READ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/authors" className="nav-links" onClick={closeMobileMenu}>
                AUTHORS
              </Link>
            </li>
            {!userAuth ? (
              <>
                <li>
                  <Link
                    to="/register"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
          {!userAuth ? (
            <>
              {button && (
                <Button buttonStyle="btn--outline" path="/register">
                  SIGNUP
                </Button>
              )}
              <div className="m-5"> </div>
              {button && (
                <Button buttonStyle="btn--outline" path="/login">
                  LOGIN
                </Button>
              )}
            </>
          ) : (
            <>
              {button && (
                <Button buttonStyle="btn--outline" onClick={()=> dispatch(logoutUserAction())} >
                  LOGOUT
                </Button>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
