

import { INavData } from '@coreui/angular';



export const navItems: INavData[] = [
  {
    title: true,
    name: 'CLAIM ADMIN'
  },
  {
    name: 'Add New Client Claim',
    url: '/Claims/NewClaims',
    icon: 'icon-cursor'
  },
  {
    name: 'Amend Claim',
    url: 'Claims/AmendClaim',
    icon: 'icon-cursor'
  },
  {
    name: 'Continue with Group',
    url: 'Claims/ContinueWithGroup',
    icon: 'icon-cursor'
  },
  {
    name: 'Submit To Supervisor',
    url: 'Claims/SubmitToSupervisor',
    icon: 'icon-cursor'
  },
  {
    title: true,
    name: 'CLAIMS LISTING ADMIN'
  },
  {
    name: 'Awaiting Approval',
    url: 'Claims/Authorise',
    icon: 'icon-cursor'
  },

  {
    name: 'Claims - Rejected',
    url: '/claims/claimListings',
    icon: 'icon-puzzle',
    linkProps: { queryParams: { 'statusId': '4' } }
  },

  {
    name: 'Claims - Re-work',
    url: '/claims/claimListings',
    icon: 'icon-puzzle',
    linkProps: { queryParams: { 'statusId': '3' } }
  },


  {
    title: true,
    name: 'SAP CLAIMS LISTING ADMIN'
  },
  {
    name: 'Claims - Ready for Payment',
    url: '/claims/readyforpayment',
    icon: 'icon-puzzle',
    linkProps: { queryParams: { 'statusId': '9' } }
  },
  {
    name: 'Claims - Finalised',
    url: '/claims/finalisedClaims',
    icon: 'icon-puzzle',
    linkProps: { queryParams: { 'statusId': '8' } }
  },
  {
    title: true,
    name: 'Registration'
  }, {
    name: 'Clients',
    url: '/registration/client',
    icon: 'icon-drop'
  },
  {
    name: 'Vehicles',
    url: '/registration/vehicles',
    icon: 'icon-pencil'
  },
  {
    name: 'Owners',
    url: '/registration/Owners',
    icon: 'icon-pencil'
  },
  
  {
    title: true,
    name: 'REPORT ADMIN'
  },
  {
    name: 'DIPS Reports',
    url: '/Reports/ReportViewerDashboard',
    icon: 'icon-star'
  },  
  {
    title: true,
    name: 'SYSTEM ADMIN'
  },
  {
    name: 'Manage users',
    url: '/usermanager/UserDashboard',
    icon: 'icon-star'
  },
  {
    name: 'Manage Client Types',
    url: '/Lookups/LookupClientType',
    icon: 'icon-star'
  },
  {
    name: 'Manage Rank Types',
    url: 'Lookups/RankTypes',
    icon: 'icon-star'
  },
  {
    name: 'Manage Title Types',
    url: 'Lookups/TitleTypes',
    icon: 'icon-star'
  },
  {
    name: 'Manage Nationalities',
    url: 'Lookups/Nationality',
    icon: 'icon-star'
  },
  {
    name: 'Manage Refund Rates',
    url: 'Lookups/RefundRates',
    icon: 'icon-star'
  },
  
];

