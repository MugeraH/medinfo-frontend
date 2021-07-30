import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};


const userUrl = 'https://medinfo-api.herokuapp.com/auth/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}



  updateUser(id,data: {
    firstname: string;
    lastname: string;
    profile_picture: string;
    bio: string;
  }) {
    return this.http.put(`${userUrl}/${id}`, data);
  }
}
