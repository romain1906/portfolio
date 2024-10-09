import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LanguageContext } from '../../context/LanguageContext';
import "./ProjectDetail.css";

const ProjectDetail = () => {
    const { id } = useParams();
    const { language } = useContext(LanguageContext);
    const [project, setProject] = useState(null);
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                const projectData = data.projects.find(proj => proj.id === parseInt(id));
                setProject(projectData);
            });
    }, [id]);

    useEffect(() => {
        fetch('/data/translate.json')
            .then(response => response.json())
            .then(data => setTranslations(data.projects));
    }, []);

    if (!project || !translations) {
        return <div>Loading...</div>;
    }

    const images = {
        chargeStreamImage: '/assets/chargeStream.png',
        ocpp: '/assets/ocpp.png',
        levitaImage: '/assets/levita.jpg',
        lesahrImage: '/assets/lesahr.png',
        gvoyageImage: '/assets/gvoyageWeb.png',
        bluetooth: '/assets/bluetooth.png',
        googlePlayIcon: '/assets/google-play.png',
        appleStoreIcon: '/assets/app-store.png'
    };

    const highlightTechnologies = (description, technologies) => {
        let highlightedDescription = description;
        const allTechnologies = [...technologies.backend, ...technologies.frontend, ...technologies.other];
        allTechnologies.forEach(tech => {
            const regex = new RegExp(`\\b${tech}\\b`, 'gi');
            highlightedDescription = highlightedDescription.replace(regex, match => {
                const capitalizedTech = match.charAt(0).toUpperCase() + match.slice(1);
                return `<strong>${capitalizedTech}</strong>`;
            });
        });
        return highlightedDescription;
    };

    const projectTranslation = translations[project.title.toLowerCase().replace(/\s+/g, '_')];
    const highlightedDescription = highlightTechnologies(projectTranslation.description[language], project.technologies);

    return (
        <div className="page">
<div className="headerProject">
      <h1>{projectTranslation.title[language]}</h1>
      {/* Add link to the next project */}
      <Link to={`/project/${project.next.id}`} className="next-project-link">
        {project.next.title} &rarr;
      </Link>
    </div>            <div className="project-detail">
                <div className="project-header">
                    <img src={images[project.image]} alt={project.title} className="project-image" />
                </div>
                <p className="project-description" dangerouslySetInnerHTML={{ __html: highlightedDescription }}></p>
                <div className="tech">
                    <div className="technologies-bloc">
                        <h3>Backend</h3>
                        <div className="technologies-details">
                            {project.technologies.backend.map((tech, index) => (
                                <i key={index} className={`devicon-${tech.toLowerCase()}-plain`}></i>
                            ))}
                        </div>
                    </div>
                    <div className="technologies-bloc">
                        <h3>Frontend</h3>
                        <div className="technologies-details">
                            {project.technologies.frontend.map((tech, index) => {
                                if (tech !== "electron") {
                                    return <i key={index} className={`devicon-${tech.toLowerCase()}-plain`}></i>;
                                } else {
                                    return <i key={index} className={`devicon-${tech.toLowerCase()}-original`}></i>;
                                }
                            })}
                        </div>
                    </div>
                    <div className="technologies-bloc">
                        <h3>Other</h3>
                        <div className="technologies-details">
                            {project.technologies.other.map((tech, index) => {
                                if (tech === "ocpp" || tech === "bluetooth") {
                                    return <img key={index} src={images[tech]} alt={tech} className="tech-icon"/>;
                                } else {
                                    return <i key={index}
                                              className={`devicon-${tech.toLowerCase()}-plain tech-icon`}></i>;
                                }
                            })}
                        </div>
                    </div>
                </div>
                {project.links && (
                    <div className="project-links">
                        <h3>Links</h3>
                        <div className="links">
                            {project.links.googlePlay && (
                                <a href={project.links.googlePlay} target="_blank" rel="noopener noreferrer">
                                    <img src={images.googlePlayIcon} alt="Google Play" className="store-icon" />
                                </a>
                            )}
                            {project.links.appleStore && (
                                <a href={project.links.appleStore} target="_blank" rel="noopener noreferrer">
                                    <img src={images.appleStoreIcon} alt="Apple Store" className="store-icon" />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectDetail;