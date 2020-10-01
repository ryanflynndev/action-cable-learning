import React from 'react'
import {Redirect} from 'react-router-dom'


class CreateChatroom extends React.Component {

    state = {
        title: '',
        image: '',
        description: '',
        submitted: false
    }

    submitHandler = (e) => {
        e.preventDefault()
       
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/chatrooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accepts: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: this.state.title,
                img_url: this.state.img_url,
                description: this.state.description
            })
        }).then(response => response.json())
        .then(newChatroom => {
            if(newChatroom.title){
                this.createMembership(newChatroom.id)
                this.setState({
                    submitted: true
                })
            }
        })
    }

    createMembership = (newChatroomId) => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/memberships', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accepts: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id: this.props.user.user.id,
                chatroom_id: newChatroomId
            })
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <>
            <form onSubmit={this.submitHandler}>
                <label>Title</label>
                <input type="text" name="title" onChange={this.changeHandler} value={this.state.title}/>
                <input type="text" name="image" onChange={this.changeHandler} value={this.state.image}/>
                <input type="text" name="description" onChange={this.changeHandler} value={this.state.description}/>
                <button type="submit">Submit</button>
            </form>
            { this.state.submitted ? <Redirect to="/" /> : null}
            </>
        )
    }

}

export default CreateChatroom