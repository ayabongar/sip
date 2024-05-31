import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClaimService } from '../../../../api.services/claim.service';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';
import { csClaim } from '../../../../model/claim';

@Component({
  selector: 'app-submit-to-supervisor-dashboard',
  templateUrl: './submit-to-supervisor-dashboard.component.html',
  styleUrls: ['./submit-to-supervisor-dashboard.component.scss']
})
export class SubmitToSupervisorDashboardComponent implements OnInit {
  public listObject: any = [];
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['ClientID', 'GroupID', 'ClaimNumber', 'Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel', 'LevyDutyDesiel', 'TOTALDUE', 'StatusDescription', 'actions'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  queryString: csClaim;
    isData: boolean;
  

  constructor(private _claimService: ClaimService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {

    this._claimService.SelectClaimByStatusID(1)
      .subscribe
      (
        data => {
          this.bindDataSource(data);
          if (data != null) {
            this.isData = true;
          }
        }
      );
  }


  bindDataSource(data: any) {
    this.dataSource = new MatTableDataSource(null);
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


  SendGroupToSupervisor(id: any,claimId :any) {
   //alert('claim id' +claimId )
   // this._claimService.SelectClaimInfoById(claimId)
   // .subscribe(
   //   data =>{
   //     console.log('claim body ' + data[0].ClaimStatusID);
     
   //   }
   // )

    
    if (confirm("Are you sure that you want to submit group (" + id + " ) to the supervisors?")) {
      this._claimService.SendGroupToSupervisor(id)
        .subscribe
        (
          response => {
           
            this.bindClaimsGridView();
          },
          (error) => {
            alert(error.message);
          }
        );
    }
  }
  ngSubmitToSupervisor(id: any, claimId: any) {



    if (confirm("Are you sure that you want to submit all claims to supervisors?")) {
      this._claimService.SendAllToSupervisor(id)
        .subscribe
        (
          response => {

            this.bindClaimsGridView();
          },
          (error) => {
            alert(error.message);
          }
        );
    }
  }
  /**
   * ******************Open Claim Editor**************
   ****************************************************/
  //Open Modal Popup
  goToClaimEditor(content,clientID,vehicleID,claimID,claimGroupID) {
  
    this.queryString = new csClaim()
    this.queryString.ClientCessionariID = clientID,
    this.queryString.ClaimVehicleID = vehicleID,
    this.queryString.ClaimID = claimID,
    this.queryString.GroupId = claimGroupID
    
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };

    this.modalService.open(content, ngbModalOptions);
  }
  closeModal(content){
    this.modalService.dismissAll(content)
  }
}
