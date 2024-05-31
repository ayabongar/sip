import { formatDate } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../../api.services/client.service';

import { lookupService } from '../../../../api.services/lookup.Service';
import { csClient } from '../../../../model/client';
import { NgbModal, NgbModalOptions, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FileQueryString } from '../../../../model/FileToUpload';


@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.scss']
})
export class ClientEditorComponent implements OnInit {  
  @Output("bindDropDownList") bindGrindView: EventEmitter<any> = new EventEmitter();
  @Input() clientObject:csClient ;
  IsClientIdHidden : boolean=false;
  isClinetActive : string;
  clientActive : boolean=false;
  
  @Input() childClientObject:csClient ;
  PopupForm = this.fb.group({
    ClientName: ['', Validators.required],
    ClientRefDate: ['', Validators.required],
    ClientRefNumber:['',Validators.required],
    ClientNationalityID:['',Validators.required],
    ClientEffectiveDate:['',Validators.required],
    ClientID:[],
    strClientID:[],
    ClientCancellationDate:['',Validators.required],
    ClientTypeID:new UntypedFormControl({value: '', readonly: true}, Validators.required),
    //Contact Information
    ClientContactTitleID:[],
    ClientContactInitials:[],
    ClientContactSurname:[],
    ClientContactCell:[],
    ClientContactPhone:[],
    ClientContactPhoneCode:[],
    ClientContactFax:[],
    ClientContactEMail:[],
    Active:['',{disabled:true}],
    //physical Address
    ClientAddress1:['',Validators.required],
    ClientAddress2:['',Validators.required],
    ClientAddress3:['',Validators.required],
    ClientAddress4:['',Validators.required],
    ClientAddressPostCode:['',Validators.required],
    //Postal address
    ClientPostal1:['',Validators.required],
    ClientPostal2:['',Validators.required],
    ClientPostal3:['',Validators.required],
    ClientPostalPostCode:['',Validators.required],
    //Bank Details
    ClientBankAccount:['',Validators.required],
    ClientBankAccountType:['',Validators.required],
    ClientBankName:['',Validators.required],
    ClientBankBranchCode:['',Validators.required],
    ClientAllias:['',Validators.required],
    MiscellaneousAccount: ['', Validators.required],

  }); 


  client: csClient= new csClient();
  clientType: any;
  clientTitle: any;
  clientNatiality: any;
   FileQueryString: FileQueryString;

  constructor(private fb: UntypedFormBuilder,private _lookups:lookupService,private _client:ClientService,private modalService: NgbModal) { }


  ngOnInit(): void {
    this.client = this.clientObject;
    this.bindDropdownlist();
    if(this.client.ClientID > 0){
      this.bindClientPage();
    
    }
    //console.log("ref date" + this.client.ClientRefDate)
  }
  bindDropdownlist()
  {
    this.FileQueryString = new FileQueryString();
    this.FileQueryString.ClientID = this.client.ClientID;
    this.FileQueryString.VehicleId = 0;
    this.FileQueryString.OwnerId = 0;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.IdProvided = false;
    this._lookups.GetClientType()
    .subscribe
    (
        data => {
          this.clientType = data;   
             
        }
        
    );   

    this._lookups.GetClientTitleType()
    .subscribe
    (
        data => {
          this.clientTitle = data;             
        }
        
    );  

    this._lookups.GetClientNatinality()
    .subscribe
    (
        data => {
          this.clientNatiality = data;                
        }        
    );  
  }
 

  bindClientPage() {  
 
    this.ngSetFileVariables(this.client.ClientID,0,0,0)
    var currentDate = new Date()
    var cancDate = new Date(this.client.ClientCancellationDate)
    if (cancDate >= (currentDate))
        {
          this.isClinetActive ="Active";  
          this.clientActive = true;                       
        }
        else
        {
          this.isClinetActive="Inactive"; 
          this.clientActive = false;                    
    }
    
    this.PopupForm.patchValue({
      ClientName: this.client.ClientName,
      ClientRefDate:formatDate(this.client.ClientRefDate,'yyyy-MM-dd', 'en-US'),
      ClientRefNumber: this.client.ClientRefNumber,
      ClientNationalityID:this.client.ClientNationalityID,
      strClientID:this.client.strClientID,
      ClientID:this.client.ClientID,
      ClientEffectiveDate:formatDate(this.client.ClientEffectiveDate,'yyyy-MM-dd', 'en-US'),
      ClientCancellationDate:formatDate(this.client.ClientCancellationDate,'yyyy-MM-dd', 'en-US'),
      ClientTypeID:this.client.ClientTypeID,
      Active:this.isClinetActive,
      //Contact Information
      ClientContactTitleID:this.client.ClientContactTitleID,
      ClientContactInitials:this.client.ClientContactInitials,
      ClientContactSurname:this.client.ClientContactSurname,
      ClientContactCell:this.client.ClientContactCell,
      ClientContactPhone:this.client.ClientContactPhone,
      ClientContactPhoneCode:this.client.ClientContactPhoneCode,
      ClientContactFax:this.client.ClientContactFax,
      ClientContactEMail:this.client.ClientContactEMail,
       //physical Address
      ClientAddress1:this.client.ClientAddress1,
      ClientAddress2:this.client.ClientAddress2,
      ClientAddress3:this.client.ClientAddress3,
      ClientAddress4:this.client.ClientAddress4,
      ClientAddressPostCode:this.client.ClientAddressPostCode,
      //Postal address
      ClientPostal1:this.client.ClientPostal1,
      ClientPostal2:this.client.ClientPostal2,
      ClientPostal3:this.client.ClientPostal3,
      ClientPostalPostCode:this.client.ClientPostalPostCode,
      //Bank Details
      ClientBankAccount:this.client.ClientBankAccount,
      ClientBankAccountType:this.client.ClientBankAccountType,
      ClientBankName:this.client.ClientBankName,
      ClientBankBranchCode:this.client.ClientBankBranchCode,
      ClientAllias: this.client.ClientAllias,
      MiscellaneousAccount: this.client.MiscellaneousAccount
    });
    
  }

  async onSubmit(){
    this.client=this.PopupForm.value;    
    this._client.SaveOrUpdateClient(this.client)
          .subscribe
          (
           (response) => {
              alert('The record was successfully saved.');
              this.Close();
              this.bindGrindView.emit() //emit is a function and you can pass the value
            },
            (error) => {
              console.error(error.message);
              confirm('custom Errormessage: ' + error.message);
            }
          );
  }
  Close(){
    this.clientObject = null;
    this.modalService.dismissAll();
  }
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  ngSetFileVariables(clientId: any, vehicleId: any, ownerid: any, claimId: any) {

    this.FileQueryString.ClientID = clientId;
    this.FileQueryString.VehicleId = vehicleId;
    this.FileQueryString.OwnerId = ownerid;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = claimId;
    this.FileQueryString.IdProvided = true;
    console.log('client Id:' + this.FileQueryString.ClientID +
      'vehicle Id: ' + this.FileQueryString.VehicleId + 'owner id :' + this.FileQueryString.OwnerId
      + 'Claim Id : ' + this.FileQueryString.ClaimId + 'is Id Providerd : ' + this.FileQueryString.IdProvided)
  }
}
