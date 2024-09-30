import React from "react";
import pdfFile from "../../assets/myfile.pdf"; // Adjust the path to your PDF file

const About = () => {
    return (
        <div className="page">
            <h1>À propos</h1>
            <p>Je suis un développeur logiciel autodidacte passionné par l'apprentissage et les technologies. J'ai commencé à apprendre à coder il y a quelques années et depuis, j'ai travaillé sur plusieurs projets personnels et professionnels. J'ai une expérience dans le développement web, mobile et embarqué. J'aime apprendre de nouvelles technologies et je suis toujours à la recherche de nouveaux défis.</p>
            <div className="pdf-container">
                <iframe src={pdfFile} className="pdf-viewer" title="PDF Viewer"></iframe>
            </div>
        </div>
    );
}

export default About;