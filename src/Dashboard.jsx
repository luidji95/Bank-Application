import React from "react";
import DashHeader from "./DashHeader";
import BalanceSection from "./BalanceSection";
import TransactionList from "./TransactionList";
import IncomeExpenseForm from "./IncomeExpenseForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <DashHeader />
      <BalanceSection />
      <div className="dashboard-content">
        <IncomeExpenseForm />
        <TransactionList />
      </div> */}
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
