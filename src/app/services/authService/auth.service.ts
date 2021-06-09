import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

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
    return this.http.get(userUrl, { withCredentials: true });
  }

  logout() {
    return this.http.post(logoutUrl, {}, { withCredentials: true });
  }
}
