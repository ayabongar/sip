import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {AuthenticatedUser} from '../../../../model/AuthenticatedUsers';
import {VehicleService} from '../../../../api.services/vehicle.service';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { csVehicles } from '../../../../model/vehicles';
import {SelectionModel} from '@angular/cdk/collections';
import { csClient } from '../../../../model/client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../api.services/client.service';
import { FileQueryString } from '../../../../model/FileToUpload';

@Component({
  selector: 'app-vehicle-dashboard',
  templateUrl: './vehicle-dashboard.component.html',
  styleUrls: ['./vehicle-dashboard.component.scss']
})
export class VehicleDashboardComponent implements OnInit {
  //------------------datasource---------------------
  public listObject: any = []; 
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['VehicleRegistration','VehicleRefNumber','VehicleCancellationDate','VehicleStatus','actions'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   modalHeader: string;
   vehicleObject: csVehicles;
   nominee: any;
   childClientObject:csClient ;
   clientObject : csClient;
  clientId: any;
  FileQueryString: FileQueryString;
   
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


   constructor(private _vehicleService:VehicleService,private modalService: NgbModal,
    private route:ActivatedRoute,private _clientService:ClientService) { }
 
   ngOnInit(): void {
   
     this.clientId = this.route.snapshot.params['clientId'];
     if (this.clientId > 0) {
       this.bindGrindView();
     }    
   }
 
  bindGrindView() {
    this.childClientObject = null;
    this.clientId = this.route.snapshot.params['clientId']
    if (this.clientId > 0) {
      this._clientService.GetClientByID(this.clientId)
        .subscribe
        (
          client => {
            this.childClientObject = client;

          }
        );


      this._vehicleService.SelectVehicleByClientId(this.clientId)
        .subscribe
        (
          data => {
            this.bindDataSource(data);

          }
        );
    }
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
 //Open Modal Popup
    open(content){
      this.FileQueryString = new FileQueryString();
     let ngbModalOptions: NgbModalOptions = {
       backdrop : 'static',
       keyboard : false,
       windowClass :'my-class'
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
   
     edit(content,id:string) {
       let ngbModalOptions: NgbModalOptions = {
         backdrop : 'static',
         keyboard : false,
         windowClass :'my-class'
       }; 
       this.FileQueryString = new FileQueryString();
       this.FileQueryString.IdProvided = false;
       this.vehicleObject = null;      
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
      
     close(content){   
      // this.bindGrindView();
       this.vehicleObject = null;
       this.modalService.dismissAll();
      }
 }
 
