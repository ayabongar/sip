import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';;
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { lookupService } from '../../../../api.services/lookup.Service';
import { csLookups, csRank } from '../../../../model/lookups';


@Component({
  selector: 'app-rank-types',
  templateUrl: './rank-types.component.html',
  styleUrls: ['./rank-types.component.scss']
})
export class RankTypesComponent implements OnInit {

  public listObject: any = [];
  dataSource: MatTableDataSource<lookupService>;
  displayedColumns = ['RankID', 'RankDescription', 'Active', 'actions'];
  selection = new SelectionModel<csLookups>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ClaimStatusId: any;
  queryString: any;
  modalRef: any;

  PopupForm: UntypedFormGroup = new UntypedFormGroup({

    RankDescription: new UntypedFormControl('', Validators.required),
    Active: new UntypedFormControl('', Validators.required),
    sendCatalog: new UntypedFormControl(true)
  });
  object: csRank;

  constructor(private _lookup: lookupService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.bindClaimsGridView();
  }
  bindClaimsGridView() {

    this._lookup.SelectAllOwnersRank()
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
  edit(content, id: string) {

    this.object = new csRank();
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };

    this._lookup.GetRankByID(id)
      .subscribe
      (
        data => {
          this.object = data[0];
          console.log(this.object)
        }
      );


    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }

  close() {
    this.modalRef.close()
  }

  add(content) {

    this.object = new csRank();
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    //this.object = this.PopupForm.value;
    console.log(this.object)
    this._lookup.InsertOrUpdateRank(this.object)
      .subscribe
      (
        (response) => {
          var results = response.body;
          alert(results);
          this.bindClaimsGridView();
          this.close();
        }
      )
  }

}
