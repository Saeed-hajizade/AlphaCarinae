import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ChatRoomApp from './ChatRoomApp';


const App = () => {

    return (

      <BrowserRouter>

       <ChatRoomApp/>

       <ToastContainer/>

      </BrowserRouter>

    );
}

export default App;