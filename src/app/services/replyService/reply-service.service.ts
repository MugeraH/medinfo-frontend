import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'https://medinfo-hm.herokuapp.com/api/reply';

@Injectable({
  providedIn: 'root',
})
export class ReplyService {
  constructor(private http: HttpClient) {}

 
  getPostReply(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addReply(data: { post: string }) {
    return this.http.post(baseUrl, data);
  }

  updateReply(
    id: any,
    data: {
      post: string;
    }
  ) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteReply(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
