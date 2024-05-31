import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { OwnerService } from '../../../../api.services/owner.service';
import { csOwner } from '../../../../model/owner';

@Component({
  selector: 'app-owners-not-linked',
  templateUrl: './owners-not-linked.component.html',
  styleUrls: ['./owners-not-linked.component.scss']
})
export class OwnersNotLinkedComponent implements OnInit {
  public listObject: any = []; 
  dataSource: MatTableDataSource<csOwner>;
  displayedColumns = ['TitleDescription','SurnameAndInitials','OwnerPassportNumber','OwnerMaritalStatus','NationalityDescription','actions'];
  selection = new SelectionModel<csOwner>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  panelOpenState = false;
  modalHeader: string;
  ownerObject: csOwner;
  constructor(private _ownerService:OwnerService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.bindOnwerList();
  }
 
  bindOnwerList(){
    this._ownerService.SelectOwnersNotLinkedToVehicle()
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
     this.dataSource.sort = this.sort;
     }
   }
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  } 
  open(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      windowClass :'my-class'
    }; 
    this.ownerObject = new csOwner();      
   
 
    this.modalHeader = "Add Or Edit Users";     
    this.modalService.open(content, ngbModalOptions);
  }
   
  edit(content,id:string) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      windowClass :'my-class'
    }; 
    this.ownerObject = null;      
    this._ownerService.SelectOwnerById(id)     
    .subscribe
    (
        data => {             
          this.ownerObject = data;  
          console.log("Dasboard Onwer Id : " + JSON.stringify(this.ownerObject)) ;           
               }                  
    );   
 
    this.modalHeader = "Add Or Edit Users";     
    this.modalService.open(content, ngbModalOptions);
  }
   
  close(content){   
   // this.bindGrindView();
   // this.vehicleObject = null;
    this.modalService.dismissAll();
   }
}

