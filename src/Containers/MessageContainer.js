import React from 'react'
import Message from '../Components/Message'

class MessageContainer extends React.Component {

    renderMessages = () => {
        // debugger
        return this.props.messages.map(message => {
            return <Message key={message.id} message={message}/>
        })
    }

    render () {

        return(
            this.renderMessages()
        )
    }
}

export default MessageContainer