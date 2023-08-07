import React, { useEffect, useRef, useState } from 'react';
import { Children, Fragment } from 'react/cjs/react.production.min';
import { personalChatContextProvider } from './context';
import SocketIOClient from 'socket.io-client'
import { toastError, toastSucess } from '../../utils/Toastify';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getUsersService } from '../../services/userServices';


const PersonalChatContext = ({ children, location }) => {
    
    const scrolableGrid = useRef(null);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [userImageUrl, setUserImageUrl] = useState("");

    const [loginedUser, setLoginedUser] = useState();
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [messageForEdit, setMessageForEdit] = useState();
    const [record, setRecord] = useState(false);
    const [File, setFile] = useState();
    const [isTyping, setIsTyping] = useState();
    const [IsTypingReciever, setIsTypingReciever] = useState();
    const socket = useRef(SocketIOClient.connect("http://localhost:4000/socket"));



    const { state } = location;
    useEffect(() => {
    }, [])
    const inputFileRef = useRef();
    const inputImageRef = useRef();
    const inputVideo = useRef();
    const userRef = useRef();
    const isTypingTimeOutId = useRef();
    useEffect(() => {
        userRef.current = user
    }, [user]);


    useEffect(() => {

        socket.current.on("newMessage", (message) => {
            setMessages(msg => msg.concat(message));
            scrolableGrid.current.scroll(0, scrolableGrid.current.scrollHeight);
            if (message.sender.name !== state.loginedUser.username) {
                socket.current.emit("seenMessage", { id: message.id, sender: state.loginedUser.username, receiver: userRef.current })
            }


        });

        socket.current.on("editMsg", ({ msg, id }) => {

            setMessages(messages => {
                const index = messages.findIndex(item => item.id == id);
                if (index !== -1) {
                    return [...messages.slice(0, index), { ...messages[index], msg: msg }, ...messages.slice(index + 1)]
                } else return messages;
            });
        });

        socket.current.on("seenMessage", (id) => {

            setMessages(messages => {
                const index = messages.findIndex(item => item.id == id);
                if (index !== -1) {
                    return [...messages.slice(0, index), { ...messages[index], seen: true }, ...messages.slice(index + 1)]
                } else return messages;
            });
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
        });

        socket.current.on("isTyping", ({ userIsTyping, isTyping }) => {
            if (state.loginedUser.username !== userIsTyping) {
                setIsTypingReciever(isTyping)


            }
        });

    }, []);



    useEffect(async () => {
        try {
            const { status, data } = await getUsersService();
            // setUsers(data.filter(u => u.username !== state.loginedUser.username))
            setUsers(data)

        } catch (ex) {
            toastError("کاربر ها واکشی نشدند,مشکلی پیش آمده")
        }
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


    const sendMessage = () => {

        if (!newMessage)
            return;
        if (messageForEdit) {
            socket.current.emit("editMessage", {

                id: messageForEdit,
                msg: newMessage,
                sender: state.loginedUser.username,
                receiver: user


            });
            setMessageForEdit(undefined)
        } else {

            socket.current.emit("newMessage", {

                id: null,
                msg: newMessage,
                sender: {
                    name: state.loginedUser.username,
                },
                receiver: {
                    name: user
                }
            });
        }
        setNewMessage("");
    };

    const attachFile = () => {
        inputFileRef.current.click();
    }
    const attachImage = () => {
        inputImageRef.current.click();
    }
    const attachVideo = () => {
        inputVideo.current.click();
    }

    const handleOnchageInputFile = (e) => {

        const files = e.target.files;
        if (files && files.length > 0) {
            setFile(files);
            const data = new FormData();
            data.append("file", files[0]);
            axios.post("http://localhost:4000/uploadFile", data)
                .then(res => {
                    toastSucess("فایل با موفقییت ارسال شد")
                    const filePath = res.data.filePath;
                    socket.current.emit("uploadFile",
                        {
                            filePath: filePath,
                            sender: {
                                name: state.loginedUser.username,

                            },
                            receiver: {
                                name: userRef.current
                            }
                        }
                    );
                }).catch(err => {
                    toastError("فایل شما ارسال نشد متاسفانه")
                });
        }

    }

    const handleOnchageInputImage = (e) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            setFile(files);
            const data = new FormData();
            data.append("file", files[0]);
            axios.post("http://localhost:4000/uploadFile", data)
                .then(res => {
                    toastSucess("فایل با موفقییت ارسال شد")
                    const filePath = res.data.filePath;
                    socket.current.emit("uploadImageSender",
                        {
                            filePath: filePath,
                            sender: {
                                name: state.loginedUser.username,

                            },
                            receiver: {
                                name: userRef.current
                            }
                        }
                    );
                }).catch(err => {
                    toastError("فایل شما ارسال نشد متاسفانه")
                });
        }
    }


    const handleOnchageInputVideo = (e) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            setFile(files);
            const data = new FormData();
            data.append("file", files[0]);
            axios.post("http://localhost:4000/uploadFile", data)
                .then(res => {
                    toastSucess("فایل با موفقییت ارسال شد")
                    const filePath = res.data.filePath;
                    socket.current.emit("uploadVideo",
                        {
                            filePath: filePath,
                            sender: {
                                name: state.loginedUser.username,

                            },
                            receiver: {
                                name: userRef.current
                            }
                        }
                    );
                }).catch(err => {
                    toastError("فایل شما ارسال نشد متاسفانه")
                });
        }
    }

    const startRecordVoice = () => {
        if (record) {
            setRecord(false)
        } else {
            setRecord(true)
        }
    }

    const onData = (recordedBlob) => {
    }

    const onStop = (recordedBlob, loginedUser) => {
        const formData = new FormData();
        formData.append("voiceMessage", recordedBlob.blob);
        axios.post("http://localhost:4000/uploadVoice", formData).then(res => {

            socket.current.emit("uploadVoice", {
                filePath: res.data.filePath,
                sender: {
                    name: state.loginedUser.username
                },
                receiver: {
                    name: userRef.current
                }

            });
            toastSucess("voice send successfully")
        }).catch(ex => {
            toastError("voice not send successfully")
        })
    };

    const handleOnClickDeleteMessage = id => {

        socket.current.emit("deleteMsg", id);
    }

    const handleOnClickEditMessage = (messageId, message) => {
        setNewMessage(message);
        setMessageForEdit(messageId)

    }

    const joinChatWithUser = (username, imageUrl) => {
        setMessages([]);
        if (user)
            socket.current.emit("leaveChat", { username: user, myUserName: state.loginedUser.username })

        setUser(username);
        setUserImageUrl(imageUrl);
        socket.current.emit("joinChat", { username, myUserName: state.loginedUser.username })
    }

    const handleOnChangeMessageInput = (e) => {
        setNewMessage(e.target.value);
        if (!isTyping) {
            setIsTyping(true);
        }
        if (isTypingTimeOutId.current) {
            clearTimeout(isTypingTimeOutId.current)
        }
        isTypingTimeOutId.current = setTimeout(() => {
            setIsTyping(false)
        }, 2000)
    };

    useEffect(() => {
        socket.current.emit("isTyping", {
            sender: state.loginedUser.username,
            receiver: userRef.current,
            isTyping
        })
    }, [isTyping])




    return (
        <Fragment>
            <personalChatContextProvider.Provider value={{
                handleOnChangeMessageInput,
                joinChatWithUser,
                handleOnClickEditMessage,
                handleOnClickDeleteMessage,
                onStop,
                onData,
                startRecordVoice,
                handleOnchageInputFile,
                handleOnchageInputImage,
                handleOnchageInputVideo,
                attachFile,
                attachImage,
                sendMessage,
                removeItemWithSlice,
                handleInputSendMessage,
                setMessageForEdit,
                setNewMessage,
                inputVideo,
                attachVideo,
                newMessage,
                isTyping,
                users,
                messages,
                user,
                userImageUrl,
                scrolableGrid,
                IsTypingReciever,
                inputFileRef,
                inputImageRef,
                record




            }}>

                {children}
            </personalChatContextProvider.Provider>
        </Fragment>
    );
}

export default withRouter(PersonalChatContext);