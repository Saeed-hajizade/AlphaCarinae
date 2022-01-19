import React, { Fragment } from 'react';
import AboutFooter from './common/AboutFooter';
import AboutNav from './common/AboutNav';



const AboutLayout = ({ children }) => {
    return (
        <Fragment>
            <div className='about-container'>
                <AboutNav />

                {children}

                <AboutFooter />
            </div>
        </Fragment>
    );
}

export default AboutLayout;