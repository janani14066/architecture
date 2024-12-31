import React, { useState } from "react";
import "./../styles/Projects.css";

function Projects() {
  const [activeContent, setActiveContent] = useState(null);

  const handleCardClick = (id) => {
    setActiveContent(id);
  };

  const handleClose = () => {
    setActiveContent(null);
  };

  const projectDetails = [
    {
      id: 1,
      name: "Residential Projects",
      expert: "John Doe, Jane Smith",
      start: "Jan 2023",
      end: "Dec 2023",
      review: "Amazing quality and attention to detail!",
      description: "Explore our innovative residential projects with cutting-edge designs.",
      image: "https://c4.wallpaperflare.com/wallpaper/526/564/911/house-architecture-modern-swimming-pool-hd-wallpaper-preview.jpg", // Replace with actual image URL
      rating: 95,
    },
    {
      id: 2,
      name: "Commercial Projects",
      expert: "Mike Johnson, Emily Davis",
      start: "Feb 2023",
      end: "Nov 2023",
      review: "A perfect blend of functionality and modern style.",
      description: "Discover commercial spaces built with sustainability and style.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/035/597/874/small_2x/ai-generated-sleek-modern-business-building-free-photo.jpg", // Replace with actual image URL
      rating: 98,
    },
    {
      id: 3,
      name: "Industrial Projects",
      expert: "Alex Brown, Lily Green",
      start: "Mar 2023",
      end: "Oct 2023",
      review: "Efficient designs tailored to industrial needs.",
      description: "Our industrial projects combine functionality and cutting-edge technology.",
      image: "https://www.aecservices.in/uploads/page-images/1709101773_IIndustrial%20Buildings%20Architecture%20&%20Allied%20Engineering%20Design%20Solutions.jpg", // Replace with actual image URL
      rating: 85,
    },
    {
      id: 4,
      name: "Urban Development Projects",
      expert: "James Wilson, Sophia Clark",
      start: "Apr 2023",
      end: "Dec 2023",
      review: "Transforming cityscapes with modern architectural design.",
      description: "Urban projects that push the boundaries of innovation and sustainability.",
      image: "https://static.vecteezy.com/system/resources/previews/051/041/682/non_2x/sustainable-urban-development-aerial-view-of-a-green-city-with-abundant-trees-and-modern-buildings-showcasing-eco-friendly-architecture-and-urban-planning-photo.jpg", // Replace with actual image URL
      rating: 90,
    },
    {
      id: 5,
      name: "Landscape Architecture",
      expert: "Olivia White, Noah Harris",
      start: "May 2023",
      end: "Nov 2023",
      review: "A perfect blend of nature and architectural brilliance.",
      description: "Creating beautiful outdoor spaces with a deep connection to nature.",
      image: "https://homedesigns.ai/go/wp-content/uploads/2024/03/ai-for-landscape-design-1080x675.png", // Replace with actual image URL
      rating: 99,
    },
    {
      id: 6,
      name: "Smart City Projects",
      expert: "Liam Scott, Isabella Martinez",
      start: "Jun 2023",
      end: "Dec 2023",
      review: "Incorporating smart technology for better urban living.",
      description: "Projects that integrate technology to improve city living and sustainability.",
      image: "https://media.istockphoto.com/id/1176054530/photo/smart-city-and-communication-network-concept-5g-lpwa-wireless-communication.jpg?s=612x612&w=0&k=20&c=dSuPRMaLuJZkR4gXjo0iMwlzVZELzkezF-t1COwHP10=", // Replace with actual image URL
      rating: 80,
    },
    {
      id: 7,
      name: "Public Infrastructure Projects",
      expert: "Daniel Lee, Mia Carter",
      start: "Jul 2023",
      end: "Jan 2024",
      review: "Building strong foundations for the future of our communities.",
      description: "Public infrastructure designed with future-proof technology and sustainability.",
      image: "https://futurearchitectureplatform.org/media/cache/3f/7e/3f7e958143f9d8cc97e02dbc006e0167.jpg", // Replace with actual image URL
      rating: 91,
    },
    {
      id: 8,
      name: "Renovation Projects",
      expert: "David King, Emma Moore",
      start: "Aug 2023",
      end: "Feb 2024",
      review: "Revitalizing old spaces with modern aesthetics.",
      description: "Breathing new life into older buildings while maintaining historical value.",
      image: "https://www.prosper.com/wp-content/uploads/2022/09/AdobeStock_327583950.jpeg", // Replace with actual image URL
      rating: 86,
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading">Our Projects</h1>

      <div className="projects-section">
        {projectDetails.map((project) => (
          <div
            className={`projects-card card${project.id}`}
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="card-title">{project.name}</div>
          </div>
        ))}
      </div>

      {activeContent && (
        <div className="projects-content active">
          <span className="close-btn" onClick={handleClose}>
            &times;
          </span>
          <div className="project-image">
            <img
              src={projectDetails[activeContent - 1].image}
              alt={projectDetails[activeContent - 1].name}
              className="active-project-image"
            />
          </div>
          <h3>{projectDetails[activeContent - 1].name}</h3>
          <p>{projectDetails[activeContent - 1].description}</p>
          <div className="project-details">
            <p><strong>Experts:</strong> {projectDetails[activeContent - 1].expert}</p>
            <p><strong>Start Date:</strong> {projectDetails[activeContent - 1].start}</p>
            <p><strong>End Date:</strong> {projectDetails[activeContent - 1].end}</p>
            <p><strong>Customer Review:</strong> {projectDetails[activeContent - 1].review}</p>
          </div>

           {/* Rating Section */}
           <div className="project-rating">
            <div className="rating-label">Project Rating</div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${projectDetails[activeContent - 1].rating}%` }}
              ></div>
            </div>
            <span className={`rating-score ${activeContent ? "active" : ""}`}>
              {projectDetails[activeContent - 1].rating}% Positive Feedback
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
