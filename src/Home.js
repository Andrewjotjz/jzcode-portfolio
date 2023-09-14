import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import profilePic from './images3.jpg';

const Home = () => {

    const [text, setText] = useState('');
    const originalText = 'hello, world!';
    const typingSpeed = 100; // milliseconds per character

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
    
        if (currentIndex < originalText.length) {
            setText(originalText.substring(0, currentIndex + 1));
            currentIndex++;
        } else {
            clearInterval(intervalId);
        }
        }, typingSpeed);

        return () => {
        clearInterval(intervalId);
        };
    }, []);

    return (
        <main className="home">
            <div className="home-left-column">
                <h1><span className="typing-animation">{text}</span><br/>I'm Andrew Jot</h1>
                <p>I am a <span>Full Stack Developer</span></p>
                <Link to="/about">About Me</Link>
            </div>
            <div className="home-right-column">
                <img src={profilePic} alt="profile" />
            </div>
        </main>
    );
}
 
export default Home;