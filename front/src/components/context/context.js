import { createContext } from "react";

export const userContextProvider = createContext({

});

export const personalChatContextProvider = createContext({
    handleOnChangeMessageInput: () => { },
    joinChatWithUser: () => { },
    handleOnClickEditMessage: () => { },
    handleOnClickDeleteMessage: () => { },
    onStop: () => { },
    onData: () => { },
    startRecordVoice: () => { },
    handleOnchageInputFile: () => { },
    handleOnchageInputImage: () => { },
    handleOnchageInputVideo:()=> {},
    attachFile: () => { },
    attachImage: () => { },
    sendMessage: () => { },
    removeItemWithSlice: () => { },
    handleInputSendMessage: () => { },
    isTyping: () => { },
    setMessageForEdit: () => { },
    setNewMessage: () => { },
    newMessage: () => { },
    inputVideo: () => { },
    attachVideo: () => { },
    users: [],
    messages: [],
    user: "",
    userImageUrl:"",
    scrolableGrid: null,
    IsTypingReciever: () => { },
    inputFileRef: () => { },
    inputImageRef: () => { },

    record: false
});

