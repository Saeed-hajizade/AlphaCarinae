import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { toastError, toastSucess } from '../../utils/Toastify';
import { Route, Switch } from 'react-router';
import { SignInService } from '../../services/userServices';
import PersonalChat from '../chatroom/PersonalChat';
import { NavLink } from 'react-router-dom';



const Login = (props) => {

    const [username, setUsername] = useState('');
    const [gender, setGender] = useState(null);
    const [password, setPassword] = useState('');


    const clearUser = () => {
        setUsername('');

        setPassword('')

    }
    const user = {
        username,

        password

    }

    const handleSinUpFormSubmit = e => {
        e.preventDefault();



        axios.post("http://localhost:4000/SignUp", {
            username,

            password
        }).then((response) => {


            clearUser();
            if (response.status === 200) {
                toastError('کاربری بامشخصات موجود می باشد')
            }
            if (response.status === 201) {
                toastSucess("کاربر باموفقییت ساخته شد,لطفا وارد شوید")
                let accountContainer = document.querySelector('.account-container');
                accountContainer.classList.remove('right-panel-active')
            }

        }

        ).catch(err => {
            alert("مشکلی پیش امده")
        });

    }



    const handleSignInFormSubmit = async e => {
        e.preventDefault();

        try {
            const {status, data } = await SignInService(user);
            if (status === 200) {
                toastSucess('ورود باموفقییت انجام شد');
                const loginedUser = data.user

             localStorage.setItem('userId',data.user._id)

                props.history.push({
                    pathname: '/PersonalChat',
                    state: {
                        loginedUser
                    }
                });

            }

        } catch (ex) {
            toastError('مشکلی پیش امده')

        }



    }


    return (

        <Fragment>

            <div className="account-wrapper">
                <div className="account-container">
                    <div className="sign-up-container">
                        <form onSubmit={handleSinUpFormSubmit}>
                            <h1>Create Account</h1>
                            <div className="social-links">
                                <div>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Name" />
                            {/* <input type="email" placeholder="Email" /> */}

                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                            <button className="form_btn">Sign Up</button>
                        </form>
                    </div>
                    <div className="sign-in-container">
                        <form onSubmit={handleSignInFormSubmit}>
                            <h1>Sign In</h1>
                            <div className="social-links">
                                <div>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <span>or use your account</span>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="نام کاربری" />
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="رمز عبور" />
                            <button className="form_btn">Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay-left">
                            <h1>Welcome Back</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button id="signIn" className="overlay_btn">Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1>Hello, Friend</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button id="signUp" className="overlay_btn">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <script src="./script.js"></script>
        </Fragment>
    );
}

export default Login;