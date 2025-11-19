import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom sticky-top"
        style={{
          background:
            theme === "light"
              ? "rgba(0,0,0,0.8)"
              : "rgba(255,255,255,0.8)",
        }}
      >
        <div className="container-fluid mynav">
          <Link
            className="navbar-brand"
            to={"/"}
            style={{ color: theme === "light" ? "white" : "black" }}
          >
            <img src="media/images/logo.svg" className="w-25" alt="ZERODHA" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/signup"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/product"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/pricing"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/support"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  Support
                </Link>
              </li>


              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Courses"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  Learn
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/FAQ"
                  style={{ color: theme === "light" ? "white" : "black" }}
                >
                  FAQs
                </Link>
              </li>
            </ul>

            <button
              onClick={toggleTheme}
              className="btn btn-outline-secondary ms-2"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
