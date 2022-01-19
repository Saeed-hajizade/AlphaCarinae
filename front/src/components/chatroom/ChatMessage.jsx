import React from 'react';


const ChatMessage = ({ message }) => {


    if (message.type === "voice") {
        return (

            <audio controls>

                <source src={`${message.filePath}`} type='audio/mpeg'></source>

            </audio>

        );
    }
    if (message.type === "image") {

        return (
            // <a href={`${message.filePath}`} target={'_blank'}><i className='fa fa-download'></i></a>
            <img src={message.filePath} alt="" style={{ width: '100%', height: '100%' }} />
        );
    }
    if (message.type === "video") {

        return (
            // <a href={`${message.filePath}`} target={'_blank'}><i className='fa fa-download'></i></a>
            <video width="320" height="240" controls>
                <source src={message.filePath} type="video/mp4" />
            
                Your browser does not support the video tag.
            </video>
        );
    }
    if (message.type === "file") {

        return (
            <a href={`${message.filePath}`} target={'_blank'}><i className='fa fa-download'></i></a>

        );
    }
    else {
        return (
            <span style={{ marginRight: '1rem' }}>{message.msg}</span>
        )
    }

}

export default ChatMessage;