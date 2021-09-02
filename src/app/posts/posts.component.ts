import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { PostService } from '../services/post.service';
import { AllPostsFetched, GetAllPostsAction } from '../store/actions/post.actions';
import { getLoadedPosts, getPostsLoaded, getPostsLoading, getPostsState, RootReducerState } from '../store/reducers';

export interface post {
  title:string;
  body: string;
  id:string;
  userId:number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  title = 'NGRX';
  posts: any;
  constructor(private postService: PostService, private store:Store<RootReducerState>) { }

  ngOnInit(): void {
  }

  fetchAllPosts(fetchNewList = false){
    const loading = this.store.select(getPostsLoading);
    const loaded = this.store.select(getPostsLoaded);
    combineLatest([loading, loaded]).subscribe(res=>{
      if(!res[0] && !res[1] || fetchNewList){
        this.store.dispatch(new GetAllPostsAction());
        this.postService.fetchPosts().subscribe(res=>{
          this.store.dispatch(new AllPostsFetched({payload: res}))
        });
      }
    })
    this.store.select(getLoadedPosts).subscribe(res=>{
      this.posts = res.payload;
    })
  }

}
