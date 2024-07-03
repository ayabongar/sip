import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(to: string, subject: string, body: string): Observable<any> {
    const emailPayload = {
      to,
      subject,
      body
    };
    return this.http.post(`${environment.apiEndpoint}/sendEmail`, emailPayload);
  }
}
