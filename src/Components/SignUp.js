import React from 'react'
import App from '../App'

class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    password_confirm: '',
    avatar: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // doPasswordsMatch = () => {
  //   this.state.password === this.state.password_confirm ?
      
  submitHandler = (e) => {
    console.log('are you in here')
    e.preventDefault()
    this.props.signupHandler({
      username: this.state.username,
      password: this.state.password,
      avatar: this.state.avatar
    })
  }

  render() {
    return (
      <>
        <h1>Signup</h1>
      <form onSubmit={this.submitHandler}>
        <label>User Avatar URL:</label>
          <input name="avatar" value={this.state.avatar} onChange={this.changeHandler} /><br/>
          <label>Username: </label>
        <input name="username" value={this.state.username} onChange={this.changeHandler}/><br></br>
          <label>Password: </label>
        <input name="password" value={this.state.password} onChange={this.changeHandler}/><br/>
          <label>Confirm Password: </label>
        <input name="password_confirm" value={this.state.password_confirm} onChange={this.changeHandler}/><br></br>
        <button type="submit">Sign Up</button>
      </form>
      </>
    )
  }
}

export default SignUp 