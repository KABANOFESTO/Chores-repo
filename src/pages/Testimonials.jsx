import React from 'react';
import '../css/testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Connor",
        designation: "Web Developer",
        image: "client-sarah.jpg",
        feedback: "This platform is absolutely amazing! The instructors are experts, and the content is top-notch. I highly recommend it to anyone looking to upgrade their skills.",
    },
    {
        id: 2,
        name: "Michael Scott",
        designation: "Project Manager",
        image: "client-michael.jpg",
        feedback: "The courses are well-structured and easy to follow. I have gained so much confidence in my abilities thanks to this platform.",
    },
    {
        id: 3,
        name: "Angela Martin",
        designation: "Digital Marketer",
        image: "client-angela.jpg",
        feedback: "I was skeptical at first, but this platform exceeded my expectations. It's been a game-changer for my career growth.",
    },
];

const Testimonials = () => {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <h5 className="text-primary text-uppercase text-center">Testimonials</h5>
                <h1 className="display-5 text-center mb-5">What Our Clients Say</h1>
                <div className="row g-4">
                    {testimonials.map(testimonial => (
                        <div className="col-lg-4 col-md-6" key={testimonial.id}>
                            <div className="testimonial-item bg-white rounded shadow-sm text-center p-4">
                                <img
                                    src={require(`../assets/${testimonial.image}`)}
                                    alt={testimonial.name}
                                    className="img-fluid rounded-circle mb-3"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <h4 className="mb-1">{testimonial.name}</h4>
                                <p className="text-muted">{testimonial.designation}</p>
                                <p className="text-dark fst-italic">"{testimonial.feedback}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
