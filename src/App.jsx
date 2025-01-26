import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";
import LoginRegistrationForm from "./LoginRegistrationForm";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

function App() {
  const isOnLoginPage = useSelector((state) => state.user.isOnLoginPage);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
