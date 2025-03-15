import React from 'react';

import "../assets/css/accordian.css";

const Accordion = ({ title, content, isOpen, onToggle, src,isActive }) => {
    return (
        <div className="accordion">

            <div className="accordion-header" onClick={onToggle}>
                <h3 className={isActive? 'accordion-header-active':''}>{title}</h3>
            </div>
            {isOpen && (
                <>
                    <div className='accordian-mobile-image'>
                        <img src={src} className='' alt="accordian-image" />

                    </div>
                    <div className="accordion-content">
                        <p>{content}</p>
                    </div>

                    <p className='accordian-button'> <a href='https://www.hexnode.com/mobile-device-management/cloud/signup/' target="_blank" rel="noreferrer">TRY FOR FREE &gt;</a></p>
                </>
            )}
        </div>
    );
};

export default Accordion;
