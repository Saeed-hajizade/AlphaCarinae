import React, { Fragment } from 'react';


const IntroducingTeam = () => {
    return (
        <Fragment>
            <div className="container">
                <div className='row flex-row-reverse justify-content-between'>
                    <div className='col-md-3'>

                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="/images/images.png" alt="Card image cap" />
                            <div className="card-body" style={{direction:'rtl'}}>
                                <h5 className="card-title text-right">سعید حاجی زاده</h5>
                                <h6 className="card-subtitle mb-2 mt-3 text-muted text-right">طراح و برنامه نویس وب</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="/images/899048ab0cc455154006fdb9676964b3.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-right">محمد شیرازی</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-right" dir='rtl'>  برنامه نویس front </h6>
                           
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="/images/depositphotos_115748586-stock-illustration-young-executive-woman-profile-icon.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-right">فاطمه سوکی </h5>
                                <h6 className="card-subtitle mb-2 text-muted text-right" dir='rtl'>برنامه نویس front</h6>                      
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row flex-row-reverse justify-content-between'>
                    <div className='col-md-3'>

                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="/images/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg" alt="Card image cap" />
                            <div className="card-body" style={{direction:'rtl'}}>
                                <h5 className="card-title text-right">محمد حسین پورمحمدی</h5>
                                <h6 className="card-subtitle mb-2 mt-3 text-muted text-right">طراحی لوگو</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="/images/depositphotos_115748586-stock-illustration-young-executive-woman-profile-icon.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-right">درسا سادات هرمزی</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-right">  برنامه نویس وب </h6>
                           
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="/images/899048ab0cc455154006fdb9676964b3.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-right">سید علی فردوسی  </h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted text-right">برنامه نویس وب</h6>                       */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default IntroducingTeam;