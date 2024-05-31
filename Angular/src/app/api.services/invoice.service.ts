import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  public _headers: HttpHeaders;

  constructor(private httpclient: HttpClient) {
    this._headers = new HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }

  public SelectInvoiceByClaimId(id: string): Observable<any> {
    const path = environment.apiEndpoint + 'Invoice/SelectInvoiceByClaimId?claimId=';
    return this.httpclient.get(path + id, { withCredentials: true });
  }
  public SelectInvoiceInfoById(id: string): Observable<any> {
    const path = environment.apiEndpoint + 'Invoice/SelectInvoiceInfoById?InvoiceId=';
    return this.httpclient.get(path + id, { withCredentials: true });
  }
  public ValidateInvoice(body: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const path = environment.apiEndpoint + 'Invoice/ValidateInvoice';
    
    return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
  }

  public DeleteInvoice(id: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const path = environment.apiEndpoint + 'Invoice/DeleteInvoice?invoiceId=';
    
    return this.httpclient.post(path + id, null, { headers: headers, observe: 'response', withCredentials: true });
  }
}