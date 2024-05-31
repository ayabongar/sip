import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, AsyncPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Gridview
import { CommonModule } from '@angular/common';


import { MatDialogModule } from '@angular/material/dialog';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';

//Form Modules
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
//import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import{MatIconModule} from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule,MatRippleModule  } from '@angular/material/core';
import { FormControl } from '@angular/forms';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule, routes } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Form pages
import { ClientdashboardComponent } from './views/forms/registration/clientdashboard/clientdashboard.component';
import { ClientEditorComponent } from './views/forms/registration/client-editor/client-editor.component';
import { UserDashboardComponent } from './views/forms/usermanager/user-dashboard/user-dashboard.component';
import { UserEditorComponent } from './views/forms/usermanager/user-editor/user-editor.component';
import { VehicleDashboardComponent } from './views/forms/registration/vehicle-dashboard/vehicle-dashboard.component';
import { VehicleEditorComponent } from './views/forms/registration/vehicle-editor/vehicle-editor.component';
import { OwnerDashboardComponent } from './views/forms/registration/owner-dashboard/owner-dashboard.component';
import { OwnerEditorComponent } from './views/forms/registration/owner-editor/owner-editor.component';
import { ClientInformationComponent } from './views/forms/registration/client-information/client-information.component';
import { ClientAddressComponent } from './views/forms/registration/client-address/client-address.component';
import { ClientContactsComponent } from './views/forms/registration/client-contacts/client-contacts.component';
import { ClientBankDetailsComponent } from './views/forms/registration/client-bank-details/client-bank-details.component';
import { ClientVehiclesComponent } from './views/forms/registration/client-vehicles/client-vehicles.component';
import { NewClaimsComponent } from './views/forms/Claims/new-claims/new-claims.component';
import { NewClaimsEditorComponent } from './views/forms/Claims/new-claims-editor/new-claims-editor.component';
import { AmendClaimDashboardComponent } from './views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component';
import { SubmitToSupervisorDashboardComponent } from './views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component';
import { SupervisorEditorComponent } from './views/forms/Claims/supervisor-editor/supervisor-editor.component';
import { AuthoriseDashboardComponent } from './views/forms/Claims/authorise-dashboard/authorise-dashboard.component';
import { BookKeepingComponent } from './views/forms/Claims/book-keeping/book-keeping.component';
import { ContinueWithTheGroupComponent } from './views/forms/Claims/continue-with-the-group/continue-with-the-group.component';
import { ClaimListingDashboardComponent } from './views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component';
import { RouterModule } from '@angular/router';
import { OwnersNotLinkedComponent } from './views/forms/registration/owners-not-linked/owners-not-linked.component';
import { ReportViewerComponent } from './views/forms/Reports/report-viewer/report-viewer.component';
import { ReportViewerDashboardComponent } from './views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component';

import { RankTypesComponent } from './views/forms/Lookups/rank-types/rank-types.component';
import { ClientTypeComponent } from './views/forms/Lookups/client-type/client-type.component';
import { TitleTypesComponent } from './views/forms/Lookups/title-types/title-types.component';
import { NationalityComponent } from './views/forms/Lookups/nationality/nationality.component';
import { RefundRatesComponent } from './views/forms/Lookups/refund-rates/refund-rates.component';
import { FileUploadComponent } from './views/forms/Files/file-upload/file-upload.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DateMaskDirective } from "./views/forms/date-mask.directive";
import { ReadyForPaymentComponent } from './views/forms/Claims/ready-for-payment/ready-for-payment.component';
import { FinalisedClaimsComponent } from './views/forms/Claims/finalised-claims/finalised-claims.component';
import { SpinnerComponent } from './views/forms/Claims/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule, MatRadioChange } from '@angular/material/radio';
import { SearchVehicleComponent } from './views/forms/Claims/search-vehicle/search-vehicle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),  
    HttpClientModule  ,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    NgbModule ,
    PaginationModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonsModule,
    ReactiveFormsModule ,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    CdkAccordionModule,
   // DecimalPipe
   MatDatepickerModule,
   MatNativeDateModule,
   MatRippleModule,
   RouterModule.forRoot(routes, {
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  }) ,
    ReportViewerModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatRadioModule,
    
    
       
  ],
  exports: [RouterModule, DateMaskDirective],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,    
  
    ClientdashboardComponent,
    ClientEditorComponent,
    UserDashboardComponent,
    UserEditorComponent,
    VehicleDashboardComponent,
    VehicleEditorComponent,
    OwnerDashboardComponent,
    OwnerEditorComponent,
    ClientInformationComponent,
    ClientAddressComponent,
    ClientContactsComponent,
    ClientBankDetailsComponent,
    ClientVehiclesComponent,
    NewClaimsComponent,
    NewClaimsEditorComponent,
    AmendClaimDashboardComponent,
    SubmitToSupervisorDashboardComponent,
    SupervisorEditorComponent,
    AuthoriseDashboardComponent,
    BookKeepingComponent,
    ContinueWithTheGroupComponent,
    ClaimListingDashboardComponent,
    OwnersNotLinkedComponent,
    ReportViewerComponent,
    ReportViewerDashboardComponent,

    RankTypesComponent,
    ClientTypeComponent,
    TitleTypesComponent,
    NationalityComponent,
    RefundRatesComponent,
    FileUploadComponent,
    DateMaskDirective,
    ReadyForPaymentComponent,
    FinalisedClaimsComponent,
    SpinnerComponent,
    SearchVehicleComponent
    
    //NgbdModalComponent,    
    //NgbdModalContentD,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
