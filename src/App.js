import React from 'react';
import './App.css';
// import CreateMessage from './Components/CreateMessage'
// import RoomWebSocket from './Components/RoomWebSocket'
import ChatroomContainer from './Containers/ChatroomContainer'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Components/Login'
import ButtonAppBar from './Navbar/ButtonAppBar'
import ChatroomIndex from './Containers/ChatroomIndex'


// const WS_URL = 'ws://localhost:3000/cable'
class App extends React.Component {
  
  state = {
    user: null
  }
  


  
    
  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`},
      }).then(response => response.json())
      .then(theUser => {
        this.setState({
          user: theUser
        })
      })
    } else {
      this.setState({
        user: null
      })
    }
  }
  
  
  signupHandler = (newUser) => {
    console.log("is it going in here")
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({user: newUser})
    }).then(response => response.json())
    .then(newUser => {
      console.log("It's creating a new user")
      localStorage.setItem('token', newUser.jwt)
        this.setState({
          user: newUser
        })
    })   
  }

  loginHandler = (userInfo) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(theUser => {
        console.log(theUser)
        if(theUser.message !== 'Invalid username or password') {
          localStorage.setItem('token', theUser.jwt)
          this.setState({
            user: theUser
          })
        }
      })
  }

  render() {
    return (
      <>
        { this.state.user ?
          <>
          <ButtonAppBar />
            <Switch>
              <Route path='/' exact render={() => <ChatroomContainer user={this.state.user}/>} />
              <Route path='/chatrooms' exact render={() => <ChatroomIndex user={this.state.user}/>}/>
            </Switch>
          </>

          :
          <Login signupHandler={this.signupHandler} loginHandler={this.loginHandler} />}
      </>

    );  
  }

}



export default App;
