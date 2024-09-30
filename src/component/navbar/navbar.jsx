import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { LanguageContext } from '../../context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">{language === 'fr' ? 'Accueil' : 'Home'}</Link>
                </li>
                <li>
                    <Link to="/about">{language === 'fr' ? 'À propos' : 'About'}</Link>
                </li>
                <li>
                    <Link to="/projects">{language === 'fr' ? 'Projets' : 'Projects'}</Link>
                </li>
                <li>
                    <Link to="/contact">{language === 'fr' ? 'Contact' : 'Contact'}</Link>
                </li>
            </ul>
            <select value={language} onChange={handleLanguageChange}>
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
        </nav>
    );
};

export default Navbar;