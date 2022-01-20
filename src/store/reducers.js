import { combineReducers } from 'redux';

// const SAVE_LIKE = 'SAVE_LIKE';
const UPDATE_LIKED_POSTS = 'UPDATE_LIKED_POSTS';

// export function saveLike(like) {
//     return {
//         type: SAVE_LIKE,
//         like
//     };
// }

export function updateLikedPosts(post) {
    return {
        type: UPDATE_LIKED_POSTS,
        post
    };
}

const reducer = (state=[], action) => {
    switch (action.type) {
        // case SAVE_LIKE: {
        //     console.log(action.like);
        //     const newLikes = [...state, action.like];
        //     return newLikes;
        // }
        case UPDATE_LIKED_POSTS: {
            // console.log(action.post);
            // If there is a post in state, remove it. If not, add it.
            console.log(state);
            if (state.some(e => e.title === action.post.title)){
                let index = state.indexOf(action.post);
                state.splice(index, 1);
                return state;
            } else {
                const updatedLikedPosts = [...state, action.post];
                return updatedLikedPosts;
            }
        }
        default:
            console.log(state);
            return state;
    }
};

const manageStates = combineReducers({
    reducer
});

export default manageStates;