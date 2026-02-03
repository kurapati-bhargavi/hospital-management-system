import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        marginTop: "100px",
        backgroundImage: "url('/hospital-bg.jpg')", // ✅ place image in public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <h2 className="text-center mb-4 text-light">Contact Us</h2>

      <div className="row">
        {/* Card 1: WhatsApp, Email, Call */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h4 className="card-title mb-3">Get in Touch</h4>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-success mb-2 w-100">
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
              <a href="mailto:info@vitacare.com" className="btn btn-dark mb-2 w-100">
                <i className="bi bi-envelope"></i> Email Us
              </a>
              <a href="tel:+919876543210" className="btn btn-primary mb-2 w-100">
                <i className="bi bi-telephone"></i> Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Send Message Form */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h4 className="card-title mb-3 text-center">Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" className="form-control mb-2" rows="4" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="btn btn-success w-100">Send</button>
              </form>
            </div>
          </div>
        </div>

        {/* Card 3: Map */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h4 className="card-title mb-3 text-center">Find Us</h4>
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.6491330143313!2d80.55474507545968!3d16.23846798446578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a09bb96130cd1%3A0x3f2e9680837be564!2sDVC%20Hospital%20%26%20Research%20Center!5e0!3m2!1sen!2sin!4v1770049822281!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;