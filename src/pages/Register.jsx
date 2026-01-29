// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.name}`);
    navigate("/login");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        
        {/* Left side animation/image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
          <img 
            src="/register-animation.gif" 
            alt="Register Animation" 
            style={{ maxWidth: "80%", height: "auto" }} 
          />
        </div>

        {/* Right side form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card p-4 shadow" style={{ width: "500px" }}>
            <h2 className="text-center mb-4">Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Full Name</label>
                <input name="name" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Email ID</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <input type="tel" name="phone" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Gender</label>
                <select name="gender" className="form-select" onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Date of Birth</label>
                <input type="date" name="dob" className="form-control" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Address</label>
                <textarea name="address" className="form-control" onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;