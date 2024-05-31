import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClaimService } from '../../../../api.services/claim.service';
import { csClaim } from '../../../../model/claim';

@Component({
  selector: 'app-book-keeping',
  templateUrl: './book-keeping.component.html',
  styleUrls: ['./book-keeping.component.scss']
})
export class BookKeepingComponent implements OnInit {

    public listObject: any = [];
    dataSource: MatTableDataSource<csClaim>;
    displayedColumns = ['select', 'ClaimGroupID', 'ClaimNumber', 'ClientAllias', 'ClaimRange',  'ClaimStatus'];
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
    @ViewChildren('checkBox') checkBox: QueryList<any>;
    checked = [];
  
    constructor(private _claimService: ClaimService, private router: Router, private modalService: NgbModal) { }
  
    ngOnInit(): void {
      this.bindClaimsGridView();
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
      console.log('Claim Id: ' + JSON.stringify(element));

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
  
  
  
  
    bindClaimsGridView() {
  
      this._claimService.SelectClaimThatAreOnBookeeping()
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
    

    authorise() {
      var count = 1;
  
      this.checked.forEach(data => {
        //console.log('thats ; ' + JSON.parse(data.value).ClaimID)
        this._claimService.UpdateClaimStatuses(JSON.parse(data.value).ClaimID, this.statusId, this.statusReason)
          .subscribe(
            response => {
              if (this.checked.length == count) {
                alert(response.body);
                this.closeModal();
                this.bindClaimsGridView();
              }
  
              count++;
            },
            (error) => {
              alert(error.message);
            }
          );
      },
      )
    }
  }