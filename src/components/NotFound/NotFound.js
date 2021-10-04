import React from 'react';
import './NotFound.css'
import NotFoundImg from '../../image/not-found.png'
import Button from '@restart/ui/esm/Button';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <img className='img-fluid' src={NotFoundImg} alt="" />

            <NavLink to="/"><Button>Back to Home</Button></NavLink>
        </div>
    );
};

export default NotFound;