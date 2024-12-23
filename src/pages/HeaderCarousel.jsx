import React from 'react';
import '../css/style.css';

const HeaderCarousel = () => {
    const carouselItems = [
        {
            image: '',
            title: 'The Best Online Learning Platform',
            description: 'Discover a world of expert-led courses designed to enhance your skills and advance your career. With flexible scheduling, interactive content, and personalized learning paths, our platform makes education accessible to everyone.',
        },
        {
            image: '',
            title: 'The Best Online Learning Platform',
            description: 'Discover a world of expert-led courses designed to enhance your skills and advance your career. With flexible scheduling, interactive content, and personalized learning paths, our platform makes education accessible to everyone.',
        },
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
                        <div className="absolute inset-0 bg-black/70 flex items-center">
                            <div className="container">
                                <div className="max-w-2xl">
                                    <h5 className="text-primary uppercase mb-3 animate-slideInDown">
                                        Best Online Courses
                                    </h5>
                                    <h1 className="text-5xl text-white mb-4 animate-slideInDown">
                                        {item.title}
                                    </h1>
                                    <p className="text-xl text-white mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex space-x-4">
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeaderCarousel; 
