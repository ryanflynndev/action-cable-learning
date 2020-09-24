import React from 'react'

class RoomWebSocket extends React.Component {
    componentDidMount(){
        this.props.cableApp.cable.subscriptions.create({
            channel: 'ChatChannel'
        },
        {
            recieved: (something) => {
                console.log(something)
            }
        }
      )
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default RoomWebSocket