import React, { useEffect, useState } from "react";
import "../assets/css/carousel.css";

const testimonials = [
    {
        image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80",
        text: "Most complete MDM solution I found, and I tested many of them, including major names.",
        name: "Dalibor Kruljac",
        company: "KAMELEYA LTD",
    },
    {
        image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
        text: "The best MDM solution for our business needs.",
        name: "Chris Robinson",
        company: "Executive Account Manager, NCS",
    },
    {
        image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
        text: "It seemed to be in-line with everything we were looking at.",
        name: "Sarah Mitchell",
        company: "IT Director, Tech Solutions Inc.",
    },
];

const logos = [
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Flogos%2Fdark-logo%2Fgroup1-automotive.png&w=1920&q=75",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [logoIndex, setLogoIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(testimonialInterval);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (!paused) {
                setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
                setPaused(true);
                setTimeout(() => setPaused(false), 2000);
            }
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [paused]);

    const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="testimonial-container">
            <h2 className="testimonial-heading">Why should you choose Hexnode?</h2>

            <div className="testimonial-content">
                <button className="arrow-box left" onClick={handlePrev}> <img src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"></img></button>

                <div className="testimonial-card">
                    <img src={testimonials[currentIndex].image} alt="User" className="testimonial-img" />
                    <div className="testimonial-text">
                        <p>"{testimonials[currentIndex].text}"</p>
                        <div className="line-seperator"></div>
                        <h4>{testimonials[currentIndex].name}</h4>
                        <span>{testimonials[currentIndex].company}</span>
                    </div>
                </div>

                <button className="arrow-box right" onClick={handleNext}> <img src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"></img></button>
            </div>

            <div className="arrow-container">
                <button className="arrow-box mob-left" onClick={handlePrev}> <img src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg" alt="arror-left"></img></button>
                <button className="arrow-box mob-right" onClick={handleNext}> <img src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg" alt="arrow-right"></img></button>
            </div>

            <div className="logo-section">
                <div
                    className="logo-container"
                    style={{
                        transform: `translateX(-${logoIndex * 140}px)`, 
                        transition: "transform 1s ease-in-out",
                    }}
                >
                    {logos.concat(logos).map((logo, index) => (
                        <img key={index} src={logo} alt="Company logo" className="company-logo" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
