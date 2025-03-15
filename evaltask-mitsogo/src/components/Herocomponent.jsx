import React ,{useState}from 'react';  

import { emailRegex } from '../common/validation';

import "../assets/css/herocomponent.css";

import heroImg from "../assets/images/hexnode-kiosk.webp"; 

import { ErrorMessages } from '../common/constants';

function Herocomponent() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailRegex.test(email)) {
          setEmailError(ErrorMessages.Email);
        } else {
          setEmailError('');
        }
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailRegex.test(e.target.value)) {
          setEmailError(''); 
        } else {
          setEmailError('Invalid email address.');
        }
      };
    return (
        <div className='hero-component'> 
        <div className='hero-text-section'> 
            <div className='hero-text'>
            <p >Turn your devices into kiosks in a few minutes with Hexnode UEM</p>
            </div> 
            <div className='hero-form'>
                <input className='hero-email' type='email' placeholder='Your Work Email ' onChange={handleEmailChange} onBlur={(e)=>{setEmailError("")}}/> 
                <button className='hero-button' onClick={handleSubmit}>GET STARTED NOW!</button> 
               
            </div>
            <p className='hero-email-error'>{emailError}</p>

        </div>
        <div className='hero-img'>
            <img src={heroImg} alt='hero' />
        </div>

            
        </div>
    );
}

export default Herocomponent;