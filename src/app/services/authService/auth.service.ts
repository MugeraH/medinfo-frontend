import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

const loginUrl = 'https://medinfo-api.herokuapp.com/auth/login';
const logoutUrl = 'https://medinfo-api.herokuapp.com/auth/logout';
const registerUrl = 'https://medinfo-api.herokuapp.com/auth/register';
const userUrl = 'https://medinfo-api.herokuapp.com/auth/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userLogin(data: { email: string; password: string }) {
    return this.http.post(loginUrl, data);
  }

  userRegister(data: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }) {
    return this.http.post(registerUrl, data);
  }

  getUser() {
    return this.http.get(userUrl, httpOptions);
  }

  logout() {
    return this.http.post(logoutUrl, {}, { withCredentials: true });
  }
}
