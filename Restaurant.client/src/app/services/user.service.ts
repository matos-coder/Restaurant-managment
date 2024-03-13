import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../model/auth/user';
import { ResponseMessage } from '../model/response-message';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  readonly BaseURI = environment.baseUrl;
  login(formData: User) {
    return this.http.post<ResponseMessage>(this.BaseURI + '/auth/Login', formData);
  }
  isLoggedIn =(): boolean => {
    const token = this.getToken();
    console.log(token);
    if(!token) return false;
    return !this.isTokenExpired();
  }
  private isTokenExpired(){
    const token = this.getToken();
    if(!token) return true;
    const decoded = jwtDecode(token);
    const isTokenExpired = Date.now() > decoded['exp']! * 1000;
    if(isTokenExpired) this.logOut();
    return isTokenExpired;
  }
  logOut = ():void => {
    sessionStorage.removeItem('token');
  }
  private getToken = (): string | null  => sessionStorage.getItem('token') || null ;


}
