import React from 'react';
import './Privacy.css';
import ProposalCard from '../Proposal-card/Proposal';
import Footer from '../Footer/Footer';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <div className="privacy-header">
                <h1 className="privacy-title">Privacy Policy</h1>
                <p className="privacy-date">Last updated: June 29, 2025</p>
            </div>

            <div className="privacy-content">
                <section className="privacy-section">
                    <h2>Introduction</h2>
                    <p>
                        HEXEPICA TECHNOLOGIES PRIVATE LIMITED ("Hexepica Technologies", "we", "us" or "our") is committed to protecting the privacy 
                        of our customers, partners, and other stakeholders. This Privacy Policy explains how we collect, use, disclose, and protect 
                        information that we obtain from you through our website and other services.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Collection of Information</h2>
                    <p>
                        We collect information from you when you register on our website, subscribe to our newsletter, respond to a survey, 
                        fill out a form, or use any other features available on our website. The information we collect may include but is not 
                        limited to, your name, email address, phone number, address, and any other information necessary to provide our services.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Use of Information</h2>
                    <p>
                        We use the information we collect from you to provide our services, improve our website, respond to your inquiries, 
                        and for marketing and promotional purposes. We may also use the information to contact you with newsletters, surveys, 
                        offers, and other information that may be of interest to you.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Disclosure of Information</h2>
                    <p>
                        We may disclose your personal information to third parties in the following circumstances:
                    </p>
                    <ul>
                        <li>To our service providers and other third parties who provide services on our behalf.</li>
                        <li>To respond to legal requirements, enforce our policies, or protect our or others' rights, property, or safety.</li>
                        <li>To third parties as part of any corporate reorganization process including, but not limited to, mergers, acquisitions, or asset sales.</li>
                    </ul>
                    <p>
                        We may also disclose your information to our affiliates and other trusted businesses or persons so that personal information 
                        may be processed on our behalf. We require that these parties agree to process such information based on our instructions and 
                        in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Security of Information</h2>
                    <p>
                        We have implemented appropriate technical and organizational measures designed to protect the security of any personal 
                        information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. 
                        Although we will do our best to protect your personal information, the transmission of personal information to and from 
                        our Website is at your own risk. You should only access the services within a secure environment.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Access to Your Information</h2>
                    <p>
                        You have the right to access, modify, or delete your personal information. To do so, please contact us at 
                        contact@hexepicatechnologies.com
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Changes to this Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for 
                        other operational, legal or regulatory reasons.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="contact-info">
                        <p>Email: <a href="mailto:contact@hexepicatechnologies.com">contact@hexepicatechnologies.com</a></p>
                    </div>
                </section>
            </div>

            {/* <ProposalCard />
            <Footer /> */}
        </div>
    );
};

export default Privacy; 