import React, { useState, useEffect } from "react";
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import Card from '../component/card/card';
import chargeStreamImage from '../assets/chargeStream.png';
import levita from '../assets/levita.jpg';
import gvoyageWeb from '../assets/gvoyageWeb.png';
import lesahr from '../assets/lesahr.png';

const Projects = () => {
    const [goToSlide, setGoToSlide] = useState(0);
    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showNavigation, setShowNavigation] = useState(true);
    const [slides, setSlides] = useState([]);
    const [prevSlide, setPrevSlide] = useState(0);

    useEffect(() => {
        setSlides([
            {
                key: 1,
                content: <Card id={1} title="Charge Stream" description="Application de gestion de bornes électriques pour les entreprise" image={chargeStreamImage} technologies={["spring", "angular", "docker", "amazonwebservices"]} />
            },
            {
                key: 2,
                content: <Card id={2} title="Levita Controler" description="Application mobile pour telecommander un dispositif Levita" image={levita} technologies={["flutter", "angular", "electron"]} />
            },
            {
                key: 3,
                content: <Card id={3} title="GVoyage" description="Application de gestion de voyage" image={gvoyageWeb} technologies={["dotnetcore", "flutter", "vuejs"]} />
            },
            {
                key: 4,
                content: <Card id={4} title="LesahrWeb" description="Mignation de version de PHP pour l'application" image={lesahr} technologies={["php"]} />
            }
        ]);
    }, []);

    const handleSlideChange = (index) => {
        const direction = index > prevSlide ? 'from-right' : 'from-left';
        setSlides((prevSlides) =>
            prevSlides.map((slide, i) => ({
                ...slide,
                content: React.cloneElement(slide.content, {
                    className: `card ${direction}`,
                    children: React.Children.map(slide.content.props.children, child => {
                        if (child.props.className === 'card-title') {
                            return React.cloneElement(child, { className: `card-title ${direction}` });
                        }
                        return child;
                    })
                })
            }))
        );
        setPrevSlide(index);
        setGoToSlide(index);
    };

    return (
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={config.gentle}
                onChange={handleSlideChange}
            />
        </div>
    );
}

export default Projects;