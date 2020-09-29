import React from 'react'
import IconButton from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';

class CreateMessage extends React.Component {

  state = {
    user: this.props.user,
    body: ''
  }
  
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
      console.log(this.state.user)
        e.preventDefault()
        this.props.submitHandler({ body: this.state.body, chatroom_id: this.props.chatroomId, user_id: this.state.user.id })
        this.setState({ body: '' })
    }

  render() {
    return (
      <form onSubmit={this.submit}>
        <TextField label="Message" variant="outlined" type="text" name="body" value={this.state.body} onChange={this.changeHandler}></TextField>
        {/* <button type="submit">Submit</button> */}
        <IconButton type='submit' variant="contained" color="secondary">
          <SendIcon /> Send Message
        </IconButton>
    </form>
      )
    }
}

export default CreateMessage