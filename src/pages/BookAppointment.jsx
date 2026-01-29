// src/pages/BookAppointment.jsx
import React, { useState } from "react";

function BookAppointment() {
  const [formData, setFormData] = useState({ name: "", date: "", doctor: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} with Dr. ${formData.doctor} on ${formData.date}`);
  };

  return (
    <div>
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="doctor" placeholder="Doctor's Name" onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookAppointment;