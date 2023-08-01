import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Fragment } from 'react/cjs/react.production.min';
import Footer from './common/Footer';
import Header from './common/Header';


const StartPage = () => {
    return (
        <Fragment>
            <div className='start-page-container'>
                {/* <nav className='start-page-nav clearfix'>
                    <div className='start-page-nav-logo'>
                        <img src="/images/logo.png" alt="" />
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
                </nav> */}
                <Header />
                <main className='start-page-main d-flex flex-lg-row flex-md-row justify-content-lg-between justify-content-md-between '>
                    <div id="carouselExampleIndicators" className="carouser-section carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block" style={{ width: '400px', height: '300px' }} src="/images/istockphoto-493282372-170667a.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>با دوستانتان در ارتباط باشید</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block " style={{ width: '400px', height: '300px' }} src="/images/blockchain-la-tecnologia-perfecta-para-cumplir-con-las-leyes-de-proteccion-de-datos.jpeg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>چت ایمن</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block" style={{ width: '400px', height: '300px' }} src="/images/1c405d67bc666fc8048ce8d77ee56ab9.png" alt="Third slide" />
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
                    <div className='horizontal-dividing-line-container'>
                        <div className='line'></div>
                    </div>
                    <div className='login-section gray-mellow'>

                        <form className="w-100">

                            <div className='country-select-list'>
                                <select class="form-control">
                                    <option value={'iran'}>iran</option>
                                </select>
                            </div>
                            <div class="form-group mt-5 login-section-information">



                                <label for="formGroupExampleInput">موبایل</label>
                                <div className='d-flex justify-content-center align-items-center w-100 user-information-for-login'>
                                    <input type="text" class="form-control code-country-for-login" readOnly id="formGroupExampleInput" placeholder="" value={'+98'} />
                                    <input type="text" class="form-control user-phone-for-login" id="formGroupExampleInput" placeholder="XXX XXX XXX" />
                                </div>

                            </div>

                            <div className='text-center'>
                                <input type="submit" className='bg-app-color submit-btn-for-login' value="ارسال کد" />
                            </div>
                        </form>

                    </div>
                </main>
                <Footer />
            </div>
        </Fragment>
    );
}

export default StartPage;