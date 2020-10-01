import React from 'react'
import App from '../App'
import {TextField, Typography, Button, Card, CardMedia, CardActionArea, Paper, CardContent} from '@material-ui/core'

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
      <div style={formCont}>
        <Typography variant="h2" component="h2">Signup</Typography>
      <form onSubmit={this.submitHandler}>
          <TextField size="small" style={inputs} label="User Avatar URL" name="avatar" variant="outlined" value={this.state.avatar} onChange={this.changeHandler} /><br/>
        <TextField size="small" style={inputs} label="Username" variant="outlined"name="username" value={this.state.username} onChange={this.changeHandler}/><br></br>
        <TextField size="small" style={inputs} label="Password" variant="outlined"name="password" type="password" value={this.state.password} onChange={this.changeHandler}/><br/>
        <TextField size="small" style={inputs} label="Confirm Password" variant="outlined"name="password_confirm" type="password" value={this.state.password_confirm} onChange={this.changeHandler}/><br></br>
          <Button style={submitBtn} color='primary' variant="contained" type="submit">Sign Up</Button>
      </form>
      </div>
    )
  }
}

export default SignUp 

const inputs = {
  padding: '.5vh'
}

const formCont = {
  margin: '10rem'
}

const submitBtn = {
  // marginBottom: '14vh'
}