import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function BookAppointment() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    alert("Login successful!");
    navigate("/profile");   // ✅ go to Profile, not BookSlot
  } else {
    alert("No account found. Please create one.");
    navigate("/create-account");
  }
};

  return (
    <div  style={{
    backgroundImage: "url('/hospital-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    paddingTop: "100px"   // ✅ pushes content below navbar
  }}
>
    <div className="container" style={{ marginTop: "100px", maxWidth: "500px" }}>
      <h3>Login to Book Appointment</h3>
      <form onSubmit={handleLogin}>
        <input type="email" className="form-control mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">
        Don’t have an account? <Link to="/create-account">Create Account</Link>
      </p>
    </div>
    </div>
  );
}

export default BookAppointment;