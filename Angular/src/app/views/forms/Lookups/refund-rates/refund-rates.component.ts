import { SelectionModel } from '@angular/cdk/collections';
import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';;
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { lookupService } from '../../../../api.services/lookup.Service';
import { csLookups, csNationality, csRank, csTitle, dipRefundRate } from '../../../../model/lookups';

@Component({
  selector: 'app-refund-rates',
  templateUrl: './refund-rates.component.html',
  styleUrls: ['./refund-rates.component.scss']
})
export class RefundRatesComponent implements OnInit {

  public listObject: any = [];
  dataSource: MatTableDataSource<lookupService>;
  displayedColumns = ['RefundTypeDescription', 'RefundEffectiveDate','RefundCancellationDate','RefundExciseDuty', 'RefundFuelLevy','IsActive', 'actions'];
  selection = new SelectionModel<csLookups>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ClaimStatusId: any;
  queryString: any;
  modalRef: any;

  PopupForm: UntypedFormGroup = new UntypedFormGroup({
    RefundTypeDescription: new UntypedFormControl('', Validators.required),
    RefundEffectiveDate: new UntypedFormControl('', Validators.required),
    RefundFuelCode: new UntypedFormControl('', Validators.required),
    RefundExciseCode: new UntypedFormControl('', Validators.required),
    RefundExciseDuty: new UntypedFormControl('', Validators.required),
    RefundFuelLevy: new UntypedFormControl('', Validators.required),
    sendCatalog: new UntypedFormControl(true)
  });
  object: dipRefundRate;

  constructor(private _lookup: lookupService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.bindClaimsGridView();
  }
  bindClaimsGridView() {

    this._lookup.SelectAllRefundRates()
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

    this.object = new dipRefundRate();
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };

    this._lookup.SelectRefundRateByfuelId(id)
      .subscribe
      (
        data => {
          this.object = data[0];
         console.log(this.object)
          this.PopupForm.patchValue({            
            RefundEffectiveDate:formatDate(this.object.RefundEffectiveDate,'yyyy-MM-dd', 'en-US')
          })
        }
      );


    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }

  close() {
    this.modalRef.close()
  }

  add(content) {

    this.object = new dipRefundRate();
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    var effectiveDate = this.PopupForm.value;
    this.object.RefundEffectiveDate = effectiveDate.RefundEffectiveDate
    console.log('check ' +this.object)
    this._lookup.UpdateRefundRates(this.object)
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
