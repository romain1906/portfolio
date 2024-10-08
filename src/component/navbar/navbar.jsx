import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { LanguageContext } from '../../context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={`overlay ${isMobile ? 'show': ''}`}>
                <button className="mobile-menu-button" onClick={toggleNavbar}>
                    ☰
                </button>
                <h1 className="logo">Romain Geurts</h1>
            </div>
            <nav className={`navbar ${isNavbarVisible ? 'show' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleNavbar}>{language === 'fr' ? 'Accueil' : 'Home'}</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleNavbar}>{language === 'fr' ? 'À propos' : 'About'}</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleNavbar}>{language === 'fr' ? 'Projets' : 'Projects'}</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleNavbar}>{language === 'fr' ? 'Contact' : 'Contact'}</Link>
                    </li>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                    </select>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;