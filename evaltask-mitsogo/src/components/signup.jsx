import React ,{useState} from 'react'; 

import { emailRegex } from '../common/validation';
import { ErrorMessages } from '../common/constants';

import "../assets/css/signup.css";

function Signup() {
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
        <div className='signup-parent'>
            <div className="signup-text">
                <p>Sign Up and try Hexnode for 14 days </p>
            </div>
            <div className="signup-form">
                <input className='signup-input ' type='email' placeholder='Your Work Email ' onChange={handleEmailChange} onBlur={(e)=>{setEmailError("")}}/> 
                <button className='signup-button' onClick={handleSubmit}>GET STARTED </button>
            </div>
            <p className='signup-email-error'>{emailError}</p>

            <div className="signup-demo">
                <p>No credit cards required <span className='signup-link' ><a href='https://www.hexnode.com/mobile-device-management/request-demo/' target="_blank" rel="noreferrer">Request a demo</a> <span>&gt;</span> </span></p>
            </div>
        </div>
    );
}

export default Signup;