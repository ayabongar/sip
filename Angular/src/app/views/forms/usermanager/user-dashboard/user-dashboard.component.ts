import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AuthenticatedUser} from '../../../../model/AuthenticatedUsers';
import {UserManager} from '../../../../api.services/user.manager';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
 //------------------datasource---------------------
 public listObject: any = []; 
 dataSource: MatTableDataSource<AuthenticatedUser>;
 displayedColumns = ['UserCode','UserFullName','RoleName','Lastmodified','IsActive','actions'];
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
  modalHeader: string;
  childList: AuthenticatedUser = new AuthenticatedUser();
  nominee: any;


  
  constructor(private _UserManager:UserManager,private modalService: NgbModal) { }

  ngOnInit(): void {
    this. bindDropDownList();
  }

  bindDropDownList() {  
    this._UserManager.GetAllUsers()
    .subscribe
    (
        data => {         
          this.bindDataSource( data);  
          //console.log(data)
        }
    );
  }

  bindDataSource(data: any){    
    if (data){
     this.listObject = data;
     this.dataSource = new MatTableDataSource(data);
     this.paginator.pageSize = 10;
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
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      windowClass :'my-class'
    }; 
    this.childList = new AuthenticatedUser();
    this.modalHeader = "Add Or Edit User";  
    
    this.modalService.open(content, ngbModalOptions);
    }


    edit(content,id:string) {
      let ngbModalOptions: NgbModalOptions = {
        backdrop : 'static',
        keyboard : false,
        windowClass :'my-class'
      }; 
      this.childList = null;

      this._UserManager.GetHttpUserBySID(id)
     
      .subscribe
      (
          data => {
            
            this.childList = data;
            
           // console.log("Viewer:" + this.childList.UserFullName)
                 }                  
      );   
    
      this.modalHeader = "Add Or Edit Users";     
      this.modalService.open(content, ngbModalOptions);
    }
    
    close(content){   
      this.bindDropDownList();
      this.childList = null;
      this.modalService.dismissAll();
     }
}
