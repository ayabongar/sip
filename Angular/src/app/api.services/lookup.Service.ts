import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class lookupService {
    public _headers: HttpHeaders;
   
    constructor(private httpclient: HttpClient) {
      this._headers = new HttpHeaders();  
      this._headers.append('Content-Type', 'x-www-form-urlencoded');
     }

     public GetClientType(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetClientType';
        console.log(this.httpclient.get(path, {withCredentials: true}))
        return this.httpclient.get(path, {withCredentials: true});
    
      }
      public GetAllClientType(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetAllClientType';
        console.log(this.httpclient.get(path, {withCredentials: true}))
        return this.httpclient.get(path, {withCredentials: true});
    
      }
      public GetClientTypeByID(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetClientTypeByID?id=';
        
        return this.httpclient.get(path + id, {withCredentials: true});    
      }
      public UpdateClientType(body: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'Lookups/UpdateClientType';
        
        return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
      }

      public GetClientTitleType(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetClientTitleType';
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public GetClientNatinality(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetClientNatinality';
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public GetRank(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetRank';
        return this.httpclient.get(path, {withCredentials: true});   
      }

      public SelectAllOwnersRank(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/SelectAllOwnersRank';
        console.log(this.httpclient.get(path, {withCredentials: true}))
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public GetRankByID(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/GetRankByID?id=';
        
        return this.httpclient.get(path + id, {withCredentials: true});    
      } 

      public InsertOrUpdateRank(body: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'Lookups/InsertOrUpdateRank';
        
        return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
      }

      public SelectAllTitles(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/SelectAllTitles';
        console.log(this.httpclient.get(path, {withCredentials: true}))
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public SelectTitleByID(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/SelectTitleByID?id=';
        
        return this.httpclient.get(path + id, {withCredentials: true});    
      } 

      public InsertOrUpdateTitle(body: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'Lookups/InsertOrUpdateTitle';
        
        return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
      }

      /********************Nationality********************* */
      public SelectNationalityAllTypes(): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/SelectNationalityAllTypes';
        console.log(this.httpclient.get(path, {withCredentials: true}))
        return this.httpclient.get(path, {withCredentials: true});
    
      }

      public SelectNationalityInfoById(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Lookups/SelectNationalityInfoById?id=';
        
        return this.httpclient.get(path + id, {withCredentials: true});    
      } 

      public InsertOrUpdateNationality(body: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'Lookups/InsertOrUpdateNationality';
        
        return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
      }

          /********************Refund Rates********************* */
          public SelectAllRefundRates(): Observable<any> {
            const path = environment.apiEndpoint + 'Lookups/SelectAllRefundRates';
            console.log(this.httpclient.get(path, {withCredentials: true}))
            return this.httpclient.get(path, {withCredentials: true});
        
          }
    
          public SelectRefundRateById(id:string): Observable<any> {
            const path = environment.apiEndpoint + 'Lookups/SelectRefundRateById?id=';
            
            return this.httpclient.get(path + id, {withCredentials: true});    
          }
          public SelectRefundRateByfuelId(id: any): Observable<any> {
            const path = environment.apiEndpoint + 'Lookups/SelectRefundRateByfuelId?refundRateId=';

            return this.httpclient.get(path + id, { withCredentials: true });
          }
    
          public UpdateRefundRates(body: any): Observable<any> {
            const headers = { 'content-type': 'application/json' };
            const path = environment.apiEndpoint + 'Lookups/UpdateRefundRates';
            
            return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
          }

    }
