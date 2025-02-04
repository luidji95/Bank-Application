import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "./Redux/Slices/userSlice";

const RequestMoneyForm = ({ setShowRequestForm }) => {
  const [requestedAmount, setRequestedAmount] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleRequestSubmit = (e) => {
    e.preventDefault();

    if (password !== currentUser.password) {
      alert("Incorrect password!");
      return;
    }

    const amount = parseFloat(requestedAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    dispatch(addIncome({ amount, reason: "Requested Funds" }));
    alert(`Successfully requested $${amount}!`);

    setShowRequestForm(false);
  };

  return (
    <div className="request-form-overlay">
      <div className="request-form">
        <h3>Request Money</h3>
        <form onSubmit={handleRequestSubmit}>
          <label>Amount:</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={requestedAmount}
            onChange={(e) => setRequestedAmount(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Request</button>
          <button type="button" onClick={() => setShowRequestForm(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestMoneyForm;
