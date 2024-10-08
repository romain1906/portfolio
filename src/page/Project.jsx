import React, { useState, useEffect } from "react";
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import Card from '../component/card/card';
import { useSwipeable } from 'react-swipeable';

const Projects = () => {
    const [goToSlide, setGoToSlide] = useState(0);
    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showNavigation, setShowNavigation] = useState(true);
    const [slides, setSlides] = useState([]);
    const [prevSlide, setPrevSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const images = {
        chargeStreamImage: '/assets/chargeStream.png',
        ocpp: '/assets/ocpp.png',
        levitaImage: '/assets/levita.jpg',
        lesahrImage: '/assets/lesahr.png',
        gvoyageImage: '/assets/gvoyageWeb.png',
        bluetooth: '/assets/bluetooth.png'
    };

    useEffect(() => {
        setSlides([
            {
                key: 1,
                content: <Card id={1} title="Charge Stream" description="Application de gestion de bornes électriques pour les entreprise" image={images.chargeStreamImage} technologies={["spring", "angular", "docker", "amazonwebservices"]} />
            },
            {
                key: 2,
                content: <Card id={2} title="Levita Controler" description="Application mobile pour telecommander un dispositif Levita" image={images.levitaImage} technologies={["flutter", "angular", "electron"]} />
            },
            {
                key: 3,
                content: <Card id={3} title="GVoyage" description="Application de gestion de voyage" image={images.gvoyageImage} technologies={["dotnetcore", "flutter", "vuejs"]} />
            },
            {
                key: 4,
                content: <Card id={4} title="LesahrWeb" description="Mignation de version de PHP pour l'application" image={images.lesahrImage} technologies={["php"]} />
            }
        ]);

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
            setOffsetRadius(e.matches ? 1 : 2);
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery); // Set initial value

        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
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

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSlideChange((goToSlide + 1) % slides.length),
        onSwipedRight: () => handleSlideChange((goToSlide - 1 + slides.length) % slides.length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div {...swipeHandlers} style={{ width: "90%", height: "500px", margin: "0 auto" }}>
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