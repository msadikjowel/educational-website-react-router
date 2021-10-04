import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex header'>
            <div className='logo'>
                <Link to='/'><img className='' src={logo} alt="" /></Link>
            </div>
            <div className="link">
                <NavLink className="navlink" activeClassName="selected" to='/home'>Home</NavLink>
                <NavLink className="navlink" activeClassName="selected" to='/about'>About</NavLink>
                <NavLink className="navlink" activeClassName="selected" to='/Services'>Services</NavLink>
                <NavLink className="navlink" activeClassName="selected" to='/categories'>Categories</NavLink>
            </div>
        </div>
    );
};

export default Header;