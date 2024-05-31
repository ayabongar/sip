// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
 
  //*****************Local host ************************/ 
 //apiEndpoint: 'http://localhost/DIPS_API/api/',
 //reportUrl: 'http://ptadvsqc02sql/Reportserver/',

  //*****************Dev Box************************/
  //apiEndpoint : 'http://ptadviis12:90/DIPSAPI/api/',
  // reportUrl: 'http://ptadvsqc02sql/Reportserver/',

 //-----------------QA-------------------------
 // apiEndpoint: 'http://ptaqaiis06:80/DIPS_API/api/',
  //reportUrl: 'http://ptaqasqc08sql/SSRSReportserver/',

  //-----------------PreProd-------------------------
  //apiEndpoint: 'http://10.16.32.38:90/DIPS_API/api/',
 // reportUrl: 'http://ptaqasqc08sql/SSRSReportserver/',

  //-----------------Prod-------------------------
 apiEndpoint: 'http://ptabriis07/DIPS_API/api/',
 reportUrl: 'http://ptaensqc16sql01/SSRSReportserver/',
  
};
