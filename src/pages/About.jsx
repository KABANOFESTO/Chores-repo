import React from 'react';
import '../css/about.css';
import aboutImage from '../assets/about.jpg'; // Replace with your actual image path

const About = () => {
    return (
        <div className="container-fluid about-container py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-container">
                            <img src={aboutImage} alt="About Us" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="text-primary text-uppercase">About Us</h5>
                        <h1 className="display-5 mb-4">Learn More About Our Journey</h1>
                        <p className="mb-4">
                            We are dedicated to providing world-class education and resources to students around the globe.
                            Our mission is to empower individuals with knowledge and skills through innovative learning methods.
                        </p>
                        <p>
                            With a focus on quality and excellence, we offer a range of courses, resources, and opportunities that
                            cater to different learning styles and goals. Join us on this journey to achieve your dreams.
                        </p>
                        <a href="#more" className="btn btn-primary py-2 px-4 mt-3">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
