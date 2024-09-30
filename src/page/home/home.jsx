import React from 'react';
import './Home.css'; // Pour les styles spécifiques

const Home = () => {
    return (
        <div className="home-container">
            <h1>Romain Geurts</h1>
            <p>Développeur logiciel autodidacte, passionné par les technologies web et le développement d'applications.</p>

            <p>
                Je crée des solutions efficaces en utilisant des technologies modernes pour résoudre des problèmes complexes
                et améliorer l'expérience utilisateur.
            </p>

            <div className="cta-buttons">
                <a href="/projects" className="btn-primary">Voir mes projets</a>
                <a href="/contact" className="btn-secondary">Contactez-moi</a>
            </div>

            <img src="../assets/IMG_5190.JPG" alt="Romain Geurts" className="profile-pic" />

            <div className="technologies">
                <p>Technologies : React, Node.js, JavaScript, MongoDB</p>
            </div>

            <div className="social-links">
                <a href="https://linkedin.com/in/toncompte" target="_blank" rel="noopener noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default Home;
