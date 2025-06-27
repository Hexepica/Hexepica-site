import { useEffect } from 'react';
import './Navbar.css';

const FormNavbar = () => {
    useEffect(() => {
        // Load and execute navbar.js
        const script = document.createElement('script');
        script.src = '/src/components/Navbar/navbar.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <nav role="navigation" aria-label="Main Navigation">
            <a href="/" className="logo">
                <img src="/assets/logo.svg" alt="Logo" />
                <img src="/assets/logo-text.svg" alt="Logo Text" />
            </a>

            <ul className="nav-links" id="nav-links">
                <li><a href="/#about">About</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#blog">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>

            <button
                className="nav-menu-btn"
                id="nav-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded="false"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

export default FormNavbar; 