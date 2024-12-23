import React from 'react';
import '../css/courses.css';

const courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Learn to build dynamic and responsive websites using the latest technologies.",
        image: "course-web.jpg",
        price: "$200",
    },
    {
        id: 2,
        title: "Data Science",
        description: "Master data analysis, visualization, and machine learning techniques.",
        image: "course-data.jpg",
        price: "$300",
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Become an expert in SEO, social media, and online advertising.",
        image: "course-marketing.jpg",
        price: "$250",
    },
];

const Courses = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <h5 className="text-primary text-uppercase text-center">Our Courses</h5>
                <h1 className="display-5 text-center mb-5">Explore Our Popular Courses</h1>
                <div className="row g-4">
                    {courses.map(course => (
                        <div className="col-lg-4 col-md-6" key={course.id}>
                            <div className="course-item bg-light rounded overflow-hidden shadow-sm">
                                <img src={require(`../assets/${course.image}`)} alt={course.title} className="img-fluid" />
                                <div className="p-4">
                                    <h4>{course.title}</h4>
                                    <p>{course.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-primary h5">{course.price}</span>
                                        <a href="#enroll" className="btn btn-primary">Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
