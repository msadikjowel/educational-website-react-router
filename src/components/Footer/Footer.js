import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <NavLink to='/' className="navlink">Brain Academy</NavLink>
                <NavLink to='/' className="navlink">Teach on Brain Academy</NavLink>
                <NavLink to='/' className="navlink">About Us</NavLink>
                <NavLink to='/' className="navlink">Contact Us</NavLink>
            </div>
            <div>
                <NavLink to='/' className="navlink">Careers</NavLink>
                <NavLink to='/' className="navlink">Blog</NavLink>
                <NavLink to='/' className="navlink">Help and Support</NavLink>
                <NavLink to='/' className="navlink">Affiliate</NavLink>
            </div>
            <div>
                <NavLink to='/' className="navlink">Terms</NavLink>
                <NavLink to='/' className="navlink">Privacy Policy</NavLink>
                <NavLink to='/' className="navlink">Sitemap</NavLink>
            </div>
        </div>
    );
};

export default Footer;