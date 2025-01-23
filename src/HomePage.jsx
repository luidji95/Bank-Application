import React from "react";

const HomePage = ({ handleAccount }) => {
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
        <button className="cta" onClick={handleAccount}>
          Log in
        </button>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h1>Let some elegance into your finance</h1>
          <p>
            Simplify your financial journey with us. Join today and experience
            hassle-free banking.
          </p>
          <button onClick={handleAccount}>Open an Account</button>
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
