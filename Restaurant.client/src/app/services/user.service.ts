import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../model/auth/user';
import { ResponseMessage } from '../model/response-message';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  readonly BaseURI = environment.baseUrl;
  login(formData: User) {
    return this.http.post<ResponseMessage>(this.BaseURI + '/auth/Login', formData);
  }
}
