import { useEffect, useRef } from 'react';
import './Methodology.css';
import { animateMethodology } from '../../utils/gsapAnimations';

const Methodology = () => {
    const methodologyRef = useRef(null);

    useEffect(() => {
        if (methodologyRef.current) {
            animateMethodology(methodologyRef.current);
        }
    }, []);

    return(
        <div className="methodology container" ref={methodologyRef}>
            <div className="header">
                <h3 className="bg-title">Methodologies We Follow</h3>
                <p className="header-description">
                    We follow a structured and innovative approach to ensure the
                    success of our projects. Our methodologies include
                </p>
            </div>

            <div className="cards-container">
                <div className="card">
                    <div className="img-container">
                        <img src="/assets/dt.svg" alt="Design Thinking" />
                    </div>
                    <p className="card-title">Design Thinking</p>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src="/assets/six-sigma.svg" alt="Six Sigma" />
                    </div>
                    <p className="card-title">Six Sigma</p>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src="/assets/agile.svg" alt="Agile" />
                    </div>
                    <p className="card-title">Agile</p>
                </div>
            </div>
        </div>
    )
}

export default Methodology;