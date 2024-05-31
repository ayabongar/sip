import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-report-viewer-dashboard',
  templateUrl: './report-viewer-dashboard.component.html',
  styleUrls: ['./report-viewer-dashboard.component.scss']
})
export class ReportViewerDashboardComponent implements OnInit {
  modalRef: any;
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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openReport(content, reportName: string) {
    
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
  close() {
    this.modalRef.close()
  }

}
