import { Link } from "react-router-dom";

function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return <div className="container mt-5"><h4>No user logged in</h4></div>;

  return (
    <div className="container" style={{ marginTop: "100px", maxWidth: "600px" }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      {/* ✅ Buttons */}
      <div className="mt-3">
        <Link to="/book-slot" className="btn btn-primary me-2">Book Slot</Link>
        <Link to="/dashboard" className="btn btn-success">Dashboard</Link>
      </div>
    </div>
  );
}

export default UserProfile;