import React, { Component } from 'react';

export default class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoInput : ''
        };

        this.setTodo = this.setTodo.bind(this);
    }

    setTodo = (e) => {
        this.setState({
            todoInput : e.target.value
        })
    };

    render(){

        const { todoList, onSelectedAdd, onSelectedRemove } = this.props;

        return(
            <div>
                <input type="text" placeholder="ToDo" onChange={this.setTodo} />
                <button onClick={() => onSelectedAdd(this.state.todoInput)}>SEND</button>
                {todoList.map((el, index) => {
                    return(
                        <div key={index} onClick={() => onSelectedRemove(el.id)} style={{textDecoration : el.completed ? "line-through" : "none"}}>
                            {el.id} / {el.data}
                        </div>
                    )
                })}
            </div>
        )
    }
}