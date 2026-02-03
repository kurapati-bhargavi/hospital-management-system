import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
  e.preventDefault();
  const user = { name, email, password, appointments: [] };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Account created successfully!");
  navigate("/profile");   // ✅ go to Profile
};

  return (
    <div className="container" style={{ marginTop: "100px", maxWidth: "500px" }}>
      <h3>Create Account</h3>
      <form onSubmit={handleRegister}>
        <input type="text" className="form-control mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" className="form-control mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default CreateAccount;