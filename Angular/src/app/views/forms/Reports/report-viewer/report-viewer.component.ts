import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.scss']
})


export class ReportViewerComponent implements OnInit {
  reportServer: string = 'http://ptadvsqc02sql/Reportserver';
  reportUrl: string = 'DIPS_Reports/SampleReport';
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

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
