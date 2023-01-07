import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any>(`${this.url}/posts`);
  }
  getPost(id: string) {
    return this.http.get<any>(`${this.url}/posts/${id}`);
  }
}
