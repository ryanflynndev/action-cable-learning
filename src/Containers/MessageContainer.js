import React from 'react';
import Message from '../Components/Message';

class MessageContainer extends React.Component {
	renderMessages = () => {
		// debugger
		return this.props.messages.map((message) => {
			return <Message key={message.id} message={message} />;
		});
	};

	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
	};

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	render() {
		return (
            <>
            {this.renderMessages()}
				<div
					style={{ float: 'left', clear: 'both' }}
					ref={(el) => {
                        this.messagesEnd = el;
					}}
                    ></div>
			</>
		);
	}
}

export default MessageContainer;
