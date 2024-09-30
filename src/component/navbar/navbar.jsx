import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Tu peux ajouter des styles spécifiques ici

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
                <li>
                    <Link to="/projects">Projets</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
