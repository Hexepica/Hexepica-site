import { useEffect, useRef } from 'react';
import './Footer.css';
import { animateFooter } from '../../utils/gsapAnimations';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        if (footerRef.current) {
            animateFooter(footerRef.current);
        }
    }, []);

    return(
        <div className="footer container">
            <div className="footer-upward">
                <div className="footer-logo">
                    <img src="/assets/logo.svg" alt="Company Logo" />
                    <img src="/assets/logo-text.svg" alt="Company Name" />
                </div>

                <div className="footer-links">
                    <ul>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <div className="circle">
                        <img src="/assets/insta.svg" alt="Instagram" />
                    </div>
                    <div className="circle">
                        <img src="/assets/linkedin.svg" alt="LinkedIn" />
                    </div>
                    <div className="circle">
                        <img src="/assets/x.svg" alt="X (Twitter)" />
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="footer-left">
                    <h2 className="bg-title">Contact us:</h2>

                    <p className="description">
                        Email: contact@hexepicatechnologies.com
                    </p>

                    <p className="description">
                        Phone: +91 93615 39596 | +91 95974 49955
                       
                    </p>

                    <p className="description">
                        Address: Tiruchengode, 637209
                    </p>
                </div>

                <div className="footer-right">
                    <input type="email" placeholder='Email' aria-label="Email subscription" />
                    <button>Subscribe to news</button>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p className="description">
                    &copy; 2025 Hexepica Technologies. All Rights Reserved.
                </p>

                <p className="description guidelines">
                    Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Footer;