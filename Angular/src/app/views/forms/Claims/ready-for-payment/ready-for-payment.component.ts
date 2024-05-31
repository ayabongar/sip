import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';
import { ClaimService } from '../../../../api.services/claim.service';



@Component({
  selector: 'app-ready-for-payment',
  templateUrl: './ready-for-payment.component.html',
  styleUrls: ['./ready-for-payment.component.scss'],

})
export class ReadyForPaymentComponent implements OnInit {
    ClaimStatusId: string | number;
    clientClaims: any;
    modalRef: any;
    billingReferenceNo: string;
  chequeNumber: any;
  hasClaims: boolean;
    reportUrl: string;
  parameters: any ;
    reportServer: any;
  reportName: string;

 
  constructor(private _claimService: ClaimService, private router: Router, private route: ActivatedRoute,
    private modalService: NgbModal
    
  ) { }
  ngOnInit(): void {
    this.hasClaims = false;
    this.router.events.subscribe((e: any) => {
      //console.log('Router event:', e);
      this.ClaimStatusId = this.route.snapshot.queryParamMap.get('statusId') || 0;
      if (this.ClaimStatusId > 0) {
        this.ngGetAllClaimedClients(this.ClaimStatusId);       
       
      }
    });
  }
  async ngGetAllClaimedClients(statusid: any) {
   
    this._claimService.SelectApprovedClaimByStatusID(statusid)
      .subscribe
      (
        data => {
          this.clientClaims = data
          this.hasClaims = true
          if (!data) {
            this.hasClaims = true;
          }
        }        
         
    );
    //this.hasClaims = true;
    
  }
  
  
  openReasonBox(content, id: string) {

   
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-classR'
    };
    this.billingReferenceNo = id
    //console.log('lcient Id ' + id)    
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }

  closeModal() {
        this.modalRef.close()
  }
  ngFinalise(content, reportName: string) {
    this.printReport(content, reportName, this.chequeNumber);
    this._claimService.FinaliseClaim(0, this.chequeNumber, this.billingReferenceNo)
      .subscribe
      (
        data => {        
          alert(data.body)
          this.ngGetAllClaimedClients(9);
          //this.closeModal();         
        }
      );
  }

  printReport(content, reportName,chequeNumber:any) {

    this.reportName = reportName;
    this.modalService.dismissAll();
    this.parameters = null;
    if (this.reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = this.reportName;

      this.reportUrl = 'DIPS_Reports/' + this.reportName;
      this.parameters = {

        "chequnumber":chequeNumber

      };
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class1'
      };

      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  printGroupReport(content, reportName: string, clientId:any, billNo:any) {

    this.reportName = reportName;
    this.modalService.dismissAll();
    this.parameters = null;
    if (this.reportName != null) {
      this.reportServer = environment.reportUrl;
      this.reportName = this.reportName;

      this.reportUrl = 'DIPS_Reports/' + this.reportName;
      this.parameters = {
        //"groupId": groupId,
        "ClientId": clientId,
        "BillingReferenceNo": billNo
      };
      let ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class1'
      };

      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }

  close(content) {
    this.modalRef.close()
  }

 
}
