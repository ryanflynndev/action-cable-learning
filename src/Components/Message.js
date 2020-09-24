import React from 'react'


class Message extends React.Component {


    render () {
        return (
            <p>{this.props.message.body}</p>
        )
        
    }
}

export default Message