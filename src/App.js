import React from 'react';
import './App.css';
import CreateMessage from './Components/CreateMessage'
// import RoomWebSocket from './Components/RoomWebSocket'

import MessageContainer from './Containers/MessageContainer'
import ChatRoom from './Components/Chatroom'


// const WS_URL = 'ws://localhost:3000/cable'
class App extends React.Component {

  state = {
    messages: []
  }


  render() {
    return (
      <ChatRoom />
      
    );
  }

}

export default App;
