import { useEffect, useRef } from 'react';
import "./About.css";
import { animateAbout } from '../../utils/gsapAnimations';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      animateAbout(aboutRef.current);
    }
  }, []);

  return (
    <div className="about container" ref={aboutRef} id='about'>
      <h2 className="bg-title">About Us</h2>

      <div className="about-contents">
        <div className="about-left">
          <div className="img-container">
            <img src="/assets/about.svg" alt="About" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
            <h2 className="title">
              Who <span className="highlight">We </span>Are ?
            </h2>
            <p className="description">
              We are vibrant IT startup built on the principles of Six Sigma,
              design thinking, and Agile methodologies. With a team of
              passionate young minds, we deliver iterative improvements to
              ensure excellence in every project
            </p>
          </div>

          <div className="about-content">
            <h2 className="title">
              What <span className="highlight">We </span>Do ?
            </h2>
            <p className="description">
              From stunning UI/UX designs to robust backend systems, we offer
              end-to-end IT solutions tailored to your unique needs. Our mission
              is to simplify technology and empower businesses globally.
            </p>

            <button className="btn">Learn More About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
