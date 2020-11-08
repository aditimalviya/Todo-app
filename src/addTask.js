import { render } from '@testing-library/react';
import React, { useState } from 'react';

let idGen = 0;
class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            name: ''
        }
    }
    addTask = (e) => {
        this.setState({
            tasks: [...this.state.tasks, {
                id: idGen++,
                text: this.state.name,
                isComplete: false
            }],
            name: ''

        })
    }
    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }
    deleteTask = (id) => {
        this.setState({
            ...this.state, tasks: [...this.state.tasks.filter(task => task.id !== id)]
        })
    }
    toggleTaskStatus(id) {
        const task = this.state.tasks.find((x) => x.id === id);
        debugger;
        if (task) {
            task.isComplete = !task.isComplete;
            this.setState({
                ...this.state, tasks: [...this.state.tasks.filter(task => task.id !== id), task]
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Todo List</h2>
                <input placeholder="Add notes" className="add-input" id="inputtext" value={this.state.name} onChange={this.handleInputChange} />
                <button type="button" className="addbtn" onClick={this.addTask}>
                    Add
                </button>
                <ul>
                    {this.state.tasks.map((data) => {
                        console.log(data)
                        return <li id={data.id} key={data.id} text={data.text} className={(data.isComplete) ? 'task-completed' : ''}>{data.text} <div className="float-right"><Status isComplete={data.isComplete} toggleTaskStatus={() => this.toggleTaskStatus(data.id)} /><Remove onClick={() => this.deleteTask(data.id)} /> </div> </li>
                    })}
                </ul>
            </div>
        )
    }

}
function Done(props) {
    return (
        <button className="done-btn" onClick={props.onClick}>Done</button>
    )
}
function Remove(props) {
    return (
        <button className="remove-btn" onClick={props.onClick}>Remove</button>
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
export default AddTask;