import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "./Redux/Slices/userSlice";

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const dispatch = useDispatch();

  const handleIncome = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount!");
      return;
    }
    dispatch(addIncome({ amount: parseFloat(amount), reason }));
    setAmount("");
    setReason("");
  };

  const handleExpense = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount!");
      return;
    }
    dispatch(addExpense({ amount: parseFloat(amount), reason }));
    setAmount("");
    setReason("");
  };

  return (
    <div className="income-expense-form">
      <h3>Add Income/Expense</h3>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <div className="buttons">
        <button onClick={handleIncome}>Add Income</button>
        <button onClick={handleExpense}>Add Expense</button>
      </div>
    </div>
  );
};

export default IncomeExpenseForm;
