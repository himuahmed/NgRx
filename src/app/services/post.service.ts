import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient ) { }


 fetchPosts(){
   return this.http.get(this.apiUrl + 'posts')
 }


 dummy(){
   return this.http.get('https://stagedata.givetech.io/give-tech/api/campaign/603fe725-9a21-4353-87e8-3de2cc0f94b6');
 }
}
