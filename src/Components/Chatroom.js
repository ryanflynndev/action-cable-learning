import React from 'react'
import MessageContainer from '../Containers/MessageContainer'
import { ActionCableConsumer } from 'react-actioncable-provider'
import CreateMessage from './CreateMessage'
import { Grid } from '@material-ui/core'
import { borderRadius, borderRight } from '@material-ui/system'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

class Chatroom extends React.Component {
	state = {
		messages: [],
		user: this.props.user,
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		fetch('http://localhost:3000/chatrooms', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((chatrooms) => {
				let found = chatrooms.find(
					(chatroom) => chatroom.id === this.props.chatroom.id
				);
				this.setState({
					messages: found.messages,
				});
			});
	}

	submitHandler = (messageObj) => {
		const token = localStorage.getItem('token');
		fetch('http://localhost:3000/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accepts: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(messageObj),
		})
			.then((response) => response.json())
			.then((message) => {
				console.log('Post request is:', message);
			});
	};

	handleReceived = (data) => {
		console.log('this.state.messages: ', this.state.messages);
		console.log('In handle recieved: ', data.message);
		let newArray = [...this.state.messages, data.message];
		console.log(newArray);
		this.setState({
			messages: newArray,
		});
	};

	render() {
		return (
			<div style={chatroomStyles}>
				<ActionCableConsumer
					channel={{ channel: 'ChatroomChannel', id: this.props.chatroom.id }}
					onReceived={this.handleReceived}
				>
					<Paper variant='outlined' style={messageCont}>
						<MessageContainer 
							key={'ChatroomChannel'}
							messages={this.state.messages}
						/>
					</Paper>
				</ActionCableConsumer>
				<CreateMessage
					submitHandler={this.submitHandler}
					chatroomId={this.props.chatroom.id}
					user={this.state.user}
				/>
			</div>
		);
	}
}

export default Chatroom
const chatroomStyles = {
  display: 'flex',
 
  flexDirection: 'column',
  justifyContent: 'flex-end',
  // border: '1px solid blue',
  float: 'right',
  borderRadius: '8px',
  marginLeft: '10vw',
}

const messageCont = {
  overflowY: 'scroll',
  height: '50vh',
  maxWidth: '60vw',
	background: '#454545',
}
