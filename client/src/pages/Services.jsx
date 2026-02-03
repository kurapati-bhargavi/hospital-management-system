import React, { useState, useEffect,useRef} from "react";
import "../styles/Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Services() {
  const services = [
    {
      id: 1,
      title: "Cardiology",
      image: "/services/cardiology.png",
      description:
        "Advanced cardiac care including angioplasty, bypass surgery, and heart monitoring.",
      successStories: [
        "Patient recovered fully after bypass surgery.",
        "Emergency angioplasty saved a life within 30 minutes."
      ]
    },
    {
      id: 2,
      title: "Neurology",
      image: "/services/Neurology.png",
      description:
        "Expert care for stroke, epilepsy, and neurological disorders with advanced diagnostics.",
      successStories: [
        "Stroke patient regained mobility after treatment.",
        "Successful epilepsy management with modern therapies."
      ]
    },
    {
      id: 3,
      title: "Orthopedics",
      image: "/services/Orthopedics.png",
      description:
        "Comprehensive bone and joint care including fractures and joint replacements.",
      successStories: [
        "Patient walked again after knee replacement.",
        "Complex fracture healed successfully."
      ]
    },
    {
      id: 4,
      title: "Pediatrics",
      image: "/services/Pediatrics.png",
      description:
        "Specialized medical care for infants, children, and adolescents.",
      successStories: [
        "Premature baby recovered under neonatal care.",
        "Child asthma controlled successfully."
      ]
    },

{
  id: 5,
  title: "Gynecology",
  image: "/services/Gynecology.png",
  description: "Complete women’s health services including maternity, fertility, and gynecological care.",
  successStories: [
    "Safe and joyful childbirth experience for high-risk pregnancy.",
    "Successful treatment of PCOS through expert care."
  ]
},
{
  id: 6,
  title: "Dermatology",
  image: "/services/Dermatology.png",
  description: "Advanced skin, hair, and nail treatments with modern dermatological solutions.",
  successStories: [
    "Severe acne cured with customized skin therapy.",
    "Chronic eczema managed effectively."
  ]
},
{
  id: 7,
  title: "ENT",
  image: "/services/ENT.png",
  description: "Expert care for ear, nose, throat, and related head and neck conditions.",
  successStories: [
    "Hearing restored through advanced ENT procedures.",
    "Chronic sinus issues resolved successfully."
  ]
},
{
  id: 8,
  title: "Gastroenterology",
  image: "/services/Gastroenterology.png",
  description: "Diagnosis and treatment of digestive system disorders with advanced endoscopic care.",
  successStories: [
    "Patient recovered from chronic ulcers.",
    "Successful management of liver disease."
  ]
},
{
  id: 9,
  title: "Pulmonology",
  image: "/services/Pulmonology.png",
  description: "Comprehensive care for lung and respiratory disorders using advanced technology.",
  successStories: [
    "COPD patient showed remarkable breathing improvement.",
    "Asthma successfully controlled with long-term care."
  ]
},
{
  id: 10,
  title: "Nephrology",
  image: "/services/Nephrology.png",
  description: "Advanced kidney care including dialysis, transplant support, and renal treatments.",
  successStories: [
    "Patient stabilized through expert dialysis care.",
    "Early kidney disease managed effectively."
  ]
}

  ];

  const [selectedService, setSelectedService] = useState(null);
  const detailsRef = useRef(null);


  // 🔹 Force carousel reset when service changes
  useEffect(() => {
    if (selectedService) {
      const carouselEl = document.getElementById("successCarousel");
      if (carouselEl) {
        new window.bootstrap.Carousel(carouselEl, {
          interval: 2000,
          ride: "carousel"
        });
      }
    }
  }, [selectedService]);

  return (
    <div className="container mt-5">
      <h3 className="text-center text-primary mb-4">Our Services</h3>

      {/* SERVICES GRID */}
      <div className="row justify-content-center">
        {services.map((service) => (
          <div
            className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"
            key={service.id}
          >
            <div
              className="text-center"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedService(service);
                setTimeout(() => {
                  detailsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }, 100);
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded shadow"
              />
              <p className="mt-2" style={{ fontSize: "14px" }}>
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SELECTED SERVICE DETAILS */}
      {selectedService && (
        <div className="mt-5" ref={detailsRef}>
          <hr />
          <h4 className="text-success text-center">
            {selectedService.title}
          </h4>
          <p className="text-center" style={{ fontSize: "14px" }}>
            {selectedService.description}
          </p>

          {/* SUCCESS STORIES */}
          <h6 className="mt-4 text-warning text-center">
            Success Stories
          </h6>

          <div
            id="successCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              {selectedService.successStories.map((story, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <div className="card mx-auto mt-3" style={{ maxWidth: "400px" }}>
                    <div className="card-body text-center">
                      <p className="card-text">{story}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CONTROLS */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#successCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#successCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
