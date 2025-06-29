import { useState, useEffect } from 'react';
import './Navbar.css';

const FormNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navToggle = document.getElementById('nav-toggle');
            const navLinks = document.getElementById('nav-links');
            
            if (
                isMenuOpen &&
                navToggle &&
                navLinks &&
                !navToggle.contains(event.target) &&
                !navLinks.contains(event.target)
            ) {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
            }
        };

        const handleEscKey = (event) => {
            if (isMenuOpen && event.key === 'Escape') {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        }
    };

    return (
        <nav role="navigation" aria-label="Main Navigation" className={isMenuOpen ? 'menu-open' : ''}>
            <a href="/" className="logo">
                <img src="/assets/logo.svg" alt="Logo" />
                <img src="/assets/logo-text.svg" alt="Logo Text" />
            </a>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
                <li><a href="/#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="/#services" onClick={handleLinkClick}>Services</a></li>
                <li><a href="/#blog" onClick={handleLinkClick}>Blog</a></li>
                <li><a href="/#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>

            <button
                className={`nav-menu-btn ${isMenuOpen ? 'open' : ''}`}
                id="nav-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

export default FormNavbar; 