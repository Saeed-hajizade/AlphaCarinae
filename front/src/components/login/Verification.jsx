import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { sendEmailForVerificationService } from '../../services/userServices';


const Verification = (props) => {

    const { userEmail } = props.location.state

    useEffect(async () => {

        try {
            const { data, status } = await sendEmailForVerificationService(userEmail)
            
        } catch (error) {

        }
    })

    const clickSendVerificationCode = async () => {

    }


    return (
        <div id="wrapper" className='h-100 w-100 d-flex align-items-center justify-content-center'>
            <div id="dialog">
                <button className="close">×</button>
                <h3>لطفاً کد تأیید 4 رقمی را که از طریق ایمیل ارسال کرده ایم وارد کنید:</h3>
                <span>(مامی خواهیم مطمئن شویم این شما هستید)</span>
                <div id="form">
                    <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                    <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                    <button className="btn btn-primary btn-embossed" onClick={clickSendVerificationCode}>تائیید</button>
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