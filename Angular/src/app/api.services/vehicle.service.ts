import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  
export class VehicleService {
    public _headers: HttpHeaders;
   
    constructor(private httpclient: HttpClient) {
      this._headers = new HttpHeaders();  
      this._headers.append('Content-Type', 'x-www-form-urlencoded');
     }
     public GetAllVehicles(): Observable<any> {
        const path = environment.apiEndpoint + 'Vehicles/GetClientVehicles';
        return this.httpclient.get(path, {withCredentials: true});
    
     }
  public GetAllVehiclesByClients(): Observable<any> {
    const path = environment.apiEndpoint + 'Vehicles/GetAllClientVehicles';
    return this.httpclient.get(path, { withCredentials: true });

  }

      public GetVehicleByID(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Vehicles/GetVehicleById?id=';
        return this.httpclient.get(path + id, {withCredentials: true});    
      }

      public SelectVehicleByClientId(id:string): Observable<any> {
        const path = environment.apiEndpoint + 'Vehicles/GetVehicleByClientId?clientId=';
        return this.httpclient.get(path + id, {withCredentials: true});    
      }

      public SelectVehicleByOwnerId(id: string): Observable<any> {
        const path = environment.apiEndpoint + 'Vehicles/SelectVehicleByOwnerId?ownerId=';
        return this.httpclient.get(path + id, {withCredentials: true});    
      }

      public InsertIntoVehicle(body: any): Observable<any> {
      const headers = { 'content-type': 'application/json'};
      const path = environment.apiEndpoint + 'Vehicles/InsertIntoVehicle';
      return this.httpclient.post(path, body, {headers: headers, observe: 'response', withCredentials: true});
    }

    public UpdateVehicle(body: any): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const path = environment.apiEndpoint + 'Vehicles/UpdateVehicle';
    return this.httpclient.post(path, body, {headers: headers, observe: 'response', withCredentials: true});
  }
  public CheckDuplicateVehicle(vehicleRegistration: string, VehicleID: string): Observable<any> {
    const path = environment.apiEndpoint + `Vehicles/CheckDuplicateVehicle?registration=${vehicleRegistration}&vehicleID=${VehicleID}`;
    return this.httpclient.get(path, { withCredentials: true });
  }

  // New method to deregister a vehicle
  public deregisterVehicle(vehicleId: number): Observable<any> {
    const path = environment.apiEndpoint + 'Vehicles/DeregisterVehicle?vehicleId=' + vehicleId;
    return this.httpclient.post(path, { withCredentials: true });
  }

}

