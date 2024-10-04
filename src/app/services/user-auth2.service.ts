import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class UserAuth2Service {
    url:string=`${Environment.apiUrl}/Users`
  userLog: BehaviorSubject<boolean>;

  constructor(private HttpClient:HttpClient) {
    this.userLog = new BehaviorSubject<boolean>(this.isUserLogged);
  }
  login(email: string, password: string) {
    localStorage.setItem('userToken', '245678');
    this.userLog.next(true);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userLog.next(false);
  }
  get isUserLogged(): boolean {
    console.log(localStorage.getItem('userToken'));

    return localStorage.getItem('userToken') ? true : false;
  }
  getUserStatus() { /* header ts */
    return this.userLog.asObservable();
  }
  addUser(newUser:Iuser):Observable<Iuser>{
    return this.HttpClient.post<Iuser>(`${this.url}`,newUser);
  }
}



