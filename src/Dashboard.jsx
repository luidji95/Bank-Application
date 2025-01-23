import React from "react";
import DashHeader from "./DashHeader";

const Dashboard = ({ user }) => {
  return (
    <div>
      <DashHeader user={user} />
      <div className="dash-container">
        <div className="dash-navigation">
          <button className="nav-btn">
            <span className="nav-icon">🏠</span>
          </button>
          <button className="nav-btn">
            <span className="nav-icon">📁</span>
          </button>
          <button className="nav-btn">
            <span className="nav-icon">💳</span>
          </button>
          <button className="nav-btn">
            <span className="nav-icon">⚙️</span>
          </button>
          <p className="logout">Log out</p>
        </div>
        <div className="dash-main">
          <h1> My Dashboard</h1>
          <div className="dashboard-options">
            <button className="dash-btn-options">All</button>
            <button className="dash-btn-options">Add income</button>
            <button className="dash-btn-options">Payment</button>
          </div>
        </div>
        <div className="dash-card-info">
          <p>My Card</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
