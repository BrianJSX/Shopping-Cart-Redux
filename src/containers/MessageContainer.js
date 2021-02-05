import React, { Component } from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';

class MessageContainer extends Component {
    render() {
        let {messages} = this.props;
        return (
            <Message message={messages}></Message>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}
export default connect(mapStateToProps, null)(MessageContainer)
