import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashHeader from "./DashHeader";
import BalanceSection from "./BalanceSection";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="dashboard">
      <DashHeader />
      <div className="dash-main">
        <div className="total-balance-dash">
          <div className="total">
            <p className="total-balance-p">Total Balance</p>
            <p className="balance">${currentUser.balance}</p>
          </div>
          <div className="income-expense-adding-btn">
            <button>Add</button>
            <button>Send</button>
            <button>Request</button>
          </div>
        </div>
        <div className="transaction-income-expense">
          <div className="transaction">
            [Transactions will be displayed here]
          </div>
          <div className="income-expense"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
