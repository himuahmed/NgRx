import { ActionReducerMap, createSelector } from "@ngrx/store";
import { getAllPosts, getPostLoaded, getPostLoading, PostReducer, PostReducerState,  } from "./post.reducer";

export interface RootReducerState {
    posts: PostReducerState; 
}

export const RootReducer: ActionReducerMap<RootReducerState> = {
    posts: PostReducer
}

export const getPostsState = (state: RootReducerState) => state.posts;

export const getLoadedPosts = createSelector(getPostsState, getAllPosts);
export const getPostsLoading = createSelector(getPostsState, getPostLoading);
export const getPostsLoaded = createSelector(getPostsState, getPostLoaded);