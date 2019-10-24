import produce from 'immer';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let initialId = 0;

export const addTodo = (todoData) => {
    return { type : ADD_TODO, id : initialId++, data : todoData, completed : false };
};

export const removeTodo = (todoDataId) => {
    return { type : REMOVE_TODO, id : todoDataId };
};

export default function todoReducer(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return produce(state, draftState => {
                draftState.push({
                    id : action.id,
                    data : action.data,
                    completed : action.completed
                });
            });
        case REMOVE_TODO:
            return produce(state, draftState => {
                draftState[action.id].completed = !draftState[action.id].completed;
            });
        default:
            return state;
    }
};