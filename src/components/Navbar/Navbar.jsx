import './Navbar.css';

const Navbar = () => {
    return (
        <nav role="navigation" aria-label="Main Navigation">
            <div className="logo">
                <img src="/assets/logo.svg" alt="Logo" />
                <img src="/assets/logo-text.svg" alt="Logo Text" />
            </div>

            <ul className="nav-links" id="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
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

            <script src="./navbar.js" />
        </nav>
    );
};

export default Navbar;
