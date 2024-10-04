import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string=`${Environment.apiUrl}/Users`

  constructor(private HttpClient:HttpClient) {

  }
  addUser(newUser:Iuser):Observable<Iuser>{
    return this.HttpClient.post<Iuser>(`${this.url}`,newUser);
  }
}
