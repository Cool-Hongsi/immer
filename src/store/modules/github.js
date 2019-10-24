import axios from 'axios';
import produce from 'immer';

export const GET_POST_GITHUB = 'GET_POST_GITHUB';

export const getPostAPI = (postId) => {
    return axios.get(`https://api.github.com/users/${postId}`);
};

export const getPost = (postId) => (dispatch) => {
    return getPostAPI(postId).then((res) => {
        dispatch( { type : GET_POST_GITHUB, payload : res.data } );
    }).catch((err) => {
        console.log(err);
    })
};

const initialState = {
    data : [
        {
            login : 'Cool-Hongsi',
            id : '39789641',
            avatar_url : 'https://avatars3.githubusercontent.com/u/39789641?v=4'
        }
    ]
};

export default function githubReducer(state = initialState, action){
    switch(action.type){
        case GET_POST_GITHUB:
            return produce(state, draftState => {
                let validation = state.data.find(item => item.id === action.payload.id);

                if(validation === undefined){ // no repeat
                    draftState.data.unshift({
                        login : action.payload.login,
                        id : action.payload.id,
                        avatar_url : action.payload.avatar_url
                    });
                }
                else{
                    return state;
                }
            })
        default:
            return state;
    }
};
