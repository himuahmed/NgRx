import { Action } from "@ngrx/store";

export enum PostActionTypes {
    GETTING_POSTS = '[Post] get posts',
    POSTS_FETCHED_SUCCESSFULLY = '[Post] posts fetched successfully',
/*     POST_LOADING = '[Post] posts loading',
    POST_LOADED = '[Post] posts loaded' */
}

export class GetAllPostsAction implements Action {
    readonly type = PostActionTypes.GETTING_POSTS;
}

export class AllPostsFetched implements Action {
    readonly type = PostActionTypes.POSTS_FETCHED_SUCCESSFULLY;
    constructor(public payload: any){}
}

/* export class AllPostsLoading implements Action {
    readonly type = PostActionTypes.GET_POSTS;
    constructor(public payload: any){}
}

export class AllPostsLoaded implements Action {
    readonly type = PostActionTypes.POST_LOADED;
    constructor(public payload: any){}
} */

export type PostAction = GetAllPostsAction | AllPostsFetched; 

