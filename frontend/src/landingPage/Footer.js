import "./Footer.css"
import { Link } from "react-router-dom";
function Footer() {
    return (<footer class="container pt-5 border-top">
  <div class="row">


    <div class="col-12 col-md-3 mb-4">
      <h5 class="fw-semibold mb-3">Account</h5>
      <ul class="list-unstyled">
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Open demat account</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Minor demat account</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">NRI demat account</Link></li>

    

      </ul>
    </div>


    <div class="col-12 col-md-3 mb-4">
      <h5 class="fw-semibold mb-3">Support</h5>
      <ul class="list-unstyled">
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Contact us</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Support portal</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">How to file Link complaint?</Link></li>
      </ul>
    </div>


    <div class="col-12 col-md-3 mb-4">
      <h5 class="fw-semibold mb-3">Company</h5>
      <ul class="list-unstyled">
        <li><Link to="#" class="text-decoration-none text-muted footer-links">About</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Philosophy</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Press & media</Link></li>
      </ul>
    </div>


    <div class="col-12 col-md-3">
      <h5 class="fw-semibold mb-3">Quick links</h5>
      <ul class="list-unstyled">
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Upcoming IPOs</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Brokerage charges</Link></li>
        <li><Link to="#" class="text-decoration-none text-muted footer-links">Market holidays</Link></li>
     
      </ul>
    </div>

  </div>
</footer>
);
}

export default Footer;