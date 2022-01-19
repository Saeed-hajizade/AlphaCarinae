import React from 'react';
import { NavLink } from 'react-router-dom';


const AboutNav = () => {
    return (
            <div className='about-nav'>
                <div className='about-nav-logo'>
                    <img src="/images/logo.png" alt="" />
                </div>

                <div className='about-nav-menu'>
                <div className="about-nav-menu-items"><NavLink to="/" exact activeStyle={{color:'red'}} className="about-nav-menu-links">خانه</NavLink></div>

                    <div className="about-nav-menu-items"><NavLink to="/AboutMe" activeStyle={{color:'red'}} className="about-nav-menu-links">درباره ی اپلیکیشن</NavLink></div>
             
                    <div className="about-nav-menu-items"><NavLink to="/IntroTeam" activeStyle={{color:'red'}} className="about-nav-menu-links ">اعضای تیم</NavLink></div>
                    <div className="about-nav-menu-items"><NavLink to="/ContactUs" activeStyle={{color:'red'}} className="about-nav-menu-links">تماس با ما</NavLink></div>
                </div>
            </div>
    );
}
export default AboutNav;