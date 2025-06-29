import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { animateHero } from '../../utils/gsapAnimations.mjs';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        if (heroRef.current) {
            animateHero(heroRef.current);
        }
    }, []);

    return(
        <div className="hero container" ref={heroRef} id='hero'>
            <div className="hero-left">
                <h2 className="title">
                    Transforming Ideas into Digital <span className="highlight">Excellence</span> !
                </h2>

                <p className="description">
                    Your one-stop IT partner for innovative designs,
                    robust development, and impactful digital
                    strategies. Let's build the future together.
                </p>

                <a href="https://calendly.com/hexepica-official/30min" target='_blank'><button className="btn hero-btn">Book a consultation</button></a>
            </div>

            <div className="hero-right">
                <img src="/assets/hero.svg" alt="Hero" />
            </div>
        </div>
    )
}

export default Hero;