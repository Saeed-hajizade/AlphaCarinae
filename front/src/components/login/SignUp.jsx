import React, { useEffect, useState } from 'react';
import { SignUpService } from '../../services/userServices';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { toastError, toastSucess } from '../../utils/Toastify';

const SignUp = () => {

    const { state } = useLocation();
    const { userInfor } = state

    const [username, setUsername] = useState("");





    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const user = {
            email: userInfor.userEmail,
            username,
            ver_code: userInfor.ver_code,
        }



        try {
            const { status, data } = await SignUpService(user)

            if (status === 200) {
                setUsername('')
                toastSucess("کاربر ثبت شد")
            }
        } catch (error) {
            console.log(error)
            toastError("ثبت کاربر شکست خورد")
        }
    }


    return (
        <div className=' bg-compnent-color p-5 h-100 d-flex justify-content-center ' >
            <div className=' back-color-white col-12 col-lg-9 col-md-9 p-5 h-75' style={{ direction: 'rtl', borderRadius: '2%' }}>
                <h3 className='text-center app-color mt-3'>فرم ثبت نام</h3>
                <form action="" onSubmit={handleSubmitForm} className='mt-5'>
                    <div className="form-group text-right">
                        <label for="exampleInputEmail1" className='px-3 gray-mellow'><i>نام خودرا وارد کنید</i></label>
                        <input type="text" className="form-control singup-name-input px-3 py-4 my-3" id="exampleInputEmail1" aria-describedby="namehelp" placeholder='مثال saeed'
                            value={username}
                            onChange={e => setUsername(e.target.value)}

                        />
                        <small id="emailHelp" className="form-text text-muted">کاربران شما را بااین نام خواهند دید.</small>
                    </div>

                    <div className='text-center'>
                        <input type="submit" className='bg-app-color signup-btn p-3' value="ثبت" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;