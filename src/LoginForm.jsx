import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./Redux/Slices/userSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: loginEmail, password: loginPassword }));
  };

  return (
    <form className="form-section active" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div className="form-group">
        <label htmlFor="loginEmail">Email</label>
        <input
          type="email"
          id="loginEmail"
          name="loginEmail"
          placeholder="Unesite email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          id="loginPassword"
          name="loginPassword"
          placeholder="Unesite lozinku"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
