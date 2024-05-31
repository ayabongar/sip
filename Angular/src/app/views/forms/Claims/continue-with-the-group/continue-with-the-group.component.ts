import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClaimService } from '../../../../api.services/claim.service';
import { csClaim } from '../../../../model/claim';
import { environment } from '../../../../../environments/environment';
import { group } from 'console';

@Component({
  selector: 'app-continue-with-the-group',
  templateUrl: './continue-with-the-group.component.html',
  styleUrls: ['./continue-with-the-group.component.scss']
})
export class ContinueWithTheGroupComponent implements OnInit {

  public listObject: any = [];
  dataSource: MatTableDataSource<csClaim>;
  displayedColumns = ['ClaimGroupID', 'ClientAllias', 'ClaimNumber','ClaimRange', 'GroupStatus', 'actions'];
  selection = new SelectionModel<csClaim>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  queryString: csClaim = new csClaim() ;
  selectedElement: number = 0;
  modalRef: any;
  selectedRow: any;
  statusReason: string;
  statusId: string;
  selectedClaims: csClaim =new csClaim()
    parameters: any;
    reportServer: any;
    reportName: string;
  reportUrl: string;
    _groupId :any

  constructor(private _claimService: ClaimService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.bindClaimsGridView();
  }


  bindClaimsGridView() {

    this._claimService.SelectGroupToContinue()
      .subscribe
      (
        data => {
          this.bindDataSource(data);         
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


  SendGroupToSupervisor(id: any) {
    if (confirm("Are you sure  you want to submit group (" + id + " ) to the supervisor?")) {
      this._claimService.SendGroupToSupervisor(id)
        .subscribe
        (
          response => {
            alert(response.body)
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
  goToClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {

    this.queryString = new csClaim();
    this.queryString.ClientCessionariID = clientID;
    this.queryString.ClaimVehicleID = vehicleID;
    this.queryString.ClaimID = claimID;
    this.queryString.GroupId = claimGroupID

    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);

  }
  openReasonBox(content,id:string){
   
    if (this.selectedElement <= 0) {
      alert('Please select a claim from the gridview.');
      return;
    }
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.statusId = id;
    this.statusReason = null;
    
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() { 
    this.queryString  = this.selectedRow;
    this.modalRef.close()
    
  }
  authorise(){
    this._claimService.UpdateClaimStatuses(this.queryString.ClaimID,this.statusId,this.statusReason)
    .subscribe(
      response =>{
       alert(response.body),
       this.closeModal();
       this.bindClaimsGridView();
      },
      (error) => {
        alert(error.message);
      }
       );   
    
  }

  printReport(content, reportName: string, groupId: any) {
    this._groupId = groupId;
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = reportName;

      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {

        "groupId": groupId

      };
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };


      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  close(content) {    
    this.modalRef.close()   
  }


  goToSubmitToSuperviser() {
    //this.modalRef.close()
    this.modalService.dismissAll();
    this.router.navigate(
      ['Claims/SubmitToSupervisor/']
    );
  }


}
