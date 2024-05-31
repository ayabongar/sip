"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_views_dashboard_dashboard_module_ts"],{

/***/ 32913:
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 66101);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  data: {
    title: 'Dashboard'
  }
}];
let DashboardRoutingModule = class DashboardRoutingModule {};
DashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DashboardRoutingModule);


/***/ }),

/***/ 66101:
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 70729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);




let DashboardComponent = class DashboardComponent {
  constructor() {
    this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.reportUrl;
    this.reportName = 'Dashboard';
    this.reportUrl = '/DIPS_Reports/Dashboard';
    this.showParameters = "false";
    // parameters: any;
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
    this.toolbar = "false";
  }
  ngOnInit() {
    this.reportServer = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.reportUrl;
    this.reportName = 'Dashboard';
    this.reportUrl = 'DIPS_Reports/' + this.reportName;
  }
};
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], DashboardComponent);


/***/ }),

/***/ 54727:
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 36615);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 66101);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ 32913);
/* harmony import */ var ngx_ssrs_reportviewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ssrs-reportviewer */ 98320);








let DashboardModule = class DashboardModule {};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__.DashboardRoutingModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonsModule.forRoot(), ngx_ssrs_reportviewer__WEBPACK_IMPORTED_MODULE_7__.ReportViewerModule],
  declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent]
})], DashboardModule);


/***/ }),

/***/ 70729:
/*!*********************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i>      \r\n      \r\n      </div>\r\n      <div class=\"card-body\">  \r\n\r\n<div class=\"container\">\r\n    <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\"\r\n        [showparameters]=\"showParameters\" [language]=\"language\" [width]=\"width\"\r\n        [height]=\"height\" [toolbar]=\"toolbar\"  >\r\n    </ssrs-reportviewer>\r\n</div></div></div></div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_dashboard_dashboard_module_ts.js.map