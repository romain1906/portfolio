import React from "react";
import { useParams } from "react-router-dom";
import chargeStreamImage from '../assets/chargeStream.png';
import ocppImage from '../assets/ocpp.png';

const ProjectDetail = () => {
    const { id } = useParams();

    const projectDetails = {
        1: {
            title: "Charge Stream",
            description: "Charge Stream est une application que j'ai fait pendant mon stage de 15 semaines, du 29 janvier au 17 mai. Elle utilise le protocole OCPP pour communiquer avec les bornes directement. Elle a comme back end Spring Boot et comme frontend Angular avec PrimeNG. Les technologies Docker et AWS ont été utilisées.",
            image: chargeStreamImage,
            technologies: {
                backend: ["springboot", "docker", "aws"],
                frontend: ["angular", "primeng"],
                protocol: ["ocpp"]
            }
        },
        // Add other projects here if needed
    };

    const project = projectDetails[id];

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <div className="project-header">
                <img src={project.image} alt={project.title} className="project-image" />
                <p className="project-description">{project.description}</p>
            </div>
            <h3>Backend</h3>
            <div className="technologies">
                {project.technologies.backend.map((tech, index) => (
                    <i key={index} className={`devicon-${tech.toLowerCase()}-plain`}></i>
                ))}
            </div>
            <h3>Frontend</h3>
            <div className="technologies">
                {project.technologies.frontend.map((tech, index) => (
                    <i key={index} className={`devicon-${tech.toLowerCase()}-plain`}></i>
                ))}
            </div>
            <h3>Protocol</h3>
            <div className="technologies">
                {project.technologies.protocol.map((tech, index) => (
                    <img key={index} src={ocppImage} alt="OCPP" className="tech-icon" />
                ))}
            </div>
        </div>
    );
}

export default ProjectDetail;