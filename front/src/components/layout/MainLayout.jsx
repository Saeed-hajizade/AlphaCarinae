import React from 'react';
import { withRouter } from 'react-router';
import Header from '../common/Header';


const MainLayout = (props) => {

    const { pathname } = props.location;
    return (


        <section className="chat-app-container">

            {pathname==='/'?null:<Header/>}

            <div className="chat-app-body">

                {props.children}

            </div>



        </section>

    );
}

export default withRouter(MainLayout);