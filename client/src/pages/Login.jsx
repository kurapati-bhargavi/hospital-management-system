<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Hospital Login</h2>

        <form className="auth-form">
          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
=======
import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
    </div>
  );
};

export default Login;
>>>>>>> 54b2a6d52fc6d099c3a23916265a20c50c3e1675
