import React, { Fragment } from 'react';


const AboutMe = () => {
    return (
        <Fragment>
            <div className='about-me-container'>
                
                <div className='about-me-dis'>
                    <h3>CARINAE</h3>
                    <p>
                        یک سیتم پیام رسان هوشمند می باشد که توسط جمعی از دانشجو ها به شکل تیمی در ماه آذر 1400 طراحی و ساخته شده است ,
                        این اپلیکیشن می تواند یک فضای ایمن و سریع را برای ارتباط شما با دوستانتان را فراهم سازد
                    </p>
                </div>

                <div className='about-me-pic'>
                    <img src="/images/GEN-Business-Management-Teams-Teamwork-1290x860-1.jpg" alt="" />
                </div>
            </div>
        </Fragment>
    );
}

export default AboutMe;