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
  selector: 'app-finalised-claims',
  templateUrl: './finalised-claims.component.html',
  styleUrls: ['./finalised-claims.component.scss']
})
export class FinalisedClaimsComponent implements OnInit {

  public listObject: any = [];
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = [  'BillingReferenceNo','ClaimNumber', 'ClientName',  'ClaimChequeNumber', 'finalisedDate', 'StatusDescription', 'actions'];
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
    chequnumber: any;

  constructor(private _claimService: ClaimService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.router.events.subscribe((e: any) => {
      //console.log('Router event:', e);
      this.ClaimStatusId = this.route.snapshot.queryParamMap.get('statusId') || 0;
      if (this.ClaimStatusId > 0) {
        //console.log('this.ClaimStatusId ' + this.ClaimStatusId)
        this.bindClaimsGridView();
      }
    });
  }
  bindClaimsGridView() {

    this._claimService.GetAllFinalisedClaims()
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

  goToClaimEditor(content, clientId: string, vehicleId: string, claimId: string, groupId: string) {
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

  printReport(content, reportName: string, chequnumber: any) {
    this.chequnumber = chequnumber;
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = reportName;

      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {

        "chequnumber": chequnumber

      };
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };

      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }


  close(content) {
    this.modalRef.close()
  }
}
