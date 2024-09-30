import React from "react";
import pdfFile from "../../assets/CV Geurts Romain.pdf"; // Ajuste le chemin du fichier PDF si nécessaire
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="text">
                <h1>À propos</h1>
                <p>
                    Je suis un développeur logiciel autodidacte passionné par l'apprentissage et les technologies.
                    J'ai commencé à apprendre à coder il y a quelques années et depuis, j'ai travaillé sur plusieurs projets
                    personnels et professionnels. J'ai une expérience dans le développement web, mobile et embarqué.
                    J'aime apprendre de nouvelles technologies et je suis toujours à la recherche de nouveaux défis.
                </p>
            </div>
            <div className="pdf-container">
                <iframe
                    src={pdfFile}
                    className="pdf-viewer"
                    title="CV Geurts Romain"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
            </div>
        </div>
    );
}

export default About;
