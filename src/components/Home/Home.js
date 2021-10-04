import { Rating } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('../EducationalShort.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses)

    return (
        <div className="home container">
            <h2>Top Courses in <span>Web Development</span></h2>

            <div className="highlight-course">
                {
                    courses.map(course =>
                        <div className="cart">
                            <div className="img">
                                <img src={course.img} alt="" />
                            </div>
                            <h2>{course.name}</h2>
                            <p>{course.author}</p>
                            <div className="rating">
                                <p>{course.avgRate}</p>

                                {/* i'm currently using bootstrap, for dynamic rating using material ui  */}
                                <p> <Rating className="star" value={course.avgRate} /></p>
                                <p>({course.rated})</p>
                            </div>

                            <div className="price d-flex">
                                <h2>${course.price}</h2>
                                <h2>${course.oldPrice}</h2>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Home;