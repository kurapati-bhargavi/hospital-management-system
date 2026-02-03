function Footer() {
  return (
    <footer style={{ backgroundColor: "black", padding: "15px", color: "gold", textAlign: "center" }}>
      <div className="container">
        <p style={{ margin: 0, fontSize: "14px" }}>
          © {new Date().getFullYear()} VitaCare Hospital. All rights reserved.
        </p>
        <p style={{ margin: 0, fontSize: "12px" }}>
          Contact: info@vitacare.com | Phone: +91 98765 43210
        </p>
      </div>
    </footer>
  );
}

export default Footer;