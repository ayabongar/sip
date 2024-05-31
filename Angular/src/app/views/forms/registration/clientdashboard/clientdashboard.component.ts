import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';
import { ClientService } from '../../../../api.services/client.service';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { csClient } from '../../../../model/client';
import { FileQueryString } from '../../../../model/FileToUpload';



@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.scss']
})
export class ClientdashboardComponent implements OnInit {
  //------------------datasource---------------------
  public listObject: any = [];
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['ClientID', 'ClientAllias', 'ClientTypeDescription', 'ClientStatus', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  modalHeader: string;
  clientObject: csClient;
  nominee: any;
  FileQueryString: FileQueryString;

  constructor(private _clientService: ClientService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.bindGrindView();
  }

  bindGrindView() {
    this._clientService.GetAllClient()
      .subscribe
      (
        data => {
          this.bindDataSource(data);

        }
      );
  }
  async  bindDataSource(data: any) {
    if (data) {
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
  open(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.FileQueryString = new FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.modalHeader = "Add Or Edit User";
    this.clientObject = new csClient;
    this.modalService.open(content, ngbModalOptions);
  }

  edit(content, id: string) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.clientObject = null;

    this._clientService.GetClientByID(id)
      .subscribe
      (
        data => {

          this.clientObject = data;

        }
      );

    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }

  close(content) {
    this.bindGrindView();
    this.clientObject = null;
    this.modalService.dismissAll();
  }
}
