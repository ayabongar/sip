export const environment = {
  production: false,

  //*****************Local host ************************/ 
  apiEndpoint: 'http://localhost/DIPS_API/api/',
  reportUrl: 'http://ptadvsqc02sql/Reportserver/',

  //*****************Dev Box************************/
  //apiEndpoint : 'http://ptadviis12:90/DIPSAPI/api/',
  // reportUrl: 'http://ptadvsqc02sql/Reportserver/',

 //-----------------QA-------------------------
 //apiEndpoint: 'http://ptaqaiis06:80/DIPS_API/api/',
 // reportUrl: 'http://ptaqasqc08sql/SSRSReportserver/',

  //-----------------PreProd-------------------------
  //apiEndpoint: 'http://10.16.32.38:90/DIPS_API/api/',
 // reportUrl: 'http://ptaqasqc08sql/SSRSReportserver/',

  //-----------------Prod-------------------------
 //apiEndpoint: 'http://ptabriis07/DIPS_API/api/',
 //reportUrl: 'http://ptaensqc16sql01/SSRSReportserver/',
};
