import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder,  Validators } from '@angular/forms';
import { ThemeService } from 'ng2-charts';
import { lookupService } from '../../../../api.services/lookup.Service';
import { csClient } from '../../../../model/client';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.scss']
})
export class ClientInformationComponent implements OnInit {
  @Input() childClientObject:csClient ;
  ClientInforForm = this.fb.group({
    ClientName: ['', Validators.required],
    ClientRefDate: ['', Validators.required],
    ClientRefNumber:['',Validators.required],
    strClientID:[],
    ClientID:['',Validators.required] ,
    ClientEffectiveDate:['',Validators.required],
    ClientCancellationDate:['',Validators.required],
    
  }); 


  client: csClient= new csClient();
  clientType: any;
  clientTitle: any;
  clientNatiality: any;
  clientActive: boolean;
  constructor(private fb: UntypedFormBuilder,private _lookups:lookupService) { }

  ngOnInit(): void {
    this.client = this.childClientObject;     
    this.updateProfile();    
   
  }

  updateProfile() {  
     
    var clientCancellationDate = new Date(this.client.ClientCancellationDate);
    var cDate = new Date();

    if(clientCancellationDate >= cDate)
    {
      this.clientActive =true;                             
    }
    else
    {
      this.clientActive=false;                                  
    }
    this.ClientInforForm.patchValue({
      ClientName: this.client.ClientName,      
      ClientRefNumber: this.client.ClientRefNumber, 
      strClientID:this.client.strClientID,    
      ClientID:this.client.ClientID,
      ClientEffectiveDate:formatDate(this.client.ClientEffectiveDate,'yyyy-MM-dd', 'en-US'),
      ClientCancellationDate:formatDate(this.client.ClientCancellationDate,'yyyy-MM-dd', 'en-US'), 
      ClientRefDate:formatDate(this.client.ClientRefDate,'yyyy-MM-dd', 'en-US'),    
    });

    this.ClientInforForm.controls['ClientName'].disable();
    this.ClientInforForm.controls['ClientRefNumber'].disable();    
    this.ClientInforForm.controls['ClientEffectiveDate'].disable();
    this.ClientInforForm.controls['ClientCancellationDate'].disable();
    this.ClientInforForm.controls['ClientRefDate'].disable();
    this.ClientInforForm.controls['strClientID'].disable();
  }
 
  submit()
  {
    this.client=this.ClientInforForm.value;   
  }
}
