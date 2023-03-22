import React, { useContext, useRef, useState } from 'react'
import {FaPhone,
    FaEnvelope,
    FaLinkedin,
    FaTwitter, 
    FaGithubSquare
} from "react-icons/fa";
import emailjs from 'emailjs-com';


import './contact.css';
import { ThemeContext } from '../../context';
function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm(
            'service_1piol4r', 
            'template_5qfnuxb',
             formRef.current, 
             'kJfEMWargoxfroGaR'
             )
        .then((result) => {
            console.log(result.text);
            setDone(true);
            formRef.current.reset(); // reset the form
        }, (error) => {
            console.log(error.text);
        });

    }

  return (
    <div className='c'>
       <div className="c-bg"></div> 
       <div className="c-wrapper">
        <div className="c-left">
            <div className="c-title">Let's discuss your project</div>
            <div className="c-info">
                <div className="c-info-item">
                <FaPhone className='c-icon' />
                +2348143839812
                </div>
                <div className="c-info-item">
                <FaEnvelope className='c-icon' />
                ayowilfred1995@gmail.com
                </div>
                <div className="c-info-item">
                <a href='https://www.linkedin.com/in/ayomide-wilfred-95083a104/'  target="_blank" rel="noreferrer">
                <FaLinkedin className='c-icon' href='' />
                Linkedin
                </a>
                </div>
                <div className="c-info-item">
                <a href='https://twitter.com/ayomidewilfred9'  target="_blank" rel="noreferrer">
                <FaTwitter className='c-icon' />
                Twitter
                </a>
                </div>
                <div className="c-info-item">
               <a href='https://github.com/ayowilfred95'  target="_blank" rel="noreferrer">
               <FaGithubSquare className='c-icon' />
               Github
                </a> 
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>What's your story </b> Get in touch. Always
                freelancing if the right project comes along.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} >
                <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name='user_name' />
                <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' />
                <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder='Email' name='user_email' />
                <textarea style={{backgroundColor: darkMode && "#333" }}  rows="5" placeholder='Message' name='message' />
                <button>Submit</button>
                <div className='c-comment'>
                 {done && "Thank you for your comment, we will get back to you shortly..."}
                </div>
               
            </form>
        </div>
       </div>
    </div>
  )
}

export default Contact
