import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'https://medinfo-api.herokuapp.com/api/post';

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
    return this.http.get(`${baseUrl}/user/${id}`);
  }
  getPostReply(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/reply/${id}`);
  }

  addPost(data: { post: string; user: number }) {
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
