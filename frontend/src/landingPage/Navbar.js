import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg border-bottom sticky-top ${
          theme === "light" ? "navbar-light-theme" : "navbar-dark-theme"
        }`}
      >
        <div className="container-fluid mynav">

          {/* ========= LOGO ========= */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <ShowChartIcon
              style={{
                fontSize: 32,
                color: theme === "light" ? "#1565C0" : "#64B5F6",
                marginRight: "8px",
              }}
            />
            <span
              className="brand-gradient"
              style={{
                fontSize: "26px",
                fontWeight: 700,
              }}
            >
              TradeGuru
            </span>
          </Link>

          {/* Mobile toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ========= LINKS ========= */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* ⭐ FIXED ALIGNMENT HERE ⭐ */}
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center"
              style={{ gap: "25px" }}
            >
              {["signup", "about", "product", "support", "courses", "faq"].map(
                (route) => (
                  <li className="nav-item" key={route}>
                    <Link className="nav-link nav-text" to={`/${route}`}>
                      {route.charAt(0).toUpperCase() + route.slice(1)}
                    </Link>
                  </li>
                )
              )}

              {/* ========= THEME BUTTON ========= */}
              <button
  onClick={toggleTheme}
  className="theme-toggle-btn ms-3"
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  }}
>
  {theme === "light" ? (
    <DarkModeIcon style={{ color: "#111", fontSize: 24 }} />
  ) : (
    <LightModeIcon style={{ color: "#FFD740", fontSize: 24 }} />
  )}
</button>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
