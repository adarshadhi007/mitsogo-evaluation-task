import React, { useState, useEffect } from 'react';

import Accordion from './Accordion';  

import {imagesList} from "../common/constants";

import "../assets/css/Offers.css"; 

const Offers = () => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState('');
    const [animateImage, setAnimateImage] = useState(false);

    

    const toggleAccordion = (index) => {
        if (openAccordionIndex !== index) {
            setAnimateImage(false); 
            setTimeout(() => {
                setCurrentImage(imagesList[index - 1]); 
                setAnimateImage(true); 
            }, 200);
        }
        setOpenAccordionIndex(openAccordionIndex === index ? null : index);
    };

    useEffect(() => {
        if (openAccordionIndex === null) {
            toggleAccordion(1)
            setCurrentImage(imagesList[1]);
        }
    }, []);

    return (
        <div className="image-accordion-container">
            <h2 className='image-accordion-text'>What additional possibilities does the Kiosk mode offer?</h2>
            <div className='image-accordion-wrapper'>
            <div className="image-section">
                <img
                    src={currentImage}
                    alt="Sample"
                    className={`side-image ${animateImage ? 'slide-in' : ''}`} 
                />
            </div>

            <div className="accordion-section">
                <Accordion
                    title="Effortless kiosk deployment & management"
                    content="Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.."
                    isOpen={openAccordionIndex === 1}
                    onToggle={() => toggleAccordion(1)} 
                    src={imagesList[0]}  
                    isActive={openAccordionIndex === 1}

                />
                <Accordion
                    title="Customized interface for brand visibility"
                    content="This is the content of Accordion Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.."
                    isOpen={openAccordionIndex === 2}
                    onToggle={() => toggleAccordion(2)}
                    src={imagesList[1]}
                    isActive={openAccordionIndex === 2}


                />
                <Accordion
                    title="What more can you do with Hexnode kiosk?"
                    content="This is the content of Accordion Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.."
                    isOpen={openAccordionIndex === 3}
                    onToggle={() => toggleAccordion(3)}
                    src={imagesList[2]}
                    isActive={openAccordionIndex === 3}


                />
                 <Accordion
                    title="Secure and update your app ecosystem"
                    content="This is the content of Accordion Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.."
                    isOpen={openAccordionIndex === 4}
                    onToggle={() => toggleAccordion(4)}
                    src={imagesList[3]}
                    isActive={openAccordionIndex === 4}


                />
            </div>
            </div>
        </div>
    );
};

export default Offers;
