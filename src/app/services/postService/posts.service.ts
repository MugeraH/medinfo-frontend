import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getPostDetail(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getUserPost(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addPost(data: { post: string }) {
    return this.http.post(baseUrl, data);
  }

  updatePost(
    id: any,
    data: {
      post: string;
    }
  ) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deletePost(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
