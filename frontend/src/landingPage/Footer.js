import { Link } from "react-router-dom";
import "./Footer.css";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`container pt-5 border-top footer-${theme}`}>
      <div className="row">

        {/* ACCOUNT */}
        <div className="col-12 col-md-3 mb-4">
          <h5 className="fw-semibold mb-3 footer-heading">Account</h5>
          <ul className="list-unstyled">
            <li><Link to="#" className="footer-links">Open demat account</Link></li>
            <li><Link to="#" className="footer-links">Minor demat account</Link></li>
            <li><Link to="#" className="footer-links">NRI demat account</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="col-12 col-md-3 mb-4">
          <h5 className="fw-semibold mb-3 footer-heading">Support</h5>
          <ul className="list-unstyled">
            <li><Link to="#" className="footer-links">Contact us</Link></li>
            <li><Link to="#" className="footer-links">Support portal</Link></li>
            <li><Link to="#" className="footer-links">How to file a complaint?</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="col-12 col-md-3 mb-4">
          <h5 className="fw-semibold mb-3 footer-heading">Company</h5>
          <ul className="list-unstyled">
            <li><Link to="#" className="footer-links">About</Link></li>
            <li><Link to="#" className="footer-links">Philosophy</Link></li>
            <li><Link to="#" className="footer-links">Press & media</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="col-12 col-md-3 mb-4">
          <h5 className="fw-semibold mb-3 footer-heading">Quick links</h5>
          <ul className="list-unstyled">
            <li><Link to="#" className="footer-links">Upcoming IPOs</Link></li>
            <li><Link to="#" className="footer-links">Brokerage charges</Link></li>
            <li><Link to="#" className="footer-links">Market holidays</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
