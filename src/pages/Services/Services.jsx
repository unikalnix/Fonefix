import React, { useState, useEffect } from 'react';
import './Services.css'
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'service-categories', 'why-choose-us', 'booking-info', 'testimonials'];
            let current = '';

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = section;
                    }
                }
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const navHeight = 120; // Height of the fixed navigation bar
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <div className="services-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Expert Phone Repair Services</h1>
                    <p>Get your device back in top shape!</p>
                    <button onClick={(e) => handleNavClick(e, 'service-categories')} className="cta-button">Explore Our Services</button>
                </div>
            </section>

            {/* Navigation Bar */}
            <nav className="services-nav">
                <ul>
                    <li><a href="#overview" onClick={(e) => handleNavClick(e, 'overview')} className={activeSection === 'overview' ? 'active' : ''}>Overview</a></li>
                    <li><a href="#service-categories" onClick={(e) => handleNavClick(e, 'service-categories')} className={activeSection === 'service-categories' ? 'active' : ''}>Services</a></li>
                    <li><a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')} className={activeSection === 'why-choose-us' ? 'active' : ''}>Why Choose Us</a></li>
                    <li><a href="#booking-info" onClick={(e) => handleNavClick(e, 'booking-info')} className={activeSection === 'booking-info' ? 'active' : ''}>Booking Info</a></li>
                    <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a></li>
                </ul>
            </nav>

            {/* Overview Section */}
            <section id="overview" className="services-overview">
                <h2>Our Phone Repair Services</h2>
                <p>We offer a wide range of phone repair services to get your device back in top shape!</p>
            </section>

            {/* Service Categories Section */}
            <section id="service-categories" className="service-categories">
                <h3>Our Services</h3>
                <div className="service-grid">
                    <div className="service-category">
                        <div className="service-icon screen-icon"></div>
                        <h4>Screen Replacement</h4>
                        <p>Fast and affordable screen replacement services for all major phone brands.</p>
                        <span className="price">Starting at $79.99</span>
                    </div>
                    <div className="service-category">
                        <div className="service-icon battery-icon"></div>
                        <h4>Battery Replacement</h4>
                        <p>Replace your old battery with a high-quality replacement for longer life.</p>
                        <span className="price">Starting at $49.99</span>
                    </div>
                    <div className="service-category">
                        <div className="service-icon water-icon"></div>
                        <h4>Water Damage Repair</h4>
                        <p>Professional cleaning and repair services to revive water-damaged devices.</p>
                        <span className="price">Starting at $89.99</span>
                    </div>
                    <div className="service-category">
                        <div className="service-icon software-icon"></div>
                        <h4>Software Issues</h4>
                        <p>Fix software glitches and issues to enhance your device's performance.</p>
                        <span className="price">Starting at $39.99</span>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-choose-us" className="why-choose-us">
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Experienced Technicians</li>
                    <li>Quick Turnaround Time</li>
                    <li>Warranty on All Repairs</li>
                    <li>Affordable Pricing</li>
                </ul>
            </section>

            {/* Booking Information Section */}
            <section id="booking-info" className="booking-info">
                <h3>How to Book Our Services</h3>
                <p>Booking a service is easy! You can:</p>
                <ul>
                    <li>Call us at (555) 123-4567</li>
                    <li>Visit our shop during working hours</li>
                    <li>Book an appointment online through our website</li>
                </ul>
                <button className="book-now-button">Book Now</button>
            </section>

            {/* Customer Testimonials Section */}
            <section id="testimonials" className="customer-testimonials">
                <h3>What Our Customers Say</h3>
                <div className="testimonial-grid">
                    <blockquote>
                        <p>"Great service! My phone was fixed in no time!"</p>
                        <cite>- Jane Doe</cite>
                    </blockquote>
                    <blockquote>
                        <p>"Highly recommend! Professional and quick!"</p>
                        <cite>- John Smith</cite>
                    </blockquote>
                    <blockquote>
                        <p>"Excellent customer service and quality repairs."</p>
                        <cite>- Alice Johnson</cite>
                    </blockquote>
                </div>
            </section>

            {/* Call to Action */}
            <div className="cta">
                <h3>Ready to Get Started?</h3>
                <button onClick={() =>  navigate('/contact')}>Contact Us</button>
            </div>
        </div>
    );
};

export default Services;