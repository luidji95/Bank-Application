import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";
import LoginRegistrationForm from "./LoginRegistrationForm";
import Dashboard from "./Dashboard";

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const [loggedUser, setLoggedUser] = useState(false);

  const [accounts, setAccounts] = useState([
    {
      username: "Milos",
      eMail: "milos.petrovic09.95@gmail.com",
      password: "Milos12091995",
      userId: 1,
      profilePicture: "bank-profile-pic/picgit.JPG",
      transactions: [
        { reason: "Gas Station", amount: -500.0, date: "2024-07-02" },
        { reason: "Supermarket", amount: -12000.0, date: "2024-07-01" },
        { reason: "Bookstore", amount: -3000.0, date: "2024-06-30" },
      ],
      balance: 160000,
      cardNumber: 749578456612,
    },
    {
      username: "Jovana",
      eMail: "jovana.maric88@gmail.com",
      password: "Jovana19880516",
      userId: 2,
      profilePicture: "bank-profile-pic/profile.jpg",
      transactions: [
        { reason: "Rent", amount: -2000 },
        { reason: "Salary", amount: -12000 },
        { reason: "Shopping", amount: -14000 },
        { reason: "Car Payment", amount: -21345 },
      ],
      balance: 79000,
      cardNumber: 7394860395304045,
    },
    {
      username: "Stefan",
      eMail: "stefan.popovic78@gmail.com",
      password: "Stefan19781203",
      userId: 3,
      profilePicture: "bank-profile-pic/1-intro-photo-final.jpg",
      transactions: [
        { reason: "Coffee", amount: -300 },
        { reason: "Consulting", amount: -23000 },
        { reason: "Groceries", amount: -1400 },
        { reason: "Gym", amount: -10495 },
      ],
      balance: 115000,
      cardNumber: 452075692564,
    },
  ]);

  const handleUserAccount = () => {
    setDisplayForm(false);
  };

  const handleLogin = (email, password) => {
    const user = accounts.find(
      (acc) => acc.eMail === email && acc.password === password
    );
    if (user) {
      console.log("User logged in:", user);
      setLoggedUser(user);
    } else {
      alert("Wrong email or password!");
    }
  };

  return (
    <div className="main">
      {console.log("Logged user:", loggedUser, "Display form:", displayForm)}
      {loggedUser ? (
        <Dashboard user={loggedUser} />
      ) : displayForm ? (
        <HomePage handleAccount={handleUserAccount} />
      ) : (
        <LoginRegistrationForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
