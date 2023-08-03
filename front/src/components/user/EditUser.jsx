import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { editUserService, getSingleUserService } from '../../services/userServices';
const EditUser = (props) => {
    const [username, setUserName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [password, setPassword] = useState("");
    const userId = props.match.params.id;


    useEffect(async () => {

        

        try {
            const { status, data } = await getSingleUserService(userId)
            if (status === 200) {

                setUserName(data.user.username);
                setImgUrl(data.user.imageUrl);
                setPassword(data.user.password);
            }
        } catch {

        }
    }, []);

    const handleEditUserFormSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('username', username);
        formData.append('passwrod', password);
        if (e.target.imageUpload.files[0]) {
            formData.append('file', e.target.imageUpload.files[0])
        } else {
            formData.append('imageUrl', imgUrl)
        }
      
        try {
            
            const { status } = await editUserService(userId, formData);
            
            if (status === 200)
                props.history.push({
                    pathname: '/Login',
                    state: {

                    }

                });


        } catch (ex) {
        }


    }



    const handleOnClickBackBtn = () => {
        props.history.push({
            pathname: '/PersonalChat',

        });
    }


    return (
        <Fragment>
            <div className="container">
                <h1>ویرایش حساب کاربری شما
                    <small className='d-block fa fa-user-circle'></small>
                </h1>
                <form action="" onSubmit={handleEditUserFormSubmit}>
                    <div className="avatar-upload">
                        <div className="avatar-edit" >
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label for="imageUpload"></label>
                        </div>
                        <div className="avatar-preview">
                            <div id="imagePreview" style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : 'url(http://i.pravatar.cc/500?img=7)' }}>
                            </div>
                        </div>
                    </div>
                    <div className='edit-username'>
                        <input type="text" className='username-input' placeholder='نام کاربری'
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>

                    <div className='edit-user-btn mt-5 d-flex' >
                        <input type="submit" value="ویرایش اطلاعات" className='ml-4 btn btn-outline-primary' />
                        <a className='btn btn-outline-warning' href="javascript: history.go(-1)"><i className='fa fa-reply'></i></a>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default withRouter(EditUser);