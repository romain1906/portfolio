import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import About from './page/About/About';
import Projects from './page/Project';
import Contact from './page/Contact/Contact';
import Navbar from './component/navbar/navbar.jsx'; // Import de la Navbar
import ProjectDetail from './page/ProjectDetail/ProjectDetail';
import {LanguageProvider} from "./context/LanguageContext";
function App() {
    return (
        <LanguageProvider>

        <Router>
            <div>
                <Navbar /> {/* Inclusion de la Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />

                </Routes>
            </div>
        </Router>
        </LanguageProvider>

    );
}

export default App;
