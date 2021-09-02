
import { PostAction, PostActionTypes } from "../actions/post.actions";

export interface PostReducerState {
    loading:  boolean;
    loaded:boolean;
    posts: any;
}

const initialState : PostReducerState =  {
    loading:  false,
    loaded:false,
    posts: []
}

export function PostReducer(state:PostReducerState = initialState, action:PostAction): PostReducerState{
    switch(action.type){
        case PostActionTypes.GETTING_POSTS:
            return {...state, loading:true};
        case PostActionTypes.POSTS_FETCHED_SUCCESSFULLY:
            return {...state, posts:action.payload, loaded: true};
        default:
            return state;
    }
}

///selectors
export const getAllPosts = (state: PostReducerState) => state.posts;
export const getPostLoading = (state: PostReducerState) => state.loading;
export const getPostLoaded = (state: PostReducerState) => state.loaded;