import React, { useEffect, useRef } from 'react';
import './Services.css';
import ProposalCard from '../Proposal-card/Proposal';
import { animateServices } from '../../utils/gsapAnimations.mjs';

const Services = () => {

    const servicesRef = useRef(null);

    useEffect(() => {
        if (servicesRef.current) {
            animateServices(servicesRef.current);
        }
    }, []);

    return(
        <div className="services container" ref={servicesRef} id='services'>
            <div className="header">
                <h3 className="bg-title">Services</h3>
                <p className="header-description">
                    At our tech-based startup, we offer a range of innovative solutions to help
                    businesses thrive in the digital era. These solutions include:
                </p>
            </div>

            <div className="service-cards">
                <div className="service-card">
                    <div className="service-left">
                        <h3 className="card-title">Web Development</h3>
                    </div>

                    <div className="service-right">
                        <img src="/assets/web-dev.svg" alt=""/>
                    </div>

                    {/* <div className="learn-more">
                        <div className="arrow-circle">
                            <img src="/assets/arrow.svg" alt="" />
                        </div>
                        <p className="description">Learn more</p>
                    </div> */}
                </div>
                <div className="service-card">
                    <div className="service-left">
                        <h3 className="card-title">Mobile App Development</h3>
                    </div>

                    <div className="service-right">
                        <img src="/assets/app-dev.svg" alt="" />
                    </div>

                    {/* <div className="learn-more">
                        <div className="arrow-circle">
                            <img src="/assets/arrow.svg" alt="" />
                        </div>
                        <p className="description">Learn more</p>
                    </div> */}
                </div>
                <div className="service-card">
                    <div className="service-left">
                        <h3 className="card-title">Content Writing</h3>
                    </div>

                    <div className="service-right">
                        <img src="/assets/content-writing.svg" alt="Content Writing" />
                    </div>

                    {/* <div className="learn-more">
                        <div className="arrow-circle">
                            <img src="/assets/arrow.svg" alt="" />
                        </div>
                        <p className="description">Learn more</p>
                    </div> */}
                </div>
                <div className="service-card">
                    <div className="service-left">
                        <h3 className="card-title">Search Engine Optimization</h3>
                    </div>

                    <div className="service-right">
                        <img src="/assets/seo.svg" alt="" />
                    </div>

                    {/* <div className="learn-more">
                        <div className="arrow-circle">
                            <img src="/assets/arrow.svg" alt="" />
                        </div>
                        <p className="description">Learn more</p>
                    </div> */}
                </div>
                <div className="service-card">
                    <div className="service-left">
                        <h3 className="card-title">Backend Development</h3>
                    </div>

                    <div className="service-right">
                        <img src="/assets/backend.svg" alt="" />
                    </div>

                    {/* <div className="learn-more">
                        <div className="arrow-circle">
                            <img src="/assets/arrow.svg" alt="" />
                        </div>
                        <p className="description">Learn more</p>
                    </div> */}
                </div>
                <div className="service-card">
                    <div className="service-left">
                        <h3 className="card-title">Digital Marketing</h3>
                    </div>

                    <div className="service-right">
                        <img src="/assets/digital-marketing.svg" alt="" />
                    </div>

                    {/* <div className="learn-more">
                        <div className="arrow-circle">
                            <img src="/assets/arrow.svg" alt="" />
                        </div>
                        <p className="description">Learn more</p>
                    </div> */}
                </div>
            </div>
            
            <ProposalCard />
        </div>
    )
}

export default Services;