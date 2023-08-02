import React from 'react';


const Header = () => {
    return (
        <header  className="chat-app-header d-flex justify-content-center py-2">
            <div style={{width:'60%'}} className='chat-app-header-contents d-flex align-items-center justify-content-center justify-content-lg-start justify-content-md-start '>
            <img src="/images/carinae_logo.png" alt="logo" className='img-fluid'  style={{maxWidth:'150px'}}/>
            </div>
        </header>
    );
}

export default Header;