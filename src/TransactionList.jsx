import React from "react";
import { useSelector } from "react-redux";

const TransactionList = () => {
  const transactions = useSelector(
    (state) => state.user.currentUser?.transactions || []
  );

  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions found!</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.reason}</span>
              <span>{transaction.amount} RSD</span>
              <span>{transaction.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
