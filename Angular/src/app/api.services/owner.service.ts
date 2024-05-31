import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  
export class OwnerService {
    public _headers: HttpHeaders;
   
    constructor(private httpclient: HttpClient) {
      this._headers = new HttpHeaders();  
      this._headers.append('Content-Type', 'x-www-form-urlencoded');
     }
     public SelectOwnerById(id:any): Observable<any> {
      const path = environment.apiEndpoint + 'Owner/SelectOwnerById?ownerId=';
      return this.httpclient.get(path + id, {withCredentials: true});    
    }

     public SelectOwnerByClientId(id:any): Observable<any> {
      const path = environment.apiEndpoint + 'Owner/SelectOwnerByClientId?clientId=';
      return this.httpclient.get(path + id, {withCredentials: true});    
    }

     public GetAllOwners(): Observable<any> {
      const path = environment.apiEndpoint + 'Owner/GetAllOwners';
      return this.httpclient.get(path, {withCredentials: true});
  
    }
    public SelectOwnersNotLinkedToVehicle(): Observable<any> {
      const path = environment.apiEndpoint + 'Owner/SelectOwnersNotLinkedToVehicle';
      return this.httpclient.get(path, {withCredentials: true});
  
    }

     public InsertOwner(body: any) : Observable<any>{      
        const headers = { 'content-type': 'application/json'};       
        const path = environment.apiEndpoint + 'Owner/InsertOwner';
        return this.httpclient.post(path, body, {headers: headers, observe: 'response', withCredentials: true});
      }

      public UpdateOwner(body: any) : Observable<any>{      
        const headers = { 'content-type': 'application/json'};       
        const path = environment.apiEndpoint + 'Owner/UpdateOwner';
        return this.httpclient.post(path, body, {headers: headers, observe: 'response', withCredentials: true});
      }
}
