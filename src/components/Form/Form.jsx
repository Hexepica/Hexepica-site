import { useState, useRef, useEffect } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { value: 'web-development', label: 'Web Development' },
        { value: 'app-development', label: 'App Development' },
        { value: 'content-writing', label: 'Content Writing' },
        { value: 'seo', label: 'Search Engine Optimization' },
        { value: 'backend', label: 'Backend Development' },
        { value: 'digital-marketing', label: 'Digital Marketing' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (value) => {
        setFormData(prevState => ({
            ...prevState,
            subject: value
        }));
        setIsDropdownOpen(false);
    };

    return (
        <div className="form-container">
            <div className="form-content">
                <h1>
                    <span className="title-light">Say Hi!</span> And Tell US<br />
                    About Your Idea
                </h1>
                <p className="subtitle">Have a nice work? Reach out us, lets work together!</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Hello"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number*</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="To Reach you out"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Where We can Replay?"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group" ref={dropdownRef}>
                            <label>What's In Your mind ?*</label>
                            <div className={`custom-select ${isDropdownOpen ? 'open' : ''}`} onClick={handleSelectClick}>
                                <div className="select-selected">
                                    {formData.subject ? options.find(opt => opt.value === formData.subject)?.label : 'Select a Thing from drop down...'}
                                </div>
                                <div className="select-options">
                                    {options.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`select-option ${formData.subject === option.value ? 'selected' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOptionSelect(option.value);
                                            }}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write the thing that's on your mind right now"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;