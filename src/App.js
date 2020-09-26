import React from 'react';
import './App.css';
import CreateMessage from './Components/CreateMessage'
// import RoomWebSocket from './Components/RoomWebSocket'

import ChatroomContainer from './Containers/ChatroomContainer'



// const WS_URL = 'ws://localhost:3000/cable'
class App extends React.Component {

  state = {
    chatrooms: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/chatrooms')
    .then(response => response.json())
    .then(chatrooms => {
      console.log("In Mount: ", chatrooms)
      this.setState({
        chatrooms: chatrooms
      })
    })
  }

  render() {
    console.log("App", this.state.chatrooms)
    return (
      <ChatroomContainer chatrooms={this.state.chatrooms}/>
      
    );
  }

}

export default App;
