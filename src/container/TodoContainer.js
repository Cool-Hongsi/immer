import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../component/Todo';
import { addTodo, removeTodo } from '../store/modules/todo';

class TodoContainer extends Component{

    // When the value of state is changed, it will call the render function.
    // There will be unnecessary rendering along with degrade performance and difficult optimization
    // To deal with, use shouldComponentUpdate API to check the validation both current and next value
    // Depending on returning boolean value, able to control rendering and it could improve the performace

    shouldComponentUpdate = (nextProps, nextState) => {
        const { todoList } = this.props;

        if(todoList !== nextProps.todoList){
            return true; // rendering
        }
        else{
            return false; // no rendering
        }
    }

    onSelectedAdd = (todoData) => {
        const { addTodo } = this.props;
        addTodo(todoData);
    };

    onSelectedRemove = (todoDataId) => {
        const { removeTodo } = this.props;
        removeTodo(todoDataId);
    };

    render(){

        const { todoList } = this.props;

        return(
            <Todo
                todoList={todoList}
                onSelectedAdd={this.onSelectedAdd}
                onSelectedRemove={this.onSelectedRemove}
            />
        )

    }
};

const mapStateToProps = (state) => {
    return {
        todoList : state.todoReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (todoData) => { dispatch(addTodo(todoData)) },
        removeTodo : (todoDataId) => { dispatch(removeTodo(todoDataId)) }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);