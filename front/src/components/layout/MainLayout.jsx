import React from 'react';
import { withRouter } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';


const MainLayout = (props) => {

    const { pathname } = props.location;
    return (


        <section className="chat-app-container">

       

            <div className="chat-app-body">

                {props.children}

            </div>

           

        </section>

    );
}

export default withRouter(MainLayout);