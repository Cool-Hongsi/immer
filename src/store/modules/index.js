import { combineReducers } from 'redux';
import todoReducer from './todo';
import githubReducer from './github';

export default combineReducers({
    todoReducer,
    githubReducer,
    // Other Reducers...
});