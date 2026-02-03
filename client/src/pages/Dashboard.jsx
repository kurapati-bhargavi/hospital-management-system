function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user || !user.appointments.length) {
    return <div className="container mt-5"><h4>No appointments scheduled</h4></div>;
  }

  return (
    <div className="container" style={{ marginTop: "100px", maxWidth: "600px" }}>
      <h3>Your Appointments</h3>
      <ul className="list-group">
        {user.appointments.map((appt, index) => (
          <li key={index} className="list-group-item">
            <strong>Date:</strong> {appt.date} | <strong>Doctor:</strong> {appt.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;