import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
//Form component
import { ClientdashboardComponent } from './views/forms/registration/clientdashboard/clientdashboard.component';
import { UserDashboardComponent } from './views/forms/usermanager/user-dashboard/user-dashboard.component';
import {VehicleDashboardComponent} from './views/forms/registration/vehicle-dashboard/vehicle-dashboard.component';
import {ClientVehiclesComponent} from './views/forms/registration/client-vehicles/client-vehicles.component';
import {OwnerDashboardComponent} from './views/forms/registration/owner-dashboard/owner-dashboard.component';
import {NewClaimsComponent} from './views/forms/Claims/new-claims/new-claims.component';
import { NewClaimsEditorComponent} from  './views/forms/Claims/new-claims-editor/new-claims-editor.component';
import {AmendClaimDashboardComponent} from './views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component';
import { SubmitToSupervisorDashboardComponent } from './views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component';
import { AuthoriseDashboardComponent } from './views/forms/Claims/authorise-dashboard/authorise-dashboard.component';
import { BookKeepingComponent } from './views/forms/Claims/book-keeping/book-keeping.component';
import { ContinueWithTheGroupComponent } from './views/forms/Claims/continue-with-the-group/continue-with-the-group.component';
import { ClaimListingDashboardComponent } from './views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component';
import { OwnersNotLinkedComponent } from './views/forms/registration/owners-not-linked/owners-not-linked.component';
import { ReportViewerComponent } from './views/forms/Reports/report-viewer/report-viewer.component';
import { ReportViewerDashboardComponent } from './views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component';
import { ClientTypeComponent } from './views/forms/Lookups/client-type/client-type.component';
import { RankTypesComponent } from './views/forms/Lookups/rank-types/rank-types.component';
import { TitleTypesComponent } from './views/forms/Lookups/title-types/title-types.component';
import { NationalityComponent } from './views/forms/Lookups/nationality/nationality.component';
import { RefundRatesComponent } from './views/forms/Lookups/refund-rates/refund-rates.component';
import { FileUploadComponent } from './views/forms/Files/file-upload/file-upload.component';
import { ReadyForPaymentComponent } from './views/forms/Claims/ready-for-payment/ready-for-payment.component';
import { FinalisedClaimsComponent } from './views/forms/Claims/finalised-claims/finalised-claims.component';
import { SearchVehicleComponent } from './views/forms/Claims/search-vehicle/search-vehicle.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    
    children: [
      {
        path: 'registration/client',
       component: ClientdashboardComponent,
        data: {
          title: 'Client Dashboard'
        }
      },
      {
        path: 'registration/clientVehicles/:clientId',
       component: VehicleDashboardComponent,
        data: {
          title: 'Vehicle Dashboard'
        }
      },
      {
        path: 'registration/vehicles',
       component: ClientVehiclesComponent,
        data: {
          title: 'Vehicle Dashboard'
        }
      },
      {
        path: 'registration/Owners',
       component: OwnerDashboardComponent,
        data: {
          title: 'Owners Dashboard'
        }
      },
      {
        path: 'registration/OwnersNotLinked',
       component: OwnersNotLinkedComponent,
        data: {
          title: 'Owners Not Linked Dashboard'
        }
      },
      {

        path: 'claims/readyforpayment',
        component: ReadyForPaymentComponent,
        data: {
          title: 'Claims Ready For Payment Dashboard'
        }
      },
      {

        path: 'claims/searchVehicle',
        component: SearchVehicleComponent,
        data: {
          title: 'Search Vehicles'
        }
      },

      {

        path: 'claims/claimListings',
       component: ClaimListingDashboardComponent,
        data: {
          title: 'Claim Listing Dashboard'
        },       
        
        runGuardsAndResolvers: 'paramsChange',
      },
      {
        path: 'claims/finalisedClaims',
        component: FinalisedClaimsComponent,
        data: {
          title: 'Finalised Claims Dashboard'
        },
        runGuardsAndResolvers: 'paramsChange',
      },
      {
        path: 'Claims/NewClaims',
       component: NewClaimsComponent,
        data: {
          title: 'Register Claims Dashboard'
        }
      },
      {
        path: 'Claims/ClaimsEditor',
       component: NewClaimsEditorComponent,
        data: {
          title: 'Register Claims'
        }
      },
      {
        path: 'Claims/AmendClaim',
       component: AmendClaimDashboardComponent,
        data: {
          title: 'Amend Claims'
        }
      },
      {
        path: 'Claims/ContinueWithGroup',
       component: ContinueWithTheGroupComponent,
        data: {
          title: 'Continue with Group'
        }
      },
      {
        path: 'Claims/SubmitToSupervisor',
       component: SubmitToSupervisorDashboardComponent,
        data: {
          title: 'Submit To Supervisor'
        }
      },
      {
        path: 'Claims/Authorise',
       component: AuthoriseDashboardComponent,
        data: {
          title: 'Authorise Claims'
        }
      },
      {
        path: 'Claims/bookkeeping',
       component: BookKeepingComponent,
        data: {
          title: 'Bookkeeping'
        }
      },
      {
        path: 'Reports/ReportViewer',
       component: ReportViewerComponent,
        data: {
          title: 'Reports Viewer'
        }
      },
      {
        path: 'Reports/ReportViewerDashboard',
       component: ReportViewerDashboardComponent,
        data: {
          title: 'Reports Dashboard'
        }
      },
      {
        path: 'Files/FileUpload',
       component: FileUploadComponent,
        data: {
          title: 'File Uploadwer'
        }
      },
      {
        path: 'usermanager/UserDashboard',
       component: UserDashboardComponent,
        data: {
          title: 'Manage Users'
        }
      },
      {
        path: 'Lookups/LookupClientType',
       component: ClientTypeComponent,
        data: {
          title: 'Manage Client Types'
        }
      },
      {
        path: 'Lookups/RankTypes',
       component: RankTypesComponent,
        data: {
          title: 'Manage Rank Types'
        }
      },
      {
        path: 'Lookups/TitleTypes',
       component: TitleTypesComponent,
        data: {
          title: 'Manage Title Types'
        }
      },
      {
        path: 'Lookups/Nationality',
       component: NationalityComponent,
        data: {
          title: 'Manage Nationality'
        }
      },
      {
        path: 'Lookups/RefundRates',
       component: RefundRatesComponent,
        data: {
          title: 'Manage Refund Rates'
        }
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
         
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
     
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
     
     
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
