import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Fragment } from 'react/cjs/react.production.min';
import Footer from './common/Footer';
import Header from './common/Header';
import Login from './login/Login';


const StartPage = () => {
  



    return (
        <Fragment>


            <div className='d-flex flex-column  justify-content-between h-100'>
                <Header />
                <main className='start-page-main d-flex flex-column align-items-center justify-content-between  flex-lg-row flex-md-row flex-sm-column align-items-sm-center justify-content-sm-between  justify-content-lg-between justify-content-md-between  overflow-auto'>
                    <div id="carouselExampleIndicators" className="carouser-section carousel slide d-flex align-items-center col-lg-5 col-md-5 col-12 overflow-hidden" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 rounded"  src="/images/20230802_130803_434116509.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>با دوستانتان در ارتباط باشید</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded "  src="/images/blockchain-la-tecnologia-perfecta-para-cumplir-con-las-leyes-de-proteccion-de-datos.jpeg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>چت ایمن</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded"  src="/images/speed-photo.jpg" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>با سرعت بالا</h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className=' horizontal-dividing-line-container h-100 d-lg-flex d-md-flex justify-content-center align-items-center col-lg-1 d-none'>
                        <div className='line'></div>
                    </div>

                 <Login/>
                </main>


                <Footer />
            </div>

        </Fragment>
    );
}

export default StartPage;