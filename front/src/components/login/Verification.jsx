import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { sendEmailForVerificationService, signingService } from '../../services/userServices';
import { toastError, toastSucess } from '../../utils/Toastify';


const Verification = (props) => {

    const { userEmail } = props.location.state

    const [char_1, setChar_1] = useState("");
    const [char_2, setChar_2] = useState("");
    const [char_3, setChar_3] = useState("");
    const [char_4, setChar_4] = useState("");

    // useEffect(async () => {

    //     try {
    //         const { data, status } = await sendEmailForVerificationService(userEmail)
    //         if (status == 200) {
    //             toastSucess("ایمیل باموفقییت ارسال")
    //         }

    //     } catch (error) {

    //     }
    // }, [userEmail])

    const resetValues = () => {
        setChar_1('')
        setChar_2('')
        setChar_3('')
        setChar_4('')
    }

    const handlclickSendVerificationCode = async () => {
        const ver_code = char_1 + char_2 + char_3 + char_4;

        const verification_body = { ver_code, email: userEmail }

        console.log(verification_body)

        try {
            const { status, data } = await signingService(verification_body);
            const loginedUser = data.user



            if (status === 200) {
                localStorage.setItem("userId", loginedUser._id)
                resetValues();
                props.history.push({
                    pathname: '/personalchat',
                    state: {
                        loginedUser
                    }
                });
            }

            const userInfor = {
                ver_code,
                userEmail,
                userId: loginedUser._id

            }

            if (status === 202) {

                resetValues();
                props.history.push({
                    pathname: '/signup',
                    state: {
                        userInfor
                    }
                });
            }
        } catch (err) {
            console.log(err)
            toastError('مشکلی پیش امده')
        }

    }


    return (
        <div id="wrapper" className='h-100 w-100 d-flex align-items-center justify-content-center'>
            <div id="dialog">
                <button className="close">×</button>
                <h3>لطفاً کد تأیید 4 رقمی را که از طریق ایمیل ارسال کرده ایم وارد کنید:</h3>
                <span>(مامی خواهیم مطمئن شویم این شما هستید)</span>
                <div id="form">
                    <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" className='char_1'
                        value={char_1}
                        onChange={e => setChar_1(e.target.value)}
                    />
                    <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" className='char_2'
                        value={char_2}
                        onChange={e => setChar_2(e.target.value)}
                    />
                    <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" className='char_3'
                        value={char_3}
                        onChange={e => setChar_3(e.target.value)}
                    />
                    <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" className='char_4'
                        value={char_4}
                        onChange={e => setChar_4(e.target.value)}
                    />
                    <button className="btn btn-primary btn-embossed" onClick={handlclickSendVerificationCode}>تائیید</button>
                </div>

                <div>
                    کد ارسال نشده؟<br />
                    <a href="#">ارسال دوباره کد</a><br />
                    <a href="#">ویرایش ایمیل</a>
                </div>
                <img src="http://jira.moovooz.com/secure/attachment/10424/VmVyaWZpY2F0aW9uLnN2Zw==" alt="test" />
            </div>
        </div>
    );
};

export default withRouter(Verification);