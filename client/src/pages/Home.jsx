import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const stories = [
    {
      id: 1,
      title: "Cardiology Success",
      text: "Mr. Rao recovered fully after advanced cardiac surgery at VitaCare.",
      image: "/patients/patient1.jpg",
    },
    {
      id: 2,
      title: "Neurology Breakthrough",
      text: "Mrs. Sharma regained mobility after innovative neuro treatment.",
      image: "/patients/patient2.jpg",
    },
    {
      id: 3,
      title: "Orthopedic Recovery",
      text: "Mr. Patel walked again after complex orthopedic surgery.",
      image: "/patients/patient3.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [stories.length]);

  return (
    <section id="home" className="home-section">
      <div className="row">
        {/* Left side: Hospital Title and description */}
        <div className="col-md-8 home-content">
          <h1 className="hospital-title">VitaCare Hospital</h1>
          <h3 className="caption">where every speciality for you</h3>
          <p className="description">
            Providing advanced healthcare in Cardiology, Neurology, and multi-specialty services
            under one roof since 1990. Compassionate care, innovation, and excellence for every patient.
          </p>
        </div>

        {/* Right side: Success Stories */}
        <div className="col-md-4 success-stories">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`story-card ${index === activeIndex ? "active" : "inactive"}`}
            >
              <img src={story.image} alt={story.title} className="story-image" />
              <h5>{story.title}</h5>
              <p>{story.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;