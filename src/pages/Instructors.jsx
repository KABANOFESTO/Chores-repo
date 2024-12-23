import React from 'react';
import '../css/instructors.css';

const instructors = [
    {
        id: 1,
        name: "John Doe",
        specialization: "Web Development Expert",
        image: "instructor-john.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        id: 2,
        name: "Jane Smith",
        specialization: "Data Scientist",
        image: "instructor-jane.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        id: 3,
        name: "Emily Brown",
        specialization: "Digital Marketing Guru",
        image: "instructor-emily.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
];

const Instructors = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <h5 className="text-primary text-uppercase text-center">Our Instructors</h5>
                <h1 className="display-5 text-center mb-5">Meet Our Expert Instructors</h1>
                <div className="row g-4">
                    {instructors.map(instructor => (
                        <div className="col-lg-4 col-md-6" key={instructor.id}>
                            <div className="instructor-item bg-light rounded text-center p-4 shadow-sm">
                                <img
                                    src={require(`../assets/${instructor.image}`)}
                                    alt={instructor.name}
                                    className="img-fluid rounded-circle mb-3"
                                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                />
                                <h4 className="mb-2">{instructor.name}</h4>
                                <p className="text-muted mb-3">{instructor.specialization}</p>
                                <div className="d-flex justify-content-center">
                                    <a href={instructor.social.facebook} className="btn btn-outline-primary btn-sm mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href={instructor.social.twitter} className="btn btn-outline-primary btn-sm mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href={instructor.social.linkedin} className="btn btn-outline-primary btn-sm mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;
