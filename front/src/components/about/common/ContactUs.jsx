import React, { Fragment } from 'react';


const ContactUs = () => {
    return (
        <Fragment>
            <div className='container contact-us-container'>

                <div className='contact-us-content position-relative row' style={{ height: '500px' }}>
                    <div className='contact-us-form col-md-7' style={{ direction: 'rtl', padding: '40px 20px' }}>
                        <h5 className='text-right'>در تماس باشید</h5>
                        <form>
                            <div className="form-row mt-5">
                                <div className="form-group col-md-6">

                                    <input type="text" className="form-control" id="inputEmail4" placeholder="نام" style={{ padding: '25px 10px' }} />
                                </div>
                                <div className="form-group col-md-6">

                                    <input type="email" className="form-control" id="inputEmail4" placeholder="ایمیل" style={{ padding: '25px 10px' }} />
                                </div>
                            </div>
                            <div className="form-group mt-5">

                                <input type="text" className="form-control" id="inputAddress" placeholder="موضوع" style={{ padding: '25px 10px' }} />
                            </div>

                            <div className="form-group mt-5">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='متن پیام...'></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary float-right">ارسال</button>



                        </form>
                    </div>
                    <div className='contact-us-address col-md-5 text-light'>
                        <h5 className='text-right'>تماس با ما</h5>
                        <div className='addresses-container'>
                            <div className="address-item">
                                <span className='address'>
                                    <span className='address-icon-container'>
                                        <i className='fa fa-map-marker'>

                                        </i>
                                    </span>
                                    <p className='address-text'>
                                        <h4 className='address-title'>
                                            Address:
                                        </h4>
                                        <i> تهران </i>
                                    </p>
                                </span>
                            </div>
                            <div className="address-item">
                                <span className='address'>
                                    <span className='address-icon-container'>
                                        <i className='fa fa-phone'>
                                        </i>
                                    </span>
                                    <p className='address-text'>
                                        <h4 className='address-title'>
                                            Phone:
                                        </h4>
                                        <i>992-1865340</i>
                                    </p>
                                </span>
                            </div>
                            <div className="address-item">
                                <span className='address'>
                                    <span className='address-icon-container'>
                                        <i className='fa fa-telegram'>
                                        </i>
                                    </span>
                                    <p className='address-text'>
                                        <h4 className='address-title'>
                                            Email:
                                        </h4>
                                        <i>AlphaCarinae@gmai.com</i>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default ContactUs;