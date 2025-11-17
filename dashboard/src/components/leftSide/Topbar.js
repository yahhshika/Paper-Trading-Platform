/* global bootstrap */

// NOTE:
// Do NOT use useState() to track the active menu item.
// The Topbar component unmounts and remounts on every route change,
// which causes useState to reset to its initial value.
// This leads to incorrect or “flashing” highlights inside the offcanvas,
// especially during the Bootstrap animation.
//
// Instead, we use useLocation() because it always reflects the current URL
// and does NOT reset on remount. This ensures the correct menu item is
// highlighted instantly and consistently.

import { Link, useLocation } from "react-router-dom";
function Topbar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  }

  // offcanvas has to be edited manually as it's default function is to close the menu-pop-up but it doesnt allows the new route to exectue as internally it calls preventsDefaul(). 
  const closeOffcanvas = () => {
    const el = document.getElementById("offcanvasNavbar");
    const offcanvas = bootstrap.Offcanvas.getInstance(el); // <-- global bootstrap
    offcanvas.hide();
  };

  return (<nav className="navbar bg-body-tertiary border-end">
    <div className="container-fluid">
      <Link className="navbar-brand p-0" to="#"><img src="media/images/logo6.svg" style={{ width: "35%" }} alt="logo" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/dashboard") ? "color-red" : ""}`} to="/dashboard" onClick={closeOffcanvas}>Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/positions") ? "color-red" : ""}`} to="/positions" onClick={closeOffcanvas}>Positions</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/funds") ? "color-red" : ""}`} aria-current="page" to="/funds" onClick={closeOffcanvas}>Funds</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/holdings") ? "color-red" : ""}`} to="/holdings" onClick={closeOffcanvas}>Holdings</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/orders") ? "color-red" : ""}`} to="/orders" onClick={closeOffcanvas}>Orders</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle border p-2 rounded" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "fit-content" }}>
                <i class="fa-solid fa-user"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>);
}

export default Topbar;