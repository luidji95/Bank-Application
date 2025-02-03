import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashHeader from "./DashHeader";
import RequestMoneyForm from "./RequestMoneyForm";
import SendMoneyForm from "./SendMoneyForm";

const Dashboard = () => {
  const [showSendForm, setShowSendForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleRequestClick = () => {
    setShowRequestForm(true);
  };

  const handleSendClick = () => {
    setShowSendForm(true);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

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
            <button onClick={handleSendClick}>Send</button>
            <button onClick={handleRequestClick}>Request</button>
          </div>
        </div>

        <div className="transaction-income-expense">
          <div className="transaction">
            <h3>Recent Transactions</h3>
            <ul className="transaction-list">
              {currentUser.transactions.map((transaction, index) => (
                <li key={index} className="transaction-item">
                  <span className="transaction-reason">
                    {transaction.reason}
                  </span>
                  <span
                    className={`transaction-amount ${
                      transaction.amount < 0 ? "negative" : "positive"
                    }`}
                  >
                    ${transaction.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="income-expense">
            <div className="income">
              <h3>💰 Current Balance</h3>
              <p>${currentUser.balance}</p>
            </div>
            <div className="expense">
              <h3>📉 Total Expenses</h3>
              <p>
                $
                {Math.abs(
                  currentUser.transactions
                    .filter((transaction) => transaction.amount < 0)
                    .reduce((acc, transaction) => acc + transaction.amount, 0)
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {showRequestForm && (
        <RequestMoneyForm setShowRequestForm={setShowRequestForm} />
      )}
      {showSendForm && <SendMoneyForm setShowSendForm={setShowSendForm} />}
    </div>
  );
};

export default Dashboard;
