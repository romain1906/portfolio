import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './home.css'; // Pour les styles spécifiques

const Home = () => {
    const { language } = useContext(LanguageContext);
    const [translations, setTranslations] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [showLinkedIn, setShowLinkedIn] = useState(false);

    useEffect(() => {
        fetch('/data/translate.json')
            .then(response => response.json())
            .then(data => setTranslations(data.home));
    }, []);

    useEffect(() => {
        let timer;
        if (isHovered) {
            timer = setTimeout(() => setShowLinkedIn(true), 500);
        } else {
            setShowLinkedIn(false);
        }
        return () => clearTimeout(timer);
    }, [isHovered]);

    if (!translations) {
        return <div>Loading...</div>;
    }

    const images = {
        profilePic: '/assets/IMG_5190.jpg',
    }

    return (
        <div className="home-container">
            <h1>{translations.title[language]}</h1>
            <div
                className={`profile-pic-container ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {showLinkedIn ? (
                    <a href="https://www.linkedin.com/in/romain-geurts-59b441239/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
                            alt="LinkedIn"
                            className="profile-pic"
                        />
                    </a>
                ) : (
                    <img src={images.profilePic} alt="Romain Geurts" className="profile-pic"/>
                )}
            </div>
            <div className="technologies">
                <p>{translations.technologies[language]}</p>
            </div>
            <p>{translations.description[language]}</p>
            <p>{translations.autodidacte[language]}</p>

            <div className="cta-buttons">
                <a href="/projects" className="btn-primary">{translations.cta_projects[language]}</a>
                <a href="/contact" className="btn-secondary">{translations.cta_contact[language]}</a>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/romain-geurts-59b441239/" target="_blank"
                   rel="noopener noreferrer">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
                        alt="LinkedIn"/>
                </a>
            </div>
        </div>
    );
};

export default Home;