import React, { Component } from 'react';

class Message extends Component {
    render() {
        let {message} = this.props;
        return (
            <div classname="row">
                <div className="alert alert-primary mt-5" role="alert">
                    <strong>{message[0].message}</strong>
                </div>
            </div>
        );
    }
}

export default Message;
