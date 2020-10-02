import React from 'react'
import Button from '@material-ui/core/Button'
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
			<form style={form} onSubmit={this.submit}>
				<TextField
					style={messageInput}
					label="Write a Message..."
					multiline
					size="small"
					rowsMax={4}
					variant="outlined"
					type="text"
					name="body"
					value={this.state.body}
					onChange={this.changeHandler}
				></TextField>
        <Button
          size="large"
          type="submit"
          color="primary"
          startIcon={<SendIcon />}>
					Send
				</Button>
			</form>
		);
    }
}

export default CreateMessage

const messageInput = {
  width: '46vw',
  marginRight: '1.5vw',
  marginTop: '.25vh'
}

const form = {
  alignItems: 'baseline',
  marginBottom: '3vh'

}