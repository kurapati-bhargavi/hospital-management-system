// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${formData.email}`);
    navigate("/book");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        
        {/* Left side animation/image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
          {/* Example: hospital illustration or animation */}
          <img 
            src="/hospital-animation.gif" 
            alt="Hospital Animation" 
            style={{ maxWidth: "80%", height: "auto" }} 
          />
        </div>

        {/* Right side form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card p-4 shadow" style={{ width: "400px" }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Email ID</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="mt-3 text-center">
              Don’t have an account? <Link to="/register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;