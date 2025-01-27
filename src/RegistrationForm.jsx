// RegistrationForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registrationUser } from "./Redux/Slices/userSlice";

function RegistrationForm({ onSuccess }) {
  const dispatch = useDispatch();
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationUserName, setRegistrationUserName] = useState("");
  const [registrationConfirmPassword, setRegistrationConfirmPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registrationPassword !== registrationConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!registrationEmail.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    if (registrationPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    dispatch(
      registrationUser({
        email: registrationEmail,
        password: registrationPassword,
        username: registrationUserName,
      })
    );

    alert("Registration successful! Please log in.");
    onSuccess(); // Poziva se kada je registracija uspešna
  };

  return (
    <form className="form-section active" onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Unesite korisničko ime"
          value={registrationUserName}
          onChange={(e) => setRegistrationUserName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Unesite email"
          value={registrationEmail}
          onChange={(e) => setRegistrationEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Unesite lozinku"
          value={registrationPassword}
          onChange={(e) => setRegistrationPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Potvrdite lozinku"
          value={registrationConfirmPassword}
          onChange={(e) => setRegistrationConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">
        Create Account
      </button>
    </form>
  );
}

export default RegistrationForm;
