import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Fragment } from 'react/cjs/react.production.min';


const StartPage = () => {
    return (

        <Fragment>

            <div className='start-page-container'>
                <nav className='start-page-nav clearfix'>
                    <div className='start-page-nav-logo'>
                        <img src="/images/logo.png" alt=""  />
                    </div>
                    <div className='start-page-nav-menu'>

                        <div className='start-page-nav-menu-container'>
                            <div className='start-page-nav-menu-container-item'>
                                <NavLink to="/AboutMe" className='start-page-nav-menu-container-link'>
                                    درباره ما
                                </NavLink>
                            </div>
                        </div>
                        <div className='start-page-notification'><i className='fa fa-bell-o'></i></div>
                    </div>
                </nav>
                <main className='start-page-main'>

                    <div id="carouselExampleIndicators" className="carousel slide w-25" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block" style={{width:'400px',height:'300px'}} src="/images/istockphoto-493282372-170667a.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>با دوستانتان در ارتباط باشید</h5>
                                    
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block " style={{width:'400px',height:'300px'}} src="/images/blockchain-la-tecnologia-perfecta-para-cumplir-con-las-leyes-de-proteccion-de-datos.jpeg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>چت ایمن</h5>
                                    
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block" style={{width:'400px',height:'300px'}} src="/images/1c405d67bc666fc8048ce8d77ee56ab9.png" alt="Third slide" />
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


                </main>
                <footer className='start-page-footer'>

                    <NavLink to="/Login" className='footer-link'>همین حالا شروع کن<i className='fa fa-angle-right'></i></NavLink>


                </footer>
            </div>

        </Fragment>
    );
}

export default StartPage;