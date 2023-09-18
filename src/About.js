import { FaFacebook, FaDev, FaGithub, FaLinkedin, FaSquareInstagram  } from 'react-icons/fa6';
import ProfilePicSlider from './ProfilePicSlider';
import profilePic1 from './images1.jpg';
import profilePic2 from './images1.jpg';
import profilePic3 from './images1.jpg';

const About = () => {

    const images = [
        profilePic1,
        profilePic2,
        profilePic3
        // Add more image URLs as needed
      ];

    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="about-column slider">
                <ProfilePicSlider images={images}/>
            </div>
            <div className="about-column">
                <h2>I'm Andrew Jot</h2>
                <h3>Full Stack Developer</h3>
                <p>I am a Full-Stack developer based in Melbourne, Australia.  
                I've honed my proficiency in both front-end and back-end technologies, from HTML
                , CSS, and JavaScript, to React, Express.js, Node.js, and MongoDB SQL. 
                I thrive on turning innovative ideas into functional and 
                user-friendly web applications, leveraging my expertise in responsive design, 
                React framework, and database management. I'm a high appetite learner who thrives in 
                collaborative environments. During my free time, I've had the privilege of working 
                on a wide array of projects, from career portfolio to inventory management systems. 
                I'm eager to contribute my ever-growing skills to real-world projects.</p>
                <p>Let's work together to bring your digital visions to life!</p>

                <div className='about-icons'>
                    <a className="icon-github" href='https://github.com/Andrewjotjz/Andrewjotjz'><FaGithub /></a>
                    <a className="icon-linkedin" href='https://www.linkedin.com/in/andrew-jot-36b48b134/'><FaLinkedin /></a>
                    <a className="icon-facebook" href='https://www.facebook.com/andrew.jotjz/'><FaFacebook /></a>
                    <a className="icon-instagram" href='https://www.instagram.com/andrewjotjz/'><FaSquareInstagram /></a>
                    <a className="icon-dev" href='https://dev.to/andrewjotjz'><FaDev /></a>
                </div>
                <a className="icon-resume" href='https://drive.google.com/file/d/1ds3kqmDJ3_lrcMp7A5oMKkUflY6hAeWw/view?usp=sharing'>Résumé</a>
            </div>
            
            
        </div>
    );
}
 
export default About;