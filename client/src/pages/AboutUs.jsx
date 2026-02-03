import React from "react";

function AboutUs() {
  // ✅ Doctors data array (outside return)
  const doctors = [
    {
      id: 1,
      name: "Dr. Ramesh Kumar",
      specialization: "Cardiologist",
      image: "/doctors/doctor1.jpg"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Neurologist",
      image: "/doctors/doctor2.jpg"
    },
    {
      id: 3,
      name: "Dr. Anil Verma",
      specialization: "Orthopedic Surgeon",
      image: "/doctors/doctor3.jpg"
    },
    {
      id: 4,
      name: "Dr. Sneha Rao",
      specialization: "Pediatrician",
      image: "/doctors/doctor4.jpg"
    },
    {
  id: 5,
  name: "Dr. Suresh Iyer",
  specialization: "General Physician",
  image: "/doctors/doctor5.jpg"
},
{
  id: 6,
  name: "Dr. Neha Verma",
  specialization: "Gynecologist",
  image: "/doctors/doctor6.jpg"
},
{
  id: 7,
  name: "Dr. Arjun Patel",
  specialization: "Dermatologist",
  image: "/doctors/doctor7.jpg"
},
{
  id: 8,
  name: "Dr. Kavita Nair",
  specialization: "ENT Specialist",
  image: "/doctors/doctor8.jpg"
},
{
  id: 9,
  name: "Dr. Rohit Malhotra",
  specialization: "Pulmonologist",
  image: "/doctors/doctor9.jpg"
},
{
  id: 10,
  name: "Dr. Meenakshi Reddy",
  specialization: "Nephrologist",
  image: "/doctors/doctor10.jpg"
}
    // ➝ Add more doctors as needed
  ];


  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "30px" }}>
      <div className="container">
        {/* Hospital Intro */}
        <div className="mb-5" style={{ fontSize: "14px", lineHeight: "1.5" }}>
          <h3 className="text-center text-primary mb-3">About VitaCare Hospital</h3>
          <p className="text-start">
            VitaCare Hospital was started on 9th November, 1990 by Dr. P.V. Raghava Sarma (Cardiologist)
            and Dr. P. Vijaya (Neurologist) in the name of <strong>VitaCare Hospital, Heart & Brain Center</strong>.
            Since then it has developed into a reputed and unique center for Cardiology, Neurology and
            also added medical and surgical specialties under one roof providing advanced medical care facilities.
          </p>
          <p className="text-start">
            Located in the heart of Guntur City, the hospital is easily accessible and provides round‑the‑clock
            ambulance and emergency services.
          </p>
        </div>

        {/* Doctors Section */}
        <div className="mb-5">
          <h4 className="text-center text-success mb-4">Our Doctors</h4>
          <div className="row">
            {doctors.map((doc) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={doc.id}>
                <div
                  className="card h-100 text-center"
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    boxShadow: "0 4px 8px rgba(135, 206, 250, 0.7)"
                  }}
                >
                  <div className="card-body">
                    {/* Doctor Image */}
                   <img
  src={doc.image}
  alt={doc.name}
  style={{
    width: "120px",          // make circle a bit bigger
    height: "120px",
    margin: "0 auto 10px",
    borderRadius: "50%",     // circular crop
    objectFit: "cover",      // ensures face fills the circle
    objectPosition: "top center" // adjust alignment of face
  }}
/>
                    {/* Doctor Info */}
                    <h6 className="card-title">{doc.name}</h6>
                    <p className="card-text">{doc.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="mb-5">
          <h4 className="text-center text-warning mb-4">Our Mission, Vision & Values</h4>
          <div className="row text-center">
            {/* Vision */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div
                className="card h-100"
                style={{ padding: "15px", boxShadow: "0 4px 8px rgba(0, 191, 255, 0.6)" }}
              >
                <h6 className="text-info">Our Vision</h6>
                <p>
                  To be a leading healthcare provider recognized for excellence in patient care,
                  innovation, and community service.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div
                className="card h-100"
                style={{ padding: "15px", boxShadow: "0 4px 8px rgba(60, 179, 113, 0.6)" }}
              >
                <h6 className="text-success">Our Mission</h6>
                <p>
                  To provide affordable, accessible, and advanced healthcare services with empathy,
                  respect, and continuous improvement through research and technology.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div
                className="card h-100"
                style={{ padding: "15px", boxShadow: "0 4px 8px rgba(255, 165, 0, 0.6)" }}
              >
                <h6 className="text-warning">Our Values</h6>
                <ul className="list-unstyled mb-0">
                  <li>Compassionate care</li>
                  <li>Integrity</li>
                  <li>Innovation</li>
                  <li>Community health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;