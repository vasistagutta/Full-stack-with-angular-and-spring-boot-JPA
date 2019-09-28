import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(`${API_URL}/authenticate`, { username,password }).pipe(
      
      map(
        data => {
          //Setting the username in session
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          //Setting  auth token in session
          sessionStorage.setItem(TOKEN,  `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = this.createBasicAuthenticationHeader(username, password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers: header }).pipe(
      map(
        data => {
          //Setting the username in session
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          //Setting basic auth token in session
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  createBasicAuthenticationHeader(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  //utility methods

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(private message: string) {

  }
}
