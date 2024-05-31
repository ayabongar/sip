import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileToUpload } from '../model/FileToUpload';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
})


export class FileUploadService {

    constructor(private http: HttpClient) { }
  
    public GetDocumentByClient(clientId:string,vehicleId:string,ownerId:string,claimId:string): Observable<any> {        
      const path = environment.apiEndpoint + 'FileUpload/GetDocumentByClient?clientId=' + clientId + '&vehicleId=' + vehicleId + '&OwnerID=' + ownerId + '&ClaimId=' + claimId;        
        return this.http.get(path , {withCredentials: true});    
      }

      public GetFiles(objectId:string): Observable<any> {        
        const path = environment.apiEndpoint + 'FileUpload/GetFiles?objectId=' + objectId ;        
        return this.http.get(path , {withCredentials: true});    
      }

    uploadFile(theFile: FileToUpload) : Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const path = environment.apiEndpoint + 'FileUpload/Post';
       return this.http.post<FileToUpload>( path, theFile, { headers: headers, observe: 'response', withCredentials: true });     
                 
    }  
  }
