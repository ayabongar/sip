import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,    
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ReportViewerModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
