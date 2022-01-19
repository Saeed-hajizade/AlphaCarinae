import React, { useEffect, useRef, useState } from 'react';
import SocketIOClient from 'socket.io-client'






const ChatRoom = (props) => {
    const scrolableGrid = useRef(null);

    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const socket = useRef(SocketIOClient.connect("http://localhost:4000/socket"));

    const { state } = props.location;
    useEffect(() => {
        socket.current.on("newMessage", (message) => {
            setMessages(msg => msg.concat(message));
            scrolableGrid.current.scroll(0, scrolableGrid.current.scrollHeight);
        });
        socket.current.on("deleteMsg", id => {
            setMessages((messages) => {
                let findIndex = -1;
                messages.forEach((message, index) => {
                    if (message.id === id) {
                        findIndex = index;
                    }
                });
                return removeItemWithSlice(messages, findIndex);

            });
        })

    }, []);

    const removeItemWithSlice = (items, index) => {
        if (index === -1) return items;
        return [...items.slice(0, index), ...items.slice(index + 1)];
    };

    const handleInputSendMessage = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    }


    const { loginedUser } = state;



    const sendMessage = () => {

        if (!newMessage) return;
        socket.current.emit("newMessage", {

            id: null,
            msg: newMessage,
            senders: {
                name: loginedUser.username,




            },



        });
        setNewMessage("");



    };

    const handleOnClickDeleteMessage = id => {

        socket.current.emit("deleteMsg", id);
    }

    return (
        <div className="row justify-content-center align-items-center">
            <div className="card" style={{ width: '60%', height: '500px' }} >
                <div className="card-header w-100 bg-warning d-flex justify-content-start">
                    <h2 className="text-light">Caht room</h2>
                </div>
                <div className="card-body d-flex flex-column overflow-auto" ref={scrolableGrid} style={{ scrollBehavior: 'smooth' }}>

                    {messages.map(message => (

                        <div className={message.senders.name === state.username ? " container row mt-3 flex-row-reverse" : " container row mt-3"}>


                            <img src={'/images/avatar.png'} title={message.senders.name} alt={state.username} className="user-img" style={{ cursor: 'pointer' }} />
                            <div className={message.senders.name === state.username ? "text-box sender-message" : "text-box reciver-message"}>

                                <blockquote class="blockquote text-center">
                                    <header class="blockquote-footer"> {message.senders.name} <cite title="Source Title">{message.date.split("T")[1].split(".")[0]}</cite></header>
                                    <p class="mb-0">{message.msg}</p>

                                </blockquote>

                                {
                                    message.senders.name === state.username ? (
                                        <button className="text-light btn" onClick={() => handleOnClickDeleteMessage(message.id)} ><i className="fa fa-trash-o"></i></button>
                                    ) : null
                                }

                            </div>


                        </div>
                    ))}





                </div>
                <div className="card-footer" >



                    <div className='container d-flex '>
                        <button onClick={sendMessage} className='send-message-btn' ><i className="fa fa-paper-plane"></i></button>
                        <input type="text" className='form-control py-4 ml-3' placeholder="enter your message..."
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                            onKeyDown={handleInputSendMessage}
                        />
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ChatRoom;