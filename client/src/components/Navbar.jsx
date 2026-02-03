import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "black" }}>
      <div className="container"style={{ maxWidth: "900px" }}>
        {/* Logo on left */}
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png"
            alt="VitaCare Hospital Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links on right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/" style={{ color: "gold" }}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" style={{ color: "gold" }}>About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services" style={{ color: "gold" }}>Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact" style={{ color: "gold" }}>Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/book"style={{ color: "gold" }}>Book Appointment</Link></li>
            {user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="bi bi-person-circle" style={{ fontSize: "20px", color: "gold" }}></i>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;