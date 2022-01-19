import React, { Fragment, useContext} from 'react';
import { ReactMic } from 'react-mic'
import ChatMessage from './ChatMessage';
import { Done as SentIcon, DoneAll as SeenIcon } from '@material-ui/icons'
import { personalChatContextProvider } from '../context/context';
import {  withRouter } from 'react-router-dom';


const PersonalChat = (props) => {
    const userId = localStorage.getItem('userId');


    const context = useContext(personalChatContextProvider);
    const {
        joinChatWithUser,
        users,
        sendMessage,
        newMessage,
        handleOnClickEditMessage,
        handleOnClickDeleteMessage,
        handleOnChangeMessageInput,
        handleOnchageInputImage,
        handleOnchageInputVideo,
        attachFile,
        attachImage,
        handleOnchageInputFile,
        messages,
        user,
        userImageUrl,
        scrolableGrid,
        IsTypingReciever,
        inputFileRef,
        inputImageRef,
        startRecordVoice,
        onStop,
        onData,
        record,
        handleInputSendMessage,
        inputVideo,
        attachVideo

    } = context;

    const { loginedUser } = props.location.state


    const handleShowUploadFileBox = () => {
        let fileUpdloadBox = document.getElementById("uploaders-file-box");
        fileUpdloadBox.classList.toggle("display-none")

    }
    return (


        <Fragment>
            <div id="plist" className="people-list">

                <div className="profile bg-compnent-color">
                    <span className="profile-img">
                        <img src={loginedUser.imageUrl != null ? loginedUser.imageUrl : "/images/avatar.png"} alt="" />
                    </span>
                    <span className="profile-settings">
                        <a className='p-0 m-0 setting-btn text-muted' href={`/EditUser/${userId}`}><i className="fa fa-ellipsis-v" style={{ fontSize: '1rem' }}></i></a>
                    </span>
                </div>

                <div className="people-search-box bg-compnent-color">
                    <i className="fa fa-search"></i>

                    <input type="text" placeholder="search..." />

                </div>
                <div className="people-list-content" style={{ overflow: 'auto' }}>
                    <ul className="list-unstyled chat-list  mb-0">
                        {
                            users.map(itemUser => (
                                <li className={itemUser.username === user ? "clearfix active" : "clearfix"} onClick={() => joinChatWithUser(itemUser.username, itemUser.imageUrl)}>
                                    <img src={itemUser.imageUrl ? itemUser.imageUrl : "/images/avatar.png"} alt="avatar" />
                                    <div className="about">
                                        <div className="name">{itemUser.username}</div>
                                        <div className="status">
                                            <i className="fa fa-circle offline"></i>
                                            left 7 mins ago
                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>


            <div className="chat" style={{ height: '550px' }}>

                {
                    user.length !== 0 ? (
                        <div className="chat-header clearfix bg-compnent-color">

                            <div className="row">
                                <div className="col-6">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img src={userImageUrl == null ? "/images/avatar.png" : userImageUrl} alt="avatar" />
                                    </a>
                                    <div className="chat-about">
                                        <h6 className="m-b-0 first-color chat-about-title">{user}</h6>
                                        <small className="first-color">{IsTypingReciever ? "is typing..." : "Last seen: 2 hours ago" || user !== null ? "online" : "offline"}</small>

                                    </div>
                                </div>
                                <div className="col-6 hidden-sm text-right chat-option">
                                    <a href="javascript:void(0);" className="btn">
                                        <i className="fa fa-phone"></i>
                                    </a>
                                    <a href="javascript:void(0);" className="btn">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <a href="javascript:void(0);" className="btn">
                                        <i className="fa fa-cogs"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ) : null
                }
                <div className="chat-history h-100" ref={scrolableGrid} style={{ overflow: 'auto' }}>
                    <ul className="m-b-0 mt-5">

                        {
                            messages.map(message => (

                                <Fragment>
                                    <li className="clearfix">
                                        <div className={message.sender.name == loginedUser.username ? "message-data text-right" : "message-data"}>

                                            {message.sender.name === loginedUser.username ? (<span>:You</span>) : (<span>:{message.sender.name}</span>)}
                                        </div>
                                        <div className={message.sender.name === loginedUser.username ? "message other-message float-right" : "message my-message float-left"}  >
                                            <ChatMessage message={message} />
                                            <div>
                                                <span className="message-data-time" style={{ fontSize: '0.6rem' }}>{message.date.split("T")[1].split(".")[0]}</span>
                                                {
                                                    message.sender.name === loginedUser.username ? (

                                                        message.seen ? <SeenIcon style={{ fontSize: '0.8rem', marginLeft: '0.2rem', color: 'blue' }}></SeenIcon> :
                                                            <SentIcon style={{ fontSize: '0.8rem', marginLeft: '0.2rem' }}></SentIcon>

                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        {
                                            message.type == 'text' ? (
                                                message.sender.name === loginedUser.username && message.type !== 'file' ? <span className='message-opration float-right d-flex flex-column justify-content-center mt-3 '>
                                                    <a className='text-left' style={{ cursor: 'pointer' }} onClick={() => handleOnClickDeleteMessage(message.id)}><i className='fa fa-trash-o'></i></a>
                                                    <a className='text-left' style={{ cursor: 'pointer' }} onClick={() => handleOnClickEditMessage(message.id, message.msg)}><i className='fa fa-edit'></i></a>
                                                </span> : null
                                            ) : (
                                                message.sender.name === loginedUser.username && message.type !== 'file' ? <span className='message-opration float-right d-flex flex-column justify-content-center mt-3 '>
                                                    <a className='text-left' style={{ cursor: 'pointer' }} onClick={() => handleOnClickDeleteMessage(message.id)}><i className='fa fa-trash-o'></i></a>

                                                </span> : null
                                            )
                                        }
                                    </li>
                                </Fragment>

                            ))
                        }

                    </ul>
                </div>
                <div className="chat-message clearfix bg-compnent-color">
                    <div className="input-group mb-0">
                        <div className="input-group-prepend" style={{ cursor: 'pointer' }}>
                            <span className="input-group-text border-0 bg-transparent">
                                <i className="fa fa-smile-o" style={{ fontSize: '1.5rem' }}></i>
                            </span>
                        </div>
                        <div className='updoader-files-container'>
                            <span className="input-group-text border-0 bg-transparent" id='show-upload-file-btn'>

                                <i className="fa fa-paperclip" onClick={handleShowUploadFileBox} style={{ fontSize: '1.5rem' }}></i>
                            </span>
                            <div className="uploaders-box display-none" id='uploaders-file-box'>
                                <div className='uploader-box-item ' onClick={attachImage}>
                                    <span className="input-group-text border-0 bg-transparent">

                                        <i className="fa fa-image" ></i>

                                    </span>

                                    <input ref={inputImageRef} type="file" name="" id="" style={{ display: 'none' }} onChange={handleOnchageInputImage} />
                                </div>

                                <div className='uploader-box-item' onClick={attachVideo}>
                                    <span className="input-group-text border-0 bg-transparent">

                                        <i className="fa fa-video-camera" ></i>
                                    </span>
                                    <input ref={inputVideo} type="file" name="" id="" style={{ display: 'none' }} onChange={handleOnchageInputVideo} />
                                </div>

                                <div className='uploader-box-item' onClick={attachFile}>
                                    <span className="input-group-text border-0 bg-transparent">

                                        <i className="fa fa-file" ></i>
                                    </span>
                                    <input ref={inputFileRef} type="file" name="" id="" style={{ display: 'none' }} onChange={handleOnchageInputFile} />
                                </div>

                            </div>

                        </div>
                        <input type="text" className="form-control message-input" placeholder="Enter text here..."
                            onKeyDown={handleInputSendMessage}
                            value={newMessage}
                            onChange={handleOnChangeMessageInput} />
                        <div className="input-group-prepend" style={{ cursor: 'pointer' }}>
                            <span className="input-group-text border-0 bg-transparent send-message-btn" onClick={sendMessage}>
                                <i className="fa fa-telegram" id='send_btn' style={{ fontSize: '1.5rem', color: '#495057' }}></i>
                            </span>
                            <span className="input-group-text border-0 bg-transparent send-voice-btn" style={{ color: record ? 'red' : '#495057' }} onClick={startRecordVoice}>
                                <i className="fa fa-microphone" id='voice_btn' style={{ fontSize: '1.5rem' }}></i>
                            </span>
                            <ReactMic
                                record={record}
                                className="d-none"
                                onStop={onStop}
                                onData={onData}
                                strokeColor="#000000"
                                backgroundColor="#FF4081" />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(PersonalChat);