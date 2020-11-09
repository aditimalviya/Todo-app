import React from 'react';

function Done(props) {
    return (
        <button className="done-btn" onClick={props.onClick}>Done</button>
    )
}

function NotDone(props) {
    return (
        <button className="not-done" onClick={props.onClick}>Not Done</button>
    )
}

class Status extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const isComplete = this.props.isComplete;
        if (isComplete) {
            return <NotDone onClick={this.props.toggleTaskStatus} />
        }
        return <Done onClick={this.props.toggleTaskStatus} />
    }

}
export default Status;