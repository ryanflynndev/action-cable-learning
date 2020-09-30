import React from 'react'
import SignUp from './SignUp'

class Login extends React.Component {

  state = {
    clicked: false,
    username: "",
    password: ""
  }

  clickHandler = () => {
    let previous = this.state.clicked
    this.setState({
      clicked: !previous
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.loginHandler({
      username: this.state.username,
      password: this.state.password
    })
  }

  render() {
    return (

      <div>
          {this.state.clicked ?
          <SignUp signupHandler={this.props.signupHandler}/> 
        :
        
          <div>
            <h1>Login</h1>
            <form onSubmit={this.submitHandler}>
              <label>Username: </label>
              <input name="username" value={this.state.username} onChange={this.changeHandler}/><br></br>
              <label>Password: </label>
              <input type='password' name="password" value={this.state.password} onChange={this.changeHandler}/><br/>
              <button type="submit">Log In</button>
            </form>
            <button onClick={this.clickHandler}>New User? Sign Up</button>
        </div> 
      }

        
      </div>
    )
  }
}

export default Login