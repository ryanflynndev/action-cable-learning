import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core'
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';;


class CreateChatroom extends React.Component {
	state = {
		title: '',
		image: '',
		description: '',
		submitted: false,
	};

	submitHandler = (e) => {
		e.preventDefault();

		const token = localStorage.getItem('token');
		fetch('http://localhost:3000/chatrooms', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accepts: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				title: this.state.title,
				img_url: this.state.image,
				description: this.state.description,
			}),
		})
			.then((response) => response.json())
            .then((newChatroom) => {
                console.log("post new chatroom", newChatroom)
				if (newChatroom.title) {
					this.createMembership(newChatroom.id);
					this.setState({
						submitted: true,
					});
				}
			});
	};

	createMembership = (newChatroomId) => {
		const token = localStorage.getItem('token');
		fetch('http://localhost:3000/memberships', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accepts: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				user_id: this.props.user.user.id,
				chatroom_id: newChatroomId,
			}),
		});
	};

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<div style={main}>
                <Card>
					<CardContent style={card}>
                        <Typography style={title} variant='h4'>Create A Chatroom</Typography>
						<form onSubmit={this.submitHandler}>
                            <TextField
                                style={text}
                                fullWidth='true'
								required="true"
								label="title"
								size="small"
								variant="outlined"
								type="text"
								name="title"
								onChange={this.changeHandler}
								value={this.state.title}
							/>
							<br></br>
                            <TextField
                                style={text}
                                fullWidth='true'
								required="true"
								label="image"
								size="small"
								variant="outlined"
								type="text"
								name="image"
								onChange={this.changeHandler}
								value={this.state.image}
							/>
							<br></br>
                            <TextField
                                style={text}
                                fullWidth='true'
								required="true"
								label="description"
								size="small"
								type="text"
								variant="outlined"
								name="description"
								onChange={this.changeHandler}
								value={this.state.description}
							/>
							<br></br>
                            <Button
                                style={button}
								variant="contained"
								size="large"
								color="primary"
								type="submit"
								startIcon={<AddBoxSharpIcon />}
							>
								Create Chatroom
							</Button>
						</form>
						{this.state.submitted ? <Redirect to="/" /> : null}
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default CreateChatroom

const main = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15vh',
}

const card = {
    flexDirection: 'column',
    width: '40vw',
    height: 'auto',

}

const button = {
    float: 'right',
    marginTop: '1vh',
    marginBottom: '3vh'
}

const text = {
    padding: '.25rem'
}

const title = {
    display: 'flex',
    marginTop: '2vh',
    marginBottom: '3vh',
    justifyContent: 'center'

}