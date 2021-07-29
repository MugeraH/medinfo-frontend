import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

const loginUrl = 'http://localhost:8000/auth/login';
const logoutUrl = 'http://localhost:8000/auth/logout';
const registerUrl = 'http://localhost:8000/auth/register';
const userUrl = 'http://localhost:8000/auth/user';

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
