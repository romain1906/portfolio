import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ id, title, description, image, technologies }) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/project/${id}`);
    };

    return (
        <div className="card">
            <div className="card-title">
                <h2>{title}</h2>
            </div>
            <div className="imgCard">
                <img src={image} alt={title} />
                <div className="card-content">
                    <p>{description}</p>
                    <div className="technologies">
                        {technologies.map((tech, index) => {
                            if (tech !== "electron") {
                                return <i key={index} className={`devicon-${tech.toLowerCase()}-plain`}></i>;
                            } else {
                                return <i key={index} className={`devicon-${tech.toLowerCase()}-original`}></i>;
                            }
                        })}
                    </div>
                    <button onClick={handleLearnMore}>En apprendre plus</button>
                </div>
            </div>
        </div>
    );
}

export default Card;