import React from "react";
import { useDispatch } from "react-redux";
import { goToLogin } from "./Redux/Slices/userSlice";
import { Link } from "react-router";

{
  /* <Link to="/dashboard">Dashboard</Link>;

<Link
  to={{
    pathname: "/some/path",
    search: "?query=string",
    hash: "#hash",
  }}
/> */
}

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <div className="logo">Horizon</div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
          </ul>
        </nav>
        <Link className="cta" to="/login">
          Login
        </Link>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h1>Let some elegance into your finance</h1>
          <p>
            Simplify your financial journey with us. Join today and experience
            hassle-free banking.
          </p>
          <button onClick={() => dispatch(goToLogin())}>Open an Account</button>
        </div>
        <div className="hero-image">
          <img
            src="/bankimages/bankapp-images/app.png"
            alt="Phone"
            className="phone"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
