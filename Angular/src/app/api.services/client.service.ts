import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class ClientService {
    public _headers: HttpHeaders;
   
    constructor(private httpclient: HttpClient) {
      this._headers = new HttpHeaders();  
      this._headers.append('Content-Type', 'x-www-form-urlencoded');
     }

     public GetAllClient(): Observable<any> {
        const path = environment.apiEndpoint + 'Client/GetAllClient';
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public GetClientByID(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Client/GetClientById?id=';
        
        return this.httpclient.get(path + id, {withCredentials: true});    
      }

      public SaveOrUpdateClient(body: any) : Observable<any>{
          
        const headers = { 'content-type': 'application/json'};       
        const path = environment.apiEndpoint + 'Client/SaveOrUpdateClient';
        return this.httpclient.post(path, body, {headers: headers, observe: 'response', withCredentials: true});
      }
    }