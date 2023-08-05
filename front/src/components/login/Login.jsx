import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { toastError, toastSucess } from '../../utils/Toastify';
import { Route, Switch } from 'react-router';
import { SignInService } from '../../services/userServices';
import PersonalChat from '../chatroom/PersonalChat';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';



const Login = (props) => {

    const [username, setUsername] = useState('');
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
            const { status, data } = await SignInService(user);
            if (status === 200) {
                toastSucess('ورود باموفقییت انجام شد');
                const loginedUser = data.user

                localStorage.setItem('userId', data.user._id)

                props.history.push({
                    pathname: '/personalchat',
                    state: {
                        loginedUser
                    }
                });

            }

        } catch (ex) {
            toastError('مشکلی پیش امده')

        }



    }




    const [Email, setEmail] = useState('')


    const handelformsubmit =  (e) => {
        e.preventDefault();

        console.log(e)
        // To Do Send Code
        props.history.push({
            pathname: '/verification',
            state: {
                userEmail: Email
            }
        });

    }
    return (
        <Fragment>
            <div className='login-section gray-mellow d-flex align-items-center col-lg-6 col-md-6 col-12 '>

                <form className="w-100" action='' onSubmit={handelformsubmit}>
                    <div class="form-group mt-5 login-section-information">
                        <label for="formGroupExampleInput">ایمیل</label>
                        <div className='d-flex justify-content-center align-items-center w-100 user-information-for-login'>
                            <input type="email" class="form-control user-phone-for-login" id="formGroupExampleInput" placeholder="caniae@gmail.com" required
                                value={Email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className='text-center'>
                        <input type="submit" value="ارسال کد"  className='bg-app-color submit-btn-for-login'   />
                    </div>
                </form>

            </div>

            
        </Fragment>
    );
}

export default withRouter(Login);