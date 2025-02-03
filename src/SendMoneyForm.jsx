import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMoney } from "./Redux/Slices/userSlice";

const SendMoneyForm = ({ setShowSendForm }) => {
  const [sendAmount, setSendAmount] = useState("");
  const [recipientAccount, setRecipientAccount] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleSendSubmit = (e) => {
    e.preventDefault();

    const amount = parseFloat(sendAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    dispatch(sendMoney({ amount, recipientAccount }));
    setShowSendForm(false);
  };

  return (
    <div className="request-form-overlay">
      <div className="request-form">
        <h3>Send Money</h3>
        <form onSubmit={handleSendSubmit}>
          <label>Amount:</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            required
          />

          <label>Recipient Account Number:</label>
          <input
            type="text"
            placeholder="Enter recipient account number"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            required
          />

          <button type="submit">Send</button>
          <button type="button" onClick={() => setShowSendForm(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMoneyForm;
