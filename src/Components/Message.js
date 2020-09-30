import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';

class Message extends React.Component {

    render() {
        console.log("triggered")
        return (
            <Card style={card} elevation={3}>
                <CardContent >
                <Avatar alt={this.props.message.username} src={this.props.message.user_avatar} />
                <Typography>
                    <h3><strong>{this.props.message.username}</strong></h3> <h4>{this.props.message.body}</h4>
                </Typography>
                
                </CardContent>
            </Card>
        )
        
    }
}

export default Message

const card = {
    margin: "20px",

}