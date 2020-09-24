import React from 'react'

class CreateMessage extends React.Component {

    state = {
        body: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.submitHandler({body: this.state.body})
    }

    render () {
        return (
            <form onSubmit={this.submit}>
                <label>Send a message:</label>
                <input type="text" name="body" value={this.state.body} onChange={this.changeHandler}></input>
                <button type="submit"/>
            </form>
        )
    }
}

export default CreateMessage