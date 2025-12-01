import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css"
function AboutPage() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="media/images/graphGIF2.gif"
            alt="Trading illustration"
            className="img-fluid"
          />

        </div>


        {/* Right Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3 gradient-text">About Our Paper Trading Platform</h2>
          <p >
             Our platform gives you a real market trading experience using
            <strong> virtual money</strong>. Practice, learn, and experiment with your
            strategies without taking any financial risks.
          </p>

          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Real-time market data
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Virtual money to practice safely
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Track your portfolio performance
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Test multiple trading strategies
            </li>
          </ul>

          <Link className="btn btn-success px-4 mt-3" to={"/"}>
            Start Trading
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;
