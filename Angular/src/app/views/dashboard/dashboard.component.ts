import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  modalRef: any;
  
  reportServer: string = environment.reportUrl;
  reportName :string = 'Dashboard';
  reportUrl: string = '/DIPS_Reports/Dashboard';
  showParameters: string = "false";
 // parameters: any;
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
  toolbar: string = "false";

  ngOnInit(): void {
    this.reportServer = environment.reportUrl;
    this. reportName = 'Dashboard';
    this.reportUrl= 'DIPS_Reports/' +   this. reportName;
  }

}
