import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
