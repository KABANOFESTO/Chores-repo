import React from 'react';
import '../css/style.css';

const Services = () => {
    const services = [
        {
            icon: 'fa-graduation-cap',
            title: 'Skilled Instructors',
            description: 'Learn from the best with our team of highly skilled and experienced instructors.',
        },
        {
            icon: 'fa-globe',
            title: 'Online Classes',
            description: 'Flexible and interactive online classes designed to fit your schedule.',
        },
        {
            icon: 'fa-home',
            title: 'Home Projects',
            description: 'Engage in hands-on projects from the comfort of your home.',
        },
        {
            icon: 'fa-book-open',
            title: 'Book Library',
            description: 'Access a wide range of resources and materials through our extensive library.',
        },
    ];

    return (
        <div className="container-fluid services-container py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase">Our Services</h5>
                    <h1 className="display-5">Explore Our Top Services</h1>
                </div>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="service-card text-center p-4">
                                <div className="service-icon mb-4">
                                    <i className={`fa ${service.icon} fa-3x text-primary`}></i>
                                </div>
                                <h5 className="mb-3">{service.title}</h5>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
