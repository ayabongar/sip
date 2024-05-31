import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ClaimService {
    public _headers: HttpHeaders;

    constructor(private httpclient: HttpClient) {
        this._headers = new HttpHeaders();
        this._headers.append('Content-Type', 'x-www-form-urlencoded');
    }
    public SelectClaimAllClaims(): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectClaimAllClaims';

        return this.httpclient.get(path, { withCredentials: true });
    }
    public SelectClaimByStatusID(id:any): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectClaimByStatusID?statusId=' + id;

        return this.httpclient.get(path, { withCredentials: true });
    }
  public GetAllFinalisedClaims(): Observable<any> {
    const path = environment.apiEndpoint + 'DipClaim/GetAllFinalisedClaims';

    return this.httpclient.get(path, { withCredentials: true });
  }
  public SelectApprovedClaimByStatusID(id: any): Observable<any> {
    const path = environment.apiEndpoint + 'DipClaim/SelectApprovedClaimByStatusID?statusId=' + id;
    return this.httpclient.get(path, { withCredentials: true });
   
    //return of(data).pipe(delay(2500));
  }
  public SelectApprovedClaimInvoicesByClientID(id: any): Observable<any> {
    const path = environment.apiEndpoint + 'DipClaim/SelectApprovedClaimInvoicesByClientID?clientId=' + id;

    return this.httpclient.get(path, { withCredentials: true });
  }
    public SelectClaimForSuperVisor(): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectClaimForSuperVisor';

        return this.httpclient.get(path, { withCredentials: true });
    }
    public SelectClaimThatAreOnBookeeping(): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectClaimThatAreOnBookeeping';

        return this.httpclient.get(path, { withCredentials: true });
    }

    public SelectGroupToContinue(): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectGroupToContinue';

        return this.httpclient.get(path, { withCredentials: true });
    }
    public SelectClaimForDataCaptures(): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectClaimForDataCaptures';

        return this.httpclient.get(path, { withCredentials: true });
    }

    public GetClaimTotalLiters(id: string): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/GetClaimTotalLiters?groupId=';

        return this.httpclient.get(path + id, { withCredentials: true });
    }

    public SelectGroupInfoById(id: string): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectGroupInfoById?groupId=';

        return this.httpclient.get(path + id, { withCredentials: true });
    }

    public SelectClaimInfoById(id: string): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/SelectClaimInfoById?ClaimId=';

        return this.httpclient.get(path + id, { withCredentials: true });
    }

    public SaveInvoice(body: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'DipClaim/SaveInvoice';
        return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
    }

    public UpdateClaim(body: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'DipClaim/UpdateClaim';
        return this.httpclient.post(path, body, { headers: headers, observe: 'response', withCredentials: true });
    }
    public SendGroupToSupervisor(id: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'DipClaim/SendGroupToSupervisor?groupId=';
        return this.httpclient.post(path + id, null, { headers: headers, observe: 'response', withCredentials: true });
    }

  public SendAllToSupervisor(id: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const path = environment.apiEndpoint + 'DipClaim/SendAllToSupervisor';
    return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
  }

    public UpdateClaimStatuses(claimId: any,statusId:any,ClaimStatusReason:any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'DipClaim/UpdateClaimStatuses?claimId='+ claimId +'&statusId=' +statusId+'&ClaimStatusReason=' + ClaimStatusReason;
        return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
    }
  public ApproveClaimStatuses(claimId: any, statusId: any, ClaimStatusReason: any, guid: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const path = environment.apiEndpoint + 'DipClaim/UpdateClaimStatuses?claimId=' + claimId + '&statusId=' + statusId + '&ClaimStatusReason=' + ClaimStatusReason + '&guid=' + guid ;
    return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
  }

  public SendEmails(statusId: any, ClaimStatusReason: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const path = environment.apiEndpoint + 'DipClaim/SendEmails?statusId=' + statusId + '&ClaimStatusReason=' + ClaimStatusReason + '&guid=';
    return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
  }

  public FinaliseClaim(clientId: any, chequeNumber: any, billingReferenceNo: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const path = environment.apiEndpoint + 'DipClaim/FinaliseClaim?clientId=' + clientId + '&chequeNumber=' + chequeNumber + '&billingReferenceNo=' + billingReferenceNo;
    return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
  }
    public DeleteClaim(id: string): Observable<any> {
        const path = environment.apiEndpoint + 'DipClaim/DeleteClaim?claimId=' + id;
        const headers = { 'content-type': 'application/json' };
        return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
    }

  public DeleteClaimById(id: string): Observable<any> {
    const path = environment.apiEndpoint + 'DipClaim/DeleteClaimInfoById?claimId=' + id;
    const headers = { 'content-type': 'application/json' };
    return this.httpclient.post(path, null, { headers: headers, observe: 'response', withCredentials: true });
  }
}
