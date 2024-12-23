import React from 'react';
import "../css/style.css";
import Services from '../pages/Services';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Instructors from '../pages/Instructors';
import Testimonials from '../pages/Testimonials';
import HeaderCarousel from '../pages/HeaderCarousel';



import {
    Users,
    GraduationCap,
    Globe,
    Home,
    BookOpen,
    Star,
    Clock,
    UserCheck,
    Facebook,
    Twitter,
    Instagram
} from 'lucide-react';

// Carousel Section
const HeaderCarousel = () => {
    const carouselItems = [
        {
            image: '',
            title: 'The Best Online Learning Platform',
            description: 'Discover a world of expert-led courses designed to enhance your skills and advance your career. With flexible scheduling, interactive content, and personalized learning paths, our platform makes education accessible to everyone.'
        },
        {
            image: '',
            title: 'Flexible and Engaging Classes',
            description: 'Learn from anywhere, anytime. With our intuitive platform, you can balance work, life, and education effortlessly.'
        }
    ];

    return (
        <div className="container-fluid p-0 mb-5">
            <div className="relative">
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative">
                        <img
                            src={item.image}
                            alt="Carousel"
                            className="w-full h-screen object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <div className="container text-center text-white">
                                <h5 className="text-primary uppercase mb-3 animate-slideInDown">
                                    Best Online Courses
                                </h5>
                                <h1 className="text-5xl mb-4 animate-slideInDown">{item.title}</h1>
                                <p className="text-xl mb-4">{item.description}</p>
                                <div className="flex justify-center space-x-4">
                                    <button className="btn btn-primary animate-slideInLeft">
                                        Read More
                                    </button>
                                    <button className="btn btn-light animate-slideInRight">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Other Sections (Services, About, Courses, Instructors, Testimonials) are as in your provided code
// They will work seamlessly with this carousel and the CSS styling provided in the next section.

const LandingPage = () => {
    return (
        <div>
            <HeaderCarousel />
            <Services />
            <About />
            <Courses />
            <Instructors />
            <Testimonials />
        </div>
    );
};

export default LandingPage;
