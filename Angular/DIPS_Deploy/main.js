(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 69952:
/*!*************************************!*\
  !*** ./src/app/_dataCapturerNav.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataCaptureItems": () => (/* binding */ dataCaptureItems)
/* harmony export */ });
const dataCaptureItems = [{
  title: true,
  name: 'CLAIM ADMIN'
}, {
  name: 'Add New Client Claim',
  url: '/Claims/NewClaims',
  icon: 'icon-cursor'
}, {
  name: 'Amend Claim',
  url: 'Claims/AmendClaim',
  icon: 'icon-cursor'
}, {
  name: 'Continue with Group',
  url: 'Claims/ContinueWithGroup',
  icon: 'icon-cursor'
}, {
  name: 'Submit To Supervisor',
  url: 'Claims/SubmitToSupervisor',
  icon: 'icon-cursor'
}, {
  title: true,
  name: 'CLAIMS LISTING ADMIN'
}, {
  name: 'Awaiting Approval',
  url: 'Claims/Authorise',
  icon: 'icon-cursor'
}, {
  name: 'Claims - Rejected',
  url: '/claims/claimListings',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '4'
    }
  }
}, {
  name: 'Claims - Re-work',
  url: '/claims/claimListings',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '3'
    }
  }
}, {
  title: true,
  name: 'SAP CLAIMS LISTING ADMIN'
}, {
  name: 'Claims - Ready for Payment',
  url: '/claims/readyforpayment',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '9'
    }
  }
}, {
  name: 'Claims - Finalised',
  url: '/claims/finalisedClaims',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '8'
    }
  }
}, {
  title: true,
  name: 'Registration'
}, {
  name: 'Clients',
  url: '/registration/client',
  icon: 'icon-drop'
}, {
  name: 'Vehicles',
  url: '/registration/vehicles',
  icon: 'icon-pencil'
}, {
  name: 'Owners',
  url: '/registration/Owners',
  icon: 'icon-pencil'
}, {
  title: true,
  name: 'REPORT ADMIN'
}, {
  name: 'DIPS Reports',
  url: '/Reports/ReportViewerDashboard',
  icon: 'icon-star'
}, {
  title: true,
  name: 'USER ADMIN'
},
//{
//    name: 'Manage users',
//    url: '/usermanager/UserDashboard',
//    icon: 'icon-star'
//},
{
  name: 'Manage Client Types',
  url: '/Lookups/LookupClientType',
  icon: 'icon-star'
}, {
  name: 'Manage Rank Types',
  url: 'Lookups/RankTypes',
  icon: 'icon-star'
}, {
  name: 'Manage Title Types',
  url: 'Lookups/TitleTypes',
  icon: 'icon-star'
}, {
  name: 'Manage Nationalities',
  url: 'Lookups/Nationality',
  icon: 'icon-star'
}];

/***/ }),

/***/ 36953:
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [{
  title: true,
  name: 'CLAIM ADMIN'
}, {
  name: 'Add New Client Claim',
  url: '/Claims/NewClaims',
  icon: 'icon-cursor'
}, {
  name: 'Amend Claim',
  url: 'Claims/AmendClaim',
  icon: 'icon-cursor'
}, {
  name: 'Continue with Group',
  url: 'Claims/ContinueWithGroup',
  icon: 'icon-cursor'
}, {
  name: 'Submit To Supervisor',
  url: 'Claims/SubmitToSupervisor',
  icon: 'icon-cursor'
}, {
  title: true,
  name: 'CLAIMS LISTING ADMIN'
}, {
  name: 'Awaiting Approval',
  url: 'Claims/Authorise',
  icon: 'icon-cursor'
}, {
  name: 'Claims - Rejected',
  url: '/claims/claimListings',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '4'
    }
  }
}, {
  name: 'Claims - Re-work',
  url: '/claims/claimListings',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '3'
    }
  }
}, {
  title: true,
  name: 'SAP CLAIMS LISTING ADMIN'
}, {
  name: 'Claims - Ready for Payment',
  url: '/claims/readyforpayment',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '9'
    }
  }
}, {
  name: 'Claims - Finalised',
  url: '/claims/finalisedClaims',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '8'
    }
  }
}, {
  title: true,
  name: 'Registration'
}, {
  name: 'Clients',
  url: '/registration/client',
  icon: 'icon-drop'
}, {
  name: 'Vehicles',
  url: '/registration/vehicles',
  icon: 'icon-pencil'
}, {
  name: 'Owners',
  url: '/registration/Owners',
  icon: 'icon-pencil'
}, {
  title: true,
  name: 'REPORT ADMIN'
}, {
  name: 'DIPS Reports',
  url: '/Reports/ReportViewerDashboard',
  icon: 'icon-star'
}, {
  title: true,
  name: 'SYSTEM ADMIN'
}, {
  name: 'Manage users',
  url: '/usermanager/UserDashboard',
  icon: 'icon-star'
}, {
  name: 'Manage Client Types',
  url: '/Lookups/LookupClientType',
  icon: 'icon-star'
}, {
  name: 'Manage Rank Types',
  url: 'Lookups/RankTypes',
  icon: 'icon-star'
}, {
  name: 'Manage Title Types',
  url: 'Lookups/TitleTypes',
  icon: 'icon-star'
}, {
  name: 'Manage Nationalities',
  url: 'Lookups/Nationality',
  icon: 'icon-star'
}, {
  name: 'Manage Refund Rates',
  url: 'Lookups/RefundRates',
  icon: 'icon-star'
}];

/***/ }),

/***/ 86296:
/*!***********************************!*\
  !*** ./src/app/_supervisorNav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supervisorNavItems": () => (/* binding */ supervisorNavItems)
/* harmony export */ });
const supervisorNavItems = [{
  title: true,
  name: 'CLAIMS LISTING ADMIN'
}, {
  name: 'Awaiting Approval',
  url: 'Claims/Authorise',
  icon: 'icon-cursor'
}, {
  name: 'Claims - Rejected',
  url: '/claims/claimListings',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '4'
    }
  }
}, {
  name: 'Claims - Re-work',
  url: '/claims/claimListings',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '3'
    }
  }
}, {
  name: 'Claims - Ready for Payment',
  url: '/claims/readyforpayment',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '9'
    }
  }
}, {
  name: 'Claims - Finalised',
  url: '/claims/finalisedClaims',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '8'
    }
  }
},
//{
//  title: true,
//  name: 'Registration'
//},
//{
//  name: 'Clients',
//  url: '/registration/client',
//  icon: 'icon-drop'
//},
//{
//  name: 'Vehicles',
//  url: '/registration/vehicles',
//  icon: 'icon-pencil'
//},
//{
//  name: 'Owners',
//  url: '/registration/Owners',
//  icon: 'icon-pencil'
//},
{
  title: true,
  name: 'REPORT ADMIN'
}, {
  name: 'DIPS Reports',
  url: '/Reports/ReportViewerDashboard',
  icon: 'icon-star'
}, {
  title: true,
  name: 'USER ADMIN'
}, {
  name: 'Manage users',
  url: '/usermanager/UserDashboard',
  icon: 'icon-star'
}, {
  name: 'Manage Refund Rates',
  url: 'Lookups/RefundRates',
  icon: 'icon-star'
}];

/***/ }),

/***/ 22649:
/*!*******************************!*\
  !*** ./src/app/_viewerNav.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewerItems": () => (/* binding */ viewerItems)
/* harmony export */ });
const viewerItems = [{
  title: true,
  name: 'CLAIMS LISTING ADMIN'
}, {
  name: 'Claims - Ready for Payment',
  url: '/claims/readyforpayment',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '9'
    }
  }
}, {
  name: 'Claims - Finalised',
  url: '/claims/finalisedClaims',
  icon: 'icon-puzzle',
  linkProps: {
    queryParams: {
      'statusId': '8'
    }
  }
}, {
  title: true,
  name: 'REPORT ADMIN'
}, {
  name: 'DIPS Reports',
  url: '/Reports/ReportViewerDashboard',
  icon: 'icon-star'
}];

/***/ }),

/***/ 51772:
/*!*******************************************************!*\
  !*** ./src/app/api.services/DipRefundRate.Service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DipRefundRateService": () => (/* binding */ DipRefundRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let DipRefundRateService = class DipRefundRateService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  SelectAllRefundRates() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipRefundRate/SelectAllRefundRates';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectRefundRateById(id, invDate) {
    //console.log("id :" + id + "invoiceDate" + invDate);
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipRefundRate/SelectRefundRateById?invDate=' + invDate + '&refundRateId=' + id + "&nothing=";
    // console.log("id :" + id + "invoiceDate second" + invDate);
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
DipRefundRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], DipRefundRateService);


/***/ }),

/***/ 70791:
/*!***********************************************!*\
  !*** ./src/app/api.services/claim.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimService": () => (/* binding */ ClaimService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let ClaimService = class ClaimService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  SelectClaimAllClaims() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectClaimAllClaims';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectClaimByStatusID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectClaimByStatusID?statusId=' + id;
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetAllFinalisedClaims() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/GetAllFinalisedClaims';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectApprovedClaimByStatusID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectApprovedClaimByStatusID?statusId=' + id;
    return this.httpclient.get(path, {
      withCredentials: true
    });
    //return of(data).pipe(delay(2500));
  }

  SelectApprovedClaimInvoicesByClientID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectApprovedClaimInvoicesByClientID?clientId=' + id;
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectClaimForSuperVisor() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectClaimForSuperVisor';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectClaimThatAreOnBookeeping() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectClaimThatAreOnBookeeping';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectGroupToContinue() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectGroupToContinue';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectClaimForDataCaptures() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectClaimForDataCaptures';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetClaimTotalLiters(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/GetClaimTotalLiters?groupId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectGroupInfoById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectGroupInfoById?groupId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectClaimInfoById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SelectClaimInfoById?ClaimId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SaveInvoice(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SaveInvoice';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  UpdateClaim(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/UpdateClaim';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  SendGroupToSupervisor(id) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SendGroupToSupervisor?groupId=';
    return this.httpclient.post(path + id, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  SendAllToSupervisor(id) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SendAllToSupervisor';
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  UpdateClaimStatuses(claimId, statusId, ClaimStatusReason) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/UpdateClaimStatuses?claimId=' + claimId + '&statusId=' + statusId + '&ClaimStatusReason=' + ClaimStatusReason;
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  ApproveClaimStatuses(claimId, statusId, ClaimStatusReason, guid) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/UpdateClaimStatuses?claimId=' + claimId + '&statusId=' + statusId + '&ClaimStatusReason=' + ClaimStatusReason + '&guid=' + guid;
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  SendEmails(statusId, ClaimStatusReason) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/SendEmails?statusId=' + statusId + '&ClaimStatusReason=' + ClaimStatusReason + '&guid=';
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  FinaliseClaim(clientId, chequeNumber, billingReferenceNo) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/FinaliseClaim?clientId=' + clientId + '&chequeNumber=' + chequeNumber + '&billingReferenceNo=' + billingReferenceNo;
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  DeleteClaim(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/DeleteClaim?claimId=' + id;
    const headers = {
      'content-type': 'application/json'
    };
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  DeleteClaimById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'DipClaim/DeleteClaimInfoById?claimId=' + id;
    const headers = {
      'content-type': 'application/json'
    };
    return this.httpclient.post(path, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
ClaimService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ClaimService);


/***/ }),

/***/ 26393:
/*!************************************************!*\
  !*** ./src/app/api.services/client.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let ClientService = class ClientService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  GetAllClient() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Client/GetAllClient';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetClientByID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Client/GetClientById?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SaveOrUpdateClient(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Client/SaveOrUpdateClient';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
ClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ClientService);


/***/ }),

/***/ 20298:
/*!****************************************************!*\
  !*** ./src/app/api.services/fileUpload.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
let FileUploadService = class FileUploadService {
  constructor(http) {
    this.http = http;
  }
  GetDocumentByClient(clientId, vehicleId, ownerId, claimId) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'FileUpload/GetDocumentByClient?clientId=' + clientId + '&vehicleId=' + vehicleId + '&OwnerID=' + ownerId + '&ClaimId=' + claimId;
    return this.http.get(path, {
      withCredentials: true
    });
  }
  GetFiles(objectId) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'FileUpload/GetFiles?objectId=' + objectId;
    return this.http.get(path, {
      withCredentials: true
    });
  }
  uploadFile(theFile) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'FileUpload/Post';
    return this.http.post(path, theFile, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
FileUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], FileUploadService);


/***/ }),

/***/ 10503:
/*!*************************************************!*\
  !*** ./src/app/api.services/invoice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceService": () => (/* binding */ InvoiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let InvoiceService = class InvoiceService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  SelectInvoiceByClaimId(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Invoice/SelectInvoiceByClaimId?claimId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectInvoiceInfoById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Invoice/SelectInvoiceInfoById?InvoiceId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  ValidateInvoice(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Invoice/ValidateInvoice';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  DeleteInvoice(id) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Invoice/DeleteInvoice?invoiceId=';
    return this.httpclient.post(path + id, null, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
InvoiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], InvoiceService);


/***/ }),

/***/ 50390:
/*!************************************************!*\
  !*** ./src/app/api.services/lookup.Service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookupService": () => (/* binding */ lookupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let lookupService = class lookupService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  GetClientType() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetClientType';
    console.log(this.httpclient.get(path, {
      withCredentials: true
    }));
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetAllClientType() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetAllClientType';
    console.log(this.httpclient.get(path, {
      withCredentials: true
    }));
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetClientTypeByID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetClientTypeByID?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  UpdateClientType(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/UpdateClientType';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  GetClientTitleType() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetClientTitleType';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetClientNatinality() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetClientNatinality';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetRank() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetRank';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectAllOwnersRank() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectAllOwnersRank';
    console.log(this.httpclient.get(path, {
      withCredentials: true
    }));
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetRankByID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/GetRankByID?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  InsertOrUpdateRank(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/InsertOrUpdateRank';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  SelectAllTitles() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectAllTitles';
    console.log(this.httpclient.get(path, {
      withCredentials: true
    }));
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectTitleByID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectTitleByID?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  InsertOrUpdateTitle(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/InsertOrUpdateTitle';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  /********************Nationality********************* */
  SelectNationalityAllTypes() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectNationalityAllTypes';
    console.log(this.httpclient.get(path, {
      withCredentials: true
    }));
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectNationalityInfoById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectNationalityInfoById?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  InsertOrUpdateNationality(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/InsertOrUpdateNationality';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  /********************Refund Rates********************* */
  SelectAllRefundRates() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectAllRefundRates';
    console.log(this.httpclient.get(path, {
      withCredentials: true
    }));
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectRefundRateById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectRefundRateById?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectRefundRateByfuelId(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/SelectRefundRateByfuelId?refundRateId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  UpdateRefundRates(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Lookups/UpdateRefundRates';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
lookupService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], lookupService);


/***/ }),

/***/ 8388:
/*!***********************************************!*\
  !*** ./src/app/api.services/owner.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnerService": () => (/* binding */ OwnerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let OwnerService = class OwnerService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  SelectOwnerById(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Owner/SelectOwnerById?ownerId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectOwnerByClientId(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Owner/SelectOwnerByClientId?clientId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  GetAllOwners() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Owner/GetAllOwners';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  SelectOwnersNotLinkedToVehicle() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Owner/SelectOwnersNotLinkedToVehicle';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  InsertOwner(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Owner/InsertOwner';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  UpdateOwner(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Owner/UpdateOwner';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
OwnerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], OwnerService);


/***/ }),

/***/ 47333:
/*!**********************************************!*\
  !*** ./src/app/api.services/user.manager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManager": () => (/* binding */ UserManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let UserManager = class UserManager {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  AuthenticateUser() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'User/AuthenticateUser';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetAllUsers() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'User/GetAllUser';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetUserRoles() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'User/GetUserRoles';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetHttpUserBySID(sid) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'User/GetHttpUserBySID?sid=';
    return this.httpclient.get(path + sid, {
      withCredentials: true
    });
  }
  Save(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'User/Save';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
UserManager = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], UserManager);


/***/ }),

/***/ 55433:
/*!*************************************************!*\
  !*** ./src/app/api.services/vehicle.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleService": () => (/* binding */ VehicleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let VehicleService = class VehicleService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    this._headers.append('Content-Type', 'x-www-form-urlencoded');
  }
  GetAllVehicles() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/GetClientVehicles';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetAllVehiclesByClients() {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/GetAllClientVehicles';
    return this.httpclient.get(path, {
      withCredentials: true
    });
  }
  GetVehicleByID(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/GetVehicleById?id=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectVehicleByClientId(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/GetVehicleByClientId?clientId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  SelectVehicleByOwnerId(id) {
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/SelectVehicleByOwnerId?ownerId=';
    return this.httpclient.get(path + id, {
      withCredentials: true
    });
  }
  InsertIntoVehicle(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/InsertIntoVehicle';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  UpdateVehicle(body) {
    const headers = {
      'content-type': 'application/json'
    };
    const path = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + 'Vehicles/UpdateVehicle';
    return this.httpclient.post(path, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
VehicleService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], VehicleService);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);



let AppComponent = class AppComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_ssrs_reportviewer__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ngx-ssrs-reportviewer */ 98320);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/404.component */ 26943);
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/error/500.component */ 98743);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/register/register.component */ 60193);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 83401);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/legacy-list */ 60744);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 26523);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 36615);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @coreui/angular */ 58988);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var _views_forms_registration_clientdashboard_clientdashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/forms/registration/clientdashboard/clientdashboard.component */ 59471);
/* harmony import */ var _views_forms_registration_client_editor_client_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/forms/registration/client-editor/client-editor.component */ 65686);
/* harmony import */ var _views_forms_usermanager_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/forms/usermanager/user-dashboard/user-dashboard.component */ 79394);
/* harmony import */ var _views_forms_usermanager_user_editor_user_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/forms/usermanager/user-editor/user-editor.component */ 23661);
/* harmony import */ var _views_forms_registration_vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/forms/registration/vehicle-dashboard/vehicle-dashboard.component */ 53327);
/* harmony import */ var _views_forms_registration_vehicle_editor_vehicle_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/forms/registration/vehicle-editor/vehicle-editor.component */ 37754);
/* harmony import */ var _views_forms_registration_owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/forms/registration/owner-dashboard/owner-dashboard.component */ 97234);
/* harmony import */ var _views_forms_registration_owner_editor_owner_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/forms/registration/owner-editor/owner-editor.component */ 9902);
/* harmony import */ var _views_forms_registration_client_information_client_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/forms/registration/client-information/client-information.component */ 59956);
/* harmony import */ var _views_forms_registration_client_address_client_address_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/forms/registration/client-address/client-address.component */ 12671);
/* harmony import */ var _views_forms_registration_client_contacts_client_contacts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/forms/registration/client-contacts/client-contacts.component */ 61912);
/* harmony import */ var _views_forms_registration_client_bank_details_client_bank_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/forms/registration/client-bank-details/client-bank-details.component */ 98935);
/* harmony import */ var _views_forms_registration_client_vehicles_client_vehicles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/forms/registration/client-vehicles/client-vehicles.component */ 72146);
/* harmony import */ var _views_forms_Claims_new_claims_new_claims_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/forms/Claims/new-claims/new-claims.component */ 24435);
/* harmony import */ var _views_forms_Claims_new_claims_editor_new_claims_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/forms/Claims/new-claims-editor/new-claims-editor.component */ 61302);
/* harmony import */ var _views_forms_Claims_amend_claim_dashboard_amend_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component */ 82185);
/* harmony import */ var _views_forms_Claims_submit_to_supervisor_dashboard_submit_to_supervisor_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component */ 94144);
/* harmony import */ var _views_forms_Claims_supervisor_editor_supervisor_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/forms/Claims/supervisor-editor/supervisor-editor.component */ 79058);
/* harmony import */ var _views_forms_Claims_authorise_dashboard_authorise_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/forms/Claims/authorise-dashboard/authorise-dashboard.component */ 39388);
/* harmony import */ var _views_forms_Claims_book_keeping_book_keeping_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/forms/Claims/book-keeping/book-keeping.component */ 42088);
/* harmony import */ var _views_forms_Claims_continue_with_the_group_continue_with_the_group_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/forms/Claims/continue-with-the-group/continue-with-the-group.component */ 26446);
/* harmony import */ var _views_forms_Claims_claim_listing_dashboard_claim_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component */ 19911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _views_forms_registration_owners_not_linked_owners_not_linked_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/forms/registration/owners-not-linked/owners-not-linked.component */ 51495);
/* harmony import */ var _views_forms_Reports_report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/forms/Reports/report-viewer/report-viewer.component */ 7216);
/* harmony import */ var _views_forms_Reports_report_viewer_dashboard_report_viewer_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component */ 35677);
/* harmony import */ var _views_forms_Lookups_rank_types_rank_types_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./views/forms/Lookups/rank-types/rank-types.component */ 25802);
/* harmony import */ var _views_forms_Lookups_client_type_client_type_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./views/forms/Lookups/client-type/client-type.component */ 89880);
/* harmony import */ var _views_forms_Lookups_title_types_title_types_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./views/forms/Lookups/title-types/title-types.component */ 67866);
/* harmony import */ var _views_forms_Lookups_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./views/forms/Lookups/nationality/nationality.component */ 21844);
/* harmony import */ var _views_forms_Lookups_refund_rates_refund_rates_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./views/forms/Lookups/refund-rates/refund-rates.component */ 46407);
/* harmony import */ var _views_forms_Files_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./views/forms/Files/file-upload/file-upload.component */ 70992);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _views_forms_date_mask_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./views/forms/date-mask.directive */ 79291);
/* harmony import */ var _views_forms_Claims_ready_for_payment_ready_for_payment_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./views/forms/Claims/ready-for-payment/ready-for-payment.component */ 76697);
/* harmony import */ var _views_forms_Claims_finalised_claims_finalised_claims_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./views/forms/Claims/finalised-claims/finalised-claims.component */ 57753);
/* harmony import */ var _views_forms_Claims_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./views/forms/Claims/spinner/spinner.component */ 83762);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _views_forms_Claims_search_vehicle_search_vehicle_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./views/forms/Claims/search-vehicle/search-vehicle.component */ 16637);








const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true
};

// Import containers





// Gridview







//Form Modules





//import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';






const APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutComponent];

// Import routing module

// Import 3rd party components


// Form pages








































let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_47__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_48__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_49__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_50__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_52__.BrowserAnimationsModule, _app_routing__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_53__.AppAsideModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_53__.AppBreadcrumbModule.forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_53__.AppFooterModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_53__.AppHeaderModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_53__.AppSidebarModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_54__.PerfectScrollbarModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__.BsDropdownModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabsModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_55__.HttpClientModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_56__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_57__.MatLegacyPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_58__.MatDialogModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_59__.NgbModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_60__.MatLegacyListModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_61__.MatLegacyAutocompleteModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_62__.MatLegacyInputModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_63__.MatLegacyFormFieldModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__.ButtonsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_50__.ReactiveFormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__.MatRadioModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_65__.MatLegacyCheckboxModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_66__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_67__.MatIconModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__.CdkAccordionModule,
  // DecimalPipe
  _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_69__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_70__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_70__.MatRippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_71__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__.routes, {
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  }), ngx_ssrs_reportviewer__WEBPACK_IMPORTED_MODULE_72__.ReportViewerModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__.MatTabsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_74__.MatProgressSpinnerModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_61__.MatLegacyAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_50__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_49__.AsyncPipe, _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__.MatRadioModule],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_71__.RouterModule, _views_forms_date_mask_directive__WEBPACK_IMPORTED_MODULE_42__.DateMaskDirective],
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, ...APP_CONTAINERS, _views_error_404_component__WEBPACK_IMPORTED_MODULE_2__.P404Component, _views_error_500_component__WEBPACK_IMPORTED_MODULE_3__.P500Component, _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _views_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent, _views_forms_registration_clientdashboard_clientdashboard_component__WEBPACK_IMPORTED_MODULE_11__.ClientdashboardComponent, _views_forms_registration_client_editor_client_editor_component__WEBPACK_IMPORTED_MODULE_12__.ClientEditorComponent, _views_forms_usermanager_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_13__.UserDashboardComponent, _views_forms_usermanager_user_editor_user_editor_component__WEBPACK_IMPORTED_MODULE_14__.UserEditorComponent, _views_forms_registration_vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.VehicleDashboardComponent, _views_forms_registration_vehicle_editor_vehicle_editor_component__WEBPACK_IMPORTED_MODULE_16__.VehicleEditorComponent, _views_forms_registration_owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_17__.OwnerDashboardComponent, _views_forms_registration_owner_editor_owner_editor_component__WEBPACK_IMPORTED_MODULE_18__.OwnerEditorComponent, _views_forms_registration_client_information_client_information_component__WEBPACK_IMPORTED_MODULE_19__.ClientInformationComponent, _views_forms_registration_client_address_client_address_component__WEBPACK_IMPORTED_MODULE_20__.ClientAddressComponent, _views_forms_registration_client_contacts_client_contacts_component__WEBPACK_IMPORTED_MODULE_21__.ClientContactsComponent, _views_forms_registration_client_bank_details_client_bank_details_component__WEBPACK_IMPORTED_MODULE_22__.ClientBankDetailsComponent, _views_forms_registration_client_vehicles_client_vehicles_component__WEBPACK_IMPORTED_MODULE_23__.ClientVehiclesComponent, _views_forms_Claims_new_claims_new_claims_component__WEBPACK_IMPORTED_MODULE_24__.NewClaimsComponent, _views_forms_Claims_new_claims_editor_new_claims_editor_component__WEBPACK_IMPORTED_MODULE_25__.NewClaimsEditorComponent, _views_forms_Claims_amend_claim_dashboard_amend_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_26__.AmendClaimDashboardComponent, _views_forms_Claims_submit_to_supervisor_dashboard_submit_to_supervisor_dashboard_component__WEBPACK_IMPORTED_MODULE_27__.SubmitToSupervisorDashboardComponent, _views_forms_Claims_supervisor_editor_supervisor_editor_component__WEBPACK_IMPORTED_MODULE_28__.SupervisorEditorComponent, _views_forms_Claims_authorise_dashboard_authorise_dashboard_component__WEBPACK_IMPORTED_MODULE_29__.AuthoriseDashboardComponent, _views_forms_Claims_book_keeping_book_keeping_component__WEBPACK_IMPORTED_MODULE_30__.BookKeepingComponent, _views_forms_Claims_continue_with_the_group_continue_with_the_group_component__WEBPACK_IMPORTED_MODULE_31__.ContinueWithTheGroupComponent, _views_forms_Claims_claim_listing_dashboard_claim_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_32__.ClaimListingDashboardComponent, _views_forms_registration_owners_not_linked_owners_not_linked_component__WEBPACK_IMPORTED_MODULE_33__.OwnersNotLinkedComponent, _views_forms_Reports_report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_34__.ReportViewerComponent, _views_forms_Reports_report_viewer_dashboard_report_viewer_dashboard_component__WEBPACK_IMPORTED_MODULE_35__.ReportViewerDashboardComponent, _views_forms_Lookups_rank_types_rank_types_component__WEBPACK_IMPORTED_MODULE_36__.RankTypesComponent, _views_forms_Lookups_client_type_client_type_component__WEBPACK_IMPORTED_MODULE_37__.ClientTypeComponent, _views_forms_Lookups_title_types_title_types_component__WEBPACK_IMPORTED_MODULE_38__.TitleTypesComponent, _views_forms_Lookups_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_39__.NationalityComponent, _views_forms_Lookups_refund_rates_refund_rates_component__WEBPACK_IMPORTED_MODULE_40__.RefundRatesComponent, _views_forms_Files_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_41__.FileUploadComponent, _views_forms_date_mask_directive__WEBPACK_IMPORTED_MODULE_42__.DateMaskDirective, _views_forms_Claims_ready_for_payment_ready_for_payment_component__WEBPACK_IMPORTED_MODULE_43__.ReadyForPaymentComponent, _views_forms_Claims_finalised_claims_finalised_claims_component__WEBPACK_IMPORTED_MODULE_44__.FinalisedClaimsComponent, _views_forms_Claims_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_45__.SpinnerComponent, _views_forms_Claims_search_vehicle_search_vehicle_component__WEBPACK_IMPORTED_MODULE_46__.SearchVehicleComponent
  //NgbdModalComponent,    
  //NgbdModalContentD,
  ],

  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_49__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_49__.HashLocationStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_48__.CUSTOM_ELEMENTS_SCHEMA]
})], AppModule);


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/error/404.component */ 26943);
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/500.component */ 98743);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/register/register.component */ 60193);
/* harmony import */ var _views_forms_registration_clientdashboard_clientdashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/forms/registration/clientdashboard/clientdashboard.component */ 59471);
/* harmony import */ var _views_forms_usermanager_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/forms/usermanager/user-dashboard/user-dashboard.component */ 79394);
/* harmony import */ var _views_forms_registration_vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/forms/registration/vehicle-dashboard/vehicle-dashboard.component */ 53327);
/* harmony import */ var _views_forms_registration_client_vehicles_client_vehicles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/forms/registration/client-vehicles/client-vehicles.component */ 72146);
/* harmony import */ var _views_forms_registration_owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/forms/registration/owner-dashboard/owner-dashboard.component */ 97234);
/* harmony import */ var _views_forms_Claims_new_claims_new_claims_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/forms/Claims/new-claims/new-claims.component */ 24435);
/* harmony import */ var _views_forms_Claims_new_claims_editor_new_claims_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/forms/Claims/new-claims-editor/new-claims-editor.component */ 61302);
/* harmony import */ var _views_forms_Claims_amend_claim_dashboard_amend_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component */ 82185);
/* harmony import */ var _views_forms_Claims_submit_to_supervisor_dashboard_submit_to_supervisor_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component */ 94144);
/* harmony import */ var _views_forms_Claims_authorise_dashboard_authorise_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/forms/Claims/authorise-dashboard/authorise-dashboard.component */ 39388);
/* harmony import */ var _views_forms_Claims_book_keeping_book_keeping_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/forms/Claims/book-keeping/book-keeping.component */ 42088);
/* harmony import */ var _views_forms_Claims_continue_with_the_group_continue_with_the_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/forms/Claims/continue-with-the-group/continue-with-the-group.component */ 26446);
/* harmony import */ var _views_forms_Claims_claim_listing_dashboard_claim_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component */ 19911);
/* harmony import */ var _views_forms_registration_owners_not_linked_owners_not_linked_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/forms/registration/owners-not-linked/owners-not-linked.component */ 51495);
/* harmony import */ var _views_forms_Reports_report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/forms/Reports/report-viewer/report-viewer.component */ 7216);
/* harmony import */ var _views_forms_Reports_report_viewer_dashboard_report_viewer_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component */ 35677);
/* harmony import */ var _views_forms_Lookups_client_type_client_type_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/forms/Lookups/client-type/client-type.component */ 89880);
/* harmony import */ var _views_forms_Lookups_rank_types_rank_types_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/forms/Lookups/rank-types/rank-types.component */ 25802);
/* harmony import */ var _views_forms_Lookups_title_types_title_types_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/forms/Lookups/title-types/title-types.component */ 67866);
/* harmony import */ var _views_forms_Lookups_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/forms/Lookups/nationality/nationality.component */ 21844);
/* harmony import */ var _views_forms_Lookups_refund_rates_refund_rates_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/forms/Lookups/refund-rates/refund-rates.component */ 46407);
/* harmony import */ var _views_forms_Files_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/forms/Files/file-upload/file-upload.component */ 70992);
/* harmony import */ var _views_forms_Claims_ready_for_payment_ready_for_payment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/forms/Claims/ready-for-payment/ready-for-payment.component */ 76697);
/* harmony import */ var _views_forms_Claims_finalised_claims_finalised_claims_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/forms/Claims/finalised-claims/finalised-claims.component */ 57753);
/* harmony import */ var _views_forms_Claims_search_vehicle_search_vehicle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/forms/Claims/search-vehicle/search-vehicle.component */ 16637);



// Import Containers





//Form component

























const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '404',
  component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_1__.P404Component,
  data: {
    title: 'Page 404'
  }
}, {
  path: '500',
  component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_2__.P500Component,
  data: {
    title: 'Page 500'
  }
}, {
  path: 'login',
  component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
  data: {
    title: 'Login Page'
  }
}, {
  path: 'register',
  component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
  data: {
    title: 'Register Page'
  }
}, {
  path: '',
  component: _containers__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent,
  data: {
    title: 'Home'
  },
  children: [{
    path: 'registration/client',
    component: _views_forms_registration_clientdashboard_clientdashboard_component__WEBPACK_IMPORTED_MODULE_5__.ClientdashboardComponent,
    data: {
      title: 'Client Dashboard'
    }
  }, {
    path: 'registration/clientVehicles/:clientId',
    component: _views_forms_registration_vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.VehicleDashboardComponent,
    data: {
      title: 'Vehicle Dashboard'
    }
  }, {
    path: 'registration/vehicles',
    component: _views_forms_registration_client_vehicles_client_vehicles_component__WEBPACK_IMPORTED_MODULE_8__.ClientVehiclesComponent,
    data: {
      title: 'Vehicle Dashboard'
    }
  }, {
    path: 'registration/Owners',
    component: _views_forms_registration_owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.OwnerDashboardComponent,
    data: {
      title: 'Owners Dashboard'
    }
  }, {
    path: 'registration/OwnersNotLinked',
    component: _views_forms_registration_owners_not_linked_owners_not_linked_component__WEBPACK_IMPORTED_MODULE_18__.OwnersNotLinkedComponent,
    data: {
      title: 'Owners Not Linked Dashboard'
    }
  }, {
    path: 'claims/readyforpayment',
    component: _views_forms_Claims_ready_for_payment_ready_for_payment_component__WEBPACK_IMPORTED_MODULE_27__.ReadyForPaymentComponent,
    data: {
      title: 'Claims Ready For Payment Dashboard'
    }
  }, {
    path: 'claims/searchVehicle',
    component: _views_forms_Claims_search_vehicle_search_vehicle_component__WEBPACK_IMPORTED_MODULE_29__.SearchVehicleComponent,
    data: {
      title: 'Search Vehicles'
    }
  }, {
    path: 'claims/claimListings',
    component: _views_forms_Claims_claim_listing_dashboard_claim_listing_dashboard_component__WEBPACK_IMPORTED_MODULE_17__.ClaimListingDashboardComponent,
    data: {
      title: 'Claim Listing Dashboard'
    },
    runGuardsAndResolvers: 'paramsChange'
  }, {
    path: 'claims/finalisedClaims',
    component: _views_forms_Claims_finalised_claims_finalised_claims_component__WEBPACK_IMPORTED_MODULE_28__.FinalisedClaimsComponent,
    data: {
      title: 'Finalised Claims Dashboard'
    },
    runGuardsAndResolvers: 'paramsChange'
  }, {
    path: 'Claims/NewClaims',
    component: _views_forms_Claims_new_claims_new_claims_component__WEBPACK_IMPORTED_MODULE_10__.NewClaimsComponent,
    data: {
      title: 'Register Claims Dashboard'
    }
  }, {
    path: 'Claims/ClaimsEditor',
    component: _views_forms_Claims_new_claims_editor_new_claims_editor_component__WEBPACK_IMPORTED_MODULE_11__.NewClaimsEditorComponent,
    data: {
      title: 'Register Claims'
    }
  }, {
    path: 'Claims/AmendClaim',
    component: _views_forms_Claims_amend_claim_dashboard_amend_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_12__.AmendClaimDashboardComponent,
    data: {
      title: 'Amend Claims'
    }
  }, {
    path: 'Claims/ContinueWithGroup',
    component: _views_forms_Claims_continue_with_the_group_continue_with_the_group_component__WEBPACK_IMPORTED_MODULE_16__.ContinueWithTheGroupComponent,
    data: {
      title: 'Continue with Group'
    }
  }, {
    path: 'Claims/SubmitToSupervisor',
    component: _views_forms_Claims_submit_to_supervisor_dashboard_submit_to_supervisor_dashboard_component__WEBPACK_IMPORTED_MODULE_13__.SubmitToSupervisorDashboardComponent,
    data: {
      title: 'Submit To Supervisor'
    }
  }, {
    path: 'Claims/Authorise',
    component: _views_forms_Claims_authorise_dashboard_authorise_dashboard_component__WEBPACK_IMPORTED_MODULE_14__.AuthoriseDashboardComponent,
    data: {
      title: 'Authorise Claims'
    }
  }, {
    path: 'Claims/bookkeeping',
    component: _views_forms_Claims_book_keeping_book_keeping_component__WEBPACK_IMPORTED_MODULE_15__.BookKeepingComponent,
    data: {
      title: 'Bookkeeping'
    }
  }, {
    path: 'Reports/ReportViewer',
    component: _views_forms_Reports_report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_19__.ReportViewerComponent,
    data: {
      title: 'Reports Viewer'
    }
  }, {
    path: 'Reports/ReportViewerDashboard',
    component: _views_forms_Reports_report_viewer_dashboard_report_viewer_dashboard_component__WEBPACK_IMPORTED_MODULE_20__.ReportViewerDashboardComponent,
    data: {
      title: 'Reports Dashboard'
    }
  }, {
    path: 'Files/FileUpload',
    component: _views_forms_Files_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_26__.FileUploadComponent,
    data: {
      title: 'File Uploadwer'
    }
  }, {
    path: 'usermanager/UserDashboard',
    component: _views_forms_usermanager_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.UserDashboardComponent,
    data: {
      title: 'Manage Users'
    }
  }, {
    path: 'Lookups/LookupClientType',
    component: _views_forms_Lookups_client_type_client_type_component__WEBPACK_IMPORTED_MODULE_21__.ClientTypeComponent,
    data: {
      title: 'Manage Client Types'
    }
  }, {
    path: 'Lookups/RankTypes',
    component: _views_forms_Lookups_rank_types_rank_types_component__WEBPACK_IMPORTED_MODULE_22__.RankTypesComponent,
    data: {
      title: 'Manage Rank Types'
    }
  }, {
    path: 'Lookups/TitleTypes',
    component: _views_forms_Lookups_title_types_title_types_component__WEBPACK_IMPORTED_MODULE_23__.TitleTypesComponent,
    data: {
      title: 'Manage Title Types'
    }
  }, {
    path: 'Lookups/Nationality',
    component: _views_forms_Lookups_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_24__.NationalityComponent,
    data: {
      title: 'Manage Nationality'
    }
  }, {
    path: 'Lookups/RefundRates',
    component: _views_forms_Lookups_refund_rates_refund_rates_component__WEBPACK_IMPORTED_MODULE_25__.RefundRatesComponent,
    data: {
      title: 'Manage Refund Rates'
    }
  }, {
    path: 'base',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_base_base_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/base.module */ 5433)).then(m => m.BaseModule)
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 54727)).then(m => m.DashboardModule)
  }, {
    path: 'notifications',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/notifications.module */ 9181)).then(m => m.NotificationsModule)
  }]
}, {
  path: '**',
  component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_1__.P404Component
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_31__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule.forRoot(routes, {})],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 50830:
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _default_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component.html?ngResource */ 8752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_nav */ 36953);
/* harmony import */ var _api_services_user_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.services/user.manager */ 47333);
/* harmony import */ var _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/AuthenticatedUsers */ 78623);
/* harmony import */ var _supervisorNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_supervisorNav */ 86296);
/* harmony import */ var _dataCapturerNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_dataCapturerNav */ 69952);
/* harmony import */ var _viewerNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_viewerNav */ 22649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let DefaultLayoutComponent = class DefaultLayoutComponent {
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(_UserManager, router) {
    this._UserManager = _UserManager;
    this.router = router;
    this.sidebarMinimized = false;
    this.navItems = _nav__WEBPACK_IMPORTED_MODULE_1__.navItems;
    this.version = (__webpack_require__(/*! ../../../../package.json */ 4147).version);
    this.lstUser = new _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedUser();
  }
  ngOnInit() {
    this._UserManager.AuthenticateUser().subscribe(data => {
      this.lstUser = data;
      console.log('this user: ' + data);
      if (data == null) {
        this.ngAccessDenied();
      } else if (!this.lstUser.IsActive) {
        this.ngAccessDenied();
      } else {
        switch (this.lstUser.RoleId) {
          case 1:
            //Administrator
            this.navItems = _nav__WEBPACK_IMPORTED_MODULE_1__.navItems;
            break;
          case 2:
            // SuperVisor
            this.navItems = _supervisorNav__WEBPACK_IMPORTED_MODULE_4__.supervisorNavItems;
            break;
          case 3:
            //Data Capturer
            this.navItems = _dataCapturerNav__WEBPACK_IMPORTED_MODULE_5__.dataCaptureItems;
            break;
          case 4: // Viewer,SAP Payment
          case 6:
            this.navItems = _viewerNav__WEBPACK_IMPORTED_MODULE_6__.viewerItems;
            break;
          case 5:
            // Deny Access
            if (!this.lstUser.IsActive) {
              this.ngAccessDenied();
            }
            break;
          default:
            break;
        }
      }
    });
  }
  ngAccessDenied() {
    this.router.navigate(['register'], {
      queryParams: {
        'userId': 0
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_user_manager__WEBPACK_IMPORTED_MODULE_2__.UserManager
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }];
};
DefaultLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-dashboard',
  template: _default_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], DefaultLayoutComponent);


/***/ }),

/***/ 14639:
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout_component__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ 50830);


/***/ }),

/***/ 52578:
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ 14639);


/***/ }),

/***/ 78623:
/*!*********************************************!*\
  !*** ./src/app/model/AuthenticatedUsers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticatedUser": () => (/* binding */ AuthenticatedUser)
/* harmony export */ });
class AuthenticatedUser {}

/***/ }),

/***/ 58656:
/*!***************************************!*\
  !*** ./src/app/model/FileToUpload.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileQueryString": () => (/* binding */ FileQueryString),
/* harmony export */   "FileToUpload": () => (/* binding */ FileToUpload)
/* harmony export */ });
class FileToUpload {
  constructor() {
    this.FileName = "";
    this.FileSize = 0;
    this.FileType = "";
    this.fileAsBase64 = "";
    //FileAsByteArray : BinaryType;
    this.comment = "";
  }
}
class FileQueryString {}

/***/ }),

/***/ 49742:
/*!********************************!*\
  !*** ./src/app/model/claim.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csClaim": () => (/* binding */ csClaim)
/* harmony export */ });
class csClaim {}

/***/ }),

/***/ 919:
/*!*********************************!*\
  !*** ./src/app/model/client.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csClient": () => (/* binding */ csClient)
/* harmony export */ });
class csClient {}

/***/ }),

/***/ 25148:
/*!**********************************!*\
  !*** ./src/app/model/lookups.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csLookups": () => (/* binding */ csLookups),
/* harmony export */   "csNationality": () => (/* binding */ csNationality),
/* harmony export */   "csRank": () => (/* binding */ csRank),
/* harmony export */   "csTitle": () => (/* binding */ csTitle),
/* harmony export */   "dipRefundRate": () => (/* binding */ dipRefundRate)
/* harmony export */ });
class csLookups {}
class csRank {}
class csTitle {}
class csNationality {}
class dipRefundRate {}

/***/ }),

/***/ 79923:
/*!********************************!*\
  !*** ./src/app/model/owner.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csOwner": () => (/* binding */ csOwner)
/* harmony export */ });
class csOwner {}

/***/ }),

/***/ 13139:
/*!***********************************!*\
  !*** ./src/app/model/vehicles.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csVehicles": () => (/* binding */ csVehicles)
/* harmony export */ });
class csVehicles {}

/***/ }),

/***/ 26943:
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P404Component": () => (/* binding */ P404Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.component.html?ngResource */ 57162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let P404Component = class P404Component {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
P404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  template: _404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], P404Component);


/***/ }),

/***/ 98743:
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P500Component": () => (/* binding */ P500Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./500.component.html?ngResource */ 71682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let P500Component = class P500Component {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
P500Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  template: _500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], P500Component);


/***/ }),

/***/ 82185:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmendClaimDashboardComponent": () => (/* binding */ AmendClaimDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _amend_claim_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amend-claim-dashboard.component.html?ngResource */ 82538);
/* harmony import */ var _amend_claim_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amend-claim-dashboard.component.scss?ngResource */ 21843);
/* harmony import */ var _amend_claim_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amend_claim_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);










let AmendClaimDashboardComponent = class AmendClaimDashboardComponent {
  constructor(_claimService, router) {
    this._claimService = _claimService;
    this.router = router;
    this.listObject = [];
    this.displayedColumns = ['ClientID', 'GroupID', 'ClaimNumber', 'Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel', 'LevyDutyDesiel', 'TOTALDUE', 'StatusDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._claimService.SelectClaimByStatusID(1).subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  goToClaimEditor(clientId, vehicleId, claimId, groupId) {
    this.router.navigate(['/Claims/ClaimsEditor/'], {
      queryParams: {
        'clientId': clientId,
        'vehicleId': vehicleId,
        'claimId': claimId,
        'groupId': groupId
      }
    });
  }
  deleteClaim(claimId) {
    if (confirm("Are you sure  you want to delete the selected claim ?")) {
      this._claimService.DeleteClaim(claimId).subscribe(response => {
        alert(response.body);
        this.bindClaimsGridView();
      }, error => {
        alert(error.message);
      });
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_7__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort]
    }]
  };
};
AmendClaimDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-amend-claim-dashboard',
  template: _amend_claim_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_amend_claim_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AmendClaimDashboardComponent);


/***/ }),

/***/ 39388:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/authorise-dashboard/authorise-dashboard.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoriseDashboardComponent": () => (/* binding */ AuthoriseDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorise_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorise-dashboard.component.html?ngResource */ 19485);
/* harmony import */ var _authorise_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorise-dashboard.component.scss?ngResource */ 64001);
/* harmony import */ var _authorise_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_authorise_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/claim */ 49742);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _api_services_user_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api.services/user.manager */ 47333);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ 99485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);




















let AuthoriseDashboardComponent = class AuthoriseDashboardComponent {
  constructor(_claimService, router, modalService, _UserManager) {
    this._claimService = _claimService;
    this.router = router;
    this.modalService = modalService;
    this._UserManager = _UserManager;
    this.listObject = [];
    this.displayedColumns = ['select', 'ClientID', 'GroupID', 'ClaimNumber', 'Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel', 'LevyDutyDesiel', 'TOTALDUE', 'StatusDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.selectedElement = 0;
    this.selectedClaims = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.checked = [];
  }
  ngOnInit() {
    this.bindClaimsGridView();
    this.ngAuthoriseUser();
  }
  /*********************Check box evens******************************* */
  isAllSelected($event) {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.selectedElement = numSelected;
    return numSelected === numRows;
  }
  masterToggle($event) {
    if ($event.checked) {
      this.onCompleteRow(this.dataSource);
    }
    if (this.isAllSelected($event)) {
      this.selection.clear();
      this.checked = [];
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }
  selectRow($event, dataSource) {
    this.selectedElement = 0;
    if ($event.checked) {
      this.selectedRow = dataSource;
      this.queryString = dataSource;
    }
  }
  onCompleteRow(dataSource) {
    this.checked = [];
    dataSource.data.forEach(element => {
      this.selectedElement += 1;
      // console.log('Claim Id: ' + JSON.stringify(element));
      this.checked.push({
        'checked': element.checked,
        'value': JSON.stringify(element)
      });
    });
  }
  getCheckbox(checkbox) {
    this.checked = [];
    const checked = this.checkBox.filter(checkbox => checkbox.checked);
    checked.forEach(data => {
      this.checked.push({
        'checked': data.checked,
        'value': JSON.stringify(data.value)
      });
    });
  }
  /*********************END Check box evens******************************* */
  ngAuthoriseUser() {
    this._UserManager.AuthenticateUser().subscribe(data => {
      this.lstUser = data;
      switch (this.lstUser.RoleId) {
        case 1:
          //// Administrator
          this.userRole = 1;
          break;
        case 2:
          //SuperVisor
          this.userRole = 2;
          break;
        case 3:
          //Data Capturer
          this.userRole = 3;
          break;
        case 4:
          // Viewer
          this.userRole = 4;
          break;
        case 5:
          // Deny Access
          this.userRole = 5;
          break;
        default:
          break;
      }
    });
  }
  bindClaimsGridView() {
    this._claimService.SelectClaimByStatusID(10).subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableDataSource(null);
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  SendGroupToSupervisor(id) {
    if (confirm("Are you sure  you want to submit group (" + id + " ) to the supervisor?")) {
      this._claimService.SendGroupToSupervisor(id).subscribe(response => {
        alert(response.body);
        this.bindClaimsGridView();
      }, error => {
        alert(error.message);
      });
    }
  }
  /**
   * ******************Open Claim Editor**************
   ****************************************************/
  //Open Modal Popup
  goToClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {
    if (this.selectedElement > 1) {
      alert('Only one selected claim can be view at a time.');
      return;
    } else if (this.selectedElement <= 0) {
      alert('Please select a claim from the gridview.');
      return;
    } else {
      this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
      this.queryString.ClientCessionariID = clientID;
      this.queryString.ClaimVehicleID = vehicleID;
      this.queryString.ClaimID = claimID;
      this.queryString.GroupId = claimGroupID;
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  btnOpenClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.queryString.ClientCessionariID = clientID;
    this.queryString.ClaimVehicleID = vehicleID;
    this.queryString.ClaimID = claimID;
    this.queryString.GroupId = claimGroupID;
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  openReasonBox(content, id) {
    if (this.selectedElement <= 0) {
      alert('Please select a claim from the gridview.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.statusId = id;
    this.statusReason = null;
    if (id == '9') {
      this.authorise();
    } else {
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  closeModal() {
    this.queryString = this.selectedRow;
    this.modalRef.close();
  }
  authorise() {
    var count = 1;
    var tempclient = 0;
    this.checked.forEach(data => {
      if (data != null) {
        // console.log('thats ; ' + JSON.parse(data.value).ClientID)     
        if (tempclient != JSON.parse(data.value).ClientID) {
          tempclient = JSON.parse(data.value).ClientID;
          this.uniquiGuid = (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)();
          //  console.log('guid  :' + this.uniquiGuid + ' -ID :' + JSON.parse(data.value).ClientID )
        }

        this._claimService.ApproveClaimStatuses(JSON.parse(data.value).ClaimID, this.statusId, this.statusReason, this.uniquiGuid).subscribe(response => {
          if (this.checked.length == count) {
            alert(response.body);
            try {
              this.closeModal();
            } catch (e) {}
            this.bindClaimsGridView();
          }
          count++;
        }, error => {
          alert(error.message);
        });
      }
    });
    if (this.statusId != null && this.statusReason != null) {
      this._claimService.SendEmails(this.statusId, this.statusReason);
    }
  }
  printReport(content, reportName, groupId) {
    this._groupId = groupId;
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "groupId": groupId
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  close(content) {
    this.modalRef.close();
  }
  printInvoiceReport(content, reportName, claimId) {
    //if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
    //  alert('This claim cannot be ammended.')
    //  return;
    //}
    this.modalService.dismissAll();
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "claimNo": claimId
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal
  }, {
    type: _api_services_user_manager__WEBPACK_IMPORTED_MODULE_5__.UserManager
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_12__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort]
    }],
    checkBox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren,
      args: ['checkBox']
    }]
  };
};
AuthoriseDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-authorise-dashboard',
  template: _authorise_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    height: '0px',
    minHeight: '0'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    height: '*'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
  standalone: false,
  imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgFor, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule],
  styles: [(_authorise_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AuthoriseDashboardComponent);


/***/ }),

/***/ 42088:
/*!***************************************************************************!*\
  !*** ./src/app/views/forms/Claims/book-keeping/book-keeping.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookKeepingComponent": () => (/* binding */ BookKeepingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _book_keeping_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-keeping.component.html?ngResource */ 13714);
/* harmony import */ var _book_keeping_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-keeping.component.scss?ngResource */ 61045);
/* harmony import */ var _book_keeping_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_book_keeping_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/claim */ 49742);












let BookKeepingComponent = class BookKeepingComponent {
  constructor(_claimService, router, modalService) {
    this._claimService = _claimService;
    this.router = router;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['select', 'ClaimGroupID', 'ClaimNumber', 'ClientAllias', 'ClaimRange', 'ClaimStatus'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.selectedElement = 0;
    this.selectedClaims = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.checked = [];
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  /*********************Check box evens******************************* */
  isAllSelected($event) {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.selectedElement = numSelected;
    return numSelected === numRows;
  }
  masterToggle($event) {
    if ($event.checked) {
      this.onCompleteRow(this.dataSource);
    }
    if (this.isAllSelected($event)) {
      this.selection.clear();
      this.checked = [];
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }
  selectRow($event, dataSource) {
    this.selectedElement = 0;
    if ($event.checked) {
      this.selectedRow = dataSource;
      this.queryString = dataSource;
    }
  }
  onCompleteRow(dataSource) {
    this.checked = [];
    dataSource.data.forEach(element => {
      this.selectedElement += 1;
      console.log('Claim Id: ' + JSON.stringify(element));
      this.checked.push({
        'checked': element.checked,
        'value': JSON.stringify(element)
      });
    });
  }
  getCheckbox(checkbox) {
    this.checked = [];
    const checked = this.checkBox.filter(checkbox => checkbox.checked);
    checked.forEach(data => {
      this.checked.push({
        'checked': data.checked,
        'value': JSON.stringify(data.value)
      });
    });
  }
  /*********************END Check box evens******************************* */
  bindClaimsGridView() {
    this._claimService.SelectClaimThatAreOnBookeeping().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource(null);
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  SendGroupToSupervisor(id) {
    if (confirm("Are you sure  you want to submit group (" + id + " ) to the supervisor?")) {
      this._claimService.SendGroupToSupervisor(id).subscribe(response => {
        alert(response.body);
        this.bindClaimsGridView();
      }, error => {
        alert(error.message);
      });
    }
  }
  /**
   * ******************Open Claim Editor**************
   ****************************************************/
  //Open Modal Popup
  goToClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {
    if (this.selectedElement > 1) {
      alert('Only one selected claim can be view at a time.');
      return;
    } else if (this.selectedElement <= 0) {
      alert('Please select a claim from the gridview.');
      return;
    } else {
      this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
      this.queryString.ClientCessionariID = clientID;
      this.queryString.ClaimVehicleID = vehicleID;
      this.queryString.ClaimID = claimID;
      this.queryString.GroupId = claimGroupID;
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  openReasonBox(content, id) {
    if (this.selectedElement <= 0) {
      alert('Please select a claim from the gridview.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.statusId = id;
    this.statusReason = null;
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {
    this.queryString = this.selectedRow;
    this.modalRef.close();
  }
  authorise() {
    var count = 1;
    this.checked.forEach(data => {
      //console.log('thats ; ' + JSON.parse(data.value).ClaimID)
      this._claimService.UpdateClaimStatuses(JSON.parse(data.value).ClaimID, this.statusId, this.statusReason).subscribe(response => {
        if (this.checked.length == count) {
          alert(response.body);
          this.closeModal();
          this.bindClaimsGridView();
        }
        count++;
      }, error => {
        alert(error.message);
      });
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }],
    checkBox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren,
      args: ['checkBox']
    }]
  };
};
BookKeepingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-book-keeping',
  template: _book_keeping_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_book_keeping_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BookKeepingComponent);


/***/ }),

/***/ 19911:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimListingDashboardComponent": () => (/* binding */ ClaimListingDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _claim_listing_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-listing-dashboard.component.html?ngResource */ 34936);
/* harmony import */ var _claim_listing_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-listing-dashboard.component.scss?ngResource */ 13969);
/* harmony import */ var _claim_listing_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_claim_listing_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/claim */ 49742);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);













let ClaimListingDashboardComponent = class ClaimListingDashboardComponent {
  constructor(_claimService, route, router, modalService) {
    this._claimService = _claimService;
    this.route = route;
    this.router = router;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['ClientID', 'GroupID', 'ClaimNumber', 'Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel', 'LevyDutyDesiel', 'TOTALDUE', 'StatusDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.router.events.subscribe(e => {
      //console.log('Router event:', e);
      this.ClaimStatusId = this.route.snapshot.queryParamMap.get('statusId') || 0;
      if (this.ClaimStatusId > 0) {
        //console.log('this.ClaimStatusId ' + this.ClaimStatusId)
        this.bindClaimsGridView(this.ClaimStatusId);
      }
    });
  }
  bindClaimsGridView(id) {
    this._claimService.SelectClaimByStatusID(id).subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  goToClaimEditor(content, clientId, vehicleId, claimId, groupId) {
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.queryString.ClientCessionariID = clientId;
    this.queryString.ClaimVehicleID = vehicleId;
    this.queryString.ClaimID = claimId;
    this.queryString.GroupId = groupId;
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {
    this.modalRef.close();
  }
  printReport(content, reportName, groupId) {
    this._groupId = groupId;
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "groupId": groupId
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  close(content) {
    this.modalRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort]
    }]
  };
};
ClaimListingDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-claim-listing-dashboard',
  template: _claim_listing_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_claim_listing_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClaimListingDashboardComponent);


/***/ }),

/***/ 26446:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/continue-with-the-group/continue-with-the-group.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinueWithTheGroupComponent": () => (/* binding */ ContinueWithTheGroupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _continue_with_the_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continue-with-the-group.component.html?ngResource */ 63959);
/* harmony import */ var _continue_with_the_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continue-with-the-group.component.scss?ngResource */ 7252);
/* harmony import */ var _continue_with_the_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_continue_with_the_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/claim */ 49742);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);













let ContinueWithTheGroupComponent = class ContinueWithTheGroupComponent {
  constructor(_claimService, router, modalService) {
    this._claimService = _claimService;
    this.router = router;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['ClaimGroupID', 'ClientAllias', 'ClaimNumber', 'ClaimRange', 'GroupStatus', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.selectedElement = 0;
    this.selectedClaims = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._claimService.SelectGroupToContinue().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(null);
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  SendGroupToSupervisor(id) {
    if (confirm("Are you sure  you want to submit group (" + id + " ) to the supervisor?")) {
      this._claimService.SendGroupToSupervisor(id).subscribe(response => {
        alert(response.body);
        this.bindClaimsGridView();
      }, error => {
        alert(error.message);
      });
    }
  }
  /**
   * ******************Open Claim Editor**************
   ****************************************************/
  //Open Modal Popup
  goToClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.queryString.ClientCessionariID = clientID;
    this.queryString.ClaimVehicleID = vehicleID;
    this.queryString.ClaimID = claimID;
    this.queryString.GroupId = claimGroupID;
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  openReasonBox(content, id) {
    if (this.selectedElement <= 0) {
      alert('Please select a claim from the gridview.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.statusId = id;
    this.statusReason = null;
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {
    this.queryString = this.selectedRow;
    this.modalRef.close();
  }
  authorise() {
    this._claimService.UpdateClaimStatuses(this.queryString.ClaimID, this.statusId, this.statusReason).subscribe(response => {
      alert(response.body), this.closeModal();
      this.bindClaimsGridView();
    }, error => {
      alert(error.message);
    });
  }
  printReport(content, reportName, groupId) {
    this._groupId = groupId;
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "groupId": groupId
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  close(content) {
    this.modalRef.close();
  }
  goToSubmitToSuperviser() {
    //this.modalRef.close()
    this.modalService.dismissAll();
    this.router.navigate(['Claims/SubmitToSupervisor/']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort]
    }]
  };
};
ContinueWithTheGroupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-continue-with-the-group',
  template: _continue_with_the_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_continue_with_the_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ContinueWithTheGroupComponent);


/***/ }),

/***/ 57753:
/*!***********************************************************************************!*\
  !*** ./src/app/views/forms/Claims/finalised-claims/finalised-claims.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalisedClaimsComponent": () => (/* binding */ FinalisedClaimsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _finalised_claims_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finalised-claims.component.html?ngResource */ 15811);
/* harmony import */ var _finalised_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finalised-claims.component.scss?ngResource */ 47126);
/* harmony import */ var _finalised_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finalised_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/claim */ 49742);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);













let FinalisedClaimsComponent = class FinalisedClaimsComponent {
  constructor(_claimService, route, router, modalService) {
    this._claimService = _claimService;
    this.route = route;
    this.router = router;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['BillingReferenceNo', 'ClaimNumber', 'ClientName', 'ClaimChequeNumber', 'finalisedDate', 'StatusDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.router.events.subscribe(e => {
      //console.log('Router event:', e);
      this.ClaimStatusId = this.route.snapshot.queryParamMap.get('statusId') || 0;
      if (this.ClaimStatusId > 0) {
        //console.log('this.ClaimStatusId ' + this.ClaimStatusId)
        this.bindClaimsGridView();
      }
    });
  }
  bindClaimsGridView() {
    this._claimService.GetAllFinalisedClaims().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  goToClaimEditor(content, clientId, vehicleId, claimId, groupId) {
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.queryString.ClientCessionariID = clientId;
    this.queryString.ClaimVehicleID = vehicleId;
    this.queryString.ClaimID = claimId;
    this.queryString.GroupId = groupId;
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {
    this.modalRef.close();
  }
  printReport(content, reportName, chequnumber) {
    this.chequnumber = chequnumber;
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "chequnumber": chequnumber
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  close(content) {
    this.modalRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort]
    }]
  };
};
FinalisedClaimsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-finalised-claims',
  template: _finalised_claims_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_finalised_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FinalisedClaimsComponent);


/***/ }),

/***/ 61302:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/new-claims-editor/new-claims-editor.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewClaimsEditorComponent": () => (/* binding */ NewClaimsEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_claims_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-claims-editor.component.html?ngResource */ 78386);
/* harmony import */ var _new_claims_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-claims-editor.component.scss?ngResource */ 56127);
/* harmony import */ var _new_claims_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_new_claims_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _api_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.services/client.service */ 26393);
/* harmony import */ var _api_services_DipRefundRate_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.services/DipRefundRate.Service */ 51772);
/* harmony import */ var _api_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api.services/invoice.service */ 10503);
/* harmony import */ var _api_services_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api.services/owner.service */ 8388);
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api.services/vehicle.service */ 55433);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../model/claim */ 49742);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);
/* harmony import */ var _api_services_fileUpload_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../api.services/fileUpload.service */ 20298);
/* harmony import */ var _api_services_user_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../api.services/user.manager */ 47333);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
































const MAX_SIZE = 1048576 * 5;
let NewClaimsEditorComponent = class NewClaimsEditorComponent {
  constructor(fb, _vehicleService, modalService, route, _clientService, _ownerService, datePipe, _claimService, _invoiceService, _refundRateService, _decimalPipe, router, uploadService, _UserManager) {
    this.fb = fb;
    this._vehicleService = _vehicleService;
    this.modalService = modalService;
    this.route = route;
    this._clientService = _clientService;
    this._ownerService = _ownerService;
    this.datePipe = datePipe;
    this._claimService = _claimService;
    this._invoiceService = _invoiceService;
    this._refundRateService = _refundRateService;
    this._decimalPipe = _decimalPipe;
    this.router = router;
    this.uploadService = uploadService;
    this._UserManager = _UserManager;
    this.maxDate = new Date();
    this.listObject = [];
    this.displayedColumns = ['InvoiceDate', 'supplier', 'amount', 'InvoiceLiters', 'StatusDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
    // ------------------Claim form-------------------------------
    this.ClaimForm = this.fb.group({
      ClientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ClientID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ClientVehiclesID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      FuelTypeID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VehicleTankCapacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      Owner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      RegistrationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VehicleRefDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, dateRefDateValidator]],
      VehicleRefNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VehicleRegistration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ClaimNumber: [''],
      GroupNumber: [''],
      GroupStatus: [''],
      ClaimStatus: [''],
      GroupTotalLitres: [''],
      ClaimTotalLitres: [''],
      DateIssued: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, dateIssuedValidator]],
      StatusReasonDescription: [''],
      ClaimExciseTotal: [''],
      Levy: [''],
      ClaimAmountTotal: [''],
      ExciseDutyCode: [''],
      FuelLevyCode: [''],
      countryControl: ['']
    });
    //------------------------invoice form-----------------------------
    this.InvoiceForm = this.fb.group({
      InvoiceDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, datePickerValidator]],
      //InvoiceNumber: ['', Validators.required],
      Supplier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      Amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, isNumber]],
      Litres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, isNumber]],
      // KMS: [''],
      // FileUpload: ['']
      myControl: ['']
    });
    //--------------------Claim Total forms---------------------------
    this.ClaimTotalForm = this.fb.group({
      EXCISE: [''],
      ClaimExciseTotal: [''],
      GroupExciseTotal: [''],
      LevyDuty: [''],
      Levy: [''],
      ExciseLevy: ['']
    });
    this.claimLitrer = 0.0;
    this.invoiceId = 0;
    this.getQueryString = new _model_claim__WEBPACK_IMPORTED_MODULE_8__.csClaim();
    this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.reportUrl;
    this.reportUrl = '/DIPS_Reports/';
    this.showParameters = "true";
    /**parameters: any = {
     "SampleStringParameter": null,
     "SampleBooleanParameter" : false,
     "SampleDateTimeParameter" : "11/1/2020",
     "SampleIntParameter" : 1,
     "SampleFloatParameter" : "123.1234",
     "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
     };*/
    this.language = "en-us";
    this.width = 100;
    this.height = 100;
    this.toolbar = "true";
  }
  ngOnInit() {
    this.clientId = this.route.snapshot.queryParamMap.get('clientId') || 0;
    this.ClaimId = this.route.snapshot.queryParamMap.get('claimId') || 0;
    this.groupId = this.route.snapshot.queryParamMap.get('groupId') || 0;
    this.vehicleId = this.route.snapshot.queryParamMap.get('vehicleId') || 0;
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_10__.FileQueryString();
    this.FileQueryString.ClientID = this.clientId;
    this.FileQueryString.VehicleId = parseInt(this.vehicleId.toString());
    this.FileQueryString.OwnerId = 0;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = 0;
    this.FileQueryString.IdProvided = false;
    this.isNewInvoiceRecord = false;
    if (this.clientId <= 0) {
      this.getQueryString = this.queryString;
      this.clientId = this.getQueryString.ClientCessionariID;
      this.ClaimId = this.getQueryString.ClaimID;
      this.groupId = this.getQueryString.GroupId;
      this.vehicleId = this.getQueryString.ClaimVehicleID;
      this.FileQueryString.ClaimId = this.getQueryString.ClaimID;
      this.FileQueryString.IdProvided = true;
    }
    if (this.clientId > 0 && this.vehicleId > 0) {
      this.ngBindClientAndVehicleDropDownlist(this.clientId);
    }
    if (this.ClaimId > 0) {
      this.ngSelectClaimInformationByClaimId(this.ClaimId);
      this.ngSetFileVariables(this.clientId, this.vehicleId, 0, this.ClaimId);
    }
    this.ngAuthoriseUser();
  }
  get f() {
    return this.InvoiceForm.controls;
  }
  get claimForm() {
    return this.ClaimForm.controls;
  }
  ngBindClientAndVehicleDropDownlist(id) {
    this.childClientObject = null;
    this._clientService.GetClientByID(id).subscribe(client => {
      this.childClientObject = client;
      this.ClaimForm.patchValue({
        ClientName: this.childClientObject.ClientName,
        ClientID: this.childClientObject.strClientID
      });
    });
    this._vehicleService.SelectVehicleByClientId(id).subscribe(data => {
      this.clientVehicles = data;
      this.ClaimForm.patchValue({
        ClientVehiclesID: this.vehicleId
      });
      this.ngOnLoadVehicleSelected(this.vehicleId);
      this.ClaimForm.controls['FuelTypeID'].disable();
      this.ClaimForm.controls['VehicleTankCapacity'].disable();
      this.ClaimForm.controls['RegistrationDate'].disable();
      //this.ClaimForm.controls['VehicleRefDate'].disable();
      //this.ClaimForm.controls['VehicleRefNumber'].disable();
      this.ClaimForm.controls['VehicleRegistration'].disable();
      this.ClaimForm.controls['Owner'].disable();
      // this.ClaimForm.controls['DateIssued'].disable();
      this.ClaimForm.controls['ClaimNumber'].disable();
      this.ClaimForm.controls['GroupNumber'].disable();
      this.ClaimForm.controls['GroupStatus'].disable();
      this.ClaimForm.controls['ClaimStatus'].disable();
      this.ClaimForm.controls['GroupTotalLitres'].disable();
      this.ClaimForm.controls['ClaimTotalLitres'].disable();
      this.ClaimForm.controls['StatusReasonDescription'].disable();
      this.ClaimForm.controls['ClientName'].disable();
      this.ClaimForm.controls['ClientID'].disable();
      this.ClaimForm.controls['ClaimExciseTotal'].disable();
      this.ClaimForm.controls['Levy'].disable();
      this.ClaimForm.controls['ClaimAmountTotal'].disable();
      this.ClaimForm.controls['ExciseDutyCode'].disable();
      this.ClaimForm.controls['FuelLevyCode'].disable();
    });
  }
  ngSelectClaimInformationByClaimId(id) {
    this._claimService.SelectClaimInfoById(id).subscribe(response => {
      this.claimObject = response[0];
      console.log(JSON.stringify('response[0].ClaimRefNumber' + response[0].ClaimRefNumber));
      this.claimStatusId = response[0].ClaimStatusID;
      this.ClaimForm.patchValue({
        //  ClaimNumber: response[0].ClaimYear + "/" + response[0].ClaimNumber,
        VehicleRefNumber: response[0].ClaimRefNumber,
        VehicleRefDate: this.datePipe.transform(response[0].ClaimRefDate, 'yyyy-MM-dd'),
        ClaimNumber: response[0].ClaimNumber,
        GroupNumber: response[0].ClaimGroupID,
        StatusReasonDescription: this.claimObject.ClaimStatusReason
        // VehicleRefDate: formatDate(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
        // VehicleRefNumber: this.vehicleObject.VehicleRefNumber,
      });
      //console.log('claim statuss: ' + response[0].ClaimStatusID)
      this.ClaimTotalStatus = response[0].ClaimStatusID;
      this.ClaimRefundrateID = response[0].ClaimRefundrateID;
      this.groupId = response[0].ClaimGroupID;
      this.ClaimId = id;
      this.getClaimTotalLiters(this.groupId, this.ClaimId);
      this.ngBindClaimInvoices(this.ClaimId);
      this.ngSelectGroup(this.groupId);
      this._invoiceService.SelectInvoiceByClaimId(this.ClaimId).subscribe(data => this.ngBindcalculatedFuelClaimValue(data, response[0].ClaimRefundrateID), error => {
        confirm('custom Errormessage: ' + error.message);
      });
    });
  }
  ngBindcalculatedFuelClaimValue(data, fuelTypeId) {
    var claimAmount = 0.0;
    var exciseTotal = 0.0;
    var levyTotal = 0.0;
    var claimLiters = 0.0;
    this.ClaimGroupStatusId = 0;
    var litres = 0.0;
    // console.log("line 651 :" + JSON.stringify(data))
    if (data != null) {
      for (let index = 0; index < data.length; index++) {
        var element = data[index];
        litres += element.litres;
        if (index == data.length - 1) {
          var invDate = this.datePipe.transform(element.InvoiceDate, 'yyyy-MM-dd');
          // console.log('697 inv date:' + invDate + 'refundRate: ' + fuelTypeId)
          this._refundRateService.SelectRefundRateById(fuelTypeId, invDate).subscribe(data => {
            //console.log('702 refundRate: ' + JSON.stringify(data[0]))               
            this.refundRateObject = data[0];
            this.claimObject.ClaimRefundrateID = this.refundRateObject.RefundDescriptionID;
            var exciseDuty = this.refundRateObject.RefundExciseDuty != null ? this.refundRateObject.RefundExciseDuty : 0;
            var levyDuty = this.refundRateObject.RefundFuelLevy != null ? this.refundRateObject.RefundFuelLevy : 0;
            exciseTotal += litres * exciseDuty / 100;
            levyTotal += litres * levyDuty / 100;
            claimAmount += exciseTotal + levyTotal;
            claimLiters += element.litres;
            // console.log('712 claim amount ' + claimAmount)
            this.ClaimForm.patchValue({
              ClaimTotalLitres: this._decimalPipe.transform(litres, "1.2-2"),
              ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2"),
              Levy: this._decimalPipe.transform(levyTotal, "1.2-2"),
              ClaimAmountTotal: this._decimalPipe.transform(claimAmount, "1.2-2"),
              ExciseDutyCode: this.refundRateObject.RefundExciseCode,
              FuelLevyCode: this.refundRateObject.RefundFuelCode
            });
            this.ClaimTotalForm.patchValue({
              EXCISE: this.refundRateObject.RefundExciseCode,
              ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2") ?? '0',
              LevyDuty: this.refundRateObject.RefundFuelCode,
              ExciseLevy: this._decimalPipe.transform(exciseTotal + levyTotal, "1.2-2") ?? '0',
              Levy: this._decimalPipe.transform(levyTotal, "1.2-2") ?? '0'
            });
            this.ClaimTotalForm.controls['EXCISE'].disable();
            this.ClaimTotalForm.controls['ClaimExciseTotal'].disable();
            this.ClaimTotalForm.controls['LevyDuty'].disable();
            this.ClaimTotalForm.controls['ExciseLevy'].disable();
            this.ClaimTotalForm.controls['Levy'].disable();
            this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
            this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
          }, error => {
            confirm('custom Errormessage: ' + error.message);
          });
        } // get refund rate
      }
    }
  }

  ngSelectGroup(id) {
    this._claimService.SelectGroupInfoById(id).subscribe(data => {
      this.ClaimGroupStatusId = data[0].GroupStatusID;
      //this.ClaimTotalStatus = data[0].StatusDescription
      this.ClaimGroupTotalStatus = data[0].StatusDescription;
    });
  }
  ngBindClaimInvoices(claimId) {
    var result = 0;
    this._invoiceService.SelectInvoiceByClaimId(claimId).subscribe(data => {
      this.ngBindDataSource(data);
      if (data != null) {
        data.forEach(r => {
          result += r.litres;
          this.TotalLitres = Number(this._decimalPipe.transform(result, "1.2-2"));
          this.InvoiceTotalLitres = this._decimalPipe.transform(result, "1.2-2");
          if (result != 0) {
            this.ClaimForm.patchValue({
              ClaimTotalLitres: this._decimalPipe.transform(result, "1.2-2")
            });
          }
        });
      }
    });
  }
  ngBindDataSource(data) {
    this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTableDataSource(null);
    this.InvoiceFound = false;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      this.InvoiceFound = true;
    }
  }
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnLoadVehicleSelected(event) {
    this.FuelType = 0;
    this.currentDate = new Date();
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    if (this.ClaimForm.value.ClientVehiclesID != 0) {
      this._vehicleService.GetVehicleByID(this.ClaimForm.value.ClientVehiclesID).subscribe(data => {
        this.vehicleObject = data;
        this.FuelType = this.vehicleObject.FuelTypeID;
        //console.log('fuel Type ' + this.FuelType)
        this.ClaimForm.patchValue({
          FuelTypeID: this.vehicleObject.FuelTypeID,
          VehicleTankCapacity: this.vehicleObject.VehicleTankCapacity,
          RegistrationDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatDate)(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US'),
          // VehicleRefDate: null,//formatDate(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
          //VehicleRefNumber: null,//this.vehicleObject.VehicleRefNumber,
          VehicleRegistration: this.vehicleObject.VehicleRegistration,
          DateIssued: this.currentDate
        });
        this.effectivedate = this.vehicleObject.VehicleEffectiveDate, this.VehicleTankCapacity = this.vehicleObject.VehicleTankCapacity, this.vehicleRegistrationDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatDate)(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US');
        this.ClaimRefundrateID = this.vehicleObject.FuelTypeID;
        // console.log("this.ClaimRefundrateID" + this.ClaimRefundrateID)
        this._ownerService.SelectOwnerById(this.vehicleObject.OwnerID).subscribe(ownerInfor => {
          if (ownerInfor != null) {
            this.Owner = ownerInfor[0];
            this.ClaimForm.patchValue({
              Owner: this.Owner.OwnerInitials + ' ' + this.Owner.OwnerSurname
            });
          }
        });
      });
    }
  }
  ngSearchVehicles(vehicleId) {
    this.ClaimForm.value.ClientVehiclesID = vehicleId;
    this.ClaimForm.patchValue({
      ClientVehiclesID: vehicleId
    });
    this.close("Vehicle");
  }
  ngOnVehicleSelected(event) {
    this.FuelType = 0;
    this.currentDate = new Date();
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    if (this.ClaimForm.value.ClientVehiclesID != 0) {
      this._vehicleService.GetVehicleByID(this.ClaimForm.value.ClientVehiclesID).subscribe(data => {
        //debugger
        this.vehicleObject = data;
        this.FuelType = this.vehicleObject.FuelTypeID;
        //console.log("vehi fuel Type: " + this.vehicleObject.FuelTypeID )
        this.ClaimForm.patchValue({
          FuelTypeID: this.vehicleObject.FuelTypeID,
          VehicleTankCapacity: this.vehicleObject.VehicleTankCapacity,
          RegistrationDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatDate)(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US'),
          VehicleRefDate: null,
          VehicleRefNumber: null,
          VehicleRegistration: this.vehicleObject.VehicleRegistration,
          DateIssued: this.currentDate,
          Levy: null,
          ClaimAmountTotal: null,
          ClaimExciseTotal: null,
          ClaimNumber: null,
          ClaimTotalLitres: null,
          FuelLevyCode: null,
          ExciseDutyCode: null
        });
        this.effectivedate = this.vehicleObject.VehicleEffectiveDate,
        //console.log("this.vehicleObject.FuelTypeID" + this.vehicleObject.FuelTypeID)
        this.ClaimRefundrateID = this.vehicleObject.FuelTypeID;
        this.TotalLitres = 0;
        this.InvoiceTotalLitres = null;
        this.ngBindClaimInvoices(-1);
        this.VehicleTankCapacity = this.vehicleObject.VehicleTankCapacity, this.vehicleRegistrationDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatDate)(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US');
        this._ownerService.SelectOwnerById(this.vehicleObject.OwnerID).subscribe(ownerInfor => {
          if (ownerInfor != null) {
            this.Owner = ownerInfor[0];
            this.ClaimForm.patchValue({
              Owner: this.Owner.OwnerInitials + ' ' + this.Owner.OwnerSurname
            });
          }
        });
      });
      this.claimObject = new _model_claim__WEBPACK_IMPORTED_MODULE_8__.csClaim();
      this.claimObject.GroupId = this.groupId;
      this.ClaimId = 0;
    }
  }
  /*------------------------------------------------------
        INSERT OR UPDATE AN INVOICE
  -------------------------------------------------------*/
  SubmitInvoice() {
    this.invoiceObject = this.InvoiceForm.value;
    this.vehicleObject = this.ClaimForm.value;
    //console.log("vehicle info" + JSON.stringify(this.vehicleObject))
    if (this.VehicleTankCapacity < this.invoiceObject.Litres) {
      //console.log(this.VehicleTankCapacity  + " liters" + this.invoiceObject.Litres)
      alert('The invoice Litre cannot be greater than the vehicle tank capacity which is ' + this.VehicleTankCapacity + ' Liters');
      return;
    }
    var refDate = new Date(this.vehicleObject.VehicleRefDate);
    var invDate = new Date(this.invoiceObject.InvoiceDate);
    if (invDate > refDate) {
      alert('The Invoice date cannot be greater that the reference date');
      return;
    }
    var RegistrationDate = new Date(this.effectivedate);
    if (invDate < RegistrationDate) {
      //console.log(this.VehicleTankCapacity  + " liters" + this.invoiceObject.Litres)
      alert('The invoice date cannot be less than effective date.');
      return;
    }
    if (this.VehicleTankCapacity < this.invoiceObject.Litres) {
      //console.log(this.VehicleTankCapacity  + " liters" + this.invoiceObject.Litres)
      alert('The invoice Litre cannot be greater than the vehicle tank capacity which is ' + this.VehicleTankCapacity + ' Liters');
      return;
    }
    this.claimObject = new _model_claim__WEBPACK_IMPORTED_MODULE_8__.csClaim();
    if (this.groupId > 0) {
      this.claimObject.GroupId = this.groupId;
    }
    if (this.ClaimId > 0) {
      this.claimObject.ClaimID = this.ClaimId;
      this.FileQueryString.ClaimId = this.ClaimId;
    }
    this.claimObject.ClaimVehicleID = this.vehicleObject.ClientVehiclesID;
    this.claimObject.ClientCessionariID = this.clientId;
    // Claim Object
    this.claimObject.ClaimVehicleID = this.vehicleObject.ClientVehiclesID;
    this.claimObject.ClaimRefNumber = this.vehicleObject.VehicleRefNumber;
    this.claimObject.ClaimRefDate = this.vehicleObject.VehicleRefDate;
    this.claimObject.ClaimReceiveDate = this.datePipe.transform(this.vehicleObject.DateIssued, 'yyyy-MM-dd');
    this.claimObject.ClaimClientCessionaryLinkID = this.clientId;
    this.claimObject.ClaimPaymentDate = this.vehicleObject.DateIssued;
    this.claimObject.ClaimRefundrateID = this.ClaimRefundrateID;
    this.claimObject.FuelTypeID = this.ClaimRefundrateID;
    // Invoice Slip
    if (this.invoiceId > 0) {
      this.claimObject.InvoiceID = this.invoiceId;
    }
    //this.claimObject.InvoiceNumber = this.invoiceObject.InvoiceNumber;
    this.claimObject.InvoiceAmount = this.invoiceObject.Amount;
    this.claimObject.InvoiceDate = this.invoiceObject.InvoiceDate;
    this.claimObject.InvoiceLitres = this.invoiceObject.Litres;
    this.claimObject.InvoiceSuppliersName = this.invoiceObject.Supplier;
    //this.claimObject.InvoiceOdometerReading = this.invoiceObject.KMS;
    //Validate invoice age
    var startDate = new Date();
    var invoiceDate = new Date(this.claimObject.InvoiceDate);
    var invoiceage = Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(invoiceDate.getFullYear(), invoiceDate.getMonth(), invoiceDate.getDate())) / (1000 * 60 * 60 * 24));
    if (invoiceage > 730) {
      this.claimObject.InvoiceStatusID = 5;
      this.claimObject.GroupStatusID = 5;
      this.ClaimForm.patchValue({
        StatusReasonDescription: "Invoice date is two years older than the Recieve date on the Invoice."
      });
      this.claimObject.ClaimStatusReason = "Invoice date is two years older than the Recieve date on the Invoice.";
    } else {
      this.claimObject.InvoiceStatusID = 6;
    }
    // validate Invoice duplicates
    this._invoiceService.ValidateInvoice(this.claimObject).subscribe(response => {
      var results = response.body;
      if (results != null && !this.isInvoiceDirty) {
        var c = confirm("This Invoice could be a duplicate with the invoice dated " + results[0].InvoiceDate + " and the supplier " + this.claimObject.InvoiceSuppliersName + " refer to claim " + results[0].ClaimNumber + " do you want to continue capture this invoice?");
        if (c == true) {
          this.saveClaimAndInvoice();
          this.InvoiceForm.reset();
          if (this.isInvoiceDirty) {
            this.close("content");
          }
          this.isInvoiceDirty = false;
        } else {
          this.InvoiceForm.reset();
          return;
        }
      } else {
        this.saveClaimAndInvoice();
        this.InvoiceForm.reset();
        if (this.isInvoiceDirty) {
          this.close("content");
        }
        this.isInvoiceDirty = false;
      }
    });
  }
  saveClaimAndInvoice() {
    this._claimService.SaveInvoice(this.claimObject).subscribe(response => {
      this.tempClaimObject = response.body;
      //console.log("saveInvoice: " + JSON.stringify(response.body))
      this.groupId = this.tempClaimObject.GroupId;
      this.ClaimId = this.tempClaimObject.ClaimID;
      this.claimObject.ClaimID = this.ClaimId;
      this.claimObject.GroupId = this.groupId;
      this.claimObject.FuelTypeID = this.ClaimRefundrateID;
      //console.log("this.claimObject.FuelTypeID = this.ClaimRefundrateID" + this.ClaimRefundrateID )
      //---------File objects-------------
      this.FileQueryString.ClaimId = this.ClaimId;
      this.ngSetFileVariables(this.clientId, this.vehicleId, 0, this.ClaimId);
      if (this.ClaimId > 0 && this.groupId > 0) {
        this.getClaimTotalLiters(this.groupId, this.ClaimId);
      }
      //  console.log("CalcClaimAmount 0: " + this.claimObject.FuelTypeID)
      this.CalcClaimAmount(this.ClaimRefundrateID);
      this.ngBindClaimInvoices(this.tempClaimObject.ClaimID);
      if (this.tempClaimObject.InvoiceID > 0) {
        if (this.theFile != null) {
          this.uploadFile(this.tempClaimObject.InvoiceID);
        }
      }
      this.invoiceId = 0;
      this.ClaimForm.patchValue({
        GroupNumber: this.groupId
        //ClaimNumber: this.ClaimId
      });

      this.ngBindClaimStatusByClaimId(this.claimObject.ClaimID.toString());
      // confirm('The Invoice has been saved successfully');
    }, error => {
      console.error(error.message);
      confirm('custom Errormessage: ' + error.message);
    });
  }
  ngBindClaimStatusByClaimId(id) {
    this._claimService.SelectClaimInfoById(id).subscribe(response => {
      this.claimObject = response[0];
      this.ClaimTotalStatus = response[0].ClaimStatusID;
      this.ClaimGroupStatusId = response[0].ClaimGroupID;
      this.ClaimGroupTotalStatus = "SEND FOR APPROVAL";
    });
  }
  CalcClaimAmount(fuelTypeId) {
    //console.log("fuleee type: " + fuelTypeId)
    this._invoiceService.SelectInvoiceByClaimId(this.ClaimId).subscribe(data => this.calculatedFuelClaimValue(data, fuelTypeId), error => {
      confirm('custom Errormessage: ' + error.message);
    });
  }
  calculatedFuelClaimValue(data, fuelTypeId) {
    var claimAmount = 0.0;
    var exciseTotal = 0.0;
    var levyTotal = 0.0;
    var claimLiters = 0.0;
    this.ClaimTotalStatus = null;
    this.ClaimGroupStatusId = 0;
    var litres = 0.0;
    // console.log("line 651 :" + JSON.stringify(data))
    if (data != null) {
      for (let index = 0; index < data.length; index++) {
        var element = data[index];
        litres += element.litres;
        if (element.status == 1) {
          console.log('claim status: ' + element.status);
          this.ClaimTotalStatus = "SEND FOR APPROVAL";
          this.ClaimGroupStatusId = 1;
        } else if (element.status == 5) {
          this.ClaimTotalStatus = "OTHER STATUS";
          this.ClaimGroupStatusId = 5;
        } else if (element.status == 4) {
          this.ClaimTotalStatus = "REJECTED";
          this.ClaimGroupStatusId = 4;
        } else if (element.status == 6) {
          this.ClaimTotalStatus = "SEND FOR APPROVAL";
          this.ClaimGroupStatusId = 1;
          //if ((this.ClaimTotalStatus != "OTHER STATUS") && (this.ClaimTotalStatus != "REJECTED")) {
          //  this.ClaimTotalStatus = "SEND FOR APPROVAL";
          //  this.ClaimGroupStatusId = 1;
          //}
          var startDate = new Date();
          var invoiceDate = new Date(element.InvoiceDate);
          var invoiceage = Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(invoiceDate.getFullYear(), invoiceDate.getMonth(), invoiceDate.getDate())) / (1000 * 60 * 60 * 24));
          if (invoiceage > 730 && element.status != "4") {
            this.ClaimForm.patchValue({
              StatusReasonDescription: "Invoice Date 2 years older than the Recieve date on the Invoice."
            });
            this.claimObject.ClaimStatusReason = "Invoice Date 2 years older than the Recieve date on the Invoice.";
            this.ClaimTotalStatus = "OTHER STATUS";
            this.ClaimGroupStatusId = 5;
          }
        }
        if (index == data.length - 1) {
          this.claimObject.GroupStatusID = 1;
          this.claimObject.ClaimStatusID = 1;
          this.claimObject.GroupId = this.groupId;
          var invDate = this.datePipe.transform(element.InvoiceDate, 'yyyy-MM-dd');
          // console.log('807 inv date:' + invDate + 'refundRate: ' + fuelTypeId)
          this._refundRateService.SelectRefundRateById(fuelTypeId, invDate).subscribe(data => {
            // console.log('702 refundRate: ' + JSON.stringify(data[0]))               
            this.refundRateObject = data[0];
            this.claimObject.ClaimRefundrateID = this.refundRateObject.RefundDescriptionID;
            var exciseDuty = this.refundRateObject.RefundExciseDuty != null ? this.refundRateObject.RefundExciseDuty : 0;
            var levyDuty = this.refundRateObject.RefundFuelLevy != null ? this.refundRateObject.RefundFuelLevy : 0;
            exciseTotal += litres * exciseDuty / 100;
            levyTotal += litres * levyDuty / 100;
            claimAmount += exciseTotal + levyTotal;
            claimLiters += element.litres;
            // console.log('712 claim amount ' + claimAmount)
            this.ClaimForm.patchValue({
              ClaimTotalLitres: this._decimalPipe.transform(litres, "1.2-2"),
              ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2"),
              Levy: this._decimalPipe.transform(levyTotal, "1.2-2"),
              ClaimAmountTotal: this._decimalPipe.transform(claimAmount, "1.2-2"),
              ExciseDutyCode: this.refundRateObject.RefundExciseCode,
              FuelLevyCode: this.refundRateObject.RefundFuelCode
            });
            //console.log('claim Amount: ' + claimAmount + 'converted: ' + this._decimalPipe.transform(claimAmount, "1.2-2"))
            this.claimObject.ClaimPaymentAmount = claimAmount;
            this.claimObject.ClaimAmount = claimAmount;
            this.ClaimTotalForm.patchValue({
              EXCISE: this.refundRateObject.RefundExciseCode,
              ClaimExciseTotal: this._decimalPipe.transform(exciseTotal, "1.2-2") ?? '0',
              LevyDuty: this.refundRateObject.RefundFuelCode,
              ExciseLevy: this._decimalPipe.transform(exciseTotal + levyTotal, "1.2-2") ?? '0',
              Levy: this._decimalPipe.transform(levyTotal, "1.2-2") ?? '0'
            });
            this.ClaimTotalForm.controls['EXCISE'].disable();
            this.ClaimTotalForm.controls['ClaimExciseTotal'].disable();
            this.ClaimTotalForm.controls['LevyDuty'].disable();
            this.ClaimTotalForm.controls['ExciseLevy'].disable();
            this.ClaimTotalForm.controls['Levy'].disable();
            this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
            this.ClaimTotalForm.controls['GroupExciseTotal'].disable();
            this.claimObject.ClaimClientCessionaryLinkID = this.clientId;
            this.claimObject.ClientCessionariID = this.clientId;
            // console.log('740 cleintID : ' + this.clientId)
            // console.log('741 groupid : ' + this.groupId)
            this.claimObject.GroupId = this.groupId;
            this.claimObject.GroupStatusID = 1;
            this.claimObject.ClaimStatusID = 1;
            this.ClaimTotalStatus = "SEND FOR APPROVAL";
            this._claimService.UpdateClaim(this.claimObject).subscribe(response => {
              this.InvoiceForm.patchValue({
                InvoiceDate: null,
                InvoiceNumber: null,
                Supplier: null,
                Amount: null,
                Litres: null,
                KMS: null,
                FileUpload: null
              });
              this.InvoiceFound = true;
              this.isNewInvoiceRecord = false;
            });
          }, error => {
            confirm('custom Errormessage: ' + error.message);
          });
        } // get refund rate
      }
    }
  }

  getClaimTotalLiters(groupId, claimId) {
    this._claimService.GetClaimTotalLiters(groupId).subscribe(response => {
      this.ClaimForm.patchValue({
        GroupTotalLitres: this._decimalPipe.transform(response[0].invoiceLiters, "1.2-2")
      });
    });
    this._claimService.SelectClaimInfoById(claimId).subscribe(response => {
      this.ClaimForm.patchValue({
        ClaimNumber: response[0].ClaimNumber
      });
      this.claimNumber = response[0].ClaimNumber;
    });
  }
  DeleteInvoice(id) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    if (confirm("Are you sure  you want to delete this invoice")) {
      this._invoiceService.DeleteInvoice(id).subscribe(response => {
        alert('Invoice has been deleted');
        this.ngBindClaimInvoices(this.ClaimId);
        this.CalcClaimAmount(this.ClaimRefundrateID);
      });
    }
  }
  DeleteClaim() {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    if (this.claimNumber != null || this.claimNumber != '') {
      if (confirm("Are you sure  you want to delete this claim")) {
        this._claimService.DeleteClaimById(this.ClaimId).subscribe(response => {
          alert('Claim has been deleted');
          this.goToNewClaimScreen();
        });
      }
    }
  }
  /*------------------------------------------------------
        OPEN INVOICE DIALOG MODAL
  -------------------------------------------------------*/
  openCalcClaim(id) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };
    this.CalcClaimAmount(this.claimObject.ClaimRefundrateID);
    this.modalRef = this.modalService.open(id, ngbModalOptions);
    // this.modalService.open(id);
  }

  open(content) {
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_10__.FileQueryString();
    this.FileQueryString.ClientID = 0;
    this.FileQueryString.VehicleId = 0;
    this.FileQueryString.OwnerId = 0;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.IdProvided = false;
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };
    this.isNewInvoiceRecord = true;
    this.invoiceId = 0;
    this.modalRef = this.modalService.open(content, ngbModalOptions);
    //this.modalService.open(content, ngbModalOptions);
  }

  searchVehicle(content) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  btnEditInvoice(content, id) {
    //this.FileQueryString = new FileQueryString();
    //this.FileQueryString.ClientID = 0;
    //this.FileQueryString.VehicleId = 0;
    //this.FileQueryString.OwnerId = 0;
    //this.FileQueryString.InvoiceId = id;
    //this.FileQueryString.IdProvided = true;
    //this.isNewInvoiceRecord = false;
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
      // validate Invoice duplicates
    };

    this.isInvoiceDirty = true;
    this._invoiceService.SelectInvoiceInfoById(id).subscribe(invoice => {
      var invoiceObject = invoice[0];
      this.InvoiceForm.patchValue({
        InvoiceDate: this.datePipe.transform(invoiceObject.InvoiceDate, 'yyyy-MM-dd'),
        InvoiceNumber: invoiceObject.InvoiceNumber,
        Supplier: invoiceObject.InvoiceSuppliersName,
        Amount: invoiceObject.InvoiceAmount,
        Litres: invoiceObject.InvoiceLitres,
        KMS: invoiceObject.InvoiceOdometerReading
      });
      this.invoiceId = invoiceObject.InvoiceID;
    });
    this.modalRef = this.modalService.open(content, ngbModalOptions);
    // this.modalService.open(content, ngbModalOptions);
  }

  close(content) {
    this.invoiceId = 0;
    this.modalRef.close();
    //this.modalService.dismissAll(content);
    this.InvoiceForm.reset();
  }
  /*-------------------------------------------------------------------
  END MODAL DIALOG BOX
  --------------------------------------------------------------------- */
  printReport(content, reportName) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    this.modalService.dismissAll();
    this.parameters = null;
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "groupId": this.groupId
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  printInvoiceReport(content, reportName) {
    if (this.claimStatusId == 4 || this.claimStatusId == 8 || this.claimStatusId == 9) {
      alert('This claim cannot be ammended.');
      return;
    }
    this.modalService.dismissAll();
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      this.parameters = {
        "claimNo": this.claimNumber
      };
      // console.log('claim No: ' + this.claimNumber)
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class2'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  goToClaimEditor() {
    this.modalService.dismissAll();
    this.router.navigate(['/Claims/ClaimsEditor/'], {
      queryParams: {
        'clientId': this.clientId,
        'vehicleId': this.vehicleId,
        'claimId': this.ClaimId,
        'groupId': this.groupId
      }
    });
  }
  goToSubmitToSuperviser() {
    //this.modalRef.close()
    this.modalService.dismissAll();
    this.router.navigate(['Claims/AmendClaim/']);
  }
  goToNewClaimScreen() {
    //this.modalRef.close()
    this.modalService.dismissAll();
    this.router.navigate(['Claims/NewClaims/']);
  }
  /**
   * UPload invoices
   */
  onFileChange(event) {
    this.theFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];
      } else {
        // Display error message
        alert("File: " + event.target.files[0].name + " is too large to upload.");
        //this.messages.push("File: " + event.target.files[0].name 
        //  + " is too large to upload.");
      }
    }
  }

  readAndUploadFile(theFile, invoiceId) {
    let file = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_10__.FileToUpload();
    // Set File Information
    file.FileName = theFile.name;
    file.FileSize = theFile.size;
    file.FileType = theFile.type;
    file.ClientID = 0;
    file.VehicleId = 0;
    file.OwnerId = 0;
    file.InvoiceId = invoiceId;
    file.comment = 'Invoice Slip';
    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();
    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      if (reader.result != null) {
        file.fileAsBase64 = reader.result.toString();
        // POST to server
        this.uploadService.uploadFile(file).subscribe(resp => {
          // this.messages.push("Upload complete");
          // alert(resp.body);
        }, error => {
          console.error(error.message);
          confirm('Invoice slip Not uploaded Error message: ' + error.message);
        });
      }
    };
    // Read the file    
    reader.readAsDataURL(theFile);
  }
  uploadFile(invoiceId) {
    this.readAndUploadFile(this.theFile, invoiceId);
  }
  ngAuthoriseUser() {
    this._UserManager.AuthenticateUser().subscribe(data => {
      this.lstUser = data;
      switch (this.lstUser.RoleId) {
        case 1:
          //// Administrator
          this.userRole = 1;
          break;
        case 2:
          //SuperVisor
          this.userRole = 2;
          break;
        case 3:
          //Data Capturer
          this.userRole = 3;
          break;
        case 4:
          // Viewer
          this.userRole = 4;
          break;
        case 5:
          // Deny Access
          this.userRole = 5;
          break;
        default:
          break;
      }
      //console.log("user role: " + this.userRole)
    });
  }

  ngSetFileVariables(clientId, vehicleId, ownerid, claimId) {
    this.FileQueryString.ClientID = clientId;
    this.FileQueryString.VehicleId = vehicleId;
    this.FileQueryString.OwnerId = ownerid;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = claimId;
    this.FileQueryString.IdProvided = true;
    //console.log('client Id:' + this.FileQueryString.ClientID +
    //  'vehicle Id: ' + this.FileQueryString.VehicleId + 'owner id :' + this.FileQueryString.OwnerId
    //  + 'Claim Id : ' + this.FileQueryString.ClaimId + 'is Id Providerd : ' + this.FileQueryString.IdProvided )
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder
  }, {
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__.VehicleService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute
  }, {
    type: _api_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService
  }, {
    type: _api_services_owner_service__WEBPACK_IMPORTED_MODULE_6__.OwnerService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe
  }, {
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _api_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__.InvoiceService
  }, {
    type: _api_services_DipRefundRate_Service__WEBPACK_IMPORTED_MODULE_4__.DipRefundRateService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
  }, {
    type: _api_services_fileUpload_service__WEBPACK_IMPORTED_MODULE_11__.FileUploadService
  }, {
    type: _api_services_user_manager__WEBPACK_IMPORTED_MODULE_12__.UserManager
  }];
  static #_2 = this.propDecorators = {
    accordion: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatAccordion]
    }],
    queryString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_21__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort]
    }]
  };
};
NewClaimsEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-new-claims-editor',
  template: _new_claims_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  //styleUrls: ['expansion-expand-collapse-all-example.css'],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe],
  standalone: false,
  imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule],
  styles: [(_new_claims_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewClaimsEditorComponent);

function datePickerValidator(control) {
  var startDate = new Date();
  var inputDate = new Date(control.value);
  var invoiceage = Math.floor((Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));
  if (invoiceage > 0) {
    control.setErrors({
      futureDate: true
    });
    return {
      futureDate: true
    };
  }
  var prvAge = Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())) / (1000 * 60 * 60 * 24));
  if (prvAge > 730) {
    control.setErrors({
      TwoYearsOld: true
    });
    return {
      TwoYearsOld: true
    };
  }
  if (inputDate instanceof Date && isFinite(+inputDate)) {
    //return null;
    control.setErrors({
      invalidDate: false
    });
  } else {
    control.setErrors({
      invalidDate: true
    });
    return {
      invalidDate: true
    };
  }
  return null;
}
function dateIssuedValidator(control) {
  var startDate = new Date();
  var inputDate = new Date(control.value);
  var invoiceage = Math.floor((Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));
  if (invoiceage > 0) {
    control.setErrors({
      futureDate: true
    });
    return {
      futureDate: true
    };
  }
  if (inputDate instanceof Date && isFinite(+inputDate)) {
    //return null;
    control.setErrors({
      invalidDate: false
    });
  } else {
    control.setErrors({
      invalidDate: true
    });
    return {
      invalidDate: true
    };
  }
  return null;
}
function dateRefDateValidator(control) {
  var startDate = new Date();
  var inputDate = new Date(control.value);
  var invoiceage = Math.floor((Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));
  if (invoiceage > 0) {
    // control.setErrors({ futureDate: true });
    //return { futureDate: true };
  }
  if (inputDate instanceof Date && isFinite(+inputDate)) {
    //return null;
    control.setErrors({
      invalidDate: false
    });
  } else {
    control.setErrors({
      invalidDate: true
    });
    return {
      invalidDate: true
    };
  }
  return null;
}
function isNumber(control) {
  //console.log("value mount " +control.value)
  if (control.value == null || control.value == '' || isNaN(Number(control.value.toString()))) {
    control.setErrors({
      notNumber: true
    });
    return {
      notNumber: true
    };
  }
}
function ClaimFuelTypeIdRequired(control) {
  if (control.value == '') {
    control.setErrors({
      fueltypeRequired: true
    });
  }
  if (control.value > this.VehicleTankCapacity) {
    control.setErrors({
      capacity: true
    });
    return {
      capacity: true
    };
  }
  return null;
}

/***/ }),

/***/ 24435:
/*!***********************************************************************!*\
  !*** ./src/app/views/forms/Claims/new-claims/new-claims.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewClaimsComponent": () => (/* binding */ NewClaimsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_claims_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-claims.component.html?ngResource */ 27185);
/* harmony import */ var _new_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-claims.component.scss?ngResource */ 18832);
/* harmony import */ var _new_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_new_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/vehicle.service */ 55433);










let NewClaimsComponent = class NewClaimsComponent {
  constructor(_vehicleService, router) {
    this._vehicleService = _vehicleService;
    this.router = router;
    this.listObject = [];
    this.displayedColumns = ['Code', 'ClientAllias', 'VehicleRegistration', 'VehicleRefNumber', 'VehicleCancellationDate', 'VehicleStatus', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.bindVehicleGridView();
    this.currentDate = new Date();
  }
  bindVehicleGridView() {
    this._vehicleService.GetAllVehicles().subscribe(data => {
      this.bindDataSource(data);
      this.hasClaims = true;
      if (!data) {
        this.hasClaims = true;
      }
    });
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  goToClaimEditor(clientId, vehicleId) {
    this.router.navigate(['/Claims/ClaimsEditor/'], {
      queryParams: {
        'clientId': clientId,
        'vehicleId': vehicleId
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__.VehicleService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_7__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort]
    }]
  };
};
NewClaimsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-new-claims',
  template: _new_claims_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_new_claims_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewClaimsComponent);


/***/ }),

/***/ 76697:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/ready-for-payment/ready-for-payment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadyForPaymentComponent": () => (/* binding */ ReadyForPaymentComponent)
/* harmony export */ });
/* harmony import */ var C_TFS_Development_DIPS_Angular_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ready_for_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ready-for-payment.component.html?ngResource */ 27628);
/* harmony import */ var _ready_for_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ready-for-payment.component.scss?ngResource */ 66290);
/* harmony import */ var _ready_for_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ready_for_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);









let ReadyForPaymentComponent = class ReadyForPaymentComponent {
  constructor(_claimService, router, route, modalService) {
    this._claimService = _claimService;
    this.router = router;
    this.route = route;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.hasClaims = false;
    this.router.events.subscribe(e => {
      //console.log('Router event:', e);
      this.ClaimStatusId = this.route.snapshot.queryParamMap.get('statusId') || 0;
      if (this.ClaimStatusId > 0) {
        this.ngGetAllClaimedClients(this.ClaimStatusId);
      }
    });
  }
  ngGetAllClaimedClients(statusid) {
    var _this = this;
    return (0,C_TFS_Development_DIPS_Angular_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._claimService.SelectApprovedClaimByStatusID(statusid).subscribe(data => {
        _this.clientClaims = data;
        _this.hasClaims = true;
        if (!data) {
          _this.hasClaims = true;
        }
      });
      //this.hasClaims = true;
    })();
  }

  openReasonBox(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-classR'
    };
    this.billingReferenceNo = id;
    //console.log('lcient Id ' + id)    
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {
    this.modalRef.close();
  }
  ngFinalise(content, reportName) {
    this.printReport(content, reportName, this.chequeNumber);
    this._claimService.FinaliseClaim(0, this.chequeNumber, this.billingReferenceNo).subscribe(data => {
      alert(data.body);
      this.ngGetAllClaimedClients(9);
      //this.closeModal();         
    });
  }

  printReport(content, reportName, chequeNumber) {
    this.reportName = reportName;
    this.modalService.dismissAll();
    this.parameters = null;
    if (this.reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.reportUrl;
      this.reportName = this.reportName;
      this.reportUrl = 'DIPS_Reports/' + this.reportName;
      this.parameters = {
        "chequnumber": chequeNumber
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class1'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  printGroupReport(content, reportName, clientId, billNo) {
    this.reportName = reportName;
    this.modalService.dismissAll();
    this.parameters = null;
    if (this.reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.reportUrl;
      this.reportName = this.reportName;
      this.reportUrl = 'DIPS_Reports/' + this.reportName;
      this.parameters = {
        //"groupId": groupId,
        "ClientId": clientId,
        "BillingReferenceNo": billNo
      };
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class1'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  close(content) {
    this.modalRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_4__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }];
};
ReadyForPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-ready-for-payment',
  template: _ready_for_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_ready_for_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ReadyForPaymentComponent);


/***/ }),

/***/ 16637:
/*!*******************************************************************************!*\
  !*** ./src/app/views/forms/Claims/search-vehicle/search-vehicle.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchVehicleComponent": () => (/* binding */ SearchVehicleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_vehicle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-vehicle.component.html?ngResource */ 90961);
/* harmony import */ var _search_vehicle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-vehicle.component.scss?ngResource */ 91602);
/* harmony import */ var _search_vehicle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_vehicle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);






let SearchVehicleComponent = class SearchVehicleComponent {
  constructor() {
    this.SearchVehicleEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.displayedColumns = ['VehicleRegistration', 'VehicleCancellationDate', 'VehicleStatus', 'actions'];
    this.vehicles = null;
  }
  ngOnInit() {
    this.vehicles = this.clientVehicles;
    this.bindGrindView();
  }
  bindGrindView() {
    if (this.vehicles != null) {
      this.listObject = this.vehicles;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_3__.MatLegacyTableDataSource(this.vehicles);
    }
  }
  bindDataSource(data) {}
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  SearchVehicles(id) {
    //debugger;
    this.SearchVehicleEmitter.emit(id);
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    SearchVehicleEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
      args: ["SearchVehicleEmitter"]
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_4__.MatLegacyPaginator]
    }],
    clientVehicles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
SearchVehicleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-search-vehicle',
  template: _search_vehicle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_search_vehicle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SearchVehicleComponent);


/***/ }),

/***/ 83762:
/*!*****************************************************************!*\
  !*** ./src/app/views/forms/Claims/spinner/spinner.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _spinner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component.html?ngResource */ 86041);
/* harmony import */ var _spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.scss?ngResource */ 92668);
/* harmony import */ var _spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





let SpinnerComponent = class SpinnerComponent {
  constructor(spinnerRef) {
    this.spinnerRef = spinnerRef;
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef
  }];
};
SpinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-spinner',
  template: _spinner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SpinnerComponent);


/***/ }),

/***/ 94144:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitToSupervisorDashboardComponent": () => (/* binding */ SubmitToSupervisorDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _submit_to_supervisor_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-to-supervisor-dashboard.component.html?ngResource */ 91046);
/* harmony import */ var _submit_to_supervisor_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-to-supervisor-dashboard.component.scss?ngResource */ 84209);
/* harmony import */ var _submit_to_supervisor_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_submit_to_supervisor_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/claim.service */ 70791);
/* harmony import */ var _model_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/claim */ 49742);












let SubmitToSupervisorDashboardComponent = class SubmitToSupervisorDashboardComponent {
  constructor(_claimService, router, modalService) {
    this._claimService = _claimService;
    this.router = router;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['ClientID', 'GroupID', 'ClaimNumber', 'Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel', 'LevyDutyDesiel', 'TOTALDUE', 'StatusDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._claimService.SelectClaimByStatusID(1).subscribe(data => {
      this.bindDataSource(data);
      if (data != null) {
        this.isData = true;
      }
    });
  }
  bindDataSource(data) {
    this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource(null);
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  SendGroupToSupervisor(id, claimId) {
    //alert('claim id' +claimId )
    // this._claimService.SelectClaimInfoById(claimId)
    // .subscribe(
    //   data =>{
    //     console.log('claim body ' + data[0].ClaimStatusID);
    //   }
    // )
    if (confirm("Are you sure that you want to submit group (" + id + " ) to the supervisors?")) {
      this._claimService.SendGroupToSupervisor(id).subscribe(response => {
        this.bindClaimsGridView();
      }, error => {
        alert(error.message);
      });
    }
  }
  ngSubmitToSupervisor(id, claimId) {
    if (confirm("Are you sure that you want to submit all claims to supervisors?")) {
      this._claimService.SendAllToSupervisor(id).subscribe(response => {
        this.bindClaimsGridView();
      }, error => {
        alert(error.message);
      });
    }
  }
  /**
   * ******************Open Claim Editor**************
   ****************************************************/
  //Open Modal Popup
  goToClaimEditor(content, clientID, vehicleID, claimID, claimGroupID) {
    this.queryString = new _model_claim__WEBPACK_IMPORTED_MODULE_3__.csClaim();
    this.queryString.ClientCessionariID = clientID, this.queryString.ClaimVehicleID = vehicleID, this.queryString.ClaimID = claimID, this.queryString.GroupId = claimGroupID;
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalService.open(content, ngbModalOptions);
  }
  closeModal(content) {
    this.modalService.dismissAll(content);
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
SubmitToSupervisorDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-submit-to-supervisor-dashboard',
  template: _submit_to_supervisor_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_submit_to_supervisor_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SubmitToSupervisorDashboardComponent);


/***/ }),

/***/ 79058:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/supervisor-editor/supervisor-editor.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorEditorComponent": () => (/* binding */ SupervisorEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _supervisor_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervisor-editor.component.html?ngResource */ 35911);
/* harmony import */ var _supervisor_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervisor-editor.component.scss?ngResource */ 25555);
/* harmony import */ var _supervisor_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supervisor_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SupervisorEditorComponent = class SupervisorEditorComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
SupervisorEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-supervisor-editor',
  template: _supervisor_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_supervisor_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SupervisorEditorComponent);


/***/ }),

/***/ 70992:
/*!************************************************************************!*\
  !*** ./src/app/views/forms/Files/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _file_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.component.html?ngResource */ 21053);
/* harmony import */ var _file_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.component.scss?ngResource */ 81897);
/* harmony import */ var _file_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_file_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_fileUpload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/fileUpload.service */ 20298);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);













const MAX_SIZE = 1048576 * 5;
let FileUploadComponent = class FileUploadComponent {
  constructor(uploadService, modalService, sanitizer) {
    this.uploadService = uploadService;
    this.modalService = modalService;
    this.sanitizer = sanitizer;
    this.theFile = null;
    this.messages = [];
    this.displayedColumns = ['FileName', 'FileSize', 'comment', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.bindDocumentGridView();
  }
  onFileChange(event) {
    this.theFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];
      } else {
        // Display error message
        alert("File: " + event.target.files[0].name + " is too large to upload.");
        //this.messages.push("File: " + event.target.files[0].name 
        //  + " is too large to upload.");
      }
    }
  }

  readAndUploadFile(theFile) {
    let file = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_3__.FileToUpload();
    // Set File Information
    file.FileName = theFile.name;
    file.FileSize = theFile.size;
    file.FileType = theFile.type;
    file.ClientID = this.FileQueryString.ClientID;
    file.VehicleId = this.FileQueryString.VehicleId;
    file.ClaimId = this.FileQueryString.ClaimId;
    console.log(' claim upload id ' + this.FileQueryString.ClaimId);
    file.OwnerId = this.FileQueryString.OwnerId;
    file.InvoiceId = this.FileQueryString.InvoiceId;
    file.comment = this.comment;
    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();
    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result.toString();
      // POST to server
      this.uploadService.uploadFile(file).subscribe(resp => {
        // this.messages.push("Upload complete");
        alert(resp.body);
        this.bindDocumentGridView();
        this.closeModal();
      });
    };
    // Read the file    
    reader.readAsDataURL(theFile);
  }
  uploadFile() {
    this.readAndUploadFile(this.theFile);
  }
  downloadFile(object, content) {
    const contentType = content;
    this.uploadService.GetFiles(object).subscribe(data => {
      this.fileInput = data;
      const byteCharacters = atob(data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: contentType
      });
      file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob);
    });
  }
  bindDocumentGridView() {
    this.parm = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_3__.FileQueryString();
    this.parm = this.FileQueryString;
    this.uploadService.GetDocumentByClient(this.parm.ClientID.toString(), this.parm.VehicleId.toString(), this.parm.OwnerId.toString(), this.parm.ClaimId.toString()).subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(null);
    if (data) {
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openModal(content, id) {
    if (this.parm.ClientID == 0 && this.parm.VehicleId == 0 && this.parm.OwnerId == 0 && this.parm.ClaimId == 0) {
      alert('please save a record first before upload a document.');
      return;
    }
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class3'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {
    this.modalRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_fileUpload_service__WEBPACK_IMPORTED_MODULE_2__.FileUploadService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
  }];
  static #_2 = this.propDecorators = {
    FileQueryString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort]
    }]
  };
};
FileUploadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-file-upload',
  template: _file_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_file_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FileUploadComponent);


/***/ }),

/***/ 89880:
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/client-type/client-type.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTypeComponent": () => (/* binding */ ClientTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-type.component.html?ngResource */ 14399);
/* harmony import */ var _client_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-type.component.scss?ngResource */ 1530);
/* harmony import */ var _client_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ 25148);









;



let ClientTypeComponent = class ClientTypeComponent {
  constructor(_lookup, modalService) {
    this._lookup = _lookup;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['ClientTypeID', 'ClientTypeDescription', 'Active', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.PopupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      ClientTypeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      Active: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      sendCatalog: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(true)
    });
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._lookup.GetAllClientType().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  edit(content, id) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csLookups();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this._lookup.GetClientTypeByID(id).subscribe(data => {
      this.object = data;
    });
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  close() {
    this.modalRef.close();
  }
  add(content) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csLookups();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    //this.object = this.PopupForm.value;
    console.log(this.object);
    this._lookup.UpdateClientType(this.object).subscribe(response => {
      var results = response.body;
      alert(results);
      this.bindClaimsGridView();
      this.close();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
ClientTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-client-type',
  template: _client_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientTypeComponent);


/***/ }),

/***/ 21844:
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/nationality/nationality.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NationalityComponent": () => (/* binding */ NationalityComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _nationality_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nationality.component.html?ngResource */ 49922);
/* harmony import */ var _nationality_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nationality.component.scss?ngResource */ 55752);
/* harmony import */ var _nationality_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nationality_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ 25148);









;



let NationalityComponent = class NationalityComponent {
  constructor(_lookup, modalService) {
    this._lookup = _lookup;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['NationalityID', 'NationalityDescription', 'Active', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.PopupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      NationalityDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      Active: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      sendCatalog: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(true)
    });
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._lookup.SelectNationalityAllTypes().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  edit(content, id) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csNationality();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this._lookup.SelectNationalityInfoById(id).subscribe(data => {
      this.object = data[0];
      console.log(this.object);
    });
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  close() {
    this.modalRef.close();
  }
  add(content) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csNationality();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    //this.object = this.PopupForm.value;
    console.log(this.object);
    this._lookup.InsertOrUpdateNationality(this.object).subscribe(response => {
      var results = response.body;
      alert(results);
      this.bindClaimsGridView();
      this.close();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
NationalityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-nationality',
  template: _nationality_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_nationality_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NationalityComponent);


/***/ }),

/***/ 25802:
/*!************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/rank-types/rank-types.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankTypesComponent": () => (/* binding */ RankTypesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rank_types_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rank-types.component.html?ngResource */ 99815);
/* harmony import */ var _rank_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rank-types.component.scss?ngResource */ 79098);
/* harmony import */ var _rank_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rank_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ 25148);









;



let RankTypesComponent = class RankTypesComponent {
  constructor(_lookup, modalService) {
    this._lookup = _lookup;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['RankID', 'RankDescription', 'Active', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.PopupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      RankDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      Active: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      sendCatalog: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(true)
    });
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._lookup.SelectAllOwnersRank().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  edit(content, id) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csRank();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this._lookup.GetRankByID(id).subscribe(data => {
      this.object = data[0];
      console.log(this.object);
    });
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  close() {
    this.modalRef.close();
  }
  add(content) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csRank();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    //this.object = this.PopupForm.value;
    console.log(this.object);
    this._lookup.InsertOrUpdateRank(this.object).subscribe(response => {
      var results = response.body;
      alert(results);
      this.bindClaimsGridView();
      this.close();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
RankTypesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-rank-types',
  template: _rank_types_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_rank_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RankTypesComponent);


/***/ }),

/***/ 46407:
/*!****************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/refund-rates/refund-rates.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundRatesComponent": () => (/* binding */ RefundRatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _refund_rates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund-rates.component.html?ngResource */ 46671);
/* harmony import */ var _refund_rates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund-rates.component.scss?ngResource */ 69741);
/* harmony import */ var _refund_rates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_refund_rates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ 25148);










;



let RefundRatesComponent = class RefundRatesComponent {
  constructor(_lookup, modalService) {
    this._lookup = _lookup;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['RefundTypeDescription', 'RefundEffectiveDate', 'RefundCancellationDate', 'RefundExciseDuty', 'RefundFuelLevy', 'IsActive', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.PopupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      RefundTypeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      RefundEffectiveDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      RefundFuelCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      RefundExciseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      RefundExciseDuty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      RefundFuelLevy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      sendCatalog: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(true)
    });
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._lookup.SelectAllRefundRates().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  edit(content, id) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.dipRefundRate();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class1'
    };
    this._lookup.SelectRefundRateByfuelId(id).subscribe(data => {
      this.object = data[0];
      console.log(this.object);
      this.PopupForm.patchValue({
        RefundEffectiveDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.object.RefundEffectiveDate, 'yyyy-MM-dd', 'en-US')
      });
    });
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  close() {
    this.modalRef.close();
  }
  add(content) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.dipRefundRate();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    var effectiveDate = this.PopupForm.value;
    this.object.RefundEffectiveDate = effectiveDate.RefundEffectiveDate;
    console.log('check ' + this.object);
    this._lookup.UpdateRefundRates(this.object).subscribe(response => {
      var results = response.body;
      alert(results);
      this.bindClaimsGridView();
      this.close();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_10__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort]
    }]
  };
};
RefundRatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-refund-rates',
  template: _refund_rates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_refund_rates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RefundRatesComponent);


/***/ }),

/***/ 67866:
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/title-types/title-types.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleTypesComponent": () => (/* binding */ TitleTypesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _title_types_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title-types.component.html?ngResource */ 14061);
/* harmony import */ var _title_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title-types.component.scss?ngResource */ 12114);
/* harmony import */ var _title_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ 25148);









;



let TitleTypesComponent = class TitleTypesComponent {
  constructor(_lookup, modalService) {
    this._lookup = _lookup;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['TitleID', 'TitleDescription', 'Active', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.PopupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      TitleDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      Active: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      sendCatalog: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(true)
    });
  }
  ngOnInit() {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() {
    this._lookup.SelectAllTitles().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    this.dataSource = null;
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  edit(content, id) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csTitle();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this._lookup.SelectTitleByID(id).subscribe(data => {
      this.object = data[0];
      console.log(this.object);
    });
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  close() {
    this.modalRef.close();
  }
  add(content) {
    this.object = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__.csTitle();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  onSubmit() {
    //this.object = this.PopupForm.value;
    console.log(this.object);
    this._lookup.InsertOrUpdateTitle(this.object).subscribe(response => {
      var results = response.body;
      alert(results);
      this.bindClaimsGridView();
      this.close();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
TitleTypesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-title-types',
  template: _title_types_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_title_types_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TitleTypesComponent);


/***/ }),

/***/ 35677:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportViewerDashboardComponent": () => (/* binding */ ReportViewerDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_viewer_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-viewer-dashboard.component.html?ngResource */ 14018);
/* harmony import */ var _report_viewer_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-viewer-dashboard.component.scss?ngResource */ 14975);
/* harmony import */ var _report_viewer_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_report_viewer_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);






let ReportViewerDashboardComponent = class ReportViewerDashboardComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.reportUrl;
    this.reportUrl = '/DIPS_Reports/';
    this.showParameters = "true";
    /**parameters: any = {
     "SampleStringParameter": null,
     "SampleBooleanParameter" : false,
     "SampleDateTimeParameter" : "11/1/2020",
     "SampleIntParameter" : 1,
     "SampleFloatParameter" : "123.1234",
     "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
     };*/
    this.language = "en-us";
    this.width = 100;
    this.height = 100;
    this.toolbar = "true";
  }
  ngOnInit() {}
  openReport(content, reportName) {
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  close() {
    this.modalRef.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal
  }];
};
ReportViewerDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-report-viewer-dashboard',
  template: _report_viewer_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_report_viewer_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ReportViewerDashboardComponent);


/***/ }),

/***/ 7216:
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/Reports/report-viewer/report-viewer.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportViewerComponent": () => (/* binding */ ReportViewerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_viewer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-viewer.component.html?ngResource */ 34564);
/* harmony import */ var _report_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-viewer.component.scss?ngResource */ 64003);
/* harmony import */ var _report_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_report_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ReportViewerComponent = class ReportViewerComponent {
  constructor() {
    this.reportServer = 'http://ptadvsqc02sql/Reportserver';
    this.reportUrl = 'DIPS_Reports/SampleReport';
    this.showParameters = "true";
    /**parameters: any = {
     "SampleStringParameter": null,
     "SampleBooleanParameter" : false,
     "SampleDateTimeParameter" : "11/1/2020",
     "SampleIntParameter" : 1,
     "SampleFloatParameter" : "123.1234",
     "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
     };*/
    this.language = "en-us";
    this.width = 100;
    this.height = 100;
    this.toolbar = "true";
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
ReportViewerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-report-viewer',
  template: _report_viewer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_report_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ReportViewerComponent);


/***/ }),

/***/ 79291:
/*!****************************************************!*\
  !*** ./src/app/views/forms/date-mask.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateMaskDirective": () => (/* binding */ DateMaskDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);



let DateMaskDirective = class DateMaskDirective {
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  onModelChange(event) {
    this.onInputChange(event, false);
  }
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  onInputChange(event, backspace) {
    if (event != null) {
      let newVal = event.replace(/\D/g, '');
      if (backspace && newVal.length <= 6) {
        newVal = newVal.substring(0, newVal.length - 1);
      }
      if (newVal.length === 0) {
        newVal = '';
      } else if (newVal.length <= 3) {
        newVal = newVal.replace(/^(\d{0,2})/, '$1/');
      } else if (newVal.length <= 3) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
      } else {
        newVal = newVal.substring(0, 8);
        newVal = newVal.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})/, '$1/$2/$3');
      }
      this.ngControl.valueAccessor.writeValue(newVal);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControl
  }];
  static #_2 = this.propDecorators = {
    onModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ngModelChange', ['$event']]
    }],
    keydownBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown.backspace', ['$event']]
    }]
  };
};
DateMaskDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[formControlName][appDateMask]'
})], DateMaskDirective);


/***/ }),

/***/ 12671:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-address/client-address.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAddressComponent": () => (/* binding */ ClientAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-address.component.html?ngResource */ 91329);
/* harmony import */ var _client_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-address.component.scss?ngResource */ 2282);
/* harmony import */ var _client_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClientAddressComponent = class ClientAddressComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
ClientAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-client-address',
  template: _client_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientAddressComponent);


/***/ }),

/***/ 98935:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-bank-details/client-bank-details.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientBankDetailsComponent": () => (/* binding */ ClientBankDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_bank_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-bank-details.component.html?ngResource */ 1261);
/* harmony import */ var _client_bank_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-bank-details.component.scss?ngResource */ 69335);
/* harmony import */ var _client_bank_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_bank_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClientBankDetailsComponent = class ClientBankDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
ClientBankDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-client-bank-details',
  template: _client_bank_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_bank_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientBankDetailsComponent);


/***/ }),

/***/ 61912:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-contacts/client-contacts.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContactsComponent": () => (/* binding */ ClientContactsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_contacts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-contacts.component.html?ngResource */ 35487);
/* harmony import */ var _client_contacts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-contacts.component.scss?ngResource */ 45054);
/* harmony import */ var _client_contacts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_contacts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClientContactsComponent = class ClientContactsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
ClientContactsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-client-contacts',
  template: _client_contacts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_contacts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientContactsComponent);


/***/ }),

/***/ 65686:
/*!***********************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-editor/client-editor.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEditorComponent": () => (/* binding */ ClientEditorComponent)
/* harmony export */ });
/* harmony import */ var C_TFS_Development_DIPS_Angular_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-editor.component.html?ngResource */ 31811);
/* harmony import */ var _client_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-editor.component.scss?ngResource */ 26198);
/* harmony import */ var _client_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _api_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.services/client.service */ 26393);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/client */ 919);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);












let ClientEditorComponent = class ClientEditorComponent {
  constructor(fb, _lookups, _client, modalService) {
    this.fb = fb;
    this._lookups = _lookups;
    this._client = _client;
    this.modalService = modalService;
    this.bindGrindView = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.IsClientIdHidden = false;
    this.clientActive = false;
    this.PopupForm = this.fb.group({
      ClientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientRefDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientRefNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientNationalityID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientEffectiveDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientID: [],
      strClientID: [],
      ClientCancellationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientTypeID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: '',
        readonly: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      //Contact Information
      ClientContactTitleID: [],
      ClientContactInitials: [],
      ClientContactSurname: [],
      ClientContactCell: [],
      ClientContactPhone: [],
      ClientContactPhoneCode: [],
      ClientContactFax: [],
      ClientContactEMail: [],
      Active: ['', {
        disabled: true
      }],
      //physical Address
      ClientAddress1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientAddress2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientAddress3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientAddress4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientAddressPostCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      //Postal address
      ClientPostal1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientPostal2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientPostal3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientPostalPostCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      //Bank Details
      ClientBankAccount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientBankAccountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientBankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientBankBranchCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ClientAllias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      MiscellaneousAccount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
    this.client = new _model_client__WEBPACK_IMPORTED_MODULE_5__.csClient();
  }
  ngOnInit() {
    this.client = this.clientObject;
    this.bindDropdownlist();
    if (this.client.ClientID > 0) {
      this.bindClientPage();
    }
    //console.log("ref date" + this.client.ClientRefDate)
  }

  bindDropdownlist() {
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_6__.FileQueryString();
    this.FileQueryString.ClientID = this.client.ClientID;
    this.FileQueryString.VehicleId = 0;
    this.FileQueryString.OwnerId = 0;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.IdProvided = false;
    this._lookups.GetClientType().subscribe(data => {
      this.clientType = data;
    });
    this._lookups.GetClientTitleType().subscribe(data => {
      this.clientTitle = data;
    });
    this._lookups.GetClientNatinality().subscribe(data => {
      this.clientNatiality = data;
    });
  }
  bindClientPage() {
    this.ngSetFileVariables(this.client.ClientID, 0, 0, 0);
    var currentDate = new Date();
    var cancDate = new Date(this.client.ClientCancellationDate);
    if (cancDate >= currentDate) {
      this.isClinetActive = "Active";
      this.clientActive = true;
    } else {
      this.isClinetActive = "Inactive";
      this.clientActive = false;
    }
    this.PopupForm.patchValue({
      ClientName: this.client.ClientName,
      ClientRefDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(this.client.ClientRefDate, 'yyyy-MM-dd', 'en-US'),
      ClientRefNumber: this.client.ClientRefNumber,
      ClientNationalityID: this.client.ClientNationalityID,
      strClientID: this.client.strClientID,
      ClientID: this.client.ClientID,
      ClientEffectiveDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(this.client.ClientEffectiveDate, 'yyyy-MM-dd', 'en-US'),
      ClientCancellationDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(this.client.ClientCancellationDate, 'yyyy-MM-dd', 'en-US'),
      ClientTypeID: this.client.ClientTypeID,
      Active: this.isClinetActive,
      //Contact Information
      ClientContactTitleID: this.client.ClientContactTitleID,
      ClientContactInitials: this.client.ClientContactInitials,
      ClientContactSurname: this.client.ClientContactSurname,
      ClientContactCell: this.client.ClientContactCell,
      ClientContactPhone: this.client.ClientContactPhone,
      ClientContactPhoneCode: this.client.ClientContactPhoneCode,
      ClientContactFax: this.client.ClientContactFax,
      ClientContactEMail: this.client.ClientContactEMail,
      //physical Address
      ClientAddress1: this.client.ClientAddress1,
      ClientAddress2: this.client.ClientAddress2,
      ClientAddress3: this.client.ClientAddress3,
      ClientAddress4: this.client.ClientAddress4,
      ClientAddressPostCode: this.client.ClientAddressPostCode,
      //Postal address
      ClientPostal1: this.client.ClientPostal1,
      ClientPostal2: this.client.ClientPostal2,
      ClientPostal3: this.client.ClientPostal3,
      ClientPostalPostCode: this.client.ClientPostalPostCode,
      //Bank Details
      ClientBankAccount: this.client.ClientBankAccount,
      ClientBankAccountType: this.client.ClientBankAccountType,
      ClientBankName: this.client.ClientBankName,
      ClientBankBranchCode: this.client.ClientBankBranchCode,
      ClientAllias: this.client.ClientAllias,
      MiscellaneousAccount: this.client.MiscellaneousAccount
    });
  }
  onSubmit() {
    var _this = this;
    return (0,C_TFS_Development_DIPS_Angular_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.client = _this.PopupForm.value;
      _this._client.SaveOrUpdateClient(_this.client).subscribe(response => {
        alert('The record was successfully saved.');
        _this.Close();
        _this.bindGrindView.emit(); //emit is a function and you can pass the value
      }, error => {
        console.error(error.message);
        confirm('custom Errormessage: ' + error.message);
      });
    })();
  }
  Close() {
    this.clientObject = null;
    this.modalService.dismissAll();
  }
  onNavChange(changeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }
  ngSetFileVariables(clientId, vehicleId, ownerid, claimId) {
    this.FileQueryString.ClientID = clientId;
    this.FileQueryString.VehicleId = vehicleId;
    this.FileQueryString.OwnerId = ownerid;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = claimId;
    this.FileQueryString.IdProvided = true;
    console.log('client Id:' + this.FileQueryString.ClientID + 'vehicle Id: ' + this.FileQueryString.VehicleId + 'owner id :' + this.FileQueryString.OwnerId + 'Claim Id : ' + this.FileQueryString.ClaimId + 'is Id Providerd : ' + this.FileQueryString.IdProvided);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
  }, {
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_4__.lookupService
  }, {
    type: _api_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    bindGrindView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output,
      args: ["bindDropDownList"]
    }],
    clientObject: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    childClientObject: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
ClientEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-client-editor',
  template: _client_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_client_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ClientEditorComponent);


/***/ }),

/***/ 59956:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-information/client-information.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientInformationComponent": () => (/* binding */ ClientInformationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_information_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-information.component.html?ngResource */ 94500);
/* harmony import */ var _client_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-information.component.scss?ngResource */ 68576);
/* harmony import */ var _client_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/client */ 919);








let ClientInformationComponent = class ClientInformationComponent {
  constructor(fb, _lookups) {
    this.fb = fb;
    this._lookups = _lookups;
    this.ClientInforForm = this.fb.group({
      ClientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ClientRefDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ClientRefNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      strClientID: [],
      ClientID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ClientEffectiveDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ClientCancellationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.client = new _model_client__WEBPACK_IMPORTED_MODULE_3__.csClient();
  }
  ngOnInit() {
    this.client = this.childClientObject;
    this.updateProfile();
  }
  updateProfile() {
    var clientCancellationDate = new Date(this.client.ClientCancellationDate);
    var cDate = new Date();
    if (clientCancellationDate >= cDate) {
      this.clientActive = true;
    } else {
      this.clientActive = false;
    }
    this.ClientInforForm.patchValue({
      ClientName: this.client.ClientName,
      ClientRefNumber: this.client.ClientRefNumber,
      strClientID: this.client.strClientID,
      ClientID: this.client.ClientID,
      ClientEffectiveDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(this.client.ClientEffectiveDate, 'yyyy-MM-dd', 'en-US'),
      ClientCancellationDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(this.client.ClientCancellationDate, 'yyyy-MM-dd', 'en-US'),
      ClientRefDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(this.client.ClientRefDate, 'yyyy-MM-dd', 'en-US')
    });
    this.ClientInforForm.controls['ClientName'].disable();
    this.ClientInforForm.controls['ClientRefNumber'].disable();
    this.ClientInforForm.controls['ClientEffectiveDate'].disable();
    this.ClientInforForm.controls['ClientCancellationDate'].disable();
    this.ClientInforForm.controls['ClientRefDate'].disable();
    this.ClientInforForm.controls['strClientID'].disable();
  }
  submit() {
    this.client = this.ClientInforForm.value;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }];
  static #_2 = this.propDecorators = {
    childClientObject: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
ClientInformationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-client-information',
  template: _client_information_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_information_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientInformationComponent);


/***/ }),

/***/ 72146:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-vehicles/client-vehicles.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientVehiclesComponent": () => (/* binding */ ClientVehiclesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_vehicles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-vehicles.component.html?ngResource */ 28074);
/* harmony import */ var _client_vehicles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-vehicles.component.scss?ngResource */ 38586);
/* harmony import */ var _client_vehicles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_vehicles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/client.service */ 26393);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/client */ 919);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api.services/vehicle.service */ 55433);
/* harmony import */ var _model_vehicles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../model/vehicles */ 13139);














let ClientVehiclesComponent = class ClientVehiclesComponent {
  constructor(_clientService, modalService, _vehicleService, router, _vehicle) {
    this._clientService = _clientService;
    this.modalService = modalService;
    this._vehicleService = _vehicleService;
    this.router = router;
    this._vehicle = _vehicle;
    //------------------datasource---------------------
    this.listObject = [];
    this.displayedColumns = ['ClientID', 'ClientAllias', 'VehicleRegistration', 'VehicleCancellationDate', 'VehicleStatus', 'actions'];
  }
  ngOnInit() {
    this.bindGrindView();
  }
  bindGrindView() {
    this._vehicle.GetAllVehiclesByClients().subscribe(data => {
      this.bindDataSource(data);
      //debugger;
      this.hasClaims = true;
      if (!data) {
        this.hasClaims = true;
      }
    });
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_7__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  open(content) {
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_4__.FileQueryString();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.vehicleObject = new _model_vehicles__WEBPACK_IMPORTED_MODULE_6__.csVehicles();
    this.vehicleObject.ClientID = this.clientId;
    this.vehicleObject.Mode = "New";
    this.vehicleObject.VehicleID = 0;
    this.modalHeader = "Add Or Edit User";
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_4__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.modalService.open(content, ngbModalOptions);
  }
  edit(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_4__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.vehicleObject = null;
    console.log('v id' + id);
    this._vehicleService.GetVehicleByID(id).subscribe(data => {
      this.vehicleObject = data;
    });
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  close(content) {
    // this.bindGrindView();
    this.vehicleObject = null;
    this.modalService.dismissAll();
  }
  btnClick(id) {
    this.childClientObject = new _model_client__WEBPACK_IMPORTED_MODULE_3__.csClient();
    this._clientService.GetClientByID(id).subscribe(data => {
      this.childClientObject = data;
    });
    //this.router.navigate(['/registration/clientVehicles']);
    // this.router.navigateByUrl('/registration/clientVehicles',{state:{}});
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_client_service__WEBPACK_IMPORTED_MODULE_2__.ClientService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }, {
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort]
    }]
  };
};
ClientVehiclesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-client-vehicles',
  template: _client_vehicles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_client_vehicles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ClientVehiclesComponent);


/***/ }),

/***/ 59471:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/registration/clientdashboard/clientdashboard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientdashboardComponent": () => (/* binding */ ClientdashboardComponent)
/* harmony export */ });
/* harmony import */ var C_TFS_Development_DIPS_Angular_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _clientdashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientdashboard.component.html?ngResource */ 84600);
/* harmony import */ var _clientdashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientdashboard.component.scss?ngResource */ 94771);
/* harmony import */ var _clientdashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clientdashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.services/client.service */ 26393);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/client */ 919);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);












let ClientdashboardComponent = class ClientdashboardComponent {
  constructor(_clientService, modalService) {
    this._clientService = _clientService;
    this.modalService = modalService;
    //------------------datasource---------------------
    this.listObject = [];
    this.displayedColumns = ['ClientID', 'ClientAllias', 'ClientTypeDescription', 'ClientStatus', 'actions'];
  }
  ngOnInit() {
    this.bindGrindView();
  }
  bindGrindView() {
    this._clientService.GetAllClient().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    var _this = this;
    return (0,C_TFS_Development_DIPS_Angular_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (data) {
        _this.listObject = data;
        _this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_6__.MatLegacyTableDataSource(data);
        _this.paginator.pageSize = 40;
        _this.paginator.hidePageSize = true;
        _this.dataSource.paginator = _this.paginator;
        // this.dataSource.sort = this.sort;
      }
    })();
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //Open Modal Popup
  open(content) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.modalHeader = "Add Or Edit User";
    this.clientObject = new _model_client__WEBPACK_IMPORTED_MODULE_4__.csClient();
    this.modalService.open(content, ngbModalOptions);
  }
  edit(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.clientObject = null;
    this._clientService.GetClientByID(id).subscribe(data => {
      this.clientObject = data;
    });
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  close(content) {
    this.bindGrindView();
    this.clientObject = null;
    this.modalService.dismissAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_9__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort]
    }]
  };
};
ClientdashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-clientdashboard',
  template: _clientdashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_clientdashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ClientdashboardComponent);


/***/ }),

/***/ 97234:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owner-dashboard/owner-dashboard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnerDashboardComponent": () => (/* binding */ OwnerDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _owner_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner-dashboard.component.html?ngResource */ 53810);
/* harmony import */ var _owner_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-dashboard.component.scss?ngResource */ 36780);
/* harmony import */ var _owner_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_owner_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/owner.service */ 8388);
/* harmony import */ var _model_owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/owner */ 79923);











let OwnerDashboardComponent = class OwnerDashboardComponent {
  constructor(_ownerService, modalService) {
    this._ownerService = _ownerService;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['TitleDescription', 'SurnameAndInitials', 'OwnerPassportNumber', 'OwnerMaritalStatus', 'NationalityDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.panelOpenState = false;
  }
  ngOnInit() {
    this.bindOnwerList();
  }
  bindOnwerList() {
    this._ownerService.GetAllOwners().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  open(content) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.ownerObject = new _model_owner__WEBPACK_IMPORTED_MODULE_3__.csOwner();
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  edit(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.ownerObject = null;
    this._ownerService.SelectOwnerById(id).subscribe(data => {
      this.ownerObject = data;
      console.log("Dasboard Onwer Id : " + JSON.stringify(this.ownerObject));
    });
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  close(content) {
    // this.bindGrindView();
    // this.vehicleObject = null;
    this.modalService.dismissAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_owner_service__WEBPACK_IMPORTED_MODULE_2__.OwnerService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_8__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort]
    }]
  };
};
OwnerDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-owner-dashboard',
  template: _owner_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_owner_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OwnerDashboardComponent);


/***/ }),

/***/ 9902:
/*!*********************************************************************************!*\
  !*** ./src/app/views/forms/registration/owner-editor/owner-editor.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnerEditorComponent": () => (/* binding */ OwnerEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _owner_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner-editor.component.html?ngResource */ 45316);
/* harmony import */ var _owner_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-editor.component.scss?ngResource */ 73860);
/* harmony import */ var _owner_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_owner_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _api_services_owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.services/owner.service */ 8388);
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.services/vehicle.service */ 55433);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);














let OwnerEditorComponent = class OwnerEditorComponent {
  constructor(ownerForm, _lookups, _vehicleService, _ownerService, modalService) {
    this.ownerForm = ownerForm;
    this._lookups = _lookups;
    this._vehicleService = _vehicleService;
    this._ownerService = _ownerService;
    this.modalService = modalService;
    this.displayedColumns = ['VehicleRegistration', 'VehicleRefNumber', 'VehicleCancellationDate', 'VehicleStatus'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
    this.AmbassyForm = this.ownerForm.group({
      OwnerInitials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      OwnerSurname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      OwnerPassportNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      OwnerMaritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      TitleID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      NationalityID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      RankID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  ngOnInit() {
    this.BindDropdownlist();
    this.BindOwnerDetails();
    this.ownerInfo = this.ownerObject;
  }
  BindDropdownlist() {
    this._lookups.GetClientTitleType().subscribe(data => {
      this.clientTitle = data;
    });
    this._lookups.GetClientNatinality().subscribe(data => {
      this.clientNatiality = data;
    });
    this._lookups.GetRank().subscribe(data => {
      this.ownerRank = data;
    });
  }
  onSubmit() {
    //console.log('Insert onwer befor' + this.ownerObject[0] )
    if (this.ownerObject[0] == null) {
      this.InsertVehicleInfo();
    } else {
      this.UpdateOwnerInfo();
    }
  }
  BindOwnerDetails() {
    var currentDate = new Date();
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    if (this.ownerObject[0] != null) {
      this.FileQueryString.ClientID = 0;
      this.FileQueryString.VehicleId = 0;
      this.FileQueryString.OwnerId = this.ownerObject[0].OwnerID;
      this.FileQueryString.InvoiceId = 0;
      this.FileQueryString.IdProvided = true;
      this.AmbassyForm.patchValue({
        OwnerSurname: this.ownerObject[0].OwnerSurname,
        OwnerInitials: this.ownerObject[0].OwnerInitials,
        TitleID: this.ownerObject[0].TitleID,
        OwnerPassportNumber: this.ownerObject[0].OwnerPassportNumber,
        RankID: this.ownerObject[0].RankID,
        NationalityID: this.ownerObject[0].NationalityID,
        OwnerMaritalStatus: this.ownerObject[0].OwnerMaritalStatus == true ? 1 : 0
      });
      this.bindGrindView(this.ownerObject[0].OwnerID);
    }
  }
  InsertVehicleInfo() {
    this.ownerObject = this.AmbassyForm.value;
    this._ownerService.InsertOwner(this.ownerObject).subscribe(response => {
      confirm('Owner information submitted successfully');
      this.close();
    }, error => {
      confirm('custom Errormessage: ' + error.message);
    });
  }
  UpdateOwnerInfo() {
    this.ownerInfo = this.AmbassyForm.value;
    this.ownerInfo.OwnerID = this.ownerObject[0].OwnerID;
    this._ownerService.UpdateOwner(this.ownerInfo).subscribe(response => {
      // this.vehicleResults = response.message;   
      this.close();
      confirm('Owner information updated successfully');
    }, error => {
      confirm('custom Errormessage: ' + error.message);
    });
    // update Onwer Information
  }

  close() {
    // this.bindGrindView();
    this.modalService.dismissAll({
      'dismissed': true
    });
  }
  bindGrindView(id) {
    this._vehicleService.SelectVehicleByOwnerId(id).subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
  }, {
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_2__.lookupService
  }, {
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__.VehicleService
  }, {
    type: _api_services_owner_service__WEBPACK_IMPORTED_MODULE_3__.OwnerService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    ownerObject: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort]
    }]
  };
};
OwnerEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-owner-editor',
  template: _owner_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_owner_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OwnerEditorComponent);


/***/ }),

/***/ 51495:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owners-not-linked/owners-not-linked.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnersNotLinkedComponent": () => (/* binding */ OwnersNotLinkedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _owners_not_linked_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owners-not-linked.component.html?ngResource */ 12647);
/* harmony import */ var _owners_not_linked_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owners-not-linked.component.scss?ngResource */ 69128);
/* harmony import */ var _owners_not_linked_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_owners_not_linked_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/owner.service */ 8388);
/* harmony import */ var _model_owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/owner */ 79923);











let OwnersNotLinkedComponent = class OwnersNotLinkedComponent {
  constructor(_ownerService, modalService) {
    this._ownerService = _ownerService;
    this.modalService = modalService;
    this.listObject = [];
    this.displayedColumns = ['TitleDescription', 'SurnameAndInitials', 'OwnerPassportNumber', 'OwnerMaritalStatus', 'NationalityDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
    this.panelOpenState = false;
  }
  ngOnInit() {
    this.bindOnwerList();
  }
  bindOnwerList() {
    this._ownerService.SelectOwnersNotLinkedToVehicle().subscribe(data => {
      this.bindDataSource(data);
    });
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  open(content) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.ownerObject = new _model_owner__WEBPACK_IMPORTED_MODULE_3__.csOwner();
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  edit(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.ownerObject = null;
    this._ownerService.SelectOwnerById(id).subscribe(data => {
      this.ownerObject = data;
      console.log("Dasboard Onwer Id : " + JSON.stringify(this.ownerObject));
    });
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  close(content) {
    // this.bindGrindView();
    // this.vehicleObject = null;
    this.modalService.dismissAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_owner_service__WEBPACK_IMPORTED_MODULE_2__.OwnerService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_8__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort]
    }]
  };
};
OwnersNotLinkedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-owners-not-linked',
  template: _owners_not_linked_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_owners_not_linked_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OwnersNotLinkedComponent);


/***/ }),

/***/ 53327:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/forms/registration/vehicle-dashboard/vehicle-dashboard.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDashboardComponent": () => (/* binding */ VehicleDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vehicle_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-dashboard.component.html?ngResource */ 47338);
/* harmony import */ var _vehicle_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-dashboard.component.scss?ngResource */ 48940);
/* harmony import */ var _vehicle_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vehicle_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/vehicle.service */ 55433);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _model_vehicles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/vehicles */ 13139);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _api_services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.services/client.service */ 26393);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);














let VehicleDashboardComponent = class VehicleDashboardComponent {
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor(_vehicleService, modalService, route, _clientService) {
    this._vehicleService = _vehicleService;
    this.modalService = modalService;
    this.route = route;
    this._clientService = _clientService;
    //------------------datasource---------------------
    this.listObject = [];
    this.displayedColumns = ['VehicleRegistration', 'VehicleRefNumber', 'VehicleCancellationDate', 'VehicleStatus', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.clientId = this.route.snapshot.params['clientId'];
    if (this.clientId > 0) {
      this.bindGrindView();
    }
  }
  bindGrindView() {
    this.childClientObject = null;
    this.clientId = this.route.snapshot.params['clientId'];
    if (this.clientId > 0) {
      this._clientService.GetClientByID(this.clientId).subscribe(client => {
        this.childClientObject = client;
      });
      this._vehicleService.SelectVehicleByClientId(this.clientId).subscribe(data => {
        this.bindDataSource(data);
      });
    }
  }
  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_7__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //Open Modal Popup
  open(content) {
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__.FileQueryString();
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.vehicleObject = new _model_vehicles__WEBPACK_IMPORTED_MODULE_3__.csVehicles();
    this.vehicleObject.ClientID = this.clientId;
    this.vehicleObject.Mode = "New";
    this.vehicleObject.VehicleID = 0;
    this.modalHeader = "Add Or Edit User";
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.modalService.open(content, ngbModalOptions);
  }
  edit(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_5__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    this.vehicleObject = null;
    this._vehicleService.GetVehicleByID(id).subscribe(data => {
      this.vehicleObject = data;
    });
    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  close(content) {
    // this.bindGrindView();
    this.vehicleObject = null;
    this.modalService.dismissAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__.VehicleService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _api_services_client_service__WEBPACK_IMPORTED_MODULE_4__.ClientService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_11__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort]
    }]
  };
};
VehicleDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-vehicle-dashboard',
  template: _vehicle_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_vehicle_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], VehicleDashboardComponent);


/***/ }),

/***/ 37754:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/registration/vehicle-editor/vehicle-editor.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleEditorComponent": () => (/* binding */ VehicleEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vehicle_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-editor.component.html?ngResource */ 70234);
/* harmony import */ var _vehicle_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-editor.component.scss?ngResource */ 86544);
/* harmony import */ var _vehicle_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vehicle_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _api_services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/client.service */ 26393);
/* harmony import */ var _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.services/lookup.Service */ 50390);
/* harmony import */ var _api_services_owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.services/owner.service */ 8388);
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api.services/vehicle.service */ 55433);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _model_FileToUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../model/FileToUpload */ 58656);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);

















let VehicleEditorComponent = class VehicleEditorComponent {
  constructor(clientForm, _clientService, _lookups, _vehiclesService, _ownerService, modalService, router) {
    this.clientForm = clientForm;
    this._clientService = _clientService;
    this._lookups = _lookups;
    this._vehiclesService = _vehiclesService;
    this._ownerService = _ownerService;
    this.modalService = modalService;
    this.router = router;
    this.bindGridViewEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.listObject = [];
    this.displayedColumns = ['TitleDescription', 'SurnameAndInitials', 'OwnerPassportNumber', 'OwnerMaritalStatus', 'NationalityDescription', 'actions'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
    this.panelOpenState = false;
    this.AmbassyForm = this.clientForm.group({
      VehicleRegistration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleRefNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleRefDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleMake: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleTankCapacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleEffectiveDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehiclePurchaseDate: [''],
      VehicleCancellationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      TemporaryRegistration: [],
      VehiclesVIN: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      FuelTypeID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      VehicleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      OwnerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      OwnerID: [],
      RegistrationReason: [''],
      VehicleStatus: [],
      ClientTypeID: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl({
        value: '',
        readonly: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
      //Onwner information
      OwnerInitials: [''],
      OwnerSurname: [''],
      OwnerPassportNumber: [''],
      OwnerMaritalStatus: [''],
      TitleID: [''],
      NationalityID: [''],
      RankID: [''],
      ClientID: ['']
    });
  }
  ngOnInit() {
    this.BindDropdownlist();
    this.BindVehicleDetails();
    // console.log("vehicle ID: " + this.vehicleObject.VehicleID);
    //this.bindOnwerList();
    //this.GetClientByid(this.vehicleObject.ClientID.toString());
    //console.log("Client ID: " + this.vehicleObject.ClientID.toString() )
  }

  BindDropdownlist() {
    this._clientService.GetAllClient().subscribe(data => {
      this.clients = data;
    });
    if (this.vehicleObject.ClientID != undefined) {
      this._ownerService.SelectOwnerByClientId(this.vehicleObject.ClientID).subscribe(data => {
        this.onwers = data;
      });
    }
    this._lookups.GetClientTitleType().subscribe(data => {
      this.clientTitle = data;
    });
    this._lookups.GetClientNatinality().subscribe(data => {
      this.clientNatiality = data;
    });
    this._lookups.GetRank().subscribe(data => {
      this.ownerRank = data;
    });
  }
  BindVehicleDetails() {
    var currentDate = new Date();
    var vehicleDeregistered = new Date(this.vehicleObject.VehicleCancellationDate);
    this.FileQueryString = new _model_FileToUpload__WEBPACK_IMPORTED_MODULE_6__.FileQueryString();
    this.FileQueryString.IdProvided = false;
    if (vehicleDeregistered >= currentDate) {
      this.vehicleStatus = "Active";
    } else {
      this.vehicleStatus = "Inactive";
    }
    this.AmbassyForm.patchValue({
      VehicleCancellationDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(new Date("9999/01/01"), 'yyyy-MM-dd', 'en-US')
    });
    if (this.vehicleObject.Mode != "New") {
      // console.log("mode " + this.vehicleObject.Mode)
      this.ngSetFileVariables(0, this.vehicleObject.VehicleID, 0, 0);
      this.AmbassyForm.patchValue({
        VehicleRegistration: this.vehicleObject.VehicleRegistration,
        VehicleRefNumber: this.vehicleObject.VehicleRefNumber,
        VehicleRefDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(this.vehicleObject.VehicleRefDate, 'yyyy-MM-dd', 'en-US'),
        VehicleMake: this.vehicleObject.VehicleMake,
        VehicleModel: this.vehicleObject.VehicleModel,
        VehicleTankCapacity: this.vehicleObject.VehicleTankCapacity,
        VehicleEffectiveDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(this.vehicleObject.VehicleEffectiveDate, 'yyyy-MM-dd', 'en-US'),
        VehiclePurchaseDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(this.vehicleObject.VehiclePurchaseDate, 'yyyy-MM-dd', 'en-US'),
        VehicleCancellationDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(this.vehicleObject.VehicleCancellationDate, 'yyyy-MM-dd', 'en-US'),
        TemporaryRegistration: this.vehicleObject.TemporaryRegistration,
        VehiclesVIN: this.vehicleObject.VehiclesVIN,
        FuelTypeID: this.vehicleObject.FuelTypeID.toString(),
        VehicleType: this.vehicleObject.VehicleType,
        OwnerType: this.vehicleObject.OwnerType,
        OwnerID: this.vehicleObject.OwnerID,
        RegistrationReason: this.vehicleObject.RegistrationReason,
        VehicleStatus: this.vehicleStatus
      });
      this.ownerType = this.vehicleObject.OwnerType;
      //console.log("this.ownerType," + this.ownerType)
      if (this.vehicleObject.OwnerID > 0) {
        this._ownerService.SelectOwnerById(this.vehicleObject.OwnerID).subscribe(ownerInfor => {
          this.Owner = ownerInfor[0];
          this.AmbassyForm.patchValue({
            OwnerSurname: this.Owner.OwnerSurname,
            OwnerInitials: this.Owner.OwnerInitials,
            TitleID: this.Owner.TitleID,
            OwnerPassportNumber: this.Owner.OwnerPassportNumber,
            RankID: this.Owner.RankID,
            NationalityID: this.Owner.NationalityID,
            OwnerMaritalStatus: this.Owner.OwnerMaritalStatus == 'true' ? 1 : 0
          });
        });
      }
    } else {
      this.vehicleObject.ClientID = 0;
    }
  }
  onSubmit() {
    if (this.vehicleObject.VehicleID <= 0) {
      this.InsertVehicleInfo();
    } else {
      this.UpdateVehicleInfo();
    }
  }
  InsertVehicleInfo() {
    this.vehicle = this.AmbassyForm.value;
    // console.log('vehicle Id:' + this.vehicleObject.ClientID)    
    this.vehicle.ClientID = this.vehicleObject.ClientID;
    var effectiveDate = new Date(this.vehicle.VehicleEffectiveDate);
    var refDate = new Date(this.vehicle.VehicleRefDate);
    if (effectiveDate > refDate) {
      confirm('The vehicle effective date cannot be greater than the Reference Date');
      return;
    }
    this.vehicle.VehiclePurchaseDate = new Date();
    this._vehiclesService.InsertIntoVehicle(this.vehicle).subscribe(response => {
      this.bindGridViewEmitter.emit();
      this.vehicleResults = response.message;
      this.vehicleObject.VehicleID = response.body.VehicleID;
      //console.log(JSON.stringify(this.vehicleObject.VehicleID))
      this.ngGetVehicleByID(this.vehicleObject.VehicleID);
      this.BindVehicleDetails();
      this.FileQueryString.IdProvided = true;
      if (response.body.OwnerStatus != null) {
        this.FileQueryString.IdProvided = true;
        confirm('Vehicle saved successfully ' + response.body.OwnerStatus);
      } else {
        var c = confirm('Vehicle inserted successfully.Do you want to print letter?');
        if (c == false) {
          console.log("fonfi: " + c);
          this.close();
          this.router.navigate(['registration/vehicles'], {
            queryParams: {
              'clientId': ''
            }
          });
        }
      }
    }, error => {
      console.error(error.message);
      confirm('custom Errormessage: ' + error.message);
    });
  }
  UpdateVehicleInfo() {
    this.vehicle = this.AmbassyForm.value;
    this.vehicle.ClientID = this.vehicleObject.ClientID;
    this.vehicle.VehicleID = this.vehicleObject.VehicleID;
    var effectiveDate = new Date(this.vehicle.VehicleEffectiveDate);
    var refDate = new Date(this.vehicle.VehicleRefDate);
    //console.log("effectiveDate" + effectiveDate)
    // console.log("refDate" + refDate)
    if (effectiveDate > refDate) {
      confirm('The vehicle effective date cannot be greater than the Reference Date');
      return;
    }
    this._vehiclesService.UpdateVehicle(this.vehicle).subscribe(response => {
      this.vehicleResults = response.message;
      this.bindGridViewEmitter.emit();
      if (response.body.OwnerStatus != null) {
        confirm('Vehicle updated successfully ' + response.body.OwnerStatus);
      } else {
        var c = confirm('Vehicle inserted successfully.Do you want to print letter?');
        if (!c) {
          this.close();
        }
      }
    }, error => {
      console.error(error.message);
      confirm('custom Errormessage: ' + error.message);
    });
    // update Onwer Information
  }

  findInvalidControls() {
    //console.log("get invalid controls")
    const invalid = [];
    const controls = this.AmbassyForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    //console.log('invalid Controls:' + invalid);
  }

  onOnclientSelected(event) {
    //console.log('cleintId ' + this.AmbassyForm.value.ClientID)
    this.vehicleObject.ClientID = this.AmbassyForm.value.ClientID, this.vehicleObject.Mode = "New";
    if (this.vehicleObject.ClientID != undefined) {
      this._ownerService.SelectOwnerByClientId(this.vehicleObject.ClientID).subscribe(data => {
        this.onwers = data;
      });
    }
  }
  ngGetVehicleByID(id) {
    this._vehiclesService.GetVehicleByID(id).subscribe(data => {
      this.vehicleObject = data;
    });
  }
  onOwnerSelected(event) {
    this.AmbassyForm.patchValue({
      OwnerSurname: null,
      OwnerInitials: null,
      TitleID: null,
      OwnerPassportNumber: null,
      RankID: null,
      NationalityID: null,
      OwnerMaritalStatus: null
    });
    if (this.AmbassyForm.value.OwnerID > 0) {
      this._ownerService.SelectOwnerById(this.AmbassyForm.value.OwnerID).subscribe(ownerInfor => {
        this.Owner = ownerInfor[0];
        this.AmbassyForm.patchValue({
          OwnerSurname: this.Owner.OwnerSurname,
          OwnerInitials: this.Owner.OwnerInitials,
          TitleID: this.Owner.TitleID,
          OwnerPassportNumber: this.Owner.OwnerPassportNumber,
          RankID: this.Owner.RankID,
          NationalityID: this.Owner.NationalityID,
          OwnerMaritalStatus: this.Owner.OwnerMaritalStatus == 'true' ? 1 : 0
        });
      });
    }
  }
  close() {
    // this.bindGrindView();
    this.modalService.dismissAll({
      'dismissed': true
    });
  }
  ngSetFileVariables(clientId, vehicleId, ownerid, claimId) {
    this.FileQueryString.ClientID = clientId;
    this.FileQueryString.VehicleId = vehicleId;
    this.FileQueryString.OwnerId = ownerid;
    this.FileQueryString.InvoiceId = 0;
    this.FileQueryString.ClaimId = claimId;
    this.FileQueryString.IdProvided = true;
    //console.log('client Id:' + this.FileQueryString.ClientID +
    //  'vehicle Id: ' + this.FileQueryString.VehicleId + 'owner id :' + this.FileQueryString.OwnerId
    //  + 'Claim Id : ' + this.FileQueryString.ClaimId + 'is Id Providerd : ' + this.FileQueryString.IdProvided)
  }

  openReport(content, reportName) {
    //this.close()
    if (reportName != null) {
      this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.reportUrl;
      this.reportName = reportName;
      this.reportUrl = 'DIPS_Reports/' + reportName;
      let ngbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'my-class'
      };
      this.modalRef = this.modalService.open(content, ngbModalOptions);
    }
  }
  changeOwnerType(data) {
    //console.log('Owener type :' + data.value);
    this.ownerType = data.value;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder
  }, {
    type: _api_services_client_service__WEBPACK_IMPORTED_MODULE_2__.ClientService
  }, {
    type: _api_services_lookup_Service__WEBPACK_IMPORTED_MODULE_3__.lookupService
  }, {
    type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService
  }, {
    type: _api_services_owner_service__WEBPACK_IMPORTED_MODULE_4__.OwnerService
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }];
  static #_2 = this.propDecorators = {
    bindGridViewEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ["bindGridViewEmitter"]
    }],
    vehicleObject: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_14__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort]
    }]
  };
};
VehicleEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-vehicle-editor',
  template: _vehicle_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_vehicle_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], VehicleEditorComponent);


/***/ }),

/***/ 79394:
/*!************************************************************************************!*\
  !*** ./src/app/views/forms/usermanager/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDashboardComponent": () => (/* binding */ UserDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-dashboard.component.html?ngResource */ 64504);
/* harmony import */ var _user_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-dashboard.component.scss?ngResource */ 77152);
/* harmony import */ var _user_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/AuthenticatedUsers */ 78623);
/* harmony import */ var _api_services_user_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.services/user.manager */ 47333);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-table */ 96538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 47101);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);










let UserDashboardComponent = class UserDashboardComponent {
  constructor(_UserManager, modalService) {
    this._UserManager = _UserManager;
    this.modalService = modalService;
    //------------------datasource---------------------
    this.listObject = [];
    this.displayedColumns = ['UserCode', 'UserFullName', 'RoleName', 'Lastmodified', 'IsActive', 'actions'];
    this.childList = new _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_2__.AuthenticatedUser();
  }
  ngOnInit() {
    this.bindDropDownList();
  }
  bindDropDownList() {
    this._UserManager.GetAllUsers().subscribe(data => {
      this.bindDataSource(data);
      //console.log(data)
    });
  }

  bindDataSource(data) {
    if (data) {
      this.listObject = data;
      this.dataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(data);
      this.paginator.pageSize = 10;
      this.paginator.hidePageSize = true;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //Open Modal Popup
  open(content) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.childList = new _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_2__.AuthenticatedUser();
    this.modalHeader = "Add Or Edit User";
    this.modalService.open(content, ngbModalOptions);
  }
  edit(content, id) {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class'
    };
    this.childList = null;
    this._UserManager.GetHttpUserBySID(id).subscribe(data => {
      this.childList = data;
      // console.log("Viewer:" + this.childList.UserFullName)
    });

    this.modalHeader = "Add Or Edit Users";
    this.modalService.open(content, ngbModalOptions);
  }
  close(content) {
    this.bindDropDownList();
    this.childList = null;
    this.modalService.dismissAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_user_manager__WEBPACK_IMPORTED_MODULE_3__.UserManager
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_7__.MatLegacyPaginator]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort]
    }]
  };
};
UserDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-user-dashboard',
  template: _user_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_user_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserDashboardComponent);


/***/ }),

/***/ 23661:
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/usermanager/user-editor/user-editor.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditorComponent": () => (/* binding */ UserEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-editor.component.html?ngResource */ 38114);
/* harmony import */ var _user_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-editor.component.scss?ngResource */ 75136);
/* harmony import */ var _user_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_services_user_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.services/user.manager */ 47333);
/* harmony import */ var _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/AuthenticatedUsers */ 78623);








let UserEditorComponent = class UserEditorComponent {
  constructor(_UserManager, fb, modalService) {
    this._UserManager = _UserManager;
    this.fb = fb;
    this.modalService = modalService;
    this.bindGrindView = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.userObject = new _model_AuthenticatedUsers__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedUser();
    this.PopupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      UserCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      UserFullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      IsActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      Role: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      sendCatalog: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(true)
    });
  }
  ngOnInit() {
    this.userObject = this.childList;
    this.bindDropdownlist();
    //console.log("Editor:" + this.userObject.UserFullName)
  }

  bindDropdownlist() {
    this._UserManager.GetUserRoles().subscribe(data => {
      this.lstRole = data;
    });
  }
  onSubmit() {
    console.log(this.userObject);
    this._UserManager.Save(this.userObject).subscribe(response => {
      this.bindGrindView.emit();
      alert('The record was successfully saved.');
      this.modalService.dismissAll();
    }, error => {
      console.error(error.message);
      confirm('custom Errormessage: ' + error.message);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_services_user_manager__WEBPACK_IMPORTED_MODULE_2__.UserManager
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
  }];
  static #_2 = this.propDecorators = {
    bindGrindView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output,
      args: ["bindDropDownList"]
    }],
    childList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  };
};
UserEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-user-editor',
  template: _user_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_user_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserEditorComponent);


/***/ }),

/***/ 93:
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 50514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let LoginComponent = class LoginComponent {};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-dashboard',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], LoginComponent);


/***/ }),

/***/ 60193:
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 13956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let RegisterComponent = class RegisterComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-dashboard',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], RegisterComponent);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
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
  reportUrl: 'http://ptaensqc16sql01/SSRSReportserver/'
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
  useJit: true,
  preserveWhitespaces: true
}).catch(err => console.log(err));

/***/ }),

/***/ 21843:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64001:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/authorise-dashboard/authorise-dashboard.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n::ng-deep .my-class2 .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  padding: 0;\n  border-bottom-width: 0px;\n  /* border-bottom-style: solid;*/\n}\n\ninput[type=checkbox] {\n  border: none !important;\n  height: 20px !important;\n}\n\n.mat-checkbox-inner-container {\n  display: inline-block;\n  line-height: 0;\n  margin: auto;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  vertical-align: middle;\n  white-space: nowrap;\n  flex-shrink: 0;\n  border: none !important;\n  background-color: #d71e2b;\n}\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #d71e2b;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/authorise-dashboard/authorise-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AAEA;EACE,cAAA;EACA,UAAA;AACF;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ;;AAEA;EACI,UAAA;EACA,wBAAA;EACA,+BAAA;AACJ;;AACA;EACI,uBAAA;EACA,uBAAA;AAEJ;;AAAA;EACI,qBAAA;EAEA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,cAAA;EACA,uBAAA;EACA,yBAAA;AACJ;;AACA;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAEJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n}\r\n\r\n::ng-deep .my-class2 .modal-dialog {\r\n  max-width: 80%;\r\n  width: 80%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell{\r\n    padding: 0;\r\n    border-bottom-width: 0px;\r\n    /* border-bottom-style: solid;*/\r\n}\r\ninput[type=checkbox]{\r\n    border: none!important;\r\n    height: 20px!important;\r\n}\r\n.mat-checkbox-inner-container {\r\n    display: inline-block;\r\n    \r\n    line-height: 0;\r\n    margin: auto;\r\n    margin-right: 8px;\r\n    order: 0;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n   \r\n    flex-shrink: 0;\r\n    border: none!important;\r\n    background-color: #d71e2b;\r\n}\r\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\r\n    margin-top: 1px;\r\n    margin-left: 1px;\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #d71e2b;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61045:
/*!****************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/book-keeping/book-keeping.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  padding: 0;\n  border-bottom-width: 0px;\n  /* border-bottom-style: solid;*/\n}\n\ninput[type=checkbox] {\n  border: none !important;\n  height: 20px !important;\n}\n\n.mat-checkbox-inner-container {\n  display: inline-block;\n  line-height: 0;\n  margin: auto;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  vertical-align: middle;\n  white-space: nowrap;\n  flex-shrink: 0;\n  border: none !important;\n  background-color: #d71e2b;\n}\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #d71e2b;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/book-keeping/book-keeping.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ;;AAEA;EACI,UAAA;EACA,wBAAA;EACA,+BAAA;AACJ;;AACA;EACI,uBAAA;EACA,uBAAA;AAEJ;;AAAA;EACI,qBAAA;EAEA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,cAAA;EACA,uBAAA;EACA,yBAAA;AACJ;;AACA;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAEJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell{\r\n    padding: 0;\r\n    border-bottom-width: 0px;\r\n    /* border-bottom-style: solid;*/\r\n}\r\ninput[type=checkbox]{\r\n    border: none!important;\r\n    height: 20px!important;\r\n}\r\n.mat-checkbox-inner-container {\r\n    display: inline-block;\r\n    \r\n    line-height: 0;\r\n    margin: auto;\r\n    margin-right: 8px;\r\n    order: 0;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n   \r\n    flex-shrink: 0;\r\n    border: none!important;\r\n    background-color: #d71e2b;\r\n}\r\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\r\n    margin-top: 1px;\r\n    margin-left: 1px;\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #d71e2b;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13969:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n::ng-deep .my-class2 .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  padding: 0;\n  border-bottom-width: 0px;\n  /* border-bottom-style: solid;*/\n}\n\ninput[type=checkbox] {\n  border: none !important;\n  height: 20px !important;\n}\n\n.mat-checkbox-inner-container {\n  display: inline-block;\n  line-height: 0;\n  margin: auto;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  vertical-align: middle;\n  white-space: nowrap;\n  flex-shrink: 0;\n  border: none !important;\n  background-color: #d71e2b;\n}\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #d71e2b;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AAEA;EACE,cAAA;EACA,UAAA;AACF;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ;;AAEA;EACI,UAAA;EACA,wBAAA;EACA,+BAAA;AACJ;;AACA;EACI,uBAAA;EACA,uBAAA;AAEJ;;AAAA;EACI,qBAAA;EAEA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,cAAA;EACA,uBAAA;EACA,yBAAA;AACJ;;AACA;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAEJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n}\r\n\r\n::ng-deep .my-class2 .modal-dialog {\r\n  max-width: 80%;\r\n  width: 80%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell{\r\n    padding: 0;\r\n    border-bottom-width: 0px;\r\n    /* border-bottom-style: solid;*/\r\n}\r\ninput[type=checkbox]{\r\n    border: none!important;\r\n    height: 20px!important;\r\n}\r\n.mat-checkbox-inner-container {\r\n    display: inline-block;\r\n    \r\n    line-height: 0;\r\n    margin: auto;\r\n    margin-right: 8px;\r\n    order: 0;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n   \r\n    flex-shrink: 0;\r\n    border: none!important;\r\n    background-color: #d71e2b;\r\n}\r\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\r\n    margin-top: 1px;\r\n    margin-left: 1px;\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #d71e2b;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7252:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/continue-with-the-group/continue-with-the-group.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  padding: 0;\n  border-bottom-width: 0px;\n  /* border-bottom-style: solid;*/\n}\n\ninput[type=checkbox] {\n  border: none !important;\n  height: 20px !important;\n}\n\n.mat-checkbox-inner-container {\n  display: inline-block;\n  line-height: 0;\n  margin: auto;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  vertical-align: middle;\n  white-space: nowrap;\n  flex-shrink: 0;\n  border: none !important;\n  background-color: #d71e2b;\n}\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #d71e2b;\n}\n\n::ng-deep .my-class1 .modal-dialog {\n  max-width: 50%;\n  width: 50%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\n::ng-deep .my-class2 .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/continue-with-the-group/continue-with-the-group.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ;;AAEA;EACI,UAAA;EACA,wBAAA;EACA,+BAAA;AACJ;;AACA;EACI,uBAAA;EACA,uBAAA;AAEJ;;AAAA;EACI,qBAAA;EAEA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,cAAA;EACA,uBAAA;EACA,yBAAA;AACJ;;AACA;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAEJ;;AACA;EACE,cAAA;EACA,UAAA;AAEF;;AACA;EACE,uCAAA;EACA,wBAAA;AAEF;;AACA;EACE,cAAA;EACA,UAAA;AAEF","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell{\r\n    padding: 0;\r\n    border-bottom-width: 0px;\r\n    /* border-bottom-style: solid;*/\r\n}\r\ninput[type=checkbox]{\r\n    border: none!important;\r\n    height: 20px!important;\r\n}\r\n.mat-checkbox-inner-container {\r\n    display: inline-block;\r\n    \r\n    line-height: 0;\r\n    margin: auto;\r\n    margin-right: 8px;\r\n    order: 0;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n   \r\n    flex-shrink: 0;\r\n    border: none!important;\r\n    background-color: #d71e2b;\r\n}\r\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\r\n    margin-top: 1px;\r\n    margin-left: 1px;\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #d71e2b;\r\n}\r\n\r\n::ng-deep .my-class1 .modal-dialog {\r\n  max-width: 50%;\r\n  width: 50%;\r\n}\r\n\r\n.mat-input-element {\r\n  border-bottom: 1px solid red !important;\r\n  height: 0.375rem 0.75rem;\r\n}\r\n\r\n::ng-deep .my-class2 .modal-dialog {\r\n  max-width: 80%;\r\n  width: 80%;\r\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47126:
/*!************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/finalised-claims/finalised-claims.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 90%;\n  width: 80%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/finalised-claims/finalised-claims.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,UAAA;AACF;;AAGA;EACE,uCAAA;EACA,wBAAA;AAAF","sourcesContent":["::ng-deep .my-class .modal-dialog {\r\n  max-width: 90%;\r\n  width: 80%;\r\n}\r\n\r\n\r\n.mat-input-element {\r\n  border-bottom: 1px solid red !important;\r\n  height: 0.375rem 0.75rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 56127:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/new-claims-editor/new-claims-editor.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class1 .modal-dialog {\n  max-width: 50%;\n  width: 50%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\n::ng-deep .my-class2 .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n.example-stretched-tabs {\n  max-width: 800px;\n}\n\n.example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n\n.mat-mdc-tab.mdc-tab {\n  height: 48px !important;\n  flex-grow: 0 !important;\n}\n\n::ng-deep .mat-mdc-tab-labels .mdc-tab--active {\n  color: black !important;\n  background-color: #f0f3f5 !important;\n  font-weight: bold;\n  border: 1px solid #c8ced3;\n}\n\n::ng-deep .mat-mdc-tab-list .mat-mdc-tab-labels {\n  color: black !important;\n  background-color: white !important;\n  border-bottom: none 0px black !important;\n}\n\n::ng-deep .mat-mdc-tab-label-container {\n  display: flex !important;\n  flex-grow: 0 !important;\n  overflow: hidden !important;\n  z-index: 1 !important;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em;\n}\n\n.mat-form-field-wrapper {\n  position: relative;\n}\n\n.mat-form-field {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n}\n\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  max-width: 100%;\n  position: relative;\n  cursor: pointer;\n  outline: 0;\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-option-text {\n  display: inline-block;\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  max-width: 100%;\n  position: relative;\n  cursor: pointer;\n  outline: 0;\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n\n.mat-autocomplete-panel.mat-autocomplete-visible {\n  visibility: visible;\n}\n\n.mat-autocomplete-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  visibility: hidden;\n  max-width: none;\n  max-height: 256px;\n  position: relative;\n  width: 100%;\n}\n\n.mat-autocomplete-panel {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-global-overlay-wrapper, .cdk-overlay-container {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n\n.cdk-overlay-container:empty {\n  display: none;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n::ng-deep .mat-autocomplete-panel#md-autocomplete-0 {\n  border: 3px solid black !important;\n  border-radius: 10px;\n  background-color: green;\n}\n\n::ng-deep .mat-autocomplete-panel#md-autocomplete-1 {\n  border: 3px solid black !important;\n  border-radius: 10px;\n  background-color: blue;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/new-claims-editor/new-claims-editor.component.scss"],"names":[],"mappings":"AACA;EACI,cAAA;EACA,UAAA;AAAJ;;AAEA;EACI,uCAAA;EAEA,wBAAA;AAAJ;;AAIA;EACI,cAAA;EACA,UAAA;AADJ;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,qBAAA;EACA,YAAA;AADF;;AAGA;EACE,uBAAA;EACA,uBAAA;AAAF;;AAMA;EACE,uBAAA;EACA,oCAAA;EACA,iBAAA;EACA,yBAAA;AAHF;;AAQA;EACE,uBAAA;EACA,kCAAA;EACA,wCAAA;AALF;;AAOA;EACE,wBAAA;EACA,uBAAA;EACA,2BAAA;EACA,qBAAA;AAJF;;AAOA;EACE,sBAAA;AAJF;;AAMA;EACE,kBAAA;AAHF;;AAKA;EACE,qBAAA;EACA,kBAAA;EACA,gBAAA;AAFF;;AAIA;EACE,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iDAAA;AADF;;AAGA;EACE,yBAAA;EACA,0BAAA;AAAF;;AAEA;EACE,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,wCAAA;AACF;;AACA;EACE,0BAAA;AAEF;;AAKA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;AAFF;;AAMA;EACE,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,wCAAA;AAHF;;AAOA;EACE,0BAAA;AAJF;;AAOA;EACE,iDAAA;EACA,eAAA;AAJF;;AAQA;EACE,mBAAA;AALF;;AASA;EACE,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AANF;;AAUA;EACE,gBAAA;EACA,0BAAA;AAPF;;AAUA;EACE,kBAAA;EACA,oBAAA;EACA,sBAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;AAPF;;AASA;EACE,oBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;AANF;;AAQA;EACE,eAAA;EACA,aAAA;AALF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,gBAAA;EACA,gBAAA;EACA,WAAA;AAJF;;AAOA;EACE,WAAA;AAJF;;AAQA;EACE,gBAAA;EACA,gBAAA;EACA,WAAA;AALF;;AAQA;EACE,WAAA;AALF;;AAQA;EACE,kCAAA;EACA,mBAAA;EACA,uBAAA;AALF;;AAQA;EACE,kCAAA;EACA,mBAAA;EACA,sBAAA;AALF","sourcesContent":["@import '@angular/material/theming';\r\n::ng-deep .my-class1 .modal-dialog { \r\n    max-width: 50%;\r\n    width: 50%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\n\r\n::ng-deep .my-class2 .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.example-stretched-tabs {\r\n  max-width: 800px;\r\n\r\n}\r\n.example-button-toggle-label {\r\n  display: inline-block;\r\n  margin: 16px;\r\n}\r\n.mat-mdc-tab.mdc-tab {\r\n  height: 48px !important;\r\n  flex-grow: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n::ng-deep .mat-mdc-tab-labels .mdc-tab--active {\r\n  color: black !important;\r\n  background-color: #f0f3f5 !important;\r\n  font-weight: bold;\r\n  border: 1px solid #c8ced3;\r\n}\r\n\r\n\r\n\r\n::ng-deep .mat-mdc-tab-list .mat-mdc-tab-labels {\r\n  color: black !important;\r\n  background-color: white!important;\r\n  border-bottom: none 0px black !important;\r\n}\r\n::ng-deep .mat-mdc-tab-label-container {\r\n  display: flex !important;\r\n  flex-grow: 0 !important;\r\n  overflow: hidden !important;\r\n  z-index: 1 !important;\r\n}\r\n\r\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\r\n  padding-bottom: 1.25em;\r\n}\r\n.mat-form-field-wrapper {\r\n  position: relative;\r\n}\r\n.mat-form-field {\r\n  display: inline-block;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n.mat-form-field {\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n  line-height: 1.125;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n}\r\n.mat-app-background {\r\n  background-color: #fafafa;\r\n  color: rgba(0,0,0,.87);\r\n}\r\n.mat-option {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  line-height: 48px;\r\n  height: 48px;\r\n  padding: 0 16px;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  max-width: 100%;\r\n  position: relative;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n  align-items: center;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.mat-option {\r\n  color: rgba(0,0,0,.87);\r\n}\r\n\r\nelement.style {\r\n}\r\n\r\n\r\n.mat-option-text {\r\n  display: inline-block;\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n\r\n.mat-option {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  line-height: 48px;\r\n  height: 48px;\r\n  padding: 0 16px;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  max-width: 100%;\r\n  position: relative;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n  align-items: center;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n\r\n.mat-option {\r\n  color: rgba(0,0,0,.87);\r\n}\r\n\r\n.mat-option {\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n.mat-autocomplete-panel.mat-autocomplete-visible {\r\n  visibility: visible;\r\n}\r\n\r\n\r\n.mat-autocomplete-panel {\r\n  min-width: 112px;\r\n  max-width: 280px;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  visibility: hidden;\r\n  max-width: none;\r\n  max-height: 256px;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-autocomplete-panel {\r\n  background: #fff;\r\n  color: rgba(0,0,0,.87);\r\n}\r\n\r\n.cdk-overlay-pane {\r\n  position: absolute;\r\n  pointer-events: auto;\r\n  box-sizing: border-box;\r\n  z-index: 1000;\r\n  display: flex;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n.cdk-global-overlay-wrapper, .cdk-overlay-container {\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.cdk-overlay-container {\r\n  position: fixed;\r\n  z-index: 1000;\r\n}\r\n.cdk-overlay-container:empty {\r\n  display: none;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n::ng-deep .mat-autocomplete-panel#md-autocomplete-0 {\r\n  border: 3px solid black !important;\r\n  border-radius: 10px;\r\n  background-color: green;\r\n}\r\n\r\n::ng-deep .mat-autocomplete-panel#md-autocomplete-1 {\r\n  border: 3px solid black !important;\r\n  border-radius: 10px;\r\n  background-color: blue;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 18832:
/*!************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/new-claims/new-claims.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66290:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/ready-for-payment/ready-for-payment.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-header {\n  height: 150px !important;\n}\n\nmat-table {\n  display: block;\n}\n\n::ng-deep .my-classR .modal-dialog {\n  max-width: 30% !important;\n  width: 30%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\n.spinner_loading {\n  display: flex;\n  justify-content: center;\n}\n\n::ng-deep .my-class1 .modal-dialog {\n  max-width: 90%;\n  width: 80%;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/ready-for-payment/ready-for-payment.component.scss"],"names":[],"mappings":"AAAA;EAEI,wBAAA;AAAJ;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,yBAAA;EACA,UAAA;AAAF;;AAGA;EACE,uCAAA;EACA,wBAAA;AAAF;;AAEA;EACE,aAAA;EACA,uBAAA;AACF;;AAEA;EACE,cAAA;EACA,UAAA;AACF","sourcesContent":[".card-header\r\n{\r\n    height:150px!important;\r\n}\r\n\r\nmat-table {\r\n  display: block;\r\n}\r\n\r\n::ng-deep .my-classR .modal-dialog {\r\n  max-width: 30%!important;\r\n  width: 30%;\r\n}\r\n\r\n.mat-input-element {\r\n  border-bottom: 1px solid red !important;\r\n  height: 0.375rem 0.75rem;\r\n}\r\n.spinner_loading {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n::ng-deep .my-class1 .modal-dialog {\r\n  max-width: 90%;\r\n  width: 80%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 91602:
/*!********************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/search-vehicle/search-vehicle.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92668:
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/Claims/spinner/spinner.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 84209:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 25555:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/supervisor-editor/supervisor-editor.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81897:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Files/file-upload/file-upload.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class3 .modal-dialog {\n  max-width: 30%;\n  width: 30%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Files/file-upload/file-upload.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class3 .modal-dialog { \r\n    max-width: 30%;\r\n    width: 30%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1530:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/client-type/client-type.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 55752:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/nationality/nationality.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79098:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/rank-types/rank-types.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69741:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/refund-rates/refund-rates.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class1 .modal-dialog {\n  max-width: 50%;\n  width: 50%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Lookups/refund-rates/refund-rates.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class1 .modal-dialog { \r\n    max-width: 50%;\r\n    width: 50%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12114:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/title-types/title-types.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14975:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n  min-height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;EACA,gBAAA;AACJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 80%;\r\n    width: 80%;\r\n    min-height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64003:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/forms/Reports/report-viewer/report-viewer.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2282:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-address/client-address.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69335:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-bank-details/client-bank-details.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 45054:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-contacts/client-contacts.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26198:
/*!************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-editor/client-editor.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68576:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-information/client-information.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38586:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-vehicles/client-vehicles.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 99%;\n  width: 99%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/registration/client-vehicles/client-vehicles.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 99%;\r\n    width: 99%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94771:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/clientdashboard/clientdashboard.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 90%;\n  width: 90%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/registration/clientdashboard/clientdashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 90%;\r\n    width: 90%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36780:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owner-dashboard/owner-dashboard.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 95%;\n  width: 95%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/registration/owner-dashboard/owner-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 95%;\r\n    width: 95%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\n\r\n\r\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73860:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owner-editor/owner-editor.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69128:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owners-not-linked/owners-not-linked.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 95%;\n  width: 95%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/registration/owners-not-linked/owners-not-linked.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 95%;\r\n    width: 95%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\n\r\n\r\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48940:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/vehicle-dashboard/vehicle-dashboard.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 85%;\n  width: 85%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}\n\n.mat-column-select {\n  overflow: visible;\n}\n\n.mat-checkbox-inner-container {\n  display: inline-block;\n  height: 25px;\n  line-height: 0;\n  margin: auto;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  vertical-align: middle;\n  white-space: nowrap;\n  flex-shrink: 0;\n  appearance: none;\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/registration/vehicle-dashboard/vehicle-dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;AACJ;;AACA;EACI,uCAAA;EAEA,wBAAA;AACJ;;AAOE;EACE,iBAAA;AAJJ;;AAME;EACE,qBAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,cAAA;EAGA,gBAAA;EACC,aAAA;AAJL","sourcesContent":["::ng-deep .my-class .modal-dialog { \r\n    max-width: 85%;\r\n    width: 85%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}\r\n\r\n\r\n  \r\n \r\n  \r\n  .mat-column-select {\r\n    overflow: visible;\r\n  }\r\n  .mat-checkbox-inner-container{\r\n    display: inline-block;\r\n    height: 25px;\r\n    line-height: 0;\r\n    margin: auto;\r\n    margin-right: 8px;\r\n    order: 0;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    \r\n    flex-shrink: 0;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n     display: none; \r\n  }\r\n\r\n  \r\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86544:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/vehicle-editor/vehicle-editor.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.accordion {\n  display: block;\n  width: 100%;\n}\n\n.accordion-item {\n  display: block;\n  border: solid 1px rgb(150, 147, 147);\n}\n\n.accordion-item + .accordion-item {\n  border-top: none;\n}\n\n.accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.accordion-item-description {\n  font-size: 0.85em;\n  color: #202cd6;\n}\n\n.accordion-item-header,\n.accordion-item-body {\n  padding: 10px;\n}\n\n.accordion-item-header:hover {\n  cursor: pointer;\n  background-color: rgb(143, 221, 78);\n}\n\n.accordion-item:first-child {\n  border-radius: 4px 4px 0 0;\n}\n\n.accordion-item:last-child {\n  border-radius: 0 0 4px 4px;\n}\n\n::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%;\n  min-height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/registration/vehicle-editor/vehicle-editor.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,cAAA;AACJ;;AAEE;EACE,WAAA;AACJ;;AACE;EACE,cAAA;EACA,WAAA;AAEJ;;AACE;EACE,cAAA;EACA,oCAAA;AAEJ;;AACE;EACE,gBAAA;AAEJ;;AACE;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;AAEJ;;AACE;EACE,iBAAA;EACA,cAAA;AAEJ;;AACE;;EAEE,aAAA;AAEJ;;AACE;EACE,eAAA;EACA,mCAAA;AAEJ;;AACE;EACE,0BAAA;AAEJ;;AAAE;EACE,0BAAA;AAGJ;;AADA;EACE,cAAA;EACA,UAAA;EACA,gBAAA;AAIF","sourcesContent":[".example-radio-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 15px 0;\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  .accordion {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  \r\n  .accordion-item {\r\n    display: block;\r\n    border: solid 1px rgb(150, 147, 147);\r\n  }\r\n  \r\n  .accordion-item + .accordion-item {\r\n    border-top: none;\r\n  }\r\n  \r\n  .accordion-item-header {\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .accordion-item-description {\r\n    font-size: 0.85em;\r\n    color: #202cd6;\r\n  }\r\n  \r\n  .accordion-item-header,\r\n  .accordion-item-body {\r\n    padding: 10px;\r\n  }\r\n  \r\n  .accordion-item-header:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(143, 221, 78);\r\n  }\r\n  \r\n  .accordion-item:first-child {\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .accordion-item:last-child  {\r\n    border-radius: 0 0 4px 4px;\r\n  }\r\n::ng-deep .my-class .modal-dialog {\r\n  max-width: 80%;\r\n  width: 80%;\r\n  min-height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77152:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/forms/usermanager/user-dashboard/user-dashboard.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 75136:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/forms/usermanager/user-editor/user-editor.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::ng-deep .my-class .modal-dialog {\n  max-width: 50%;\n  width: 50%;\n}\n\n.mat-input-element {\n  border-bottom: 1px solid red !important;\n  height: 0.375rem 0.75rem;\n}", "",{"version":3,"sources":["webpack://./src/app/views/forms/usermanager/user-editor/user-editor.component.scss"],"names":[],"mappings":"AACA;EACI,cAAA;EACA,UAAA;AAAJ;;AAEA;EACI,uCAAA;EAEA,wBAAA;AAAJ","sourcesContent":["\r\n::ng-deep .my-class .modal-dialog { \r\n    max-width: 50%;\r\n    width: 50%;\r\n}\r\n.mat-input-element{\r\n    border-bottom:1px solid red!important;\r\n    \r\n    height: 0.375rem 0.75rem;   \r\n    \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8752:
/*!************************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header\n  [navbarBrandRouterLink]=\"['/dashboard']\"\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/SAR20Logo.jpg', width: 150, height: 45, alt: 'SARS'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/SAR20Logo.jpg', width: 30, height: 30, alt: 'SARS'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\">\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\"><B>DIPLOMATIC FUEL CLAIM SYSTEM</B></a>\n    </li>    \n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\" >\n    <!-- <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\"  aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>CLAIMS</strong></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Ready For Transfer<span class=\"badge badge-info\">5</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n     </div>\n    </li> -->\n   \n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/avatar2.png\" class=\"img-avatar\" alt=\"SARSEmail\"/>\n      </a>\n  \n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadcrumb' -->\n    <cui-breadcrumb>\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">         \n          <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n         \n        </div>\n      </li>\n    </cui-breadcrumb>\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<app-breadcrumb></app-breadcrumb>-->\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        <!--</div>-->\n      <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n  <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        <div class=\"list-group list-group-accent\">\n      \n        \n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>MY PROFILE</strong>       \n            </div>\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label for=\"company\"><small> <b>SID : </b> {{lstUser.UserID}} - {{lstUser.UserCode}}</small> </label>\n                \n              </div>\n              <div class=\"form-group\">\n                <label for=\"company\"><small> <b>FullName : </b> {{lstUser.UserFullName}}</small> </label>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"company\"><small> <b>User Role : </b> {{lstUser.RoleName}}</small> </label>\n              </div>           \n                \n              \n              \n            </div>\n          </div>\n         \n          \n        </div>\n      </tab>\n     \n    </tabset>\n  </app-aside>\n</div>\n<app-footer>\n  <span><a href=\"https://coreui.io\">DIPS</a> &copy; version 1.0</span>\n  <span class=\"ml-auto\">Powered by <a href=\"https://angular.io/\">Angular : {{version}}</a></span>\n</app-footer>\n";

/***/ }),

/***/ 57162:
/*!***********************************************************!*\
  !*** ./src/app/views/error/404.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 71682:
/*!***********************************************************!*\
  !*** ./src/app/views/error/500.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 82538:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/amend-claim-dashboard/amend-claim-dashboard.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> \n        \n        <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n      \n      </div>\n      <div class=\"card-body\">  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ClientID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientID </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"GroupID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>GroupID </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.GroupID}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ClaimNumber\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNo </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Litres\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Litres </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Litres}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"LevyDutyPetrol\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Petrol </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyPetrol}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ExsiceDutyPetrol\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Petrol </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyPetrol}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ExsiceDutyDesiel\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Diesel </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyDesiel}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"LevyDutyDesiel\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Diesel </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyDesiel}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"TOTALDUE\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Total </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.TOTALDUE}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"StatusDescription\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span *ngIf=\"row.StatusDescription ==='AWAITING APPROVAL'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='FINALIZED'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='BOOKKEEPING'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='REWORK'\"\n                class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='HOLD'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='SEND FOR APPROVAL'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='ACCEPT'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='REJECT'\"\n                class=\"badge badge-danger\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='READY FOR TRANSFER'\"\n                class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(row.ClientID,row.VehicleID,row.ClaimID,row.ClaimGroupID)\"> Amend </button>|\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"deleteClaim(row.ClaimID)\"> Delete  </button>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator></mat-paginator>\n  </div>\n  \n  \n</div>\n</div>\n</div>\n";

/***/ }),

/***/ 19485:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/authorise-dashboard/authorise-dashboard.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #claimEditor1 let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">CLAIM EDITOR</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(claimEditor1)\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <app-new-claims-editor *ngIf=\"queryString\" [queryString]=\"queryString\"></app-new-claims-editor>\n  \n  </div>\n\n</ng-template>\n<ng-template #Reason let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">REASON EDITOR</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(Reason)\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <textarea class=\"form-control\"    placeholder=\"Type Reason here...\" [(ngModel)]=\"statusReason\" rows=\"5\" ></textarea>\n      <input type=\"hidden\" [(ngModel)]=\"statusId\"> \n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button type=\"submit\" (click)=\"authorise()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit\n        </button>\n    \n</div>\n</ng-template>\n\n<div class=\"col-lg-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i>\n\n      <button type=\"submit\" *ngIf=\"(userRole ==2 )\" class=\"btn btn-sm btn-primary\" (click)=\"openReasonBox(Reason,9)\"><i class=\"fa fa-pencil\"></i> Approve </button>\n      <!--\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(claimEditor1,queryString.ClientID,queryString.VehicleID,queryString.ClaimID,queryString.ClaimGroupID)\"><i class=\"fa fa-pencil\"></i> View </button>\n      <button type=\"submit\" class=\"btn btn-sm btn-primary\"  (click)=\"openReasonBox(Reason,7)\"><i  class=\"fa fa-pencil\"></i> Bookkeeping </button>\n     <button type=\"submit\"   (click)=\"openReasonBox(Reason,2)\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-pencil\"></i> Hold </button>\n     <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"openReasonBox(Reason,5)\"><i class=\"fa fa-pencil\"></i> Other Status </button>\n  -->\n      <button type=\"submit\" *ngIf=\"(userRole ==2 )\" class=\"btn btn-sm btn-primary\" (click)=\"openReasonBox(Reason,3)\"><i class=\"fa fa-pencil\"></i> Re-work </button>\n      <button type=\"submit\" *ngIf=\"(userRole ==2 )\" class=\"btn btn-sm btn-primary\" (click)=\"openReasonBox(Reason,4)\"><i class=\"fa fa-pencil\"></i> Reject </button>\n\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\"\n             placeholder=\"Search\">\n\n    </div>\n    <div class=\"card-body\">\n      <div class=\"example-container mat-elevation-z8\">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"select\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-checkbox (change)=\"$event ? masterToggle($event) : null\" [checked]=\"selection.hasValue() && isAllSelected() == true\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </mat-checkbox>\n\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <mat-checkbox #checkBox [value]=\"row\" (change)=\"getCheckbox(checkBox)\" (click)=\"$event.stopPropagation()\" (change)=\"$event ? selectRow($event, row) : null\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row) == true\">\n              </mat-checkbox>\n            </td>\n          </ng-container>\n          <ng-container matColumnDef=\"ClientID\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientID </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"GroupID\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>GroupID </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.GroupID}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ClaimNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNo </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"Litres\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Litres </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.Litres}} </mat-cell>\n          </ng-container>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"LevyDutyPetrol\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Petrol </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyPetrol}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ExsiceDutyPetrol\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Petrol </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyPetrol}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ExsiceDutyDesiel\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Diesel </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyDesiel}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"LevyDutyDesiel\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Diesel </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyDesiel}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"TOTALDUE\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Total </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.TOTALDUE}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"StatusDescription\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <span *ngIf=\"row.StatusDescription ==='AWAITING APPROVAL'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='FINALIZED'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='BOOKKEEPING'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='REWORK'\"\n                    class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='HOLD'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='SEND FOR APPROVAL'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='ACCEPT'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='REJECT'\"\n                    class=\"badge badge-danger\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='READY FOR TRANSFER'\"\n                    class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <!--<button type=\"button\"  class=\"btn btn-sm btn-outline-dark \" (click)=\"printInvoiceReport(Report,'InvoiceParticularsPerClaim',row.ClaimNumber)\">\n        <i class=\"fa fa-print \"></i>View Invoice\n      </button>-->\n              <button type=\"submit\" *ngIf=\"(userRole ==2 )\" class=\"btn btn-sm btn-primary\" (click)=\"btnOpenClaimEditor(claimEditor1,row.ClientID,row.VehicleID,row.ClaimID,row.GroupID)\">\n                <!--i class=\"fa fa-pencil\"></i>--> View Claim\n              </button>|\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"printReport(Report,'GroupTotals',row.GroupID)\">\n                <!--<i class=\"fa fa-book\"></i>--> Group Claims\n              </button>\n\n            </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n\n        <mat-paginator></mat-paginator>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n<ng-template #Report let-modal>\n  <div class=\"card-footer\">\n   \n    <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"container\">\n        <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                           [language]=\"language\" [width]=\"width\"\n                           [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n        </ssrs-reportviewer>\n      </div>\n    </div>\n  </div>\n\n\n</ng-template>\n<!--\n<div *ngFor=\"let checkedItem of checked\">\n  <span> selected Key is :: <strong>   {{checkedItem.checked }} </strong> : \n  <strong> {{checkedItem.value}}</strong> </span>\n  </div>-->\n";

/***/ }),

/***/ 13714:
/*!****************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/book-keeping/book-keeping.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #claimEditor1 let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">CLAIM EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(claimEditor1)\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n      <app-new-claims-editor *ngIf=\"queryString\" [queryString]=\"queryString\"></app-new-claims-editor>\n    \n    </div>\n  \n  </ng-template>\n  <ng-template #Reason let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">REASON EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(Reason)\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <textarea class=\"form-control\"    placeholder=\"Type Reason here...\" [(ngModel)]=\"statusReason\" rows=\"5\" ></textarea>\n        <input type=\"hidden\" [(ngModel)]=\"statusId\"> \n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"submit\" (click)=\"authorise()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit\n          </button>\n      \n  </div>\n  </ng-template>\n  \n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i>\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\"\n          (click)=\"goToClaimEditor(claimEditor1,queryString.ClientID,queryString.VehicleID,queryString.ClaimID,queryString.ClaimGroupID)\"><i\n            class=\"fa fa-pencil\"></i> View </button>\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"\n        (click)=\"openReasonBox(Reason,9)\"><i\n         class=\"fa fa-pencil\"></i> Authorise </button>     \n        <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\"\n          placeholder=\"Search\">\n  \n      </div>\n      <div class=\"card-body\">\n        <div class=\"example-container mat-elevation-z8\">\n  \n          <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox   (change)=\"$event ? masterToggle($event) : null\" [checked]=\"selection.hasValue() && isAllSelected() == true\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n                \n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox  #checkBox [value]=\"row\" (change)=\"getCheckbox(checkBox)\" (click)=\"$event.stopPropagation()\" (change)=\"$event ? selectRow($event, row) : null\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row) == true\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ClaimGroupID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimGroup </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClaimGroupID}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"ClaimNumber\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNumber </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n            </ng-container>\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"ClientAllias\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>ClientAllias </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n            </ng-container>\n  \n            <ng-container matColumnDef=\"ClaimRange\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>ClaimRange </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClaimRange}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"ClaimStatus\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <span *ngIf=\"row.ClaimStatus ==='AWAITING AUTHORIZATION'\"\n                  class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='READY FOR TRANSFER'\"\n                  class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='FINALIZED'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='BOOKKEEPING'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='INVESTIGATE'\" class=\"badge badge-warning\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='HOLD'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='SEND FOR AUTHORIZATION'\"\n                  class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='ACCEPT'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='REJECT'\" class=\"badge badge-danger\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='OTHER STATUS'\" class=\"badge badge-warning\">{{row.ClaimStatus}}</span>\n              </mat-cell>\n            </ng-container>\n           \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n  \n          <mat-paginator></mat-paginator>\n        </div>\n  \n  \n      </div>\n    </div>\n  </div>\n<!--\n  <div *ngFor=\"let checkedItem of checked\">\n    <span> selected Key is :: <strong>   {{checkedItem.checked }} </strong> : \n    <strong> {{checkedItem.value}}</strong> </span>\n    </div>-->";

/***/ }),

/***/ 34936:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/claim-listing-dashboard/claim-listing-dashboard.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #claimEditor1 let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">CLAIM EDITOR</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(claimEditor1)\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <app-new-claims-editor *ngIf=\"queryString\" [queryString]=\"queryString\"></app-new-claims-editor>\n  \n  </div>\n\n</ng-template>\n\n<div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> \n        \n        <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n      \n      </div>\n      <div class=\"card-body\">  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ClientID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientID </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"GroupID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>GroupID </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.GroupID}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ClaimNumber\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNo </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Litres\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Litres </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Litres}} </mat-cell>\n      </ng-container>     \n      <ng-container matColumnDef=\"LevyDutyPetrol\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Petrol </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyPetrol}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ExsiceDutyPetrol\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Petrol </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyPetrol}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ExsiceDutyDesiel\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Diesel </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyDesiel}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"LevyDutyDesiel\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Diesel </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyDesiel}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"TOTALDUE\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Total </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.TOTALDUE}} </mat-cell>\n      </ng-container>      \n      <ng-container matColumnDef=\"StatusDescription\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span *ngIf=\"row.StatusDescription ==='AWAITING APPROVAL'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='FINALIZED'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='BOOKKEEPING'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='REWORK'\"\n                class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='HOLD'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='SEND FOR APPROVAL'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='ACCEPT'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='REJECT'\"\n                class=\"badge badge-danger\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='READY FOR TRANSFER'\"\n                class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(claimEditor1,row.ClientID,row.VehicleID,row.ClaimID,row.ClaimGroupID)\"><i class=\"fa fa-pencil\"></i> View Claim </button>\n          <!--<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"printReport(Report,'GroupTotals',row.GroupID)\">\n            View Group Claims\n          </button>-->\n\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator></mat-paginator>\n  </div>\n  \n  \n</div>\n</div>\n</div>\n\n<ng-template #Report let-modal>\n  <div class=\"card-footer\">\n\n    <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"container\">\n        <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                           [language]=\"language\" [width]=\"width\"\n                           [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n        </ssrs-reportviewer>\n      </div>\n    </div>\n  </div>\n\n\n</ng-template>\n";

/***/ }),

/***/ 63959:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/continue-with-the-group/continue-with-the-group.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #claimEditor1 let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">CLAIM EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(claimEditor1)\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n      <app-new-claims-editor *ngIf=\"queryString\" [queryString]=\"queryString\"></app-new-claims-editor>\n    \n    </div>\n  \n  </ng-template>\n  <ng-template #Reason let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">REASON EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(Reason)\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <textarea class=\"form-control\"    placeholder=\"Type Reason here...\" [(ngModel)]=\"statusReason\" rows=\"5\" ></textarea>\n        <input type=\"hidden\" [(ngModel)]=\"statusId\"> \n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"submit\" (click)=\"authorise()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit\n          </button>\n      \n  </div>\n  </ng-template>\n  \n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i>\n     \n        <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\"\n          placeholder=\"Search\">\n  \n      </div>\n      <div class=\"card-body\">\n        <div class=\"example-container mat-elevation-z8\">\n  \n          <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <ng-container matColumnDef=\"ClaimGroupID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>GroupId </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClaimGroupID}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"ClaimNumber\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNo </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n            </ng-container>\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"ClientAllias\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>ClientAllias </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ClaimRange\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>ClaimRange </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClaimRange}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"GroupStatus\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> GroupStatus</b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <span *ngIf=\"row.GroupStatus ==='AWAITING APPROVAL'\"\n                      class=\"badge badge-success\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='READY FOR TRANSFER'\"\n                      class=\"badge badge-success\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='FINALIZED'\"\n                      class=\"badge badge-success\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='BOOKKEEPING'\"\n                      class=\"badge badge-success\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='REWORK'\"\n                      class=\"badge badge-warning\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='HOLD'\"\n                      class=\"badge badge-danger\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='SEND FOR APPROVAL'\"\n                      class=\"badge badge-success\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='ACCEPT'\"\n                      class=\"badge badge-success\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='REJECT'\"\n                      class=\"badge badge-danger\">{{row.GroupStatus}}</span>\n                <span *ngIf=\"row.GroupStatus ==='OTHER STATUS'\"\n                      class=\"badge badge-warning\">{{row.GroupStatus}}</span>\n              </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"ClaimStatus\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <span *ngIf=\"row.ClaimStatus ==='AWAITING APPROVAL'\"\n                      class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='READY FOR TRANSFER'\"\n                      class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='FINALIZED'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='BOOKKEEPING'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='REWORK'\" class=\"badge badge-warning\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='HOLD'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='SEND FOR APPROVAL'\"\n                      class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='ACCEPT'\" class=\"badge badge-success\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='REJECT'\" class=\"badge badge-danger\">{{row.ClaimStatus}}</span>\n                <span *ngIf=\"row.ClaimStatus ==='OTHER STATUS'\" class=\"badge badge-warning\">{{row.ClaimStatus}}</span>\n              </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"actions\">\n              <mat-header-cell *matHeaderCellDef></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(claimEditor1,row.ClientID,row.VehicleID,row.ClaimID,row.ClaimGroupID)\"> Contine with Group </button>\n                |<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"printReport(Report,'GroupTotals',row.ClaimGroupID)\">\n                    Group Claims\n                </button>\n\n              </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n  \n          <mat-paginator></mat-paginator>\n        </div>\n  \n  \n      </div>\n    </div>\n  </div>\n\n  <ng-template #Report let-modal>\n    <div class=\"card-footer\">\n      <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"SendGroupToSupervisor(_groupId)\"><i class=\"fa fa-pencil\"></i> Submit To Supervisor </button>\n      <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"container\">\n          <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                             [language]=\"language\" [width]=\"width\"\n                             [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n          </ssrs-reportviewer>\n        </div>\n      </div>\n    </div>\n\n\n  </ng-template>\n";

/***/ }),

/***/ 15811:
/*!************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/finalised-claims/finalised-claims.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #claimEditor1 let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">CLAIM EDITOR</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(claimEditor1)\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <app-new-claims-editor *ngIf=\"queryString\" [queryString]=\"queryString\"></app-new-claims-editor>\n\n  </div>\n\n</ng-template>\n\n<div class=\"col-lg-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i>\n\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n\n    </div>\n    <div class=\"card-body\">\n      <div class=\"example-container mat-elevation-z8\">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox (click)=\"$event.stopPropagation()\"\n                            (change)=\"$event ? selection.toggle(row) : null\"\n                            [checked]=\"selection.isSelected(row)\">\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"GroupID\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>GroupID </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.GroupID}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ClientID\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientID </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ClientName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientName </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClientName}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ClaimNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNo </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"BillingReferenceNo\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Billing ReferenceNo </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.BillingReferenceNo}} </mat-cell>\n          </ng-container>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"ClaimChequeNumber\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>EFT Number </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClaimChequeNumber}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"finalisedDate\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>FinalisedDate </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.finalisedDate}} </mat-cell>\n          </ng-container>\n         \n         \n\n          \n          <ng-container matColumnDef=\"StatusDescription\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b> ClaimStatus</b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <span *ngIf=\"row.StatusDescription ==='AWAITING APPROVAL'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='FINALIZED'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='BOOKKEEPING'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='REWORK'\"\n                    class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='HOLD'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='SEND FOR APPROVAL'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='ACCEPT'\"\n                    class=\"badge badge-success\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='REJECT'\"\n                    class=\"badge badge-danger\">{{row.StatusDescription}}</span>\n              <span *ngIf=\"row.StatusDescription ==='READY FOR TRANSFER'\"\n                    class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n\n              <!--<button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(claimEditor1,row.ClientID,row.VehicleID,row.ClaimID,row.ClaimGroupID)\"><i class=\"fa fa-pencil\"></i> View Claim </button>-->\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"printReport(Report,'RefundOfExcise',row.ClaimChequeNumber)\">\n                Print Letter\n              </button>\n\n            </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n\n        <mat-paginator></mat-paginator>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n<ng-template #Report let-modal>\n  <div class=\"card-footer\">\n\n    <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"container\">\n        <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                           [language]=\"language\" [width]=\"width\"\n                           [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n        </ssrs-reportviewer>\n      </div>\n    </div>\n  </div>\n\n\n</ng-template>\n\n\n";

/***/ }),

/***/ 78386:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/new-claims-editor/new-claims-editor.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<mat-tab-group>\n  <mat-tab label=\"CLAIM EDITOR\">\n\n\n    <form [formGroup]=\"ClaimForm\" (ngSubmit)=\"onSubmit()\" class=\"was-validated\">\n      <div class=\"row\" *ngIf=\"claimStatusId =='4' || claimStatusId == '8'\">\n        <div class=\"col-sm-12\">\n          <span class=\"badge badge-danger\" style=\"width: 100%;\">THIS CLAIM CANNOT BE AMMENDED.</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>VEHICLE INFORMATION</strong> Form\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n\n                <div class=\"form-group col-sm-2\">\n                  <label for=\"Code\">Code</label>\n\n                  <input class=\"form-control form-control-sm\" formControlName=\"ClientID\" type=\"text\">\n\n                </div>\n                <div class=\"form-group col-sm-6\">\n                  <label>Client Name</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientName\" required>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"Owner\">Owner</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"Owner\" required>\n                </div>\n              </div>\n              <div class=\"row\">\n\n                <div class=\"form-group col-sm-3\">\n                  <label for=\"ClientVehiclesID\"> Claimable Vehicle</label>\n\n                  <select formControlName=\"ClientVehiclesID\"  (ngModelChange)=\"ngOnVehicleSelected($event)\" class=\"form-control form-control-sm\" required>\n                    <option value=\"0\">Select One.. </option>\n                    <option *ngFor=\"let v of clientVehicles\" value=\"{{v.VehicleID}}\">{{v.VehicleRegistration}}</option>\n\n                  </select>\n                </div>\n                <div class=\"form-group col-sm-1\">\n                  <label for=\"VehicleRegistration\">...</label><br />\n                  <button type=\"button\" *ngIf=\"((userRole ==3) || (userRole ==1))\" (click)=\"searchVehicle(Vehicle)\" class=\"btn btn-sm btn-primary\">\n                    <i class=\"fa fa-search\"></i>\n                  </button>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"VehicleRegistration\">Selected Vehicle</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"VehicleRegistration\" required>\n                </div>\n\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"VehicleTankCapacity\">Litres</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"VehicleTankCapacity\" required>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"FuelTypeID\">Fuel Type</label>\n                  <select formControlName=\"FuelTypeID\" class=\"form-control form-control-sm\" required>\n                    <option value=\"\">Select One.. </option>\n                    <option value=\"1\">Petrol </option>\n                    <option value=\"2\">Diesel </option>\n\n                  </select>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"RegistrationDate\">Effective Date</label>\n                  <input class=\"form-control form-control-sm\" formControlName=\"RegistrationDate\" required\n                         type=\"date\" placeholder=\"date\">\n\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label>Date Issued</label>\n                  <input type=\"text\" appDateMask class=\"form-control form-control-sm\" formControlName=\"DateIssued\"\n                         required placeholder=\"date\">\n\n                  <div *ngIf=\"claimForm.DateIssued.touched && claimForm.DateIssued.invalid\" class=\"alert alert-danger\">\n\n                    <div *ngIf=\"claimForm.DateIssued.errors.futureDate\">Date Issued cannot be the future.</div>\n                    <div *ngIf=\"claimForm.DateIssued.errors.invalidDate\">Date Issued is invalid.</div>\n                  </div>\n                </div>\n\n\n\n\n\n              </div>\n              <div class=\"row\">\n\n\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"VehicleRefNumber\">\n                    Note Verbale\n                  </label>\n\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"VehicleRefNumber\"\n                         required>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label>Reference Date</label>\n                  <input type=\"text\" appDateMask class=\"form-control form-control-sm\" formControlName=\"VehicleRefDate\"\n                         required placeholder=\"date\">\n                  <div *ngIf=\"claimForm.VehicleRefDate.touched && claimForm.VehicleRefDate.invalid\" class=\"alert alert-danger\">\n\n                    <div *ngIf=\"claimForm.VehicleRefDate.errors.futureDate\">Reference Date cannot be the future.</div>\n                    <div *ngIf=\"claimForm.VehicleRefDate.errors.invalidDate\">Reference Date is invalid.</div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"ClaimExciseTotal\"> <b>EXCISE DUTY CODE</b> </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"ExciseDutyCode\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"FuelLevyCode\"> <b>FUEL LEVY CODE</b> </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"FuelLevyCode\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"ClaimExciseTotal\"> <b>EXCISE DUTY AMOUNT</b> </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"ClaimExciseTotal\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"Levy\"> <b>FUEL LEVY AMOUNT </b></label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"Levy\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"ExciseLevy\"> <b>TOTAL</b> </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClaimAmountTotal\">\n                </div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n\n            <div class=\"card-header\">\n              <strong>CLAIM & GROUP</strong> Form\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n\n\n                <div class=\"form-group col-sm-6\">\n                  <label for=\"GroupNumber\">Group Number</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"GroupNumber\">\n                </div>\n                <div class=\"form-group col-sm-6\">\n                  <label>Claim Number</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClaimNumber\">\n                </div>\n\n              </div>\n              <div class=\"row\">\n\n                <div class=\"form-group col-sm-6\">\n                  <label>Group Status</label>\n                  <span *ngIf=\"ClaimGroupTotalStatus =='AWAITING APPROVAL'\"\n                        class=\"badge badge-success\">{{ClaimGroupTotalStatus}}</span>\n                  <span *ngIf=\"ClaimGroupTotalStatus =='ACCEPT'\"\n                        class=\"badge badge-success\">{{ClaimGroupTotalStatus}}</span>\n                  <span *ngIf=\"ClaimGroupTotalStatus =='REJECT'\"\n                        class=\"badge badge-danger\">{{ClaimGroupTotalStatus}}</span>\n                  <span *ngIf=\"ClaimGroupTotalStatus =='SEND FOR APPROVAL'\"\n                        class=\"badge badge-success\">{{ClaimGroupTotalStatus}}</span>\n                  <span *ngIf=\"ClaimGroupTotalStatus ==='OTHER STATUS'\"\n                        class=\"form-control form-control-sm badge badge-warning\">{{ClaimGroupTotalStatus}}</span>\n                </div>\n\n                <div class=\"form-group col-sm-6\">\n                  <label for=\"ClaimStatus\">Claim Status</label>\n                  <span *ngIf=\"ClaimTotalStatus =='1'\"\n                        class=\"badge badge-success\">SEND FOR APPROVAL</span>\n                  <span *ngIf=\"ClaimTotalStatus =='3'\"\n                        class=\"badge badge-warning\">RE-WORK</span>\n                  <span *ngIf=\"ClaimTotalStatus =='4'\"\n                        class=\"badge badge-danger\">REJECTED</span>\n                  <span *ngIf=\"ClaimTotalStatus =='10'\"\n                        class=\"badge badge-success\">AWAITING APPROVAL</span>\n                  <span *ngIf=\"ClaimTotalStatus ==='9'\"\n                        class=\"form-control form-control-sm badge badge-warning\">READY FOR TRANSFER</span>\n                </div>\n              </div>\n              <div class=\"row\">\n\n                <div class=\"form-group col-sm-6\">\n                  <label>Group Total Liters</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"GroupTotalLitres\">\n                </div>\n\n                <div class=\"form-group col-sm-6\">\n                  <label for=\"ClaimTotalLiters\">Claim Total Liters</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClaimTotalLitres\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <textarea class=\"form-control\" formControlName=\"StatusReasonDescription\" placeholder=\"No Status Reason\" rows=\"3\"></textarea>\n              </div>\n\n\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </form>\n    <div class=\"card\">\n      <div class=\"card-header\">\n\n        <!--<input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search Invoice\">-->\n\n        <button type=\"button\" *ngIf=\"ClaimForm.valid && (userRole ==1 || userRole==3)\" (click)=\"open(content)\" class=\"btn btn-sm btn-primary\">\n          <i class=\"fa fa-cc-mastercard\"></i> Add New Invoice\n        </button>  |\n\n        <button type=\"button\" *ngIf=\"InvoiceFound\" class=\"btn btn-sm btn-primary\" (click)=\"printReport(Report,'GroupTotals')\">\n          <i class=\"fa fa-envelope-o\"></i> View Claims\n        </button>\n        <button type=\"button\" *ngIf=\"InvoiceFound\" class=\"btn btn-sm btn-outline-dark \" (click)=\"printInvoiceReport(Report,'InvoiceParticularsPerClaim')\">\n          <i class=\"fa fa-print \"></i>Print Invoice\n        </button>\n        <button type=\"button\" *ngIf=\"InvoiceFound && ClaimForm.valid && (userRole ==1 || userRole==3)\" class=\"btn btn-sm btn-outline-dark\" (click)=\"DeleteClaim()\">\n          <i class=\"fa fa-remove\"></i> Delete Claims\n        </button>\n        <b>TOTAL LITRES: <label><span style=\"color:red\">{{InvoiceTotalLitres}}</span></label></b>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"example-container mat-elevation-z8\">\n\n          <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"select\">\n              <mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                              [checked]=\"selection.hasValue() && isAllSelected()\"\n                              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n              </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\n                              (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                </mat-checkbox>\n              </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"InvoiceDate\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>InvoiceDate </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.InvoiceDate | date: 'yyyy-MM-dd'}} </mat-cell>\n            </ng-container>\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"InvoiceNo\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>InvoiceNo</b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.InvoiceNo}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"supplier\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>Supplier </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.supplier}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"amount\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>Amount </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.amount}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"InvoiceLiters\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><!--<span>{{TotalLitres}} </span>--><b>Litres </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.InvoiceLiters }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Odoreading\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>Odoreading </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.Odoreading}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"StatusDescription\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n\n                <span *ngIf=\"row.StatusDescription ==='ACCEPT'\"\n                      class=\"badge badge-success\">{{row.StatusDescription}}</span>\n                <span *ngIf=\"row.StatusDescription ==='REJECT'\"\n                      class=\"badge badge-danger\">{{row.StatusDescription}}</span>\n                <span *ngIf=\"row.StatusDescription ==='OTHER STATUS'\"\n                      class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n              </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"actions\">\n              <mat-header-cell *matHeaderCellDef></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <button type=\"submit\" *ngIf=\"row.InvoiceID > 0 &&  (userRole ==1 || userRole==3)\" class=\"btn btn-sm btn-primary\" (click)=\"btnEditInvoice(content,row.InvoiceID)\">\n                  <i class=\"fa fa-pencil\"></i> Edit\n                </button> | <button type=\"submit\" *ngIf=\"row.InvoiceID > 0 &&   (userRole ==1 || userRole==3)\" class=\"btn btn-sm btn-primary\"\n                                    (click)=\"DeleteInvoice(row.InvoiceID)\">\n                  <i class=\"fa fa-trash-o\"></i> Delete\n                </button>\n              </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n\n          <mat-paginator></mat-paginator>\n        </div>\n\n\n      </div>\n    </div>\n\n    <ng-template #content let-modal>\n      <form [formGroup]=\"InvoiceForm\" (ngSubmit)=\"SubmitInvoice()\" class=\"was-validated\">\n        <div class=\"card\">\n          <div class=\"modal-header\">\n            <strong>ADD/EDIT INVOICE </strong>\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close(content)\">Close</button>\n\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"row\">\n\n            </div>\n            <div class=\"row\">\n\n              <div class=\"form-group col-sm-6\">\n                <label for=\"InvoiceDate\">Invoice Date (yyyy/MM/dd)</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n\n                <input #InvoiceDateFocus class=\"form-control form-control-sm\" appDateMask formControlName=\"InvoiceDate\" required type=\"text\"\n                       placeholder=\"yyyy/MM/dd\" disabled>\n                <div *ngIf=\"f.InvoiceDate.touched && f.InvoiceDate.invalid\" class=\"alert alert-danger\">\n                  <div *ngIf=\"f.InvoiceDate.errors.InvoiceDateFallsOutside\">\n                    Invoice Date falls outside the\n                    Vehicle Registration period.\n                  </div>\n                  <div *ngIf=\"f.InvoiceDate.errors.futureDate\">Invoce date cannot be the future.</div>\n                  <div *ngIf=\"f.InvoiceDate.errors.TwoYearsOld\">Invoice date is two years older than the Recieve date on the Invoice.</div>\n                  <div *ngIf=\"f.InvoiceDate.errors.invalidDate\">Invoice date is invalid.</div>\n                </div>\n\n\n              </div>\n\n            </div>\n            <!--<div class=\"row\">\n              <div class=\"form-group col-sm-6\">\n                <label>Invoice Number</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"InvoiceNumber\"\n                       required>\n              </div>\n            </div>-->\n            <div class=\"row\">\n              <div class=\"form-group col-sm-6\">\n                <label>Supplier</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"Supplier\" required>\n               \n\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-sm-6\">\n                <label>Amount</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"Amount\"\n                       required>\n                <div *ngIf=\"f.Amount.touched && f.Amount.invalid\" class=\"alert alert-danger\">\n                  <div *ngIf=\"f.Amount.errors.required\">Number is required.</div>\n                  <div *ngIf=\"f.Amount.errors.notNumber\">The mount must be a float type</div>\n                </div>\n\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-sm-6\">\n                <label>Litres</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"Litres\" type=\"text\"\n                       required>\n                <div *ngIf=\"f.Litres.touched && f.Litres.invalid\" class=\"alert alert-danger\">\n                  <div *ngIf=\"f.Litres.errors.required\">Litres is required.</div>\n                  <div *ngIf=\"f.Litres.errors.notNumber\">The Litres must be a float type</div>\n\n                </div>\n              </div>\n            </div>\n\n            <!--<div class=\"row\">\n              <div class=\"form-group col-sm-6\">\n                <label>KM(s)</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"KMS\" type=\"number\">\n                <div *ngIf=\"f.KMS.touched && f.KMS.invalid\" class=\"alert alert-danger\">\n                  <div *ngIf=\"f.KMS.errors.required\">Number is required.</div>\n                </div>\n              </div>-->\n            <!--<div class=\"form-group col-sm-12\">\n              <app-file-upload *ngIf=\"FileQueryString.IdProvided\" [FileQueryString]=\"FileQueryString\"></app-file-upload>\n            </div>-->\n            <!--</div>-->\n            <!--<div class=\"row\" *ngIf=\"FileQueryString.IdProvided === false\">\n              <div class=\"form-group col-sm-6\">\n                <label>Upload invoice</label>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"FileUpload\" />\n              </div>\n            </div>-->\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" *ngIf=\"InvoiceForm.valid\" class=\"btn btn-sm btn-success\">\n              <i class=\"fa fa-dot-circle-o\"></i> Submit\n            </button>\n\n\n\n          </div>\n        </div>\n      </form>\n    </ng-template>\n\n\n    <div id=\"claimTotal\">\n      <ng-template #claimTotals let-modal>\n\n\n        <form [formGroup]=\"ClaimTotalForm\" (ngSubmit)=\"SubmitClaimTotalInvoice()\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>CLAIM TOTAL</strong> Form\n            </div>\n            <div class=\"card-body\">\n\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <strong>ALLOCATION CODE</strong>\n\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <strong>CLAIM</strong>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <strong>GROUP</strong>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"EXCISE\"> EXCISE</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"EXCISE\"\n                         required readonly>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"ClaimExciseTotal\"> EXCISE TOTAL </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"ClaimExciseTotal\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"GroupExciseTotal\"> EXCISE TOTAL </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"GroupExciseTotal\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"LevyDuty\"> FUEL</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"LevyDuty\"\n                         required readonly>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"Levy\"> FUEL TOTAL </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"Levy\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"GroupExciseTotal\"> EXCISE TOTAL </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\"\n                         formControlName=\"GroupExciseTotal\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"ExciseLevy\"> TOTAL</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ExciseLevy\">\n                </div>\n                <div class=\"form-group col-sm-8\">\n                  <div class=\"form-group\">\n                    <label for=\"ExciseLevy\"> STATUS</label>\n                    <span *ngIf=\"ClaimTotalStatus ==='AWAITING AUTHORIZATION'\"\n                          class=\"badge badge-success\">{{ClaimTotalStatus}}</span>\n                    <span *ngIf=\"ClaimTotalStatus ==='REJECTED'\"\n                          class=\"form-control form-control-sm badge badge-success\">{{ClaimTotalStatus}}</span>\n                    <span *ngIf=\"ClaimTotalStatus ==='SEND FOR AUTHORIZATION'\"\n                          class=\"form-control form-control-sm badge badge-success\">{{ClaimTotalStatus}}</span>\n                    <span *ngIf=\"ClaimTotalStatus ==='OTHER STATUS'\"\n                          class=\"form-control form-control-sm badge badge-warning\">{{ClaimTotalStatus}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"printReport(Report,'GroupTotals')\"><i class=\"fa fa-dot-circle-o\"></i> Save Claim</button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"close(claimTotal)\"><i class=\"fa fa-dot-circle-o\"></i> Continue With a Group</button>\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close(claimTotal)\">Close</button>\n            <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"findInvalidControls();\"><i class=\"fa fa-ban\"  ></i> Close 1</button>\n            -->\n          </div>\n\n\n        </form>\n\n\n      </ng-template>\n    </div>\n\n\n    <ng-template #Report let-modal>\n      <div class=\"card-footer\">\n        <button type=\"button\" *ngIf=\"(userRole ==1 || userRole==3)\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor()\"><i class=\"fa fa-dot-circle-o\"></i> Continue With a Group</button>\n        <button type=\"button\" *ngIf=\"(userRole ==1 || userRole==3)\" class=\"btn btn-sm btn-primary\" (click)=\"goToSubmitToSuperviser()\">Save and Close</button>\n        <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Back</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"container\">\n            <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                               [language]=\"language\" [width]=\"width\"\n                               [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n            </ssrs-reportviewer>\n          </div>\n        </div>\n      </div>\n\n\n    </ng-template>\n\n  </mat-tab>\n  <mat-tab label=\"DOCUMENT VIEWER\">\n\n    <div class=\"card\">\n      <div class=\"modal-header\">\n        <strong> Documents</strong> :::\n\n      </div>\n      <div class=\"card-body\">\n\n\n        <div class=\"row\">\n          <div class=\"form-group col-sm-12\">\n            <app-file-upload *ngIf=\"FileQueryString.IdProvided\" [FileQueryString]=\"FileQueryString\"></app-file-upload>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </mat-tab>\n  <!--<mat-tab label=\"Third\"> Content 3 </mat-tab>-->\n</mat-tab-group>\n<ng-template #Vehicle let-modal>\n\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">CLIENT VEHICLES </h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <app-search-vehicle *ngIf=\"clientId\" (SearchVehicleEmitter)=\"ngSearchVehicles($event)\" [clientVehicles]=\"clientVehicles\"></app-search-vehicle>\n\n  </div>\n\n</ng-template>\n";

/***/ }),

/***/ 27185:
/*!************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/new-claims/new-claims.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<div class=\"col-lg-12\">\n  <div *ngIf=\"!hasClaims\" class=\"d-flex justify-content-center\">\n    <div class=\"spinner-border\" role=\"status\">\n\n    </div><span class=\"visually-hidden\">Loading...</span>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i>\n\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n\n    </div>\n    <div class=\"card-body\">\n      <div class=\"example-container mat-elevation-z8\">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox (click)=\"$event.stopPropagation()\"\n                            (change)=\"$event ? selection.toggle(row) : null\"\n                            [checked]=\"selection.isSelected(row)\">\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"Code\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Code </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.Code}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"ClientAllias\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Client Name </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n          </ng-container>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"VehicleRegistration\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>VehicleReg.No </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleRegistration}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"VehicleRefNumber\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Ref No. </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleRefNumber}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"VehicleCancellationDate\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>DeregisteredDate </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleCancellationDate}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"VehicleStatus\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>  Vehicle Status</b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <span *ngIf=\"row.VehicleStatus =='Active'\" class=\"badge badge-success\">Active</span>\n              <span *ngIf=\"row.VehicleStatus =='InActive'\" class=\"badge badge-danger\">In-Active</span>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(row.ClientID,row.ID)\"><i class=\"fa fa-file\"></i> Add Claim </button>\n            </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n\n        <mat-paginator></mat-paginator>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 27628:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/ready-for-payment/ready-for-payment.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-lg-12\">\n  \n  <div *ngIf=\"!hasClaims\" class=\"d-flex justify-content-center\">\n    <div class=\"spinner-border\" role=\"status\">\n      \n    </div><span class=\"visually-hidden\">Loading...</span>\n  </div>\n\n  <ng-container *ngFor=\"let c of clientClaims\">\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n\n          <div class=\"form-group col-sm-4\">\n\n\n            <label for=\"Code\"> <b> Request Operation: </b>{{c.RequestOperation}}</label>\n          </div>\n          <div class=\"form-group col-sm-4\">\n\n            <label><b>Invoice Type:</b> {{c.InvoiceType}} </label>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"Code\"><b>Billing Source: </b> {{c.BillingSource}}  </label>\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n\n          <div class=\"form-group col-sm-4\">\n            <label for=\"Code\"> <b> Group Reference No: </b>{{c.ReferenceNo}}</label>\n\n\n          </div>\n          <div class=\"form-group col-sm-4\">\n            <label><b>Client Name:</b> {{c.ClientName}} </label>\n\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"Code\"><b>Payment Method: </b> {{c.PaymentMethod}}  </label>\n\n\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"form-group col-sm-4\">\n\n            <label for=\"Code\"><b>Limit Override: </b> {{c.LimitOverride}}  </label>\n\n          </div>\n          <div class=\"form-group col-sm-4\">\n            <label><b>Status:</b> <span class=\"badge badge-warning\">Awaiting Payment</span> </label>\n\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label for=\"Code\"><b>Payable Total: </b> {{c.Value}}  </label>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"card-body\">\n        <table class=\"mat-table cdk-table\" style=\"width:100%\">\n          <thead>\n            <tr class=\"mat-header-row cdk-header-row\">\n              <th>TaxType</th>\n              <th>FinancialAccountNo</th>\n              <th>ClaimNo</th>\n             <!--<th>RevenueCode</th>-->\n             <!--<th>PaymentMethod</th>-->\n              <th>LiabilityDate</th>\n              <th>RefundRequestDate</th>\n              <!--<th>PortOfEntry </th>-->\n              <th>\n                PayableAmount\n\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let i of c.Invoices \">\n\n              <td>{{i.TaxType}}</td>\n              <td>{{i.FinancialAccountNo}}</td>\n              <td>{{i.ReferenceNo}}</td>\n              <!--<td>{{i.RevenueCode}}</td>-->\n              <!--<td>{{i.PaymentMethod}}</td>-->\n              <td>{{i.LiabilityDate}}</td>\n              <td>{{i.LiabilityDate}}</td>\n              <!--<td>{{i.PortOfEntry}}</td>-->\n              <td>{{i.PayableAmount}}</td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n      <div class=\"card-footer\">\n        <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"openReasonBox(Reason,c.BillingReferenceNo)\">\n          <i class=\"fa fa-dot-circle-o\"></i> Finalise\n        </button>\n        |<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"printGroupReport(Report,'SapGroupTotals',c.ClientID,c.ReferenceNo)\">\n          Group Claims\n        </button>\n      </div>\n\n    </div>\n\n  </ng-container>\n\n\n\n</div>\n\n\n<ng-template #Reason let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Payment Confirmation</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(Reason)\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <label for=\"FuelTypeID\">Enter the EFT number</label>\n      <input class=\"form-control\" placeholder=\"EFT number...\" [(ngModel)]=\"chequeNumber\">\n      <input type=\"hidden\" [(ngModel)]=\"statusId\">\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button type=\"submit\" (click)=\"ngFinalise(Report,'RefundOfExcise')\" *ngIf=\"chequeNumber\" class=\"btn btn-sm btn-primary\" >\n      <i class=\"fa fa-dot-circle-o\"></i> Submit\n    </button>\n\n  </div>\n</ng-template>\n<ng-template #Report let-modal>\n  <div class=\"card-footer\">\n\n    <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"container\">\n        <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                           [language]=\"language\" [width]=\"width\"\n                           [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n        </ssrs-reportviewer>\n      </div>\n    </div>\n  </div>\n\n\n</ng-template>\n<ng-template #Report let-modal>\n  <div class=\"card-footer\">\n    \n    <button type=\"button\" class=\"btn  btn-sm btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"container\">\n        <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                           [language]=\"language\" [width]=\"width\"\n                           [height]=\"height\" [toolbar]=\"toolbar\" [showparameters]=\"false\" [parameters]=\"parameters\" [ShowPrintButton]=\"true\">\n        </ssrs-reportviewer>\n      </div>\n    </div>\n  </div>\n\n\n</ng-template>\n";

/***/ }),

/***/ 90961:
/*!********************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/search-vehicle/search-vehicle.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-lg-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i>     \n      <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n\n    </div>\n    <div class=\"card-body\">\n      <div class=\"example-container mat-elevation-z8\">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"VehicleID\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> <b>VehicleID </b></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleID}} </mat-cell>\n          </ng-container>\n\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"VehicleRegistration\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b> VehicleRegistration</b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleRegistration}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"VehicleCancellationDate\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>DeregisteredDate </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleCancellationDate}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"VehicleStatus\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>  Vehicle Status</b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <span *ngIf=\"row.VehicleStatus =='Active'\" class=\"badge badge-success\">Active</span>\n              <span *ngIf=\"row.VehicleStatus =='InActive'\" class=\"badge badge-danger\">In-Active</span>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"SearchVehicles(row.VehicleID)\"><i class=\"fa fa-file\"></i> Select </button>\n             \n            </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n\n        <mat-paginator></mat-paginator>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 86041:
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/Claims/spinner/spinner.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h3 mat-dialog-title>Please Wait</h3>\r\n\r\n<mat-dialog-content>\r\n  <div style=\"display:flex; flex-direction:row; justify-content:space-around \">\r\n    We're getting your data...\r\n    <mat-spinner [diameter]=\"20\"></mat-spinner>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions></mat-dialog-actions>\r\n";

/***/ }),

/***/ 91046:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/submit-to-supervisor-dashboard/submit-to-supervisor-dashboard.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #claimEditor let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">CLAIM EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(claimEditor)\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n    <app-new-claims-editor *ngIf=\"queryString\" [queryString]=\"queryString\" ></app-new-claims-editor>\n        \n    </div>\n    \n  </ng-template>\n\n<div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i>\n        <button type=\"submit\" (click)=\"ngSubmitToSupervisor()\" *ngIf=\"isData\" class=\"btn btn-sm btn-primary\">\n          <i class=\"fa fa-dot-circle-o\"></i> Submit All to Supervisor\n        </button>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n\n      </div>\n      <div class=\"card-body\">  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ClientID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientID </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"GroupID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>GroupID </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.GroupID}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ClaimNumber\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClaimNo </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ClaimNumber}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Litres\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Litres </b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Litres}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"LevyDutyPetrol\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Petrol </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyPetrol}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ExsiceDutyPetrol\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Petrol </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyPetrol}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"ExsiceDutyDesiel\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Excise Diesel </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExsiceDutyDesiel}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"LevyDutyDesiel\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Levy Diesel </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LevyDutyDesiel}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"TOTALDUE\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Total </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.TOTALDUE}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"StatusDescription\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b> Status</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span *ngIf=\"row.StatusDescription ==='AWAITING APPROVAL'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='FINALIZED'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='BOOKKEEPING'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='REWORK'\"\n                class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='HOLD'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='SEND FOR APPROVAL'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='ACCEPT'\"\n                class=\"badge badge-success\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='REJECT'\"\n                class=\"badge badge-danger\">{{row.StatusDescription}}</span>\n          <span *ngIf=\"row.StatusDescription ==='READY FOR TRANSFER'\"\n                class=\"badge badge-warning\">{{row.StatusDescription}}</span>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"goToClaimEditor(claimEditor,row.ClientID,row.VehicleID,row.ClaimID,row.ClaimGroupID)\">View Claim </button>|\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"SendGroupToSupervisor(row.GroupID,row.ClaimID)\"> Submit To Supervisor </button>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator></mat-paginator>\n  </div>\n  \n  \n</div>\n</div>\n</div>\n";

/***/ }),

/***/ 35911:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/Claims/supervisor-editor/supervisor-editor.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>supervisor-editor works!</p>\n";

/***/ }),

/***/ 21053:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Files/file-upload/file-upload.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n  <!-- ** END: INFORMATION MESSAGE AREA ** -->\n\n \n<ng-template #FileUploader let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">FILE UPLOADER</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(FileUploader)\">Close</button>\n    </div>\n    <div class=\"modal-body\">    \n          \n        <div class=\"row\">\n            <textarea class=\"form-control\"  [(ngModel)]=\"comment\"  placeholder=\"File Comment\" rows=\"3\" required></textarea>\n        </div>\n        <label>Select a File (&lt; 5MB)</label>\n        <br/>\n        <input type=\"file\" (change)=\"onFileChange($event)\" />\n       \n       \n       \n  </div>\n  <div class=\"card-footer\">\n    <button (click)=\"uploadFile()\" [disabled]=\"!theFile\">\n        Upload File\n      </button>\n    \n\n</div> \n \n  \n  </ng-template>\n\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i>  \n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"openModal(FileUploader)\">Upload File</button>        \n        <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\"\n          placeholder=\"Search\">\n  \n      </div>\n      <div class=\"card-body\">\n        <div class=\"example-container mat-elevation-z8\">\n  \n          <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox   (change)=\"$event ? masterToggle($event) : null\" [checked]=\"selection.hasValue() && isAllSelected() == true\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n                \n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox  #checkBox [value]=\"row\" (change)=\"getCheckbox(checkBox)\" (click)=\"$event.stopPropagation()\" (change)=\"$event ? selectRow($event, row) : null\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row) == true\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"FileName\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>FileName </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.FileName}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"FileType\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>FileType </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.FileType}} </mat-cell>\n            </ng-container>\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"FileSize\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>FileSize(KB) </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.FileSize}} </mat-cell>\n            </ng-container>\n  \n            <ng-container matColumnDef=\"comment\" class=\"header\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b>Comment </b> </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.comment}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"actions\">\n                <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" >\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"downloadFile(row.ObjectId, row.FileType)\"><i class=\"fa fa-pencil\"></i> Download </button>\n                  \n                </mat-cell>\n              </ng-container> \n           \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n  \n          <mat-paginator></mat-paginator>\n        </div>\n  \n  \n      </div>\n    </div>\n \n  ";

/***/ }),

/***/ 14399:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/client-type/client-type.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Manage Client Types</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n        <form   method=\"post\" [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n            <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  \n              <label class=\"col-md-3 col-form-label\" for=\"text-input\"> Client Type:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\"  formControlName=\"ClientTypeDescription\"     [(ngModel)]=\"object.ClientTypeDescription\" class=\"form-control\" placeholder=\"Client Type is required\"   required>\n                \n            \n               </div>\n              </div>\n            </div>          \n           \n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\"for='Contr' >Is item active ?</label>\n                <div class=\"col-md-9\">\n                    <label class=\"switch switch-label switch-outline-primary-alt\">\n                        <input    formControlName=\"Active\"   [(ngModel)]=\"object.Active\" type=\"checkbox\"  class=\"switch-input\" >\n                        <span class=\"switch-slider\"  data-checked=\"✓\" data-unchecked=\"✕\"></span>              \n                   </label>\n                </div>\n              </div>\n           \n            \n            <div class=\"card-footer\">\n                            \n                \n                <button  type=\"submit\"  *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n              </div>\n            </form>\n    </div>\n    \n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"add(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"ClientTypeID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>ClientType  ID</b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClientTypeID}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"ClientTypeDescription\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Client Type </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClientTypeDescription}} </mat-cell>\n            </ng-container>\n      \n        <!-- ID Column -->\n       \n       \n       \n        <ng-container matColumnDef=\"Active\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.Active\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"!row.Active\" class=\"badge badge-dark\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.ClientTypeID)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n";

/***/ }),

/***/ 49922:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/nationality/nationality.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Manage Nationality Types</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n        <form   method=\"post\" [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n            <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  \n              <label class=\"col-md-3 col-form-label\" for=\"text-input\"> Nationality Type:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\"  formControlName=\"NationalityDescription\"     [(ngModel)]=\"object.NationalityDescription\" class=\"form-control\" placeholder=\"Nationality Type is required\"   required>\n                \n            \n               </div>\n              </div>\n            </div>          \n           \n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\"for='Contr' >Is item active ?</label>\n                <div class=\"col-md-9\">\n                    <label class=\"switch switch-label switch-outline-primary-alt\">\n                        <input    formControlName=\"Active\"   [(ngModel)]=\"object.Active\" type=\"checkbox\"  class=\"switch-input\" >\n                        <span class=\"switch-slider\"  data-checked=\"✓\" data-unchecked=\"✕\"></span>              \n                   </label>\n                </div>\n              </div>\n           \n            \n            <div class=\"card-footer\">\n                            \n                \n                <button  type=\"submit\"  *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n              </div>\n            </form>\n    </div>\n    \n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"add(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"NationalityID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Nationality ID</b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.NationalityID}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"NationalityDescription\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Nationality Type </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.NationalityDescription}} </mat-cell>\n            </ng-container>\n      \n        <!-- ID Column -->\n       \n       \n       \n        <ng-container matColumnDef=\"Active\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.Active\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"!row.Active\" class=\"badge badge-dark\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.NationalityID)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n";

/***/ }),

/***/ 99815:
/*!*************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/rank-types/rank-types.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Manage Rank Types</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n        <form   method=\"post\" [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n            <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  \n              <label class=\"col-md-3 col-form-label\" for=\"text-input\"> Rank Type:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\"  formControlName=\"RankDescription\"     [(ngModel)]=\"object.RankDescription\" class=\"form-control\" placeholder=\"Rank Type is required\"   required>\n                \n            \n               </div>\n              </div>\n            </div>          \n           \n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\"for='Contr' >Is item active ?</label>\n                <div class=\"col-md-9\">\n                    <label class=\"switch switch-label switch-outline-primary-alt\">\n                        <input    formControlName=\"Active\"   [(ngModel)]=\"object.Active\" type=\"checkbox\"  class=\"switch-input\" >\n                        <span class=\"switch-slider\"  data-checked=\"✓\" data-unchecked=\"✕\"></span>              \n                   </label>\n                </div>\n              </div>\n           \n            \n            <div class=\"card-footer\">\n                            \n                \n                <button  type=\"submit\"  *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n              </div>\n            </form>\n    </div>\n    \n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"add(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"RankID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Rank ID</b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.RankID}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"RankDescription\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Rank Type </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.RankDescription}} </mat-cell>\n            </ng-container>\n      \n        <!-- ID Column -->\n       \n       \n       \n        <ng-container matColumnDef=\"Active\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.Active\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"!row.Active\" class=\"badge badge-dark\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.RankID)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n";

/***/ }),

/***/ 46671:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/refund-rates/refund-rates.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Manage Refund Rates</h4>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n        <form method=\"post\" [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"\n            class=\"was-validated\">\n\n\n            <div class=\"row\">\n\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"RefundTypeDescription\">Description:</label>\n\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"RefundTypeDescription\"\n                    [(ngModel)]=\"object.RefundTypeDescription\"   required readonly>\n                </div>\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"RefundEffectiveDate\">Effective Date</label>\n                    <input type=\"date\" class=\"form-control form-control-sm\" formControlName=\"RefundEffectiveDate\"\n                      required>\n                </div>\n\n\n            </div>\n            <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <strong>Fuel Duty</strong> Form\n                    </div>\n\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n\n                            <div class=\"form-group col-sm-6\">\n                                <label for=\"Code\">Fuel Duty Code:</label>\n                                <input class=\"form-control\" formControlName=\"RefundFuelCode\"  [(ngModel)]=\"object.RefundFuelCode\" type=\"text\" readonly>\n\n                            </div>\n                            <div class=\"form-group col-sm-6\">\n                                <label>Fuel Duty Rate</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"RefundFuelLevy\"  type=\"number\"  [(ngModel)]=\"object.RefundFuelLevy\" required>\n                            </div>\n\n                        </div>\n                     \n                    </div>\n                </div>\n\n            </div>\n            <div class=\"col-sm-6\">\n\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <strong>Excise Duty</strong> Form\n                    </div>\n\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n\n                            <div class=\"form-group col-sm-6\">\n                                <label for=\"Code\">Excise Duty Code:</label>\n                                <input class=\"form-control\" formControlName=\"RefundExciseCode\"  [(ngModel)]=\"object.RefundExciseCode\" type=\"text\" readonly>\n\n                            </div>\n                            <div class=\"form-group col-sm-6\">\n                                <label>Excise Duty rate</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"RefundExciseDuty\"   type=\"number\" [(ngModel)]=\"object.RefundExciseDuty\" required>\n                            </div>\n\n                        </div>\n                     \n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n            <div class=\"card-footer\">\n\n\n                <button type=\"submit\" *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-primary\"><i\n                        class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            </div>\n        </form>\n    </div>\n\n</ng-template>\n<!---Dashboard-->\n\n<div class=\"col-lg-12\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i>\n           \n            <input matInput (keyup)=\"applyFilter($event.target.value)\"\n                class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n\n        </div>\n        <div class=\"card-body\">\n            <div class=\"example-container mat-elevation-z8\">\n\n              <mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"RefundRateID\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundRateID</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundRateID}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundDescriptionID\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundDescriptionID</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundDescriptionID}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundTypeDescription\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundType</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundTypeDescription}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundFuelCode\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundFuelCode</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundFuelCode}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundExciseCode\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundExciseCode</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundExciseCode}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundEffectiveDate\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundEffectiveDate</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundEffectiveDate}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundCancellationDate\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundCancellationDate</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundCancellationDate}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundExciseDuty\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundExciseDuty</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundExciseDuty}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"RefundFuelLevy\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RefundFuelLevy</b></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.RefundFuelLevy}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"IsActive\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Status</b> </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\">\n                    <span *ngIf=\"row.IsActive\" class=\"badge badge-success\">Active</span>\n                    <span *ngIf=\"!row.IsActive\" class=\"badge badge-dark\">In-Active</span>\n                  </mat-cell>\n                </ng-container>\n                <!-- ID Column -->\n\n\n                <ng-container matColumnDef=\"actions\">\n                  <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\">\n                    <button *ngIf=\"row.IsActive\" type=\"submit\" class=\"btn btn-sm btn-primary\"\n                            (click)=\"edit(content,row.RefundRateID)\">\n                      <i class=\"fa fa-file\"></i> View\n                    </button>\n                  </mat-cell>\n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                </mat-row>\n              </mat-table>\n\n                <mat-paginator></mat-paginator>\n            </div>\n\n\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 14061:
/*!***************************************************************************************!*\
  !*** ./src/app/views/forms/Lookups/title-types/title-types.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Manage Title Types</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n        <form   method=\"post\" [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n            <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  \n              <label class=\"col-md-3 col-form-label\" for=\"text-input\"> Title Type:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\"  formControlName=\"TitleDescription\"     [(ngModel)]=\"object.TitleDescription\" class=\"form-control\" placeholder=\"Title Type is required\"   required>\n                \n            \n               </div>\n              </div>\n            </div>          \n           \n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\"for='Contr' >Is item active ?</label>\n                <div class=\"col-md-9\">\n                    <label class=\"switch switch-label switch-outline-primary-alt\">\n                        <input    formControlName=\"Active\"   [(ngModel)]=\"object.Active\" type=\"checkbox\"  class=\"switch-input\" >\n                        <span class=\"switch-slider\"  data-checked=\"✓\" data-unchecked=\"✕\"></span>              \n                   </label>\n                </div>\n              </div>\n           \n            \n            <div class=\"card-footer\">\n                            \n                \n                <button  type=\"submit\"  *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n              </div>\n            </form>\n    </div>\n    \n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"add(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"TitleID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Title ID</b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.TitleID}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"TitleDescription\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Title Type </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.TitleDescription}} </mat-cell>\n            </ng-container>\n      \n        <!-- ID Column -->\n       \n       \n       \n        <ng-container matColumnDef=\"Active\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.Active\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"!row.Active\" class=\"badge badge-dark\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.TitleID)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n";

/***/ }),

/***/ 14018:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/forms/Reports/report-viewer-dashboard/report-viewer-dashboard.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <strong>CLAIMS</strong> Reports\n            </div>\n\n            <div class=\"card-body\">\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\" (click)=\"openReport(Report,'GroupTotals');\">Group\n                        Totals </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ClaimHistory');\">Claim History </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ClaimStatusPerClient');\"> Claim Status Per Client</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'InvoiceParticularsPerClaim');\"> Invoice Particulars Per Claim</a>\n                </div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'OutstandingClaims');\"> Outstanding 'OS' Claims per period</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ProtocolClaimsPerClientPerPeriod');\">Protocol Claims Per Client Per\n                        Period </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\" (click)=\"openReport(Report,'ClaimTotals');\">Claim\n                        Totals </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ListOfClaimsForwardedForPayment');\">List of Claims Forwarded for\n                        Payment </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'WarningOdometerReport');\">Odometer Warning Letter </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'RefundOfExcise');\">Refund of Excise duty and Fuel levy </a></div>\n            </div>\n\n        </div>\n        <div class=\"card\">\n\n            <div class=\"card-header\">\n                <strong>CLIENT</strong> Reports\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ActiveClientsPerClientType');\">Number of Active Clients per client\n                        type</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\" (click)=\"openReport(Report,'ClientList');\">List\n                        of All Clients </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ClientRegistration');\"> Confirmarion of Client Registration</a>\n                </div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ClientDeRegistration');\"> Confirmation of Client De-Registration</a>\n                </div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ClientTypeChange');\">Confirmation of Amendents to an Embassy </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n\n            <div class=\"card-header\">\n                <strong>Vehicles</strong> Reports\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'NewVehiclePerPeriod');\"> New or Cancelled Vehicles Per Period </a>\n                </div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'TemporaryVehiclesForClient');\"> Temporary Vehicles For Client </a>\n                </div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'DeRegistrationInRefundScheme');\"> De-Registration for Participation\n                        in Fuel Refund Scheme </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'AmendmentInFuelRefundScheme');\"> Amendment for Participation in the\n                        Fuel Refund Scheme </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'RegistrationInFuelRefundScheme');\"> Registration for Participation\n                        in the Fuel Refund Scheme</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'VehicleOdometerReadingPerPeriod');\">Vehicle Odometer Reading per\n                        Period </a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ActiveVehiclesPerClient');\"> Active and InActive Vehicles per Client\n                    </a></div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <strong>OTHER</strong> Reports\n            </div>\n\n            <div class=\"card-body\">\n\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'RefundPerClientPerPeriod');\">Refunds per Client per Period</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'RefundAmountPerPeriod');\">Refund Amount per Period</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'RefundRates');\">Refund Rates</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ActiveReplacementsHistory');\">Cheque Replacement History</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'ProductionReport');\">Production Report per Period</a></div>\n                <div class=\"row\"><a class='btn' style=\"cursor:pointer\"\n                        (click)=\"openReport(Report,'LookupListing');\">Lookup Listing</a></div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n    \n\n\n    </div>\n    <div class=\"col-sm-6\">\n       \n\n\n    </div>\n</div>\n\n\n<ng-template #Report let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{reportName}}</h4>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"container\">\n                <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                    [showparameters]=\"showParameters\" [language]=\"language\" [width]=\"width\"\n                    [height]=\"height\" [toolbar]=\"toolbar\" [ShowPrintButton]=\"true\" >\n                </ssrs-reportviewer>\n            </div>\n        </div>\n    </div>\n\n</ng-template>";

/***/ }),

/***/ 34564:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/forms/Reports/report-viewer/report-viewer.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>report-viewer works!</p>\n\n    <div class=\"container\">\n    <ssrs-reportviewer\n        [reportserver]=\"reportServer\"\n        [reporturl]=\"reportUrl\"\n        [showparameters]=\"showParameters\" \n        [parameters]=\"parameters\" \n        [language]=\"language\" \n        [width] =\"width\" \n        [height]=\"height\" \n        [toolbar]=\"toolbar\" >\n    </ssrs-reportviewer>\n</div>";

/***/ }),

/***/ 91329:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-address/client-address.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n    <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>PHYSICAL ADDRESS</strong> Form\n        </div>\n        <form [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n          <div class=\"card-body\">\n        \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"inputError1\">Buiding and Floor</label>\n              <div class=\"col-md-9\">\n              \n              \n            </div></div>\n            <div class=\"form-group row\">\n            \n              <div class=\"col-md-9\">\n              \n              \n            </div></div>\n            <div class=\"form-group row\">\n              \n              <div class=\"col-md-9\">\n              \n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"Nationality\">Town/City</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" id=\"Town\" type=\"TEXT\" name=\"Town\"  required>\n            </div></div>\n           \n            <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"Nationality\">Postal Code</label>\n                <div class=\"col-md-9\">\n                  <input class=\"form-control\" id=\"PostalCode\" type=\"TEXT\" name=\"PostalCode\"  required>\n              </div></div>\n          </div>\n        </form>\n      </div>\n    \n  \n\n\n      <!-----------Postal Address ------------->\n      \n    <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>POSTAL ADDRESS</strong> Form\n        </div>\n        <form [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n          <div class=\"card-body\">\n        \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"inputError1\">Buiding and Floor</label>\n              <div class=\"col-md-9\">\n              <input type=\"text\" class=\"form-control\" id=\"BuidingandFloor\" required>\n              \n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"ReferenceNumber\">Street and Number</label>\n              <div class=\"col-md-9\">\n              <input type=\"text\" class=\"form-control\" id=\"StreetandNumber\" required>\n              \n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"Surbub\">Surbub</label>\n              <div class=\"col-md-9\">\n              <input class=\"form-control\" id=\"Surbub\" type=\"TEXT\" name=\"Surbub\"  required>\n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"Nationality\">Town/City</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" id=\"Town\" type=\"TEXT\" name=\"Town\"  required>\n            </div></div>\n           \n            <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"Nationality\">Postal Code</label>\n                <div class=\"col-md-9\">\n                  <input class=\"form-control\" id=\"PostalCode\" type=\"TEXT\" name=\"PostalCode\"  required>\n              </div></div>\n          </div>\n        </form>\n      </div>\n    \n  ";

/***/ }),

/***/ 1261:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-bank-details/client-bank-details.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n    <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>BANK DETAILS</strong> Form\n        </div>\n        <form [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n          <div class=\"card-body\">\n        \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"Account Number\">Account Number</label>\n              <div class=\"col-md-9\">\n              <input type=\"text\" class=\"form-control\" id=\"Account Number\" required>\n              \n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"ReferenceNumber\">Institutions Name</label>\n              <div class=\"col-md-9\">\n              <input type=\"text\" class=\"form-control\" id=\"InstitutionsName\" required>\n              \n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"Allias\">Allias</label>\n              <div class=\"col-md-9\">\n              <input class=\"form-control\" id=\"Allias\" type=\"TEXT\" name=\"Allias\"  required>\n            </div></div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"Nationality\">Account Type</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" id=\"AccountType\" type=\"TEXT\" name=\"AccountType\"  required>\n            </div></div>\n           \n            <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"BranchCode\">Branch Code</label>\n                <div class=\"col-md-9\">\n                  <input class=\"form-control\" id=\"BranchCode\" type=\"TEXT\" name=\"BrancHCode\"  required>\n              </div></div>\n          </div>\n        </form>\n      </div>\n    \n  ";

/***/ }),

/***/ 35487:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-contacts/client-contacts.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div class=\"card\">\n    <div class=\"card-header\">\n      <strong>CONTACT INFORMATION</strong> Form\n    </div>\n    <form [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"inputSuccess1\">Type</label>\n          <div class=\"col-md-9\">\n          <select formControlName=\"Role\"  [(ngModel)]=\"userObject.RoleId\"  id=\"Contr\" name=\"Contr\" class=\"form-control\" required>\n              <option value=\"\">Role is  required</option>\n              <option *ngFor=\"let c of lstRole\" [ngValue]=\"c.ID\">{{c.RoleName}}</option>\n              \n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"inputError1\">Client Name</label>\n          <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"inputError1\" required>\n          \n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"ReferenceNumber\">Reference Number</label>\n          <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"ReferenceNumber\" required>\n          \n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"Reference Date\">Reference Date</label>\n          <div class=\"col-md-9\">\n          <input class=\"form-control\" id=\"ReferenceDate\" type=\"date\" name=\"Reference Date\" placeholder=\"date\" required>\n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"Nationality\">Nationality</label>\n          <div class=\"col-md-9\">\n          <select formControlName=\"Nationality\"  [(ngModel)]=\"userObject.RoleId\"  id=\"Contr\" name=\"Contr\" class=\"form-control\" required>\n              <option value=\"\">Nationality is  required</option>\n              <option *ngFor=\"let c of lstNationality\" [ngValue]=\"c.ID\">{{c.RoleName}}</option>\n              \n            </select>\n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"Code\">Code</label>\n          <div class=\"col-md-9\">\n          <input class=\"form-control\" id=\"Code\" type=\"text\" name=\"Code\"  required>\n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"RegistrationDate\">Registration Date</label>\n          <div class=\"col-md-9\">\n          <input class=\"form-control\" id=\"RegistrationDate\" type=\"date\" name=\"RegistrationDate\" placeholder=\"date\" required>\n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"CancellationDate\">Cancellation Date</label>\n          <div class=\"col-md-9\">\n          <input class=\"form-control\" id=\"CancellationDate\" type=\"date\" name=\"CancellationDate\" placeholder=\"date\" required>\n        </div></div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"Code\">Status</label>\n          <div class=\"col-md-9\">\n          <input class=\"form-control\" id=\"Status\" type=\"text\" name=\"Status\"  required>\n        </div></div>\n      </div>\n    </form>\n  </div>\n\n";

/***/ }),

/***/ 31811:
/*!************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-editor/client-editor.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n      <form [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"was-validated\">\n        <div class=row>\n          <div class=\"col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>GENERAL INFORMATION</strong> Form \n              </div>\n\n              <div class=\"card-body\">\n\n                <div class=\"row\">\n\n\n                  <div class=\"form-group col-sm-8\">\n                    <label>Client Name</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientName\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputSuccess1\">Type</label>\n                    <select formControlName=\"ClientTypeID\" class=\"form-control form-control-sm\" required>\n                      <option value=\"\">Select One.. </option>\n                      <option *ngFor=\"let c of clientType\" [ngValue]=\"c.ClientTypeID\">{{c.ClientTypeDescription}}\n                      </option>\n\n                    </select>\n                  </div>\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"Reference Date\">Reference Date</label>\n                    <input class=\"form-control form-control-sm\" type=\"date\" formControlName=\"ClientRefDate\"\n                      placeholder=\"date\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"Nationality\">Nationality</label>\n                    <select formControlName=\"ClientNationalityID\" class=\"form-control form-control-sm\" required>\n                      <option value=\"\">Select One.. </option>\n                      <option *ngFor=\"let c of clientNatiality\" [ngValue]=\"c.NationalityID\">{{c.NationalityDescription}}\n                      </option>\n\n                    </select>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label for=\"Code\">Code</label>\n                      <input class=\"form-control form-control-sm\" formControlName=\"strClientID\" type=\"text\" readonly>\n                      <input *ngIf=\"IsClientIdHidden\" class=\"form-control form-control-sm\" formControlName=\"ClientID\"\n                        type=\"text\" data-ng-hide=\"textbox\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"RegistrationDate\">Registration Date</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"ClientEffectiveDate\" type=\"date\"\n                      placeholder=\"date\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"CancellationDate\">Cancellation Date</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"ClientCancellationDate\" type=\"date\" required\n                      placeholder=\"date\">\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label for=\"Code\">Status</label>\n                      <span *ngIf=\"clientActive\" class=\"form-control form-control-sm badge badge-success\">Active</span>\n                      <span *ngIf=\"!clientActive\"\n                        class=\"form-control form-control-sm badge badge-danger\">In-Active</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n\n\n\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label for=\"ReferenceNumber\">Reference Number</label>\n                      <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientRefNumber\">\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>CONTACT PERSON INFORMATION</strong> Form\n              </div>\n\n              <div class=\"card-body\">\n\n\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputSuccess1\">Title/Salutation</label>\n                    <select formControlName=\"ClientContactTitleID\" class=\"form-control form-control-sm\" required>\n                      <option value=\"\">Select One.. </option>\n                      <option *ngFor=\"let c of clientTitle\" [ngValue]=\"c.TitleID\">{{c.TitleDescription}}</option>\n\n                    </select>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label>Initials</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientContactInitials\" required>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label for=\"ReferenceNumber\">Surname</label>\n                      <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientContactSurname\" required>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"Reference Date\">Phone Number</label>\n                    <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ClientContactPhone\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"Nationality\">Cell No</label>\n                    <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ClientContactCell\" required>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label for=\"Code\">Phone Code</label>\n                      <input class=\"form-control form-control-sm\" formControlName=\"ClientContactPhoneCode\" type=\"text\" required>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"RegistrationDate\">Facsimile Number</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"ClientContactFax\" type=\"text\" required>\n                  </div>\n                  <div class=\"form-group col-sm-8\">\n                    <label for=\"CancellationDate\">Email Address</label>\n\n                    <div class=\"input-group\">\n                      <input type=\"email\" formControlName=\"ClientContactEMail\" class=\"form-control form-control-sm\" required\n                        placeholder=\"Email\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\"><i class=\"fa fa-envelope-o\"></i></span>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>PHYSICAL ADDRESS</strong> Form\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputError1\">Buiding and Floor</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientAddress1\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"ReferenceNumber\">Street and Number</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientAddress2\" required>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <label for=\"Surbub\">Surbub</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"ClientAddress3\" type=\"TEXT\" required>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputError1\">Town/City</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientAddress4\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"ClientAddressPostCode\">Postal Code</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientAddressPostCode\"\n                      required>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <!------------------Physical---------------->\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>POSTAL ADDRESS</strong> Form\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputError1\">Postal Address</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientPostal1\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputError1\">Town/City</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientPostal2\" required>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <label for=\"Surbub\">Surbub</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"ClientPostal3\" type=\"TEXT\" required>\n                  </div>\n                </div>\n                <div class=\"row\">\n\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"ReferenceNumber\">Postal Code</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientPostalPostCode\"\n                      required>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <!------------------Banking Details---------------->\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>BANKING DETAILS</strong> Form\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputError1\">Account Number</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientBankAccount\"\n                      required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"ReferenceNumber\">Account Type</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientBankAccountType\"\n                      required>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <label for=\"Surbub\">Institutions Name</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"ClientBankName\" type=\"text\" required>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"inputError1\">Branch Code</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientBankBranchCode\"\n                           required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"ReferenceNumber\">Allias</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"ClientAllias\" required>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <label for=\"Surbub\">Miscellaneous Account Number</label>\n                    <input class=\"form-control form-control-sm\" formControlName=\"MiscellaneousAccount\" type=\"text\" required>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <app-file-upload *ngIf=\"FileQueryString.IdProvided\" [FileQueryString]=\"FileQueryString\"></app-file-upload>  \n        <div class=\"card-footer\">\n          <button type=\"submit\" *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-success\"><i\n              class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"Close()\"><i class=\"fa fa-ban\"></i>\n            Close</button>\n        </div>\n      </form>\n";

/***/ }),

/***/ 94500:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-information/client-information.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   \n      <div class=\"card-header\">\n        <strong>CLIENT INFORMATION</strong> Form\n      </div>\n      <form [formGroup]=\"ClientInforForm\" (ngSubmit)=\"onSubmit()\"   class=\"was-validated\">\n        <div class=\"card-body\">\n        \n          <div class=\"row\">\n              \n            <div class=\"form-group col-sm-2\">\n              <label  for=\"Code\">Code</label>\n              <input class=\"form-control\" formControlName=\"strClientID\" type=\"text\"   >\n              <input *ngIf=\"IsClientIdHidden\" class=\"form-control\" formControlName=\"ClientID\" type=\"text\" data-ng-hide=\"textbox\"   >\n       \n            </div>\n              <div class=\"form-group col-sm-6\">\n                  <label  >Client Name</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"ClientName\" required >\n              </div>\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label  for=\"Code\">Status</label>               \n                  <span *ngIf=\"clientActive\" class=\"form-control badge badge-success\">Active</span>\n                  <span *ngIf=\"!clientActive\" class=\"form-control badge badge-danger\">In-Active</span> </div>\n              </div>\n             <!-- <div class=\"form-group col-sm-2\">\n                <label  for=\"Reference Date\">Reference Date</label>\n                <input class=\"form-control\"  type=\"date\" formControlName=\"ClientRefDate\"  placeholder=\"date\" required>\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label  for=\"ReferenceNumber\">Reference Number</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"ClientRefNumber\"  >\n              </div>-->\n            </div>\n          \n            \n           <!-- <div class=\"row\">\n              <div class=\"form-group col-sm-4\">\n                <label  for=\"RegistrationDate\">Registration Date</label>\n                <input class=\"form-control\"  formControlName=\"ClientEffectiveDate\" type=\"date\"  placeholder=\"date\" required>\n            </div>\n            <div class=\"form-group col-sm-4\">\n                <label  for=\"CancellationDate\">Cancellation Date</label>\n                <input class=\"form-control\" formControlName=\"ClientCancellationDate\" type=\"date\"  placeholder=\"date\" >\n            </div>\n              \n              \n            </div>\n           \n            -->\n         \n        </div>\n      </form>\n  \n   \n     \n";

/***/ }),

/***/ 28074:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/client-vehicles/client-vehicles.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"!hasClaims\" class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border\" role=\"status\">\n\n  </div><span class=\"visually-hidden\">Loading...</span>\n</div>\n\n\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i>\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"\n                  data-backdrop=\"static\" data-keyboard=\"false\">\n            <i class=\"cui-pencil icons\"></i> Add New Vehicle\n          </button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n\n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"ClientID\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>CLIENT ID </b></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ClientAllias\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>CLIENT NAME </b></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n        </ng-container>\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"VehicleRegistration\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b> VehicleRegistration</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.VehicleRegistration}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"VehicleCancellationDate\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>DeregisteredDate </b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.VehicleCancellationDate}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"VehicleStatus\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>  Vehicle Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <span *ngIf=\"row.VehicleStatus =='Active'\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"row.VehicleStatus =='InActive'\" class=\"badge badge-danger\">In-Active</span>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.ID)\"><i class=\"fa fa-file\"></i> View </button>\n            <!--<button type=\"submit\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['/registration/clientVehicles',row.ClientID]\"><i class=\"fa fa-file\"></i> View Vehicles </button>-->\n            <!--<button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"btnClick(row.ClientID)\" ><i class=\"fa fa-file\"></i> View Vehicles </button>\n      <-->\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n\n    <ng-template #content let-modal>\n\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">VEHICLE EDITOR</h4>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n      </div>\n      <div class=\"modal-body\">\n        <app-vehicle-editor *ngIf=\"vehicleObject\" (bindGridViewEmitter)=\"bindGrindView()\" [vehicleObject]=\"vehicleObject\"></app-vehicle-editor>\n\n      </div>\n\n    </ng-template>\n";

/***/ }),

/***/ 84600:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/clientdashboard/clientdashboard.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n\n\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">CLIENT EDITOR</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n    <app-client-editor *ngIf=\"clientObject\" (bindGrindView)=\"bindGrindView()\" [clientObject]=\"clientObject\"></app-client-editor> \n      \n  </div>\n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add New Client</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"ClientID\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>CLIENT ID </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.ClientID}} </mat-cell>\n            </ng-container>\n            \n        <ng-container matColumnDef=\"ClientAllias\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>CLIENT NAME </b></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n        </ng-container>\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"ClientTypeDescription\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b> CLIENT TYPE</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.ClientTypeDescription}} </mat-cell>\n        </ng-container>   \n       \n       \n        <ng-container matColumnDef=\"ClientStatus\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>  CLIENT STATUS</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.ClientStatus =='Active'\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"row.ClientStatus =='InActive'\" class=\"badge badge-danger\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.ClientID)\" ><i class=\"fa fa-file\"></i> View Client </button>  |\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['/registration/clientVehicles',row.ClientID]\" ><i class=\"fa fa-file\"></i> View Vehicles </button> \n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n\n";

/***/ }),

/***/ 53810:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owner-dashboard/owner-dashboard.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<div class=\"card\">\n\n  <div class=\"card-header\">\n    <i class=\"fa fa-align-justify\"></i> \n    <!--<button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"\n    data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add New Owner</button>-->\n    <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search owner\">\n  \n  </div>\n  <div class=\"card-body\">  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort >  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n             \n      <ng-container matColumnDef=\"TitleDescription\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Title</b></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.TitleDescription}} </mat-cell>\n      </ng-container>\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"SurnameAndInitials\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>SurnameAndInitials</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.SurnameAndInitials}} </mat-cell>\n      </ng-container>   \n     \n      <ng-container matColumnDef=\"OwnerPassportNumber\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>PassportNo </b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.OwnerPassportNumber}} </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"OwnerMaritalStatus\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>MaritalStatus </b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.OwnerMaritalStatus}} </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"NationalityDescription\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>Nationality </b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.NationalityDescription}} </mat-cell>\n        </ng-container> \n     \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" >\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.OwnerID)\" ><i class=\"fa fa-file\"></i> View </button>\n        </mat-cell>\n      </ng-container>    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator></mat-paginator>\n  </div>\n</div>\n</div>\n\n<ng-template #content let-modal>\n      \n     \n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">OWNER EDITOR</h4>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n  </div>\n  <div class=\"modal-body\">\n  <app-owner-editor *ngIf=\"ownerObject\" [ownerObject]=\"ownerObject\"></app-owner-editor>\n      \n  </div>\n  \n</ng-template>\n";

/***/ }),

/***/ 45316:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owner-editor/owner-editor.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n    <form [formGroup]=\"AmbassyForm\" (ngSubmit)=\"onSubmit()\"   class=\"was-validated\">\n      <div class=row>\n\n<div  class=\"col-sm-6\" >\n\n\n  \n  <div class=\"card\">\n    \n  <div class=\"card-header\">\n    <strong>OWNER INFORMATION</strong> Form\n  </div> \n  <div class=\"card-body\">   \n\n<div class=\"row\">\n<div class=\"form-group col-sm-4\">\n  <label  for=\"OwnerSurname\">\n    Surname</label>\n  \n  <input type=\"text\" class=\"form-control\" formControlName=\"OwnerSurname\"  required >\n</div>\n<div class=\"form-group col-sm-4\">\n  <label  >Initials</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"OwnerInitials\"  required >\n</div>\n<div class=\"form-group col-sm-4\">\n  <label  for=\"VehicleRegistration\">Title/Salutation</label>\n  <select formControlName=\"TitleID\"    class=\"form-control\"   required>        \n    <option value=\"\">Select One.. </option>\n    <option *ngFor=\"let c of clientTitle\" [ngValue]=\"c.TitleID\">{{c.TitleDescription}}</option>    \n    \n  </select>\n</div>\n\n</div>\n<div class=\"row\">\n<div class=\"form-group col-sm-4\">\n  <label  for=\"OwnerPassportNumber\">\n    Passport</label>\n  \n  <input type=\"text\" class=\"form-control\" formControlName=\"OwnerPassportNumber\"   required >\n</div>\n<div class=\"form-group col-sm-4\">\n  <label  >Rank</label>\n  <select formControlName=\"RankID\"    class=\"form-control\"  required >\n    <option value=\"\">Select One.. </option>\n    <option *ngFor=\"let c of ownerRank\" [ngValue]=\"c.RankID\">{{c.RankDescription}}</option>  \n    \n  </select>\n</div>\n<div class=\"form-group col-sm-4\">\n  <label  for=\"NationalityID\">Nationality</label>\n  <select formControlName=\"NationalityID\"    class=\"form-control\"  required >\n    <option value=\"\">Select One.. </option>\n    <option *ngFor=\"let c of clientNatiality\" [ngValue]=\"c.NationalityID\">{{c.NationalityDescription}}</option>  \n    \n    \n  </select>\n</div>\n\n</div>\n\n<div class=\"row\">\n<div class=\"form-group col-sm-4\">\n  <label  for=\"OwnerMaritalStatus\">\n    Marital Status</label>\n  \n    <select formControlName=\"OwnerMaritalStatus\"    class=\"form-control\"  required >\n        <option value=\"99\">Select One..  </option>\n        <option value=\"1\">Married </option>\n        <option value=\"0\">Single </option>\n        \n      </select>\n</div>\n\n</div>\n\n<app-file-upload *ngIf=\"FileQueryString.IdProvided\"  [FileQueryString]=\"FileQueryString\"></app-file-upload> \n</div>\n</div> \n</div>\n<div class=\"col-sm-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      \n      <strong>Owner's Vehicles</strong> dashboard\n    </div>\n    <div class=\"card-body\">  \n  <div class=\"example-container mat-elevation-z8\">\n  \n  <mat-table [dataSource]=\"dataSource\" matSort >  \n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n           \n    <ng-container matColumnDef=\"ClientAllias\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Client Name </b></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n    </ng-container>\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"VehicleRegistration\" class=\"header\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header><b>VehicleReg.No </b> </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.VehicleRegistration}} </mat-cell>\n    </ng-container>   \n   \n    <ng-container matColumnDef=\"VehicleRefNumber\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Ref No. </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.VehicleRefNumber}} </mat-cell>\n      </ng-container> \n      <ng-container matColumnDef=\"VehicleCancellationDate\" class=\"header\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>CancellationDate </b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.VehicleCancellationDate}} </mat-cell>\n      </ng-container> \n  \n    <ng-container matColumnDef=\"VehicleStatus\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header><b>  Vehicle Status</b> </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >             \n        <span *ngIf=\"row.VehicleStatus =='Active'\" class=\"badge badge-success\">Active</span>\n        <span *ngIf=\"row.VehicleStatus =='InActive'\" class=\"badge badge-danger\">In-Active</span>\n      </mat-cell>\n    </ng-container> \n      \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n  \n  <mat-paginator></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n</div>\n\n      </div>\n      <div class=\"card-footer\">\n          <button type=\"submit\" *ngIf=\"AmbassyForm.valid\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n         <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"findInvalidControls();\"><i class=\"fa fa-ban\"  ></i> Close 1</button>\n      -->\n        </div>\n  </form>\n  \n\n\n";

/***/ }),

/***/ 12647:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/owners-not-linked/owners-not-linked.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<div class=\"card\">\n\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> \n      <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"\n      data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add New Owner</button>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search owner\">\n    \n    </div>\n    <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >  \n        <ng-container matColumnDef=\"select\">\n          <mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                          (change)=\"$event ? selection.toggle(row) : null\"\n                          [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </mat-cell>\n        </ng-container>\n               \n        <ng-container matColumnDef=\"TitleDescription\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Title</b></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.TitleDescription}} </mat-cell>\n        </ng-container>\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"SurnameAndInitials\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>SurnameAndInitials</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.SurnameAndInitials}} </mat-cell>\n        </ng-container>   \n       \n        <ng-container matColumnDef=\"OwnerPassportNumber\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>PassportNo </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.OwnerPassportNumber}} </mat-cell>\n          </ng-container> \n          <ng-container matColumnDef=\"OwnerMaritalStatus\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>MaritalStatus </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.OwnerMaritalStatus}} </mat-cell>\n          </ng-container> \n          <ng-container matColumnDef=\"NationalityDescription\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Nationality </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.NationalityDescription}} </mat-cell>\n          </ng-container> \n       \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.OwnerID)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n  </div>\n  </div>\n  \n  <ng-template #content let-modal>\n        \n       \n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">OWNER EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n    <app-owner-editor *ngIf=\"ownerObject\" [ownerObject]=\"ownerObject\"></app-owner-editor>\n        \n    </div>\n    \n  </ng-template>";

/***/ }),

/***/ 47338:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/vehicle-dashboard/vehicle-dashboard.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div class=\"card\">       \n  <app-client-information *ngIf=\"childClientObject\" [childClientObject]=\"childClientObject\"></app-client-information>    \n\n  \n </div>\n<ng-template #content let-modal>\n      \n     \n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">VEHICLE EDITOR</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n    <app-vehicle-editor *ngIf=\"vehicleObject\" (bindGrindView)=\"bindGrindView()\" [vehicleObject]=\"vehicleObject\"></app-vehicle-editor>\n        \n    </div>\n    \n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add New Vehicle</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >  \n        <ng-container matColumnDef=\"select\">\n          <mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                          (change)=\"$event ? selection.toggle(row) : null\"\n                          [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </mat-cell>\n        </ng-container>\n               \n        <ng-container matColumnDef=\"ClientAllias\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Client Name </b></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.ClientAllias}} </mat-cell>\n        </ng-container>\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"VehicleRegistration\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>VehicleReg.No </b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.VehicleRegistration}} </mat-cell>\n        </ng-container>   \n       \n        <ng-container matColumnDef=\"VehicleRefNumber\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Ref No. </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleRefNumber}} </mat-cell>\n          </ng-container> \n          <ng-container matColumnDef=\"VehicleCancellationDate\" class=\"header\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>DeregistrationDate </b> </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.VehicleCancellationDate}} </mat-cell>\n          </ng-container> \n\n        <ng-container matColumnDef=\"VehicleStatus\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b>  Vehicle Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.VehicleStatus =='Active'\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"row.VehicleStatus =='InActive'\" class=\"badge badge-danger\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.VehicleID)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n\n\n";

/***/ }),

/***/ 70234:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/forms/registration/vehicle-editor/vehicle-editor.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n    <form [formGroup]=\"AmbassyForm\" (ngSubmit)=\"onSubmit()\"   class=\"was-validated\">\n        <div class=row>\n\n          <div class=\"col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>VEHICLE INFORMATION</strong> Form\n              </div>\n\n              <div class=\"card-body\">\n                <div class=\"row\" *ngIf=\"vehicleObject.Mode == 'New'\">\n                  <div class=\"form-group col-sm-12\">\n                    <label for=\"ClientID\">Select Client</label>\n                    <select  formControlName=\"ClientID\" class=\"form-control\" required (change)='onOnclientSelected($event)'>\n                      <option value=\"\">Select One.. </option>\n                      <option *ngFor=\"let c of clients\" [ngValue]=\"c.ClientID\">{{c.ClientName}}</option>\n\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleRefNumber\">\n                      Note Verbale\n                    </label>\n\n                    <input type=\"text\" class=\"form-control\" formControlName=\"VehicleRefNumber\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label>Reference Date</label>\n                    <input appDateMask type=\"text\" class=\"form-control\" formControlName=\"VehicleRefDate\" required placeholder=\"date\">\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleRegistration\">Registration Number</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"VehicleRegistration\">\n                  </div>\n\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleEffectiveDate\">Effective Date</label>\n                    <input class=\"form-control\" appDateMask type=\"text\" formControlName=\"VehicleEffectiveDate\" placeholder=\"date\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleMake\">Make</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"VehicleMake\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleModel\">Model</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"VehicleModel\" required>\n                  </div>\n                </div>\n                <div class=\"row\">\n\n\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleTankCapacity\">Litres</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"VehicleTankCapacity\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleCancellationDate\">Deregistered Date</label>\n                    <input type=\"text\" appDateMask class=\"form-control\" formControlName=\"VehicleCancellationDate\" placeholder=\"date\" required>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"Status\">Status</label>\n                    <span *ngIf=\"vehicleStatus == 'Active'\" class=\"form-control badge badge-success\">Active</span>\n                    <span *ngIf=\"vehicleStatus== 'Inactive'\" class=\"form-control badge badge-danger\">In-Active</span>\n\n                  </div>\n                  <!--<div class=\"form-group col-sm-4\">\n        <label  for=\"TemporaryRegistration\">Temp Registration</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"TemporaryRegistration\"  > </div>-->\n                  <!--<div class=\"form-group col-sm-4\">\n            <label  for=\"VehiclePurchaseDate\">Purchase Date</label>\n            <input class=\"form-control\"  type=\"date\" formControlName=\"VehiclePurchaseDate\"  placeholder=\"date\" required>\n        </div>-->\n                </div>\n                <div class=\"row\">\n\n                  <div class=\"form-group col-sm-12\">\n                    <label for=\"VehiclesVIN\">Vehicle Identification Number</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"VehiclesVIN\" required>\n                  </div>\n\n\n                  <!--<div class=\"form-group col-sm-4\">\n          <label  for=\"RegistrationReason\">Registration Reason</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"RegistrationReason\" required ></div>-->\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"VehicleType\">Vehicle  Type</label><br />\n                    <!--<select formControlName=\"VehicleType\" class=\"form-control\" required>\n      <option value=\"\">Select One..  </option>\n      <option value=\"T\">Temporary </option>\n      <option value=\"P\">Permanent </option>\n\n    </select>-->\n\n                    <mat-radio-group formControlName=\"VehicleType\" aria-label=\"Select an option\">\n                      <mat-radio-button value=\"T\">Temporary</mat-radio-button>\n                      <mat-radio-button value=\"P\">Permanent</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n\n\n\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"FuelTypeID\">Fuel Type</label><br />\n                    <mat-radio-group formControlName=\"FuelTypeID\" aria-label=\"Select an option\">\n                      <mat-radio-button value=\"1\"> Petrol </mat-radio-button><br />\n                      <mat-radio-button value=\"2\">Diesel</mat-radio-button>\n                    </mat-radio-group>\n\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"OwnerType\">\tOwner Type</label><br />\n\n                    <mat-radio-group    formControlName=\"OwnerType\" aria-label=\"Select an option\" >\n                      <mat-radio-button  value=\"P\" (change)=\"changeOwnerType($event)\"> Private </mat-radio-button><br />\n                      <mat-radio-button value=\"O\" (change)=\"changeOwnerType($event)\">Official</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n\n                </div>\n\n\n\n              </div>\n\n\n            </div>\n            <div class=\"card\" *ngIf=\"FileQueryString.IdProvided\">\n\n              <div class=\"card-header\">\n                <strong>Vehicles</strong> Reports\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <a class='btn' style=\"cursor:pointer\"\n                     (click)=\"openReport(Report,'RegistrationInFuelRefundScheme');\">\n                    Registration for Participation\n                    in the Fuel Refund Scheme\n                  </a>\n                </div>\n                <div class=\"row\">\n                  <a class='btn' style=\"cursor:pointer\"\n                     (click)=\"openReport(Report,'AmendmentInFuelRefundScheme');\">\n                    Amendment for Participation in the\n                    Fuel Refund Scheme\n                  </a>\n                </div>\n                <div class=\"row\">\n                  <a class='btn' style=\"cursor:pointer\"\n                     (click)=\"openReport(Report,'DeRegistrationInRefundScheme');\">\n                    De-Registration for Participation\n                    in Fuel Refund Scheme\n                  </a>\n                </div>\n              </div>\n            </div>\n            <!--app-file-upload *ngIf=\"FileQueryString.IdProvided\"  [FileQueryString]=\"FileQueryString\"></app-file-upload>-->\n          </div>\n<div  class=\"col-sm-6\" >\n\n \n    \n    <div class=\"card\" *ngIf=\"ownerType=='P'\">\n      \n      <div class=\"card-header\">\n        <strong>OWNER INFORMATION</strong>  <select formControlName=\"OwnerID\" class=\"form-control w-25 p-3 border-bottom pull-right\" (change)='onOwnerSelected($event)'>\n          <option value=\"0\">Clear a Form.. </option>\n          <option *ngFor=\"let o of onwers\" [ngValue]=\"o.OwnerID\">{{o.SurnameAndInitials}}  </option>\n\n        </select>\n      </div> \n    <div class=\"card-body\">   \n    <div class=\"row\">\n   \n      <div class=\"form-group col-sm-8\">\n        \n        \n          \n          \n  \n      </div>\n    </div>\n<div class=\"row\">\n  <div class=\"form-group col-sm-4\">\n    <label  for=\"OwnerSurname\">\n      Surname</label>\n    \n    <input type=\"text\" class=\"form-control\" formControlName=\"OwnerSurname\"   >\n  </div>\n  <div class=\"form-group col-sm-4\">\n    <label  >Initials</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"OwnerInitials\"   >\n  </div>\n  <div class=\"form-group col-sm-4\">\n    <label  for=\"VehicleRegistration\">Title/Salutation</label>\n    <select formControlName=\"TitleID\"    class=\"form-control\"  >        \n      <option value=\"\">Select One.. </option>\n      <option *ngFor=\"let c of clientTitle\" [ngValue]=\"c.TitleID\">{{c.TitleDescription}}</option>    \n      \n    </select>\n  </div>\n\n</div>\n<div class=\"row\">\n  <div class=\"form-group col-sm-4\">\n    <label  for=\"OwnerPassportNumber\">\n      Passport</label>\n    \n    <input type=\"text\" class=\"form-control\" formControlName=\"OwnerPassportNumber\"   >\n  </div>\n  <div class=\"form-group col-sm-4\">\n    <label  >Rank</label>\n    <select formControlName=\"RankID\"    class=\"form-control\"  >\n      <option value=\"\">Select One.. </option>\n      <option *ngFor=\"let c of ownerRank\" [ngValue]=\"c.RankID\">{{c.RankDescription}}</option>  \n      \n    </select>\n  </div>\n  <div class=\"form-group col-sm-4\">\n    <label  for=\"NationalityID\">Nationality</label>\n    <select formControlName=\"NationalityID\"    class=\"form-control\"  >\n      <option value=\"\">Select One.. </option>\n      <option *ngFor=\"let c of clientNatiality\" [ngValue]=\"c.NationalityID\">{{c.NationalityDescription}}</option>  \n      \n      \n    </select>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"form-group col-sm-4\">\n    <label  for=\"OwnerMaritalStatus\">\n      Marital Status</label>\n    \n      <select formControlName=\"OwnerMaritalStatus\"    class=\"form-control\"  >\n          <option value=\"99\">Select One..  </option>\n          <option value=\"1\">Married </option>\n          <option value=\"0\">Single </option>\n          \n        </select>\n  </div>\n \n</div>\n\n   \n  </div>\n</div> \n</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" *ngIf=\"AmbassyForm.valid\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          \n          <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"findInvalidControls();\"><i class=\"fa fa-ban\"  ></i> Close 1</button>\n  -->\n        </div>\n    </form>\n    <ng-template #Report let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{reportName}}</h4>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"container\">\n            <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\n                               [showparameters]=\"showParameters\" [language]=\"language\" [width]=\"width\"\n                               [height]=\"height\" [toolbar]=\"toolbar\" [ShowPrintButton]=\"true\">\n            </ssrs-reportviewer>\n          </div>\n        </div>\n      </div>\n\n    </ng-template>\n  <!-----Contact Information--> \n  \n  <p>\n    <!--Form Value: {{ PopupForm.value | json }}\n    \n    (click)=\"findInvalidControls()\"\n    -->\n\n\n  </p>\n\n  \n";

/***/ }),

/***/ 64504:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/forms/usermanager/user-dashboard/user-dashboard.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">User Manager</h4>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\n    </div>\n    <div class=\"modal-body\">\n    <app-user-editor *ngIf=\"childList\" (bindDropDownList)=\"bindDropDownList()\" [childList]=\"childList\"></app-user-editor>\n        \n    </div>\n    \n  </ng-template>\n    <!---Dashboard-->\n    \n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> \n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"\n          data-backdrop=\"static\" data-keyboard=\"false\" ><i class=\"cui-pencil icons\"></i> Add</button>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\"  class=\"form-control w-25 p-3 border-bottom pull-right\" placeholder=\"Search\">\n        \n        </div>\n        <div class=\"card-body\">  \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"UserCode\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>User SID </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.UserCode}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"UserFullName\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> <b>User FullName </b></mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.UserFullName}} </mat-cell>\n            </ng-container>\n        <ng-container matColumnDef=\"RoleName\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>RoleName </b></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.RoleName}} </mat-cell>\n        </ng-container>\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"Lastmodified\" class=\"header\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header><b> Last Modified</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.Lastmodified}} </mat-cell>\n        </ng-container>   \n       \n       \n        <ng-container matColumnDef=\"IsActive\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Status</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >             \n            <span *ngIf=\"row.IsActive\" class=\"badge badge-success\">Active</span>\n            <span *ngIf=\"!row.IsActive\" class=\"badge badge-dark\">In-Active</span>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell  *matHeaderCellDef ></mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"edit(content,row.UserCode)\" ><i class=\"fa fa-file\"></i> View </button>\n          </mat-cell>\n        </ng-container>    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator></mat-paginator>\n    </div>\n    \n    \n  </div>\n  </div>\n  </div>\n  \n  \n";

/***/ }),

/***/ 38114:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/forms/usermanager/user-editor/user-editor.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form   method=\"post\" [formGroup]=\"PopupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\"  class=\"was-validated\">\n    <div class=\"form-group row\">\n        <div class=\"input-group\">\n          \n      <label class=\"col-md-3 col-form-label\" for=\"text-input\"> Employee SID:</label>\n      <div class=\"col-md-9\">\n        <input type=\"text\" id=\"UserCode\" formControlName=\"UserCode\"  name=\"UserCode\"   [(ngModel)]=\"userObject.UserCode\" class=\"form-control\" placeholder=\"Name is required\"   required>\n        \n    \n       </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"input-group\">\n          \n      <label class=\"col-md-3 col-form-label\" for=\"text-input\"> Employee Fullname:</label>\n      <div class=\"col-md-9\">\n        <input type=\"text\" id=\"UserFullName\" formControlName=\"UserFullName\"  name=\"UserFullName\"   [(ngModel)]=\"userObject.UserFullName\" class=\"form-control\" placeholder=\"Name is required\"   required>\n        \n    \n       </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-md-3 col-form-label\"for='Contr' >User Role</label>\n        <div class=\"col-md-9\">\n          <select formControlName=\"Role\"  [(ngModel)]=\"userObject.RoleId\"  id=\"Contr\" name=\"Contr\" class=\"form-control\" required>\n            <option value=\"\">Role is  required</option>\n            <option *ngFor=\"let c of lstRole\" [ngValue]=\"c.ID\">{{c.RoleName}}</option>\n            \n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-3 col-form-label\"for='Contr' >Is item active ?</label>\n        <div class=\"col-md-9\">\n            <label class=\"switch switch-label switch-outline-primary-alt\">\n                <input  id=\"isActive\"  formControlName=\"IsActive\" name=\"isActive\"  [(ngModel)]=\"userObject.IsActive\" type=\"checkbox\"  class=\"switch-input\" >\n                <span class=\"switch-slider\"  data-checked=\"✓\" data-unchecked=\"✕\"></span>              \n           </label>\n        </div>\n      </div>\n    <div  class=\"col-sm-12\">\n     \n    </div>\n    \n    <div class=\"card-footer\">\n                    \n        \n        <button  type=\"submit\"  *ngIf=\"PopupForm.valid\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n      </div>\n    </form>\n";

/***/ }),

/***/ 50514:
/*!*************************************************************!*\
  !*** ./src/app/views/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Sign In to your account</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Sign up</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                  <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n";

/***/ }),

/***/ 13956:
/*!*******************************************************************!*\
  !*** ./src/app/views/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <form>\n                <h1>DIPS Register</h1>\n                <p class=\"text-muted\">Create your account</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"SID\" autocomplete=\"username\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Full name\" autocomplete=\"Full Name\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\n                </div>\n            \n                <button type=\"button\" class=\"btn btn-block btn-success\">Contact System Owner For Activation</button>\n              </form>\n            </div>\n            <div class=\"card-footer p-4\">\n              <div class=\"row\">\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n";

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@coreui/coreui-free-angular-admin-template","version":"15.2.9","description":"SARS Angular 2+ Admin Template","author":{"name":"Mzwakhe Makhubu","url":"#","github":"#","twitter":"#"},"contributors":[{"name":"Mzwakhe Makhubu","url":"#"}],"homepage":"#","copyright":"Mzwakhe Makhubu","license":"MIT","scripts":{"ng":"ng","postinstall":"ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points","start":"ng serve","build":"ng build --prod --aot --buildOptimizer --commonChunk --vendorChunk --optimization --progress","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^15.2.9","@angular/cdk":"^15.2.9","@angular/common":"^15.2.9","@angular/compiler":"^15.2.9","@angular/core":"^15.2.9","@angular/forms":"^15.2.9","@angular/material":"^15.2.9","@angular/platform-browser":"^15.2.9","@angular/platform-browser-dynamic":"^15.2.9","@angular/router":"^15.2.9","@coreui/angular":"^2.9.2","@coreui/coreui":"^2.1.16","@coreui/coreui-plugin-chartjs-custom-tooltips":"^1.3.1","@coreui/icons":"0.3.0","@ng-bootstrap/ng-bootstrap":"^9.1.1","bootstrap":"^4.4.1","chart.js":"^2.9.4","core-js":"^2.6.11","file-saver":"^2.0.5","flag-icon-css":"^3.4.6","font-awesome":"^4.7.0","moment":"^2.29.3","mutationobserver-shim":"^0.3.5","ng2-charts":"^2.3.0","ngx-bootstrap":"^5.6.1","ngx-perfect-scrollbar":"^9.0.0","ngx-ssrs-reportviewer":"^3.1.1","rxjs":"^7.8.1","safe-pipe":"^2.0.2","simple-line-icons":"^2.4.1","string-builder":"^0.1.8","ts-helpers":"^1.1.2","tslib":"^2.0.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"^15.2.9","@angular-devkit/schematics":"^15.2.9","@angular/cli":"^15.2.9","@angular/compiler-cli":"^15.2.9","@angular/language-service":"^15.2.9","@types/file-saver":"^2.0.5","@types/jasmine":"~3.6.0","@types/jasminewd2":"^2.0.8","@types/node":"^13.13.52","codelyzer":"^6.0.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","karma":"^6.3.19","karma-chrome-launcher":"~3.1.0","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","protractor":"~7.0.0","ts-node":"^8.8.2","tslint":"~6.1.0","typescript":"~4.9.5"},"engines":{"node":">= 10.13","npm":">= 6"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map