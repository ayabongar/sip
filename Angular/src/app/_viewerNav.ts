import { INavData } from '@coreui/angular';


export const viewerItems: INavData[] = [
  {
    title: true,
    name: 'CLAIMS LISTING ADMIN'
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
        name: 'REPORT ADMIN'
      },
      {
        name: 'DIPS Reports',
        url: '/Reports/ReportViewerDashboard',
        icon: 'icon-star'
      },
      
    
    
    
  ];
  
