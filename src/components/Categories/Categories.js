import React from 'react';
import './Categories.css'

const Categories = () => {
    return (
        <div className="container categories">
            <h2>Top <span>Categories</span></h2>
            <div className="category-container">

                <div className="category-1">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="" />
                    </div>
                    <h4>Design</h4>
                </div>
                <div className="category-2">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="" />
                    </div>
                    <h4>Development</h4>
                </div>
                <div className="category-3">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="" />
                    </div>
                    <h4>Marketing</h4>
                </div>
                <div className="category-4">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="" />
                    </div>
                    <h4>IT and Software</h4>
                </div>
                <div className="category-5">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="" />
                    </div>
                    <h4>Personal Development</h4>
                </div>
                <div className="category-6">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="" />
                    </div>
                    <h4>Business</h4>
                </div>
                <div className="category-7">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="" />
                    </div>
                    <h4>Photograpy</h4>
                </div>
                <div className="category-8">
                    <div className="img">
                        <img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt="" />
                    </div>
                    <h4>Music</h4>
                </div>

            </div>
        </div>
    );
};

export default Categories;