import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClaimService } from '../../../../api.services/claim.service';
import { csClaim } from '../../../../model/claim';


import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { getLocaleDateTimeFormat, NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { environment } from '../../../../../environments/environment';
import { UserManager } from '../../../../api.services/user.manager';
import { v4 as uuid } from 'uuid';

@Component({

  selector: 'app-authorise-dashboard',
  templateUrl: './authorise-dashboard.component.html',
  styleUrls: ['./authorise-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: false,
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule],
})
export class AuthoriseDashboardComponent implements OnInit {
  public listObject: any = [];
  dataSource: MatTableDataSource<csClaim>;
  displayedColumns = ['select', 'ClientID', 'GroupID', 'ClaimNumber','Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel','LevyDutyDesiel','TOTALDUE', 'StatusDescription','actions'];
  selection = new SelectionModel<csClaim>(true, []);



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  queryString: csClaim = new csClaim();
  selectedElement: number = 0;
  modalRef: any;
  selectedRow: any;
  statusReason: string;
  statusId: string;
  selectedClaims: csClaim = new csClaim()
  @ViewChildren('checkBox') checkBox: QueryList<any>;
  checked = [];
    private _groupId: any;
    parameters: any;
    reportServer: any;
    reportName: string;
    reportUrl: string;
    lstUser: any;
    userRole: number;
    uniquiGuid: any;



  constructor(private _claimService: ClaimService, private router: Router, private modalService: NgbModal, private _UserManager: UserManager) { }

  ngOnInit(): void {
    this.bindClaimsGridView();
    this.ngAuthoriseUser();
  }

  /*********************Check box evens******************************* */
  isAllSelected($event) {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.selectedElement = numSelected;
    return numSelected === numRows;
  }
  masterToggle($event) {
    if ($event.checked) {
      this.onCompleteRow(this.dataSource);
    }
    if (this.isAllSelected($event)) {
      this.selection.clear();
      this.checked = [];
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }



  }

  private selectRow($event, dataSource) {
    this.selectedElement = 0;
    if ($event.checked) {
      this.selectedRow = dataSource;
      this.queryString = dataSource
    }
  }

  onCompleteRow(dataSource) {
    this.checked = [];
    dataSource.data.forEach(element => {
      this.selectedElement += 1;
     // console.log('Claim Id: ' + JSON.stringify(element));

      this.checked.push({
        'checked': element.checked,
        'value': JSON.stringify(element)
      })
    });
  }

  getCheckbox(checkbox) {
    this.checked = [];
    const checked = this.checkBox.filter(checkbox => checkbox.checked);
    checked.forEach(data => {
      this.checked.push({
        'checked': data.checked,
        'value': JSON.stringify(data.value)
      })
    })
  }
  /*********************END Check box evens******************************* */

  ngAuthoriseUser() {
    this._UserManager.AuthenticateUser()
      .subscribe
      (
        data => {
          this.lstUser = data;
          switch (this.lstUser.RoleId) {

            case 1://// Administrator
              this.userRole = 1;
              break;
            case 2: //SuperVisor
              this.userRole = 2;
              break;
            case 3://Data Capturer
              this.userRole = 3;
              break;
            case 4:  // Viewer
              this.userRole = 4;
              break;
            case 5:// Deny Access
              this.userRole = 5;
              break;
            default:
              break;
          }
         
        }
      );
  }


  bindClaimsGridView() {

    this._claimService.SelectClaimByStatusID(10)
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
      this.dataSource =  new MatTableDataSource(data);
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

    if (this.selectedElement > 1) {
     alert('Only one selected claim can be view at a time.');
     return;
    }
    else if (this.selectedElement <= 0) {
     alert('Please select a claim from the gridview.');
     return;
    }
    else {

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

  }

  btnOpenClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {
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
  


  openReasonBox(content, id: string) {

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
    if (id == '9') {
      this.authorise()
    }
    else {
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  closeModal() {
    this.queryString = this.selectedRow;
    this.modalRef.close()

  }

  authorise() {
    var count = 1;
    var tempclient = 0;

    this.checked.forEach(data => {
      if (data != null) {
        // console.log('thats ; ' + JSON.parse(data.value).ClientID)     
        if (tempclient != JSON.parse(data.value).ClientID) {
          tempclient = JSON.parse(data.value).ClientID;
          this.uniquiGuid = uuid();
          //  console.log('guid  :' + this.uniquiGuid + ' -ID :' + JSON.parse(data.value).ClientID )
        }

        this._claimService.ApproveClaimStatuses(JSON.parse(data.value).ClaimID, this.statusId, this.statusReason, this.uniquiGuid)
          .subscribe(
            response => {
              if (this.checked.length == count) {
                alert(response.body);
                try {
                  this.closeModal();
                } catch (e) {
                }
                this.bindClaimsGridView();
              }

              count++;
            },
            (error) => {
              alert(error.message);
            }
          );
      }
    },
    )
    if (this.statusId != null && this.statusReason != null) {
      this._claimService.SendEmails( this.statusId, this.statusReason)
    }
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

  printInvoiceReport(content, reportName: string,claimId:any) {
    //if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
    //  alert('This claim cannot be ammended.')
    //  return;
    //}
    this.modalService.dismissAll();
    if (reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {

        "claimNo":claimId

      };
     
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
}




