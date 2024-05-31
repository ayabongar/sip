import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthenticatedUser} from '../../../../model/AuthenticatedUsers';
import {ClientService} from '../../../../api.services/client.service';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { csClient } from '../../../../model/client';
import { Router } from '@angular/router';
import { FileQueryString } from '../../../../model/FileToUpload';
import { VehicleService } from '../../../../api.services/vehicle.service';
import { csVehicles } from '../../../../model/vehicles';

@Component({
  selector: 'app-client-vehicles',
  templateUrl: './client-vehicles.component.html',
  styleUrls: ['./client-vehicles.component.scss']
})
export class ClientVehiclesComponent implements OnInit {
  //------------------datasource---------------------
  public listObject: any = []; 
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['ClientID', 'ClientAllias', 'VehicleRegistration','VehicleCancellationDate','VehicleStatus','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   modalHeader: string;
   childClientObject: csClient;
   clientObject:csClient;
   nominee: any;
  FileQueryString: FileQueryString;
    vehicleObject: any;
    clientId: any;
    hasClaims: boolean;
 
  constructor(private _clientService: ClientService, private modalService: NgbModal, private _vehicleService: VehicleService, private router: Router, private _vehicle: VehicleService) { }
 
   ngOnInit(): void {
     this.bindGrindView();
   }
 
  bindGrindView() {
    this._vehicle.GetAllVehiclesByClients()
     .subscribe
     (
         data => {                
         this.bindDataSource(data);
         //debugger;
         this.hasClaims = true
         if (!data) {
           this.hasClaims = true;
         }
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
  open(content) {
    this.FileQueryString = new FileQueryString();
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.vehicleObject = new csVehicles();
    this.vehicleObject.ClientID = this.clientId;
    this.vehicleObject.Mode = "New";
    this.vehicleObject.VehicleID = 0;
    this.modalHeader = "Add Or Edit User";

    this.FileQueryString = new FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.modalService.open(content, ngbModalOptions);
  }

  edit(content, id: string) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.FileQueryString = new FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.vehicleObject = null;
    console.log('v id' + id)
    this._vehicleService.GetVehicleByID(id)
      .subscribe
      (
        data => {
          this.vehicleObject = data;
        }
      );

    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }

  close(content) {
    // this.bindGrindView();
    this.vehicleObject = null;
    this.modalService.dismissAll();
  }
     
     

      btnClick (id:string) {
       this.childClientObject = new csClient;
      
      this._clientService.GetClientByID(id)    
        .subscribe
        (
            data => {
              
              this.childClientObject = data;   
              
                   }  
                                
        );   
       
        //this.router.navigate(['/registration/clientVehicles']);
       // this.router.navigateByUrl('/registration/clientVehicles',{state:{}});
        
};
 }
