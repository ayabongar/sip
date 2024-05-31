import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';



@Injectable({
    providedIn: 'root'
  })

  export class UserManager {
    public _headers: HttpHeaders;
   
    constructor(private httpclient: HttpClient) {
      this._headers = new HttpHeaders();  
      this._headers.append('Content-Type', 'x-www-form-urlencoded');
     }

     public AuthenticateUser(): Observable<any> {
        const path = environment.apiEndpoint + 'User/AuthenticateUser';
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public GetAllUsers(): Observable<any> {
        const path = environment.apiEndpoint + 'User/GetAllUser';
        return this.httpclient.get(path, {withCredentials: true});
    
      }
      public GetUserRoles(): Observable<any> {
        const path = environment.apiEndpoint + 'User/GetUserRoles';
        return this.httpclient.get(path, {withCredentials: true});
    
      }
      public GetHttpUserBySID(sid:string): Observable<any> {
        const path = environment.apiEndpoint + 'User/GetHttpUserBySID?sid=';
        return this.httpclient.get(path + sid, {withCredentials: true});
    
      }
      public Save(body: any) : Observable<any>{
        const headers = { 'content-type': 'application/json'};        
        const path = environment.apiEndpoint + 'User/Save';
        return this.httpclient.post(path, body, {headers: headers, observe: 'response', withCredentials: true});
      }
    }