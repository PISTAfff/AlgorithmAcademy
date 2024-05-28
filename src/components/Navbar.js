import "../styles/components/navbar.css";
import React, { useState } from "react";
import Logo from "./Logo";
import Infobar from "./Infobar";
function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [ProfileMenuState, setProfileMenuState] = useState(false);
  return (
    <>
      <div className="navbar-main-container">
        <a href="/" className="navbar-logo-container">
          <Logo Name="logo" />
          <h1 className="navbar-logo-text">Algorithm Academy</h1>
        </a>
        <ul className="navbar-categories">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Networking">Networking</a>
          </li>
          <li>
            <a href="/Programming">Programming</a>
          </li>
          <li>
            <a href="/Cyber_Security">Cyber Security</a>
          </li>
          <li>
            <a className="ai-container" href="/Artifitial_Intelligence">
              AI
            </a>
          </li>
          <li>
            <a href="/Computer_Science">Computer Science</a>
          </li>
        </ul>
        <div className="navbar-buttons-section">
          <div
            className={
              (menuState && "navbar-opu") +
              " navbar-open-up-menu-main-container"
            }
          >
            <div
              className="navbar-open-up-menu"
              onClick={() => {
                setMenuState((preVal) => !preVal);
                setProfileMenuState(menuState && false);
              }}
            >
              <svg
                className={
                  (menuState ? "navbar-menu-opened" : "navbar-menu-closed") +
                  " navbar-open-up-menu-icon"
                }
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="92"
                viewBox="0 0 92 92"
                id="menu"
              >
                <path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"></path>
              </svg>
            </div>

            <div
              className={
                (menuState ? "open" : "close") +
                " navbar-open-up-menu-container"
              }
            >
              <ul className="navbar-menu-categories">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Networking">Networking</a>
                </li>
                <li>
                  <a href="/Programming">Programming</a>
                </li>
                <li>
                  <a href="/Cyber_Security">Cyber Security</a>
                </li>
                <li>
                  <a href="/Artifitial_Intelligence">AI</a>
                </li>
                <li>
                  <a href="/Computer_Science">Computer Science</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-profile-container">
            <div className="navbar-profile-container-pic">
              <svg
                onClick={() => {
                  setProfileMenuState((preVal) => !preVal);
                  setMenuState(menuState && false);
                }}
                className={
                  (ProfileMenuState
                    ? "navbar-profile-opened"
                    : "navbar-profile-closed") + " navbar-arrow-profile"
                }
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 64 64"
                viewBox="0 0 64 64"
                id="arrow"
              >
                <path
                  fill="#134563"
                  d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
                  transform="translate(237 335)"
                ></path>
              </svg>
              <div
                className={
                  (ProfileMenuState
                    ? "navbar-profile-opened"
                    : "navbar-profile-closed") + " navbar-profile-menu"
                }
              >
                <ul className="navbar-profile-menu-list">
                  <li>
                    <a href="/Login">Login</a>
                  </li>
                  <li>
                    <a href="/Register">Register</a>
                  </li>
                  <li>
                    <a href="/Settings/Themes">Theme</a>
                  </li>
                  <li>
                    <a href="/Settings/Language">Language</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infobar />
    </>
  );
}
export default Navbar;
