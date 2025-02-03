import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./Redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";

const DashHeader = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); // Resetuje korisnika u Redux-u
    navigate("/login"); // Prebacuje korisnika nazad na Login stranicu
  };

  return (
    <header className="dash-header">
      <div className="logo-search">
        <div className="header-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
          />
        </div>
        <div className="search-wrapper">
          <div className="input-with-icon">
            <input
              className="search-bar"
              type="text"
              placeholder="Search payment"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>

      <div className="user-info">
        <p>Hi {currentUser?.username}!</p>
        <div
          className="user-picture"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <img src={currentUser?.profilePicture} alt="User" />
          {menuOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li onClick={handleLogout}>Logout</li> {/* Dodajemo logout */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
