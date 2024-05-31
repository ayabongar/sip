import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { lookupService } from '../../../../api.services/lookup.Service';
import { OwnerService } from '../../../../api.services/owner.service';
import { VehicleService } from '../../../../api.services/vehicle.service';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';
import { FileQueryString } from '../../../../model/FileToUpload';
import { csOwner } from '../../../../model/owner';

@Component({
  selector: 'app-owner-editor',
  templateUrl: './owner-editor.component.html',
  styleUrls: ['./owner-editor.component.scss']
})
export class OwnerEditorComponent implements OnInit {
  clientTitle: any;
  clientNatiality: any;
  ownerRank: any;
 
  @Input() ownerObject:csOwner ;
  ownerInfo: csOwner;
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['VehicleRegistration','VehicleRefNumber','VehicleCancellationDate','VehicleStatus'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listObject: any;
  FileQueryString: FileQueryString;

  constructor(private ownerForm: UntypedFormBuilder,private _lookups:lookupService,private _vehicleService:VehicleService,private _ownerService:OwnerService,private modalService: NgbModal) { }
  AmbassyForm = this.ownerForm.group({     
    
    OwnerInitials: ['', Validators.required],
    OwnerSurname: ['', Validators.required],
    OwnerPassportNumber:['',Validators.required],
    OwnerMaritalStatus:['',Validators.required],
    TitleID:['',Validators.required],
    NationalityID:['',Validators.required],
    RankID:['',Validators.required], 
    
  });
  ngOnInit(): void {
   this.BindDropdownlist();
   this.BindOwnerDetails();   
   this.ownerInfo = this.ownerObject;
  }

  BindDropdownlist()
  {    
    

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

    this._lookups.GetRank()
    .subscribe
    (
        data => {
          this.ownerRank = data;                       
        }        
    );  
  }

  onSubmit(){
    //console.log('Insert onwer befor' + this.ownerObject[0] )
    if(this.ownerObject[0] == null){     
     this.InsertVehicleInfo();     
    }
    else{
      this.UpdateOwnerInfo();
    }   
  }
  BindOwnerDetails() {
    var currentDate = new Date() 
    this.FileQueryString = new FileQueryString();
    this.FileQueryString.IdProvided = false;
    if ( this.ownerObject[0] != null){
      
      this.FileQueryString.ClientID = 0;
      this.FileQueryString.VehicleId = 0;
      this.FileQueryString.OwnerId = this.ownerObject[0].OwnerID;
      this.FileQueryString.InvoiceId = 0;
      this.FileQueryString.IdProvided = true;
      this.AmbassyForm.patchValue({       
     
      OwnerSurname:  this.ownerObject[0].OwnerSurname ,
      OwnerInitials:  this.ownerObject[0].OwnerInitials,
      TitleID:  this.ownerObject[0].TitleID,
      OwnerPassportNumber: this.ownerObject[0].OwnerPassportNumber,
      RankID:  this.ownerObject[0].RankID,   
      NationalityID: this.ownerObject[0].NationalityID,
      OwnerMaritalStatus: this.ownerObject[0].OwnerMaritalStatus == true ? 1:0 
      
    }); 
       this.bindGrindView(this.ownerObject[0].OwnerID)
    }
}
  InsertVehicleInfo(){
    this.ownerObject=this.AmbassyForm.value;    
    
    this._ownerService.InsertOwner(this.ownerObject)
          .subscribe
          (
           (response) => {
               
              confirm('Owner information submitted successfully');   
              this.close();           
            },
            (error) => {
             
              confirm('custom Errormessage: ' + error.message);
            }
          );
  }

  UpdateOwnerInfo(){
    
   this.ownerInfo=this.AmbassyForm.value; 
   this.ownerInfo.OwnerID = this.ownerObject[0].OwnerID;      
    this._ownerService.UpdateOwner(this.ownerInfo)
          .subscribe
          (
           (response) => {
             // this.vehicleResults = response.message;   
              this.close();               
              confirm('Owner information updated successfully');    
              
            },
            (error) => {
             
              confirm('custom Errormessage: ' + error.message);
            }
          );
    
          // update Onwer Information

  }
  close(){   
    // this.bindGrindView();
     
     this.modalService.dismissAll({'dismissed': true});
    }
    bindGrindView(id:string) {  
    this._vehicleService.SelectVehicleByOwnerId(id)
    .subscribe
    (
        data => {                
          this.bindDataSource( data);         
          
        }
    );
   }


   bindDataSource(data: any){    
     if (data){
      this.listObject = data;
      this.dataSource = new MatTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;          
      this.dataSource.paginator = this.paginator;
     // this.dataSource.sort = this.sort;
      }
    }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }    
    
}
