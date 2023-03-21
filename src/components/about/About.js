import React from 'react'
import './about.css';
import { FiGithub } from 'react-icons/fi';


function About() {
  return (
    <div className='a'>
        <div className="a-left">
         <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://media.istockphoto.com/id/1358843391/photo/a-man-photographer-with-a-camera-takes-a-photo-in-the-dark-copy-space.jpg?s=612x612&w=0&k=20&c=6wpN7xto8t13IS1DTMCY05BZm_dGImg4Kg2DrjtbYbw=" alt="" className="a-img" />
        </div> 
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            As a Web3 Developer,Frontend Developer and Technical Writer
            </p>
            <p className="a-desc">
            I am a skilled Web3 developer with a strong focus on the Ethereum ecosystem. I am proficient in using tools such as Hardhat, Remix, and IPFS to develop decentralized applications (dApps) and smart contracts that are secure, efficient, and scalable. I am well-versed in Solidity, the programming language used to write smart contracts on Ethereum, and I have experience deploying smart contracts on the Ethereum network.

            </p>
            <h3> I specialize in creating beautiful, responsive, and user-friendly interfaces using modern technologies such as React.js and Next.js. I have a strong understanding of HTML, CSS, and JavaScript, as well as other front-end technologies such as Redux, Sass, and styled-components.</h3>
            <div className="a-award">
                <img src="https://media.istockphoto.com/id/1347499538/photo/close-up-low-angle-view-group-of-star-shape-crystal-trophy.jpg?b=1&s=612x612&w=0&k=20&c=xYACIFsXh_rzbFJoBXJ97juLJ6OHePEY_m64L7QJ5SU=" alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Stack</h4>
                    <p className="a-award-desc">
                    <ul>React</ul>
                    <ul> <FiGithub />Git</ul>
                    <ul>Solidity</ul>
                    <ul>Remix</ul>
                    <ul>IPFS</ul>
                    

                    
                    </p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
