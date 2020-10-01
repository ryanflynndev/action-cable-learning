import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';

class Message extends React.Component {

    render() {
        console.log("triggered")
        return (
            <Card style={card} elevation={3}>
                <CardContent >
                    <Avatar style={userMess} alt={this.props.message.username} src={this.props.message.user_avatar} />
                    <Typography style={userMess} variant="h6">{this.props.message.username}</Typography>
                    
                    <h4>{this.props.message.body}</h4>
                
                
                </CardContent>
            </Card>
        )
        
    }
}

export default Message

const card = {
    margin: "20px",
}

const userMess = {
    display: 'flex',
    flexDirection: 'row'
}