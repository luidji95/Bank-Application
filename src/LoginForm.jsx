import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./Redux/Slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

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
      <p className="pte">Don't have an account?</p>
      <Link className="cta" to={"/registration"}>
        Sign up
      </Link>
    </form>
  );
}

export default LoginForm;
