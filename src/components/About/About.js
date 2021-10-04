import React from 'react';
import './About.css'
import taglineImage from '../../image/about-us.png'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="container about">
            <div className="headline">
                <div className="tagline w-50">
                    <h2>We share <br /> knowledge <br /> with the world</h2>
                </div>
                <div className="img">
                    <img className="img-fluid w-100" src={taglineImage} alt="" />
                </div>
            </div>
            <div className="headline2">
                <h2>Changing learning for the better</h2>
                <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global <br /> destination for online learning, we connect people through knowledge.</p>
            </div>

            <div className="work-container">
                <div className="work">
                    <h2>Work with us</h2>
                    <p>At Udemy, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>

                    <NavLink className="link" to="/">{'Join our team >'}</NavLink>

                </div>
                <div className="research">
                    <h2>See our research</h2>
                    <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                    <NavLink className="link" to="/">{'Learn More >'}</NavLink>
                </div>
                <div className="blog">
                    <h2>Read our blog</h2>
                    <p>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</p>
                    <NavLink className="link" to="/">{'Read now >'}</NavLink>
                </div>
            </div>
        </div>
    );
};

export default About;