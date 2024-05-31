import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DipRefundRateService {
    public _headers: HttpHeaders;

    constructor(private httpclient: HttpClient) {
        this._headers = new HttpHeaders();
        this._headers.append('Content-Type', 'x-www-form-urlencoded');
    }
    public SelectAllRefundRates(): Observable<any> {
        const path = environment.apiEndpoint + 'DipRefundRate/SelectAllRefundRates';
        return this.httpclient.get(path, { withCredentials: true });

    }

  public SelectRefundRateById(id: string, invDate: any ): Observable<any> {
    //console.log("id :" + id + "invoiceDate" + invDate);
    const path = environment.apiEndpoint + 'DipRefundRate/SelectRefundRateById?invDate=' + invDate +'&refundRateId=' + id  + "&nothing=";
   // console.log("id :" + id + "invoiceDate second" + invDate);
        return this.httpclient.get(path + id, {withCredentials: true});    
      }
}
