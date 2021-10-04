import { Rating } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../Educational.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container services">
            <h2>All <span>Courses</span></h2>

            <div className="courses">
                {
                    services.map(service =>
                        <div className="cart">
                            <div className="img">
                                <img src={service.img} alt="" />
                            </div>
                            <h2>{service.name}</h2>
                            <p>{service.author}</p>
                            <div className="rating">
                                <p>{service.avgRate}</p>

                                {/* i'm currently using bootstrap, for dynamic rating using material ui  */}
                                <p> <Rating className="star" value={service.avgRate} /></p>
                                <p>({service.rated})</p>
                            </div>

                            <div className="price d-flex">
                                <h2>${service.price}</h2>
                                <h2>${service.oldPrice}</h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Services;