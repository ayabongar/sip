import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe, formatDate, DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { AbstractControl,  FormControl,  UntypedFormBuilder, Validators } from '@angular/forms';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClaimService } from '../../../../api.services/claim.service';
import { ClientService } from '../../../../api.services/client.service';
import { DipRefundRateService } from '../../../../api.services/DipRefundRate.Service';
import { InvoiceService } from '../../../../api.services/invoice.service';
import { OwnerService } from '../../../../api.services/owner.service';
import { VehicleService } from '../../../../api.services/vehicle.service';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';
import { csClaim } from '../../../../model/claim';
import { csClient } from '../../../../model/client';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';
import { FileQueryString, FileToUpload } from '../../../../model/FileToUpload';
import { FileUploadService } from '../../../../api.services/fileUpload.service';
import { UserManager } from '../../../../api.services/user.manager';


import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { map,  startWith } from 'rxjs/operators';
import { debug } from 'console';



const MAX_SIZE: number = (1048576 * 5);

@Component({
  selector: 'app-new-claims-editor',
  templateUrl: './new-claims-editor.component.html',
  styleUrls: ['./new-claims-editor.component.scss'],
  //styleUrls: ['expansion-expand-collapse-all-example.css'],
  providers: [DatePipe, DecimalPipe],
  standalone: false,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    BrowserAnimationsModule,
  
  ],
})
export class NewClaimsEditorComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() queryString: csClaim;
  model: NgbDateStruct;
  maxDate = new Date();
  public listObject: any = [];
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['InvoiceDate', 'supplier', 'amount', 'InvoiceLiters',  'StatusDescription', 'actions'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  clientId: any;
  childClientObject: csClient;
  // ------------------Claim form-------------------------------
  ClaimForm = this.fb.group({
    ClientName: ['', Validators.required],     
    ClientID: ['', Validators.required],
    ClientVehiclesID: ['', Validators.required],
    FuelTypeID: ['', Validators.required],
    VehicleTankCapacity: ['', Validators.required],
    Owner: ['', Validators.required],
    RegistrationDate: ['', Validators.required],

    VehicleRefDate: ['', [Validators.required, dateRefDateValidator]],
    VehicleRefNumber: ['', Validators.required],
    VehicleRegistration: ['', Validators.required],
    ClaimNumber: [''],
    GroupNumber: [''],
    GroupStatus: [''],
    ClaimStatus: [''],
    GroupTotalLitres: [''],
    ClaimTotalLitres: [''],
    DateIssued: ['', [Validators.required, dateIssuedValidator]],
    
    StatusReasonDescription: [''],

    ClaimExciseTotal: [''],
    Levy: [''],
    ClaimAmountTotal: [''],
    ExciseDutyCode: [''],
    FuelLevyCode:[''],
    countryControl:['']

  });  
  
  //------------------------invoice form-----------------------------
  InvoiceForm = this.fb.group({
    InvoiceDate: ['', [Validators.required, datePickerValidator]],
    //InvoiceNumber: ['', Validators.required],
    Supplier: ['', Validators.required],
    Amount: ['', [Validators.required, isNumber]],
    Litres: ['', [Validators.required, isNumber]],
   // KMS: [''],
   // FileUpload: ['']
    myControl: ['']
  });
  //--------------------Claim Total forms---------------------------
  ClaimTotalForm = this.fb.group({
    EXCISE: [''],
    ClaimExciseTotal: [''],
    GroupExciseTotal: [''],
    LevyDuty: [''],
    Levy: [''],
    ExciseLevy: [''],
  });

  clientVehicles: any;
  vehicleObject: any;
  Owner: any;
  currentDate: any;
  FuelType: any;
  vehicleId: string | number;
  invoice: any;
  claimObject: csClaim;
  tempClaimObject: csClaim;
  invoiceObject: any;
  groupId: any;
  ClaimId: any;
  ClaimTotalStatus: string;
  ClaimStatus: string;
  ClaimGroupTotalStatus: string;
  ClaimGroupStatusId: number;
  refundRateObject: any;
  InvoiceFound: boolean;
  claimLitrer = 0.0;
  vehicleRegistrationDate: string;
  invoiceStatusId: number;
  invoiceId: number = 0;
  ClaimRefundrateID: any;
  getQueryString: csClaim = new csClaim();
  modalRef: any;
  claimStatusId: any;
  invoiceCount: any;

  reportName: string;
  reportServer: string = environment.reportUrl;
  reportUrl: string = '/DIPS_Reports/';
  showParameters: string = "true";
  parameters: any;
  /**parameters: any = {
   "SampleStringParameter": null,
   "SampleBooleanParameter" : false,
   "SampleDateTimeParameter" : "11/1/2020",
   "SampleIntParameter" : 1,
   "SampleFloatParameter" : "123.1234",
   "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
   };*/
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
  claimNumber: string;
  FileQueryString: FileQueryString;
  selectedFileBLOB: any;
  fileInput: any;
  isIdProvided: boolean;
  theFile: any;
  isNewInvoiceRecord: boolean;
  VehicleTankCapacity: any;
    totalInvoicesAmount: any;
    lstUser: any;
    userRole: number;
    isInvoiceDirty: boolean;
  TotalLitres: number;
  InvoiceTotalLitres :string
    effectivedate: any;


  constructor(private fb: UntypedFormBuilder, private _vehicleService: VehicleService, private modalService: NgbModal,
    private route: ActivatedRoute, private _clientService: ClientService, private _ownerService: OwnerService, private datePipe: DatePipe,
    private _claimService: ClaimService, private _invoiceService: InvoiceService, private _refundRateService: DipRefundRateService
    , private _decimalPipe: DecimalPipe, private router: Router, private uploadService: FileUploadService,
    private _UserManager: UserManager
  ) {
      
  }

 
  ngOnInit(): void {
 
    this.clientId = this.route.snapshot.queryParamMap.get('clientId') || 0;
    this.ClaimId = this.route.snapshot.queryParamMap.get('claimId') || 0;
    this.groupId = this.route.snapshot.queryParamMap.get('groupId') || 0;
    this.vehicleId = this.route.snapshot.queryParamMap.get('vehicleId') || 0;

    this.FileQueryString = new FileQueryString();
    this.FileQueryString.ClientID = this.clientId;
    this.FileQueryString.VehicleId = parseInt(this.vehicleId.toString());
    this.FileQueryString.OwnerId = 0;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = 0;
    this.FileQueryString.IdProvided = false;
    this.isNewInvoiceRecord = false;

    if (this.clientId <= 0) {
      this.getQueryString = this.queryString;
      this.clientId = this.getQueryString.ClientCessionariID;
      this.ClaimId = this.getQueryString.ClaimID;
      this.groupId = this.getQueryString.GroupId
      this.vehicleId = this.getQueryString.ClaimVehicleID;
      this.FileQueryString.ClaimId = this.getQueryString.ClaimID;
      this.FileQueryString.IdProvided = true;
    }
   

    if (this.clientId > 0 && this.vehicleId > 0) {
      this.ngBindClientAndVehicleDropDownlist(this.clientId);      
    }
    if (this.ClaimId > 0) {
      this.ngSelectClaimInformationByClaimId(this.ClaimId);
      this.ngSetFileVariables(this.clientId, this.vehicleId, 0, this.ClaimId)
    }
    this.ngAuthoriseUser();
  }


  get f() {
    return this.InvoiceForm.controls;
  }

  get claimForm() {
    return this.ClaimForm.controls;
  }
  ngBindClientAndVehicleDropDownlist(id: string) {

    this.childClientObject = null;

    this._clientService.GetClientByID(id)
      .subscribe
      (
        client => {
          this.childClientObject = client;
          this.ClaimForm.patchValue({            
            ClientName: this.childClientObject.ClientName,
            ClientID: this.childClientObject.strClientID,    
          });
        }
      );

    this._vehicleService.SelectVehicleByClientId(id)
      .subscribe
      (
        data => {
          this.clientVehicles = data;
          this.ClaimForm.patchValue({
            ClientVehiclesID: this.vehicleId,
          });

          this.ngOnLoadVehicleSelected(this.vehicleId)
          this.ClaimForm.controls['FuelTypeID'].disable();
          this.ClaimForm.controls['VehicleTankCapacity'].disable();
          this.ClaimForm.controls['RegistrationDate'].disable();
          //this.ClaimForm.controls['VehicleRefDate'].disable();
          //this.ClaimForm.controls['VehicleRefNumber'].disable();
          this.ClaimForm.controls['VehicleRegistration'].disable();
          this.ClaimForm.controls['Owner'].disable();
          // this.ClaimForm.controls['DateIssued'].disable();
          this.ClaimForm.controls['ClaimNumber'].disable();
          this.ClaimForm.controls['GroupNumber'].disable();
          this.ClaimForm.controls['GroupStatus'].disable();
          this.ClaimForm.controls['ClaimStatus'].disable();
          this.ClaimForm.controls['GroupTotalLitres'].disable();
          this.ClaimForm.controls['ClaimTotalLitres'].disable();
          this.ClaimForm.controls['StatusReasonDescription'].disable();
          this.ClaimForm.controls['ClientName'].disable();
          this.ClaimForm.controls['ClientID'].disable();
          this.ClaimForm.controls['ClaimExciseTotal'].disable();
          this.ClaimForm.controls['Levy'].disable();
          this.ClaimForm.controls['ClaimAmountTotal'].disable();
          this.ClaimForm.controls['ExciseDutyCode'].disable();
          this.ClaimForm.controls['FuelLevyCode'].disable();      
        
        }
      );
  }

  ngSelectClaimInformationByClaimId(id: string) {
    this._claimService.SelectClaimInfoById(id)
      .subscribe
      (
        (response) => {
          this.claimObject = response[0];
          console.log(JSON.stringify('response[0].ClaimRefNumber' + response[0].ClaimRefNumber))
          this.claimStatusId = response[0].ClaimStatusID;
          this.ClaimForm.patchValue({
            //  ClaimNumber: response[0].ClaimYear + "/" + response[0].ClaimNumber,
            VehicleRefNumber: response[0].ClaimRefNumber,
            VehicleRefDate: this.datePipe.transform(response[0].ClaimRefDate, 'yyyy-MM-dd'),
            ClaimNumber: response[0].ClaimNumber,
            GroupNumber: response[0].ClaimGroupID,           
            StatusReasonDescription: this.claimObject.ClaimStatusReason,
           // VehicleRefDate: formatDate(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
           // VehicleRefNumber: this.vehicleObject.VehicleRefNumber,
          });



          //console.log('claim statuss: ' + response[0].ClaimStatusID)
          this.ClaimTotalStatus = response[0].ClaimStatusID
          this.ClaimRefundrateID = response[0].ClaimRefundrateID
          this.groupId = response[0].ClaimGroupID
          this.ClaimId = id;

          this.getClaimTotalLiters(this.groupId, this.ClaimId);
          this.ngBindClaimInvoices(this.ClaimId);
          this.ngSelectGroup(this.groupId)          

          this._invoiceService.SelectInvoiceByClaimId(this.ClaimId)

            .subscribe(data => this.ngBindcalculatedFuelClaimValue(data, response[0].ClaimRefundrateID)
              , (error) => {
                confirm('custom Errormessage: ' + error.message);
              })
        }
      );
  }

  ngBindcalculatedFuelClaimValue(data: any, fuelTypeId: any) {
    var claimAmount = 0.0;
    var exciseTotal = 0.0;
    var levyTotal = 0.0;
    var claimLiters = 0.0;
    
    this.ClaimGroupStatusId = 0;
    var litres = 0.0;
    // console.log("line 651 :" + JSON.stringify(data))
    if (data != null) {
      for (let index = 0; index < data.length; index++) {
        var element = data[index];
        litres += element.litres      

        if (index == data.length - 1) {
         
          var invDate = this.datePipe.transform(element.InvoiceDate, 'yyyy-MM-dd')
          // console.log('697 inv date:' + invDate + 'refundRate: ' + fuelTypeId)
          this._refundRateService.SelectRefundRateById(fuelTypeId, invDate)
            .subscribe
            (
              data => {
                //console.log('702 refundRate: ' + JSON.stringify(data[0]))               
                this.refundRateObject = data[0]
                this.claimObject.ClaimRefundrateID = this.refundRateObject.RefundDescriptionID;
                var exciseDuty = this.refundRateObject.RefundExciseDuty != null ? this.refundRateObject.RefundExciseDuty : 0;
                var levyDuty = this.refundRateObject.RefundFuelLevy != null ? this.refundRateObject.RefundFuelLevy : 0;

                exciseTotal += ((litres * exciseDuty) / 100);
                levyTotal += ((litres * levyDuty) / 100);
                claimAmount += exciseTotal + levyTotal;
                claimLiters += element.litres;
                // console.log('712 claim amount ' + claimAmount)
                this.ClaimForm.patchValue({
                  ClaimTotalLitres: this._decimalPipe.transform(litres, "1.2-2"),
                  ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2"),
                  Levy: this._decimalPipe.transform(levyTotal, "1.2-2"),
                  ClaimAmountTotal: this._decimalPipe.transform(claimAmount, "1.2-2"),
                  ExciseDutyCode: this.refundRateObject.RefundExciseCode,
                  FuelLevyCode: this.refundRateObject.RefundFuelCode,

                });
             

                this.ClaimTotalForm.patchValue({
                  EXCISE: this.refundRateObject.RefundExciseCode,
                  ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2") ?? '0',
                  LevyDuty: this.refundRateObject.RefundFuelCode,
                  ExciseLevy: this._decimalPipe.transform(exciseTotal + levyTotal, "1.2-2") ?? '0',
                  Levy: this._decimalPipe.transform(levyTotal, "1.2-2") ?? '0',
                });

                this.ClaimTotalForm.controls['EXCISE'].disable();
                this.ClaimTotalForm.controls['ClaimExciseTotal'].disable();
                this.ClaimTotalForm.controls['LevyDuty'].disable();
                this.ClaimTotalForm.controls['ExciseLevy'].disable();
                this.ClaimTotalForm.controls['Levy'].disable();
                this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
                this.ClaimTotalForm.controls['GroupExciseTotal'].disable();

               
               
              }, (error) => {

                confirm('custom Errormessage: ' + error.message);
              }
            );
        }      // get refund rate
      }
    }
  }

  ngSelectGroup(id: string) {    
    this._claimService.SelectGroupInfoById(id)
      .subscribe
      (
        data => {     
          this.ClaimGroupStatusId = data[0].GroupStatusID;
          //this.ClaimTotalStatus = data[0].StatusDescription
         this. ClaimGroupTotalStatus =  data[0].StatusDescription
        }
      );
  }

  ngBindClaimInvoices(claimId: any) {    
     var result  = 0;
    this._invoiceService.SelectInvoiceByClaimId(claimId)
      .subscribe
      (
        data => {
          this.ngBindDataSource(data);
          if (data != null) {
            data.forEach(r => {
              result += r.litres;
              this.TotalLitres = Number(this._decimalPipe.transform(result, "1.2-2"))
              this.InvoiceTotalLitres = this._decimalPipe.transform(result, "1.2-2")
              if (result != 0) {
                this.ClaimForm.patchValue({

                  ClaimTotalLitres: this._decimalPipe.transform(result, "1.2-2")

                });
              }
            });
          }
        }
    ); 
  }

  ngBindDataSource(data: any) {

    this.dataSource = new MatTableDataSource(null);
    this.InvoiceFound = false;

    if (data) {
      this.listObject = data;
      this.dataSource = new MatTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      this.InvoiceFound = true;
    }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnLoadVehicleSelected(event: any) {

    this.FuelType = 0;
    this.currentDate = new Date();
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    if (this.ClaimForm.value.ClientVehiclesID != 0) {
      this._vehicleService.GetVehicleByID(this.ClaimForm.value.ClientVehiclesID)
        .subscribe
        (
          data => {
            this.vehicleObject = data;
            this.FuelType = this.vehicleObject.FuelTypeID;
            //console.log('fuel Type ' + this.FuelType)
            this.ClaimForm.patchValue({
              FuelTypeID: this.vehicleObject.FuelTypeID,
              VehicleTankCapacity: this.vehicleObject.VehicleTankCapacity,
              RegistrationDate: formatDate(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US'),
             // VehicleRefDate: null,//formatDate(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
              //VehicleRefNumber: null,//this.vehicleObject.VehicleRefNumber,
              VehicleRegistration: this.vehicleObject.VehicleRegistration,
              DateIssued: this.currentDate,            
              
            });
            this.effectivedate = this.vehicleObject.VehicleEffectiveDate,
            this.VehicleTankCapacity = this.vehicleObject.VehicleTankCapacity,
              this.vehicleRegistrationDate = formatDate(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US')
            this.ClaimRefundrateID = this.vehicleObject.FuelTypeID
           // console.log("this.ClaimRefundrateID" + this.ClaimRefundrateID)
            this._ownerService.SelectOwnerById(this.vehicleObject.OwnerID)
              .subscribe
              (
                ownerInfor => {
                  if (ownerInfor != null) {
                    this.Owner = ownerInfor[0];

                    this.ClaimForm.patchValue({
                      Owner: this.Owner.OwnerInitials + ' ' + this.Owner.OwnerSurname,
                    });
                  }
                }
              );
          }
        );

    }
  }

  ngSearchVehicles(vehicleId: any) {    
    this.ClaimForm.value.ClientVehiclesID = vehicleId
    this.ClaimForm.patchValue({
      ClientVehiclesID: vehicleId,
    })    
    this.close("Vehicle");

  }
  ngOnVehicleSelected(event: any) {
    
    this.FuelType = 0;
    this.currentDate = new Date();
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    if (this.ClaimForm.value.ClientVehiclesID != 0) {
      this._vehicleService.GetVehicleByID(this.ClaimForm.value.ClientVehiclesID)
        .subscribe
        (
          data => {
            //debugger
            this.vehicleObject = data;
            this.FuelType = this.vehicleObject.FuelTypeID;
            //console.log("vehi fuel Type: " + this.vehicleObject.FuelTypeID )
            this.ClaimForm.patchValue({
              FuelTypeID: this.vehicleObject.FuelTypeID,
              VehicleTankCapacity: this.vehicleObject.VehicleTankCapacity,
              RegistrationDate: formatDate(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US'),
              VehicleRefDate: null,//formatDate(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
              VehicleRefNumber: null,//this.vehicleObject.VehicleRefNumber,
              VehicleRegistration: this.vehicleObject.VehicleRegistration,
              DateIssued: this.currentDate,             
              Levy: null,
              ClaimAmountTotal: null,
              ClaimExciseTotal: null,
              ClaimNumber: null,
              ClaimTotalLitres: null,
              FuelLevyCode: null,
              ExciseDutyCode:null

            });
            this.effectivedate = this.vehicleObject.VehicleEffectiveDate,
            //console.log("this.vehicleObject.FuelTypeID" + this.vehicleObject.FuelTypeID)
            this.ClaimRefundrateID = this.vehicleObject.FuelTypeID
            this.TotalLitres = 0
            this.InvoiceTotalLitres = null;
            this.ngBindClaimInvoices(-1)
            this.VehicleTankCapacity = this.vehicleObject.VehicleTankCapacity,
            this.vehicleRegistrationDate = formatDate(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US')

            this._ownerService.SelectOwnerById(this.vehicleObject.OwnerID)
              .subscribe
              (
                ownerInfor => {
                  if (ownerInfor != null) {
                    this.Owner = ownerInfor[0];

                    this.ClaimForm.patchValue({
                      Owner: this.Owner.OwnerInitials + ' ' + this.Owner.OwnerSurname,
                    });
                  }
                }
              );
          }
        );
      this.claimObject = new csClaim();
      this.claimObject.GroupId = this.groupId;
      this.ClaimId = 0;

    }
  }


  /*------------------------------------------------------
        INSERT OR UPDATE AN INVOICE
  -------------------------------------------------------*/
  SubmitInvoice() {
    this.invoiceObject = this.InvoiceForm.value;
    this.vehicleObject = this.ClaimForm.value;
    //console.log("vehicle info" + JSON.stringify(this.vehicleObject))
    if (this.VehicleTankCapacity  < this.invoiceObject.Litres) {
      //console.log(this.VehicleTankCapacity  + " liters" + this.invoiceObject.Litres)
      alert('The invoice Litre cannot be greater than the vehicle tank capacity which is ' + this.VehicleTankCapacity + ' Liters')
      return;
    }
    var refDate = new Date(this.vehicleObject.VehicleRefDate);
    
    var invDate = new Date(this.invoiceObject.InvoiceDate);
    if (invDate > refDate ) {
      alert('The Invoice date cannot be greater that the reference date')
      return;
    }

    var RegistrationDate = new Date(this.effectivedate)
    if (invDate < RegistrationDate) {
      //console.log(this.VehicleTankCapacity  + " liters" + this.invoiceObject.Litres)
      alert('The invoice date cannot be less than effective date.')
      return;
    }

    if (this.VehicleTankCapacity < this.invoiceObject.Litres) {
      //console.log(this.VehicleTankCapacity  + " liters" + this.invoiceObject.Litres)
      alert('The invoice Litre cannot be greater than the vehicle tank capacity which is ' + this.VehicleTankCapacity + ' Liters')
      return;
    }

    this.claimObject = new csClaim();
    if (this.groupId > 0) {
      this.claimObject.GroupId = this.groupId;

    }
    if (this.ClaimId > 0) {
      this.claimObject.ClaimID = this.ClaimId;
      this.FileQueryString.ClaimId = this.ClaimId
    }

    this.claimObject.ClaimVehicleID = this.vehicleObject.ClientVehiclesID;
    this.claimObject.ClientCessionariID = this.clientId;
    // Claim Object
    this.claimObject.ClaimVehicleID = this.vehicleObject.ClientVehiclesID;
    this.claimObject.ClaimRefNumber = this.vehicleObject.VehicleRefNumber;
    this.claimObject.ClaimRefDate = this.vehicleObject.VehicleRefDate;
    this.claimObject.ClaimReceiveDate = this.datePipe.transform(this.vehicleObject.DateIssued, 'yyyy-MM-dd');
    this.claimObject.ClaimClientCessionaryLinkID = this.clientId;
    this.claimObject.ClaimPaymentDate = this.vehicleObject.DateIssued;    
    this.claimObject.ClaimRefundrateID = this.ClaimRefundrateID;
    this.claimObject.FuelTypeID = this.ClaimRefundrateID;
    // Invoice Slip
    if (this.invoiceId > 0) {
      this.claimObject.InvoiceID = this.invoiceId;
    }
    //this.claimObject.InvoiceNumber = this.invoiceObject.InvoiceNumber;
    this.claimObject.InvoiceAmount = this.invoiceObject.Amount;
    this.claimObject.InvoiceDate = this.invoiceObject.InvoiceDate;
    this.claimObject.InvoiceLitres = this.invoiceObject.Litres;
    this.claimObject.InvoiceSuppliersName = this.invoiceObject.Supplier;
    //this.claimObject.InvoiceOdometerReading = this.invoiceObject.KMS;

  

    //Validate invoice age
    var startDate = new Date();
    var invoiceDate = new Date(this.claimObject.InvoiceDate);
    var invoiceage = Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(invoiceDate.getFullYear(), invoiceDate.getMonth(), invoiceDate.getDate())) / (1000 * 60 * 60 * 24));

    if (invoiceage > 730) {

      this.claimObject.InvoiceStatusID = 5
      this.claimObject.GroupStatusID = 5
      this.ClaimForm.patchValue({
        StatusReasonDescription: "Invoice date is two years older than the Recieve date on the Invoice.",

      });
      this.claimObject.ClaimStatusReason = "Invoice date is two years older than the Recieve date on the Invoice.";
    }
    else {
      this.claimObject.InvoiceStatusID = 6
    }

    // validate Invoice duplicates
    this._invoiceService.ValidateInvoice(this.claimObject)
      .subscribe
      (
        (response) => {
          var results = response.body;
          if (results != null && !this.isInvoiceDirty) {
       
           
            var c = confirm("This Invoice could be a duplicate with the invoice dated " + results[0].InvoiceDate + " and the supplier " + this.claimObject.InvoiceSuppliersName +
              " refer to claim " + results[0].ClaimNumber + " do you want to continue capture this invoice?");
           
            if (c == true) {
              this.saveClaimAndInvoice()
              this.InvoiceForm.reset();
              if (this.isInvoiceDirty) {
                this.close("content");
              }
              this.isInvoiceDirty = false;

            } else {
              this.InvoiceForm.reset(); 
              return;
            }  
          }
          else {
            this.saveClaimAndInvoice()
            this.InvoiceForm.reset();          
        
            if (this.isInvoiceDirty) {              
              this.close("content");            
            }
            this.isInvoiceDirty = false;
          }
        }
      );
  }

  saveClaimAndInvoice() {
    this._claimService.SaveInvoice(this.claimObject)
      .subscribe
      (
        (response) => {
          this.tempClaimObject = response.body;
          //console.log("saveInvoice: " + JSON.stringify(response.body))
          this.groupId = this.tempClaimObject.GroupId;
          this.ClaimId = this.tempClaimObject.ClaimID;
          this.claimObject.ClaimID = this.ClaimId;
          this.claimObject.GroupId = this.groupId;
          this.claimObject.FuelTypeID = this.ClaimRefundrateID;
          //console.log("this.claimObject.FuelTypeID = this.ClaimRefundrateID" + this.ClaimRefundrateID )

          //---------File objects-------------
         
          this.FileQueryString.ClaimId = this.ClaimId          
          this.ngSetFileVariables(this.clientId, this.vehicleId, 0, this.ClaimId)

          
          if ((this.ClaimId > 0) && this.groupId > 0) {
            this.getClaimTotalLiters(this.groupId, this.ClaimId);            
          }
        //  console.log("CalcClaimAmount 0: " + this.claimObject.FuelTypeID)
          this.CalcClaimAmount(this.ClaimRefundrateID);
          this.ngBindClaimInvoices(this.tempClaimObject.ClaimID);
          if (this.tempClaimObject.InvoiceID > 0) {
            if (this.theFile != null) {
              this.uploadFile(this.tempClaimObject.InvoiceID)
            }
          }
          this.invoiceId = 0;
          this.ClaimForm.patchValue({
            GroupNumber: this.groupId,
            //ClaimNumber: this.ClaimId

          });
          this.ngBindClaimStatusByClaimId(this.claimObject.ClaimID.toString())
         // confirm('The Invoice has been saved successfully');
        },
        (error) => {
          console.error(error.message);
          confirm('custom Errormessage: ' + error.message);
        }
      );

  }

  ngBindClaimStatusByClaimId(id: string) {    
    this._claimService.SelectClaimInfoById(id)  
      .subscribe
      (
        (response) => {
          this.claimObject = response[0];          
          this.ClaimTotalStatus = response[0].ClaimStatusID;
          this.ClaimGroupStatusId = response[0].ClaimGroupID;
          this.ClaimGroupTotalStatus = "SEND FOR APPROVAL";        
        }
      );
  }

  CalcClaimAmount(fuelTypeId: any) {
    //console.log("fuleee type: " + fuelTypeId)
    this._invoiceService.SelectInvoiceByClaimId(this.ClaimId)
   
      .subscribe(data => this.calculatedFuelClaimValue(data, fuelTypeId)
        , (error) => {
          confirm('custom Errormessage: ' + error.message);
        })

  }

  calculatedFuelClaimValue(data: any, fuelTypeId: any) {
    var claimAmount = 0.0;
    var exciseTotal = 0.0;
    var levyTotal = 0.0;
    var claimLiters = 0.0;
    this.ClaimTotalStatus = null;
    this.ClaimGroupStatusId = 0;
    var litres = 0.0;
   // console.log("line 651 :" + JSON.stringify(data))
    if (data != null) {
      for (let index = 0; index < data.length; index++) {
        var element = data[index];
        litres += element.litres
        if (element.status == 1) {
          console.log('claim status: ' + element.status )
          this.ClaimTotalStatus = "SEND FOR APPROVAL"
          this.ClaimGroupStatusId = 1;

        }
        else if (element.status == 5) {
          this.ClaimTotalStatus = "OTHER STATUS"
          this.ClaimGroupStatusId = 5;

        }
        else if (element.status == 4) {
          this.ClaimTotalStatus = "REJECTED";
          this.ClaimGroupStatusId = 4;

        }
        else if (element.status == 6) {
          this.ClaimTotalStatus = "SEND FOR APPROVAL";
          this.ClaimGroupStatusId = 1;

          //if ((this.ClaimTotalStatus != "OTHER STATUS") && (this.ClaimTotalStatus != "REJECTED")) {
          //  this.ClaimTotalStatus = "SEND FOR APPROVAL";
          //  this.ClaimGroupStatusId = 1;
          //}
          var startDate = new Date();
          var invoiceDate = new Date(element.InvoiceDate);
          var invoiceage = Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(invoiceDate.getFullYear(), invoiceDate.getMonth(), invoiceDate.getDate())) / (1000 * 60 * 60 * 24));
          if (invoiceage > 730 && element.status != "4") {
            this.ClaimForm.patchValue({
              StatusReasonDescription: "Invoice Date 2 years older than the Recieve date on the Invoice.",

            });
            this.claimObject.ClaimStatusReason = "Invoice Date 2 years older than the Recieve date on the Invoice."

            this.ClaimTotalStatus = "OTHER STATUS";
            this.ClaimGroupStatusId = 5;
          }
        }

        if (index == data.length - 1) {
          this.claimObject.GroupStatusID = 1;
          this.claimObject.ClaimStatusID = 1;
          this.claimObject.GroupId = this.groupId;
          var invDate = this.datePipe.transform(element.InvoiceDate, 'yyyy-MM-dd')
         // console.log('807 inv date:' + invDate + 'refundRate: ' + fuelTypeId)
          this._refundRateService.SelectRefundRateById(fuelTypeId, invDate)
            .subscribe
            (
              data => {
               // console.log('702 refundRate: ' + JSON.stringify(data[0]))               
                this.refundRateObject = data[0]
                this.claimObject.ClaimRefundrateID = this.refundRateObject.RefundDescriptionID;
                var exciseDuty = this.refundRateObject.RefundExciseDuty != null ? this.refundRateObject.RefundExciseDuty : 0;
                var levyDuty = this.refundRateObject.RefundFuelLevy != null ? this.refundRateObject.RefundFuelLevy : 0;

                exciseTotal += ((litres * exciseDuty) / 100);
                levyTotal += ((litres * levyDuty) / 100);
                claimAmount += exciseTotal + levyTotal;
                claimLiters += element.litres;
               // console.log('712 claim amount ' + claimAmount)
                this.ClaimForm.patchValue({
                  ClaimTotalLitres:  this._decimalPipe.transform(litres, "1.2-2"),
                  ClaimExciseTotal:  this._decimalPipe.transform(exciseTotal, "1.2-2"),
                  Levy: this._decimalPipe.transform(levyTotal, "1.2-2"),
                  ClaimAmountTotal: this._decimalPipe.transform(claimAmount, "1.2-2"),
                  ExciseDutyCode: this.refundRateObject.RefundExciseCode,
                  FuelLevyCode: this.refundRateObject.RefundFuelCode
                });
                //console.log('claim Amount: ' + claimAmount + 'converted: ' + this._decimalPipe.transform(claimAmount, "1.2-2"))
                this.claimObject.ClaimPaymentAmount = claimAmount;
                this.claimObject.ClaimAmount = claimAmount;
              

                this.ClaimTotalForm.patchValue({
                  EXCISE: this.refundRateObject.RefundExciseCode,
                  ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2") ?? '0',
                  LevyDuty: this.refundRateObject.RefundFuelCode,
                  ExciseLevy: this._decimalPipe.transform(exciseTotal + levyTotal, "1.2-2") ?? '0',
                  Levy: this._decimalPipe.transform(levyTotal, "1.2-2") ?? '0',
                });

                this.ClaimTotalForm.controls['EXCISE'].disable();
                this.ClaimTotalForm.controls['ClaimExciseTotal'].disable();
                this.ClaimTotalForm.controls['LevyDuty'].disable();
                this.ClaimTotalForm.controls['ExciseLevy'].disable();
                this.ClaimTotalForm.controls['Levy'].disable();
                this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
                this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
                
                this.claimObject.ClaimClientCessionaryLinkID = this.clientId;
                this.claimObject.ClientCessionariID = this.clientId;
               // console.log('740 cleintID : ' + this.clientId)
               // console.log('741 groupid : ' + this.groupId)
                this.claimObject.GroupId = this.groupId;
                this.claimObject.GroupStatusID = 1
                this.claimObject.ClaimStatusID = 1
                this.ClaimTotalStatus = "SEND FOR APPROVAL";

                this._claimService.UpdateClaim(this.claimObject)
                  .subscribe
                  (
                    (response) => {
                      this.InvoiceForm.patchValue({
                        InvoiceDate: null,
                        InvoiceNumber: null,
                        Supplier: null,
                        Amount: null,
                        Litres: null,
                        KMS: null,
                        FileUpload: null
                      });
                      this.InvoiceFound = true;
                      this.isNewInvoiceRecord = false
                    })
              }, (error) => {

                confirm('custom Errormessage: ' + error.message);
              }
            );
        }      // get refund rate
      }
    }
  }

  getClaimTotalLiters(groupId: any, claimId: any) {
    this._claimService.GetClaimTotalLiters(groupId)
      .subscribe
      (
        (response) => {
          this.ClaimForm.patchValue({
            GroupTotalLitres: this._decimalPipe.transform(response[0].invoiceLiters, "1.2-2"),
          });
        }
      );

    this._claimService.SelectClaimInfoById(claimId)
      .subscribe
      (
        (response) => {
          this.ClaimForm.patchValue({
            ClaimNumber: response[0].ClaimNumber

          });
          this.claimNumber =  response[0].ClaimNumber
        }
      );
  }

  DeleteInvoice(id: string) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    if (confirm("Are you sure  you want to delete this invoice")) {
      this._invoiceService.DeleteInvoice(id)
        .subscribe
        (
          (response) => {
            alert('Invoice has been deleted');
            this.ngBindClaimInvoices(this.ClaimId);
            this.CalcClaimAmount(this.ClaimRefundrateID)
          });

    }
  }

  DeleteClaim() {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    if (this.claimNumber != null || this.claimNumber != '') {
      if (confirm("Are you sure  you want to delete this claim")) {
        this._claimService.DeleteClaimById(this.ClaimId)
          .subscribe
          (
            (response) => {

              alert('Claim has been deleted');
              this.goToNewClaimScreen();
            });

      }
    }
  }
  /*------------------------------------------------------
        OPEN INVOICE DIALOG MODAL
  -------------------------------------------------------*/
  openCalcClaim(id: string) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };

    this.CalcClaimAmount(this.claimObject.ClaimRefundrateID);
    this.modalRef = this.modalService.open(id, ngbModalOptions);
    // this.modalService.open(id);
  }

  open(content) {
    this.FileQueryString = new FileQueryString();
    this.FileQueryString.ClientID = 0;
    this.FileQueryString.VehicleId = 0;
    this.FileQueryString.OwnerId = 0;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.IdProvided = false;
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };
    this.isNewInvoiceRecord = true;
    this.invoiceId = 0;
    this.modalRef = this.modalService.open(content, ngbModalOptions);
    //this.modalService.open(content, ngbModalOptions);
  }


  searchVehicle(content) {
  
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };    
    this.modalRef = this.modalService.open(content, ngbModalOptions);
   
  }

  btnEditInvoice(content, id: any) {

    //this.FileQueryString = new FileQueryString();
    //this.FileQueryString.ClientID = 0;
    //this.FileQueryString.VehicleId = 0;
    //this.FileQueryString.OwnerId = 0;
    //this.FileQueryString.InvoiceId = id;
    //this.FileQueryString.IdProvided = true;
    //this.isNewInvoiceRecord = false;

    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'

      // validate Invoice duplicates
    }
    this.isInvoiceDirty = true;
    this._invoiceService.SelectInvoiceInfoById(id)
      .subscribe
      (
        invoice => {
          var invoiceObject = invoice[0];

          this.InvoiceForm.patchValue({
            InvoiceDate: this.datePipe.transform(invoiceObject.InvoiceDate, 'yyyy-MM-dd'),
            InvoiceNumber: invoiceObject.InvoiceNumber,
            Supplier: invoiceObject.InvoiceSuppliersName,
            Amount: invoiceObject.InvoiceAmount,
            Litres: invoiceObject.InvoiceLitres,
            KMS: invoiceObject.InvoiceOdometerReading
          });
          this.invoiceId = invoiceObject.InvoiceID

        }
      );
    this.modalRef = this.modalService.open(content, ngbModalOptions);
    // this.modalService.open(content, ngbModalOptions);
  }

  close(content) {
    this.invoiceId = 0;
    this.modalRef.close()
    //this.modalService.dismissAll(content);
    this.InvoiceForm.reset();
  }
  /*-------------------------------------------------------------------
  END MODAL DIALOG BOX
  --------------------------------------------------------------------- */


  printReport(content, reportName: string) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = reportName;

      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {

        "groupId": this.groupId

      };
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };


      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  printInvoiceReport(content, reportName: string) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.')
      return;
    }
    this.modalService.dismissAll();
    if (reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {

        "claimNo": this.claimNumber

      };
     // console.log('claim No: ' + this.claimNumber)
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  goToClaimEditor() {
    this.modalService.dismissAll();
    this.router.navigate(
      ['/Claims/ClaimsEditor/'],
      { queryParams: { 'clientId': this.clientId, 'vehicleId': this.vehicleId, 'claimId': this.ClaimId, 'groupId': this.groupId } }
    );
  }

  goToSubmitToSuperviser() {
    //this.modalRef.close()
    this.modalService.dismissAll();
    this.router.navigate(
      ['Claims/AmendClaim/']

    );
  }

  goToNewClaimScreen() {
    //this.modalRef.close()
    this.modalService.dismissAll();
    this.router.navigate(
      ['Claims/NewClaims/']

    );
  }

  /**
   * UPload invoices
   */

  onFileChange(event) {
    this.theFile = null;

    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];

      }
      else {
        // Display error message
        alert("File: " + event.target.files[0].name
          + " is too large to upload.")
        //this.messages.push("File: " + event.target.files[0].name 
        //  + " is too large to upload.");
      }
    }
  }

  private readAndUploadFile(theFile: any, invoiceId: number) {
    let file = new FileToUpload();

    // Set File Information
    file.FileName = theFile.name;
    file.FileSize = theFile.size;
    file.FileType = theFile.type;
    file.ClientID = 0;
    file.VehicleId = 0;
    file.OwnerId = 0;
    file.InvoiceId = invoiceId;
    file.comment = 'Invoice Slip';


    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();

    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      if (reader.result != null) {
        file.fileAsBase64 = reader.result.toString();


        // POST to server

        this.uploadService.uploadFile(file)
          .subscribe(resp => {
            // this.messages.push("Upload complete");
            // alert(resp.body);

          },
            (error) => {
              console.error(error.message);
              confirm('Invoice slip Not uploaded Error message: ' + error.message);
            });
      }
    }
    // Read the file    
    reader.readAsDataURL(theFile);
  }

  uploadFile(invoiceId: number): void {
    this.readAndUploadFile(this.theFile, invoiceId);
  }

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

          //console.log("user role: " + this.userRole)
        }
      );
  }

  ngSetFileVariables(clientId: any, vehicleId: any, ownerid: any, claimId: any) {

    this.FileQueryString.ClientID = clientId;
    this.FileQueryString.VehicleId = vehicleId;
    this.FileQueryString.OwnerId = ownerid;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = claimId;
    this.FileQueryString.IdProvided = true;
    //console.log('client Id:' + this.FileQueryString.ClientID +
    //  'vehicle Id: ' + this.FileQueryString.VehicleId + 'owner id :' + this.FileQueryString.OwnerId
    //  + 'Claim Id : ' + this.FileQueryString.ClaimId + 'is Id Providerd : ' + this.FileQueryString.IdProvided )
  }
}

function datePickerValidator(control: AbstractControl): any {
  var startDate = new Date();
  var inputDate = new Date(control.value)


  var invoiceage = Math.floor((Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));

  if (invoiceage > 0) {
    control.setErrors({ futureDate: true });
    return { futureDate: true };
  }

  var prvAge = Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())) / (1000 * 60 * 60 * 24));
  if (prvAge > 730) {
    control.setErrors({ TwoYearsOld: true });
    return { TwoYearsOld: true };

  }
  
  if (inputDate instanceof Date && isFinite(+inputDate)) {
    //return null;
    control.setErrors({ invalidDate: false })    
  }
  else {
    control.setErrors({ invalidDate: true });
    return { invalidDate: true };
  }

  return null;
}

function dateIssuedValidator(control: AbstractControl): any {
  var startDate = new Date();
  var inputDate = new Date(control.value)
  var invoiceage = Math.floor((Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));

  if (invoiceage > 0) {
    control.setErrors({ futureDate: true });
    return { futureDate: true };
  }
  if (inputDate instanceof Date && isFinite(+inputDate)) {
    //return null;
    control.setErrors({ invalidDate: false })
  }
  else {
    control.setErrors({ invalidDate: true });
    return { invalidDate: true };
  }

  return null;
}

function dateRefDateValidator(control: AbstractControl): any {
 
  var startDate = new Date();
  var inputDate = new Date(control.value)
  var invoiceage = Math.floor((Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));

  if (invoiceage > 0) {
   // control.setErrors({ futureDate: true });
    //return { futureDate: true };
  }
  if (inputDate instanceof Date && isFinite(+inputDate)) {
    //return null;
    control.setErrors({ invalidDate: false })
  }
  else {
    control.setErrors({ invalidDate: true });
    return { invalidDate: true };
  }

  return null;
}

function isNumber(control: AbstractControl): any {
  //console.log("value mount " +control.value)
  if (((control.value == null) ||
    (control.value == '') ||
    isNaN(Number(control.value.toString())))) {
    control.setErrors({ notNumber: true });
    return { notNumber: true };
  }  
}

function ClaimFuelTypeIdRequired(control: AbstractControl): any {

  if (control.value == '') {

    control.setErrors({ fueltypeRequired: true });
  }

  if (control.value >    this.VehicleTankCapacity) {

    control.setErrors({ capacity: true });
    return { capacity: true };   
  }
  return null;
}



