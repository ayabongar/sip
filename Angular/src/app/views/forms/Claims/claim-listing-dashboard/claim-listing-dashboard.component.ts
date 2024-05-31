import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { ClaimService } from '../../../../api.services/claim.service';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';
import { csClaim } from '../../../../model/claim';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-claim-listing-dashboard',
  templateUrl: './claim-listing-dashboard.component.html',
  styleUrls: ['./claim-listing-dashboard.component.scss']
})
export class ClaimListingDashboardComponent implements OnInit {

  public listObject: any = [];
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['ClientID', 'GroupID', 'ClaimNumber','Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel','LevyDutyDesiel','TOTALDUE', 'StatusDescription', 'actions'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ClaimStatusId: any;
  queryString: any;
  modalRef: any;
    private _groupId: any;
    parameters: any;
    reportServer: any;
    reportName: string;
    reportUrl: string;

  constructor(private _claimService: ClaimService, private route: ActivatedRoute,private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.router.events.subscribe((e: any) => {
      //console.log('Router event:', e);
      this.ClaimStatusId = this.route.snapshot.queryParamMap.get('statusId') || 0;
      if (this.ClaimStatusId > 0) {
        //console.log('this.ClaimStatusId ' + this.ClaimStatusId)
        this.bindClaimsGridView(this.ClaimStatusId);
      }
    });
  }
  bindClaimsGridView(id: any) {

    this._claimService.SelectClaimByStatusID(id)
      .subscribe
      (
        data => {
          this.bindDataSource(data);

        }
      );
  }

  bindDataSource(data: any) {
    this.dataSource = null
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

  goToClaimEditor(content,clientId: string, vehicleId: string, claimId: string, groupId: string) {
    this.queryString = new csClaim();
      this.queryString.ClientCessionariID = clientId;
      this.queryString.ClaimVehicleID = vehicleId;
      this.queryString.ClaimID = claimId;
      this.queryString.GroupId = groupId

      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
  }

  closeModal() { 
 
    this.modalRef.close()
    
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
}
