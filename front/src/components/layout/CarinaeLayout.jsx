import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';



const CarinaeLayout = ({ children, location }) => {


    return (
        <Fragment>
            <div className="mt-5 d-flex justify-content-center" style={{ height: '630px' }}>
                <div className="row clearfix h-100 w-100 justify-content-center">
                    <div className="col-lg-12 row h-100">

                        <div className=" col-12">
                            <div className={location.pathname==="/EditUser"? 'chat-app h-100 d-flex justify-content-center align-items-center':'chat-app'}>


                                {children}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(CarinaeLayout);