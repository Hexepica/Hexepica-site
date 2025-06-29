import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { animateContact } from '../../utils/gsapAnimations.mjs';

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        if (contactRef.current) {
            animateContact(contactRef.current);
        }
    }, []);

    return(
        <div className="contact container" ref={contactRef} id='contact'>
            <div className="header">
                <h2 className="bg-title">Contact Us</h2>
                <p className="header-description">
                    Have questions or need assistance? Contact us today, and let's explore how we can
                    drive innovation and success together.
                </p>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <div className='input'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Name'/>
                    </div>

                    <div className='input'>
                        <label htmlFor="email">Email*</label>
                        <input type="text" placeholder='email'/>
                    </div>

                    <div className='input'>
                        <label htmlFor="message">Message*</label>
                        <textarea name="message" id="message" placeholder='Message'></textarea>
                    </div>

                    <div className="button read-more-btn">Send Message</div>
                </div>

                <div className="contact-right">
                    <img src="/assets/contact.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact;