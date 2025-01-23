import React from "react";

const DashHeader = ({ user }) => {
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
        <p>Hi {user.username}!</p>
        <div className="user-picture">
          <img src={user.profilePicture} alt="User" />
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
