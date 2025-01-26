import BalanceSection from "./BalanceSection";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <BalanceSection />
      {/* Dodaj ostale sekcije kao što su IncomeExpenseSection, TransactionList itd. */}
    </div>
  );
};

export default Dashboard;
