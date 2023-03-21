import React from 'react'
import './Intro.css';
import Me from "../img/Me.png";

function Intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className="i-name">Ayomide Wilfred</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item"Frontend Developer></div>
                        <div className="i-title-item">Blockchain Developer</div>
                        <div className="i-title-item">Technical Writer</div>
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">App Developer</div>
                    </div>
                </div>
                <p className="i-description">
                    I desisgn and develop services for customers of all sizes,
                     specializing in creating stylish, modern websites, web services, 
                     app development and blockchain technology.
                </p>
            </div>
            
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="myimage" className="i-img" />
        </div>
    </div>
  )
}

export default Intro
