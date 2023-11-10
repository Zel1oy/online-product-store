import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginRequest } from '../requests/user-login-request';
import { UserRegistrationRequest } from '../requests/user-registration-request';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private baseLoginUrl = 'http://localhost:8080/api/auth';

  constructor(private httpClient: HttpClient) { }

  loginUser(user: UserLoginRequest): Observable<object> {
    return this.httpClient.post(this.baseLoginUrl + '/login', user);
  }

  registerUser(user: UserRegistrationRequest): Observable<object> {
    return this.httpClient.post(this.baseLoginUrl + '/register', user);
  }
}
