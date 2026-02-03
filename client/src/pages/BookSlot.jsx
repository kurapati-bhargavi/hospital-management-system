import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookSlot() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const navigate = useNavigate();

const handleConfirm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const newAppointment = { date, doctor };
  user.appointments.push(newAppointment);
  localStorage.setItem("user", JSON.stringify(user));
  alert("Appointment confirmed!");
  navigate("/profile");   // ✅ return to Profile
};
  return (
    <div className="container" style={{ marginTop: "100px", maxWidth: "600px" }}>
      {step === 1 && (
        <div className="text-center">
          <h3>Book Slot</h3>
          <button className="btn btn-primary" onClick={() => setStep(2)}>Proceed</button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={(e) => { e.preventDefault(); handleConfirm(); }}>
          <div className="mb-3">
            <label>Select Date</label>
            <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Select Doctor</label>
            <select className="form-control" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
              <option value="">Choose Doctor</option>
              <option value="Dr. Rao">Dr. Rao (Cardiology)</option>
              <option value="Dr. Sharma">Dr. Sharma (Neurology)</option>
              <option value="Dr. Patel">Dr. Patel (Orthopedics)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
}

export default BookSlot;