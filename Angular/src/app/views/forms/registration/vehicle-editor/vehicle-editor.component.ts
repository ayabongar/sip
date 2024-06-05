import { SelectionModel } from '@angular/cdk/collections';
import { formatDate } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';

import {ClientService} from '../../../../api.services/client.service';
import { lookupService } from '../../../../api.services/lookup.Service';
import { OwnerService } from '../../../../api.services/owner.service';
import { VehicleService } from '../../../../api.services/vehicle.service';
import { csClient } from '../../../../model/client';
import { csOwner } from '../../../../model/owner';
import { csVehicles } from '../../../../model/vehicles';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FileQueryString } from '../../../../model/FileToUpload';
import { environment } from '../../../../../environments/environment';

import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-editor',
  templateUrl: './vehicle-editor.component.html',
  styleUrls: ['./vehicle-editor.component.scss']

})
export class VehicleEditorComponent implements OnInit {
  @Output('bindGridViewEmitter') bindGridViewEmitter: EventEmitter<any> = new EventEmitter();
  // @Output() bindGrindView = new EventEmitter();
  childClientObject: csClient;
  @Input() vehicleObject: csVehicles ;
  isClinetActive: string;
  vehicleStatus: string;
  clientTitle: any;
  clientNatiality: any;
  ownerRank: any;
  vehicleResults: any;
  vehicle: any;
  onwers: any;

  public listObject: any = [];
  dataSource: MatTableDataSource<csOwner>;
  displayedColumns = ['TitleDescription', 'SurnameAndInitials', 'OwnerPassportNumber',
  'OwnerMaritalStatus', 'NationalityDescription', 'actions'];
  selection = new SelectionModel<csOwner>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  panelOpenState = false;
  modalHeader: string;
  OwnerId: any;
  Owner: csOwner;
  FileQueryString: FileQueryString;
    reportServer: any;
    reportName: string;
    reportUrl: string;
    modalRef: any;
  ownerType: string;
    clients: any;
  constructor(private clientForm: UntypedFormBuilder, private _clientService: ClientService, private _lookups: lookupService,
    private _vehiclesService: VehicleService, private _ownerService: OwnerService,
    private modalService: NgbModal, private router: Router) {}
  AmbassyForm = this.clientForm.group({
    VehicleRegistration: ['', Validators.required],
    VehicleRefNumber:['', Validators.required],
    VehicleRefDate: ['', Validators.required],
    VehicleMake: ['', Validators.required],
    VehicleModel: ['', Validators.required],
    VehicleTankCapacity: ['', Validators.required],
    VehicleEffectiveDate: ['', Validators.required],
    VehiclePurchaseDate: [''],
    VehicleCancellationDate: ['', Validators.required],
    TemporaryRegistration: [],
    VehiclesVIN: ['', Validators.required],
    FuelTypeID: ['', Validators.required],
    VehicleType: ['', Validators.required],
    OwnerType: ['', Validators.required],
    OwnerID: [],
    RegistrationReason: [''],
    VehicleStatus: [],
    ClientTypeID: new UntypedFormControl({value: '', readonly: true}, Validators.required),
    // Onwner information
    OwnerInitials: [''],
    OwnerSurname: [''],
    OwnerPassportNumber: [''],
    OwnerMaritalStatus: [''],
    TitleID: [''],
    NationalityID: [''],
    RankID: [''],
    ClientID: ['']

  });


   ngOnInit(): void {
    this.BindDropdownlist();
    this.BindVehicleDetails();
   // console.log("vehicle ID: " + this.vehicleObject.VehicleID);
    // this.bindOnwerList();
    // this.GetClientByid(this.vehicleObject.ClientID.toString());
    // console.log("Client ID: " + this.vehicleObject.ClientID.toString() )

  }

  BindDropdownlist() {
    this._clientService.GetAllClient()
      .subscribe
      (
        data => {
          this.clients = data;
        }
    );
    if (this.vehicleObject.ClientID !== undefined) {
      this._ownerService.SelectOwnerByClientId(this.vehicleObject.ClientID)
        .subscribe
        (
          data => {
            this.onwers = data;
          }
        );
    }

    this._lookups.GetClientTitleType()
    .subscribe
    (
        data => {
          this.clientTitle = data;
        }
    );

    this._lookups.GetClientNatinality()
    .subscribe
    (
        data => {
          this.clientNatiality = data;
        }
    );

    this._lookups.GetRank()
    .subscribe
    (
        data => {
          this.ownerRank = data;
        }
    );
  }



  BindVehicleDetails() {
    let currentDate = new Date();
    let vehicleDeregistered = new Date(this.vehicleObject.VehicleCancellationDate)
    this.FileQueryString = new FileQueryString();
    this.FileQueryString.IdProvided = false;

    if (vehicleDeregistered >= currentDate) {
      this.vehicleStatus = 'Active';

    } else {
      this.vehicleStatus = 'Inactive';

    }
    this.AmbassyForm.patchValue({
      VehicleCancellationDate: formatDate(new Date('9999/01/01'), 'yyyy-MM-dd', 'en-US'),
    });
    if (this.vehicleObject.Mode !== 'New') {

      // console.log("mode " + this.vehicleObject.Mode)
      this.ngSetFileVariables(0, this.vehicleObject.VehicleID, 0, 0);
      this.AmbassyForm.patchValue({
        VehicleRegistration: this.vehicleObject.VehicleRegistration,
        VehicleRefNumber: this.vehicleObject.VehicleRefNumber,
        VehicleRefDate: formatDate(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
        VehicleMake: this.vehicleObject.VehicleMake,
        VehicleModel: this.vehicleObject.VehicleModel,
        VehicleTankCapacity: this.vehicleObject.VehicleTankCapacity,
        VehicleEffectiveDate: formatDate(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US'),
        VehiclePurchaseDate: formatDate(this.vehicleObject.VehiclePurchaseDate, 'yyyy-MM-dd', 'en-US'),
        VehicleCancellationDate: formatDate(this.vehicleObject.VehicleCancellationDate, 'yyyy-MM-dd', 'en-US'),
        TemporaryRegistration: this.vehicleObject.TemporaryRegistration,
        VehiclesVIN: this.vehicleObject.VehiclesVIN,
        FuelTypeID: this.vehicleObject.FuelTypeID.toString(),
        VehicleType: this.vehicleObject.VehicleType,
        OwnerType: this.vehicleObject.OwnerType,
        OwnerID: this.vehicleObject.OwnerID,
        RegistrationReason: this.vehicleObject.RegistrationReason,
        VehicleStatus: this.vehicleStatus,
      });
      this.ownerType = this.vehicleObject.OwnerType;
      // console.log("this.ownerType," + this.ownerType)
      if (this.vehicleObject.OwnerID > 0) {
        this._ownerService.SelectOwnerById(this.vehicleObject.OwnerID)
          .subscribe
          (
            ownerInfor => {
              this.Owner = ownerInfor[0];

              this.AmbassyForm.patchValue({
                OwnerSurname: this.Owner.OwnerSurname,
                OwnerInitials: this.Owner.OwnerInitials,
                TitleID: this.Owner.TitleID,
                OwnerPassportNumber: this.Owner.OwnerPassportNumber,
                RankID: this.Owner.RankID,
                NationalityID: this.Owner.NationalityID,
                OwnerMaritalStatus: this.Owner.OwnerMaritalStatus === 'true' ? 1 : 0

              });
            }
          );
      }
    } else {
      this.vehicleObject.ClientID = 0;
    }
}
  onSubmit() {

    if (this.vehicleObject.VehicleID <= 0) {
     this.InsertVehicleInfo();
    } else {
      this.UpdateVehicleInfo();
    }
  }

  InsertVehicleInfo()  {
    this.vehicle = this.AmbassyForm.value;
   // console.log('vehicle Id:' + this.vehicleObject.ClientID)
    this.vehicle.ClientID = this.vehicleObject.ClientID;
    let effectiveDate = new Date(this.vehicle.VehicleEffectiveDate);
    let refDate = new Date(this.vehicle.VehicleRefDate);

    if (effectiveDate > refDate) {
      confirm('The vehicle effective date cannot be greater than the Reference Date');
      return;
    }

    this.vehicle.VehiclePurchaseDate = new Date();

      // Check for duplicate vehicles
    this._vehiclesService.CheckDuplicateVehicle(this.vehicle.VehicleRegistration, this.vehicle.VehicleID)
    .subscribe({
      next: (duplicateCheckResponse) => {
        if (duplicateCheckResponse.duplicate) {
          confirm('A vehicle with the same registration number or VIN already exists.');
        } else {
          // Proceed with vehicle insertion
          this._vehiclesService.InsertIntoVehicle(this.vehicle)
            .subscribe({
              next: (insertResponse) => {
                this.bindGridViewEmitter.emit();
                this.vehicleResults = insertResponse.message;
                this.vehicleObject.VehicleID = insertResponse.body.VehicleID;
                this.ngGetVehicleByID(this.vehicleObject.VehicleID);
                this.BindVehicleDetails();
                this.FileQueryString.IdProvided = true;
                if (insertResponse.body.OwnerStatus != null) {
                  this.FileQueryString.IdProvided = true;
                  confirm('Vehicle saved successfully ' + insertResponse.body.OwnerStatus);
                } else {
                  const c = confirm('Vehicle inserted successfully. Do you want to print the letter?');
                  if (!c) {
                    this.close();
                    this.router.navigate(['registration/vehicles'], { queryParams: { 'clientId': '' } });
                  }
                }
              },
              error: (insertError) => {
                console.error(insertError.message);
                confirm('custom Errormessage: ' + insertError.message);
              }
            });
        }
      },
      error: (duplicateCheckError) => {
        console.error(duplicateCheckError.message);
        confirm('Error checking for duplicate vehicle: ' + duplicateCheckError.message);
      }
    });
  }

  UpdateVehicleInfo() {
   this.vehicle = this.AmbassyForm.value;

    this.vehicle.ClientID = this.vehicleObject.ClientID;
    this.vehicle.VehicleID = this.vehicleObject.VehicleID;
    let effectiveDate = new Date(this.vehicle.VehicleEffectiveDate);
    let refDate = new Date(this.vehicle.VehicleRefDate);
    // console.log("effectiveDate" + effectiveDate)
   // console.log("refDate" + refDate)
    if (effectiveDate > refDate) {
      confirm('The vehicle effective date cannot be greater than the Reference Date');
      return;
    }

    this._vehiclesService.UpdateVehicle(this.vehicle)
          .subscribe
          (
           (response) => {
              this.vehicleResults = response.message;
              this.bindGridViewEmitter.emit();
              if (response.body.OwnerStatus != null) {
                confirm('Vehicle updated successfully ' + response.body.OwnerStatus);
              } else {
                const c = confirm('Vehicle inserted successfully.Do you want to print letter?');
                if (!c) {
                  this.close();
                }
              }
            },
            (error) => {
              console.error(error.message);
              confirm('custom Errormessage: ' + error.message);
            }
          );

          // update Onwer Information

  }
   findInvalidControls() {
     // console.log("get invalid controls")
    const invalid = [];
    const controls = this.AmbassyForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    // console.log('invalid Controls:' + invalid);
}
  onOnclientSelected(event: any) {
    // console.log('cleintId ' + this.AmbassyForm.value.ClientID)
    this.vehicleObject.ClientID = this.AmbassyForm.value.ClientID,
      this.vehicleObject.Mode = 'New';
    if (this.vehicleObject.ClientID !== undefined) {
      this._ownerService.SelectOwnerByClientId(this.vehicleObject.ClientID)
        .subscribe(
          data => {
            this.onwers = data;
          }
        );
    }
  }
  ngGetVehicleByID(id: any) {
     this._vehiclesService.GetVehicleByID(id)
       .subscribe(
           data => {
             this.vehicleObject = data;
                  }
       );
  }
onOwnerSelected(event: any) {

  this.AmbassyForm.patchValue({
    OwnerSurname: null ,
    OwnerInitials:   null,
    TitleID:   null,
    OwnerPassportNumber: null,
    RankID:   null,
    NationalityID:  null,
    OwnerMaritalStatus:  null
   });

   if (this.AmbassyForm.value.OwnerID > 0) {
   this._ownerService.SelectOwnerById(this.AmbassyForm.value.OwnerID)
   .subscribe
   (
       ownerInfor => {
         this.Owner = ownerInfor[0];

         this.AmbassyForm.patchValue({
          OwnerSurname:  this.Owner.OwnerSurname ,
          OwnerInitials:  this.Owner.OwnerInitials,
          TitleID:  this.Owner.TitleID,
          OwnerPassportNumber: this.Owner.OwnerPassportNumber,
          RankID:  this.Owner.RankID,
          NationalityID: this.Owner.NationalityID,
          OwnerMaritalStatus: this.Owner.OwnerMaritalStatus === 'true' ? 1 : 0

         });
       }
   );

  }
}
close() {
  // this.bindGrindView();

   this.modalService.dismissAll({'dismissed': true});
}

  ngSetFileVariables(clientId: any, vehicleId: any, ownerid: any, claimId: any) {

    this.FileQueryString.ClientID = clientId;
    this.FileQueryString.VehicleId = vehicleId;
    this.FileQueryString.OwnerId = ownerid;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = claimId;
    this.FileQueryString.IdProvided = true;
    // console.log('client Id:' + this.FileQueryString.ClientID +
    //  'vehicle Id: ' + this.FileQueryString.VehicleId + 'owner id :' + this.FileQueryString.OwnerId
    //  + 'Claim Id : ' + this.FileQueryString.ClaimId + 'is Id Providerd : ' + this.FileQueryString.IdProvided)
  }

  openReport(content, reportName: string) {
    // this.close()
    if (reportName != null) {

      this.reportServer = environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };


      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  changeOwnerType(data: MatRadioChange) {
    // console.log('Owener type :' + data.value);
    this.ownerType = data.value;
  }


  // New method to deregister a vehicle
  deregisterVehicle(vehicleId: number): void {
    this.vehicleService.deregisterVehicle(vehicleId).subscribe(response => {
      console.log('Vehicle deregistered successfully', response);
      // Add any additional logic here, like updating the UI or showing a success message.
    }, error => {
      console.error('Error deregistering vehicle', error);
      // Add error handling logic here.
    });
  }

}


