(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_views_notifications_notifications_module_ts"],{

/***/ 71717:
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/alerts.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsComponent": () => (/* binding */ AlertsComponent),
/* harmony export */   "getAlertConfig": () => (/* binding */ getAlertConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alerts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts.component.html?ngResource */ 90609);
/* harmony import */ var C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts_css_ngResource_C_TFS_Development_DIPS_Angular_Dev_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgLmFsZXJ0LW1kLWxvY2FsIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7CiAgICBib3JkZXItY29sb3I6ICMwMDY5NUM7CiAgICBjb2xvcjogI2ZmZjsKICB9CiAg_C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/views/notifications/alerts.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgLmFsZXJ0LW1kLWxvY2FsIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7CiAgICBib3JkZXItY29sb3I6ICMwMDY5NUM7CiAgICBjb2xvcjogI2ZmZjsKICB9CiAg!./src/app/views/notifications/alerts.component.ts */ 65788);
/* harmony import */ var C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts_css_ngResource_C_TFS_Development_DIPS_Angular_Dev_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgLmFsZXJ0LW1kLWxvY2FsIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7CiAgICBib3JkZXItY29sb3I6ICMwMDY5NUM7CiAgICBjb2xvcjogI2ZmZjsKICB9CiAg_C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts_css_ngResource_C_TFS_Development_DIPS_Angular_Dev_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgLmFsZXJ0LW1kLWxvY2FsIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7CiAgICBib3JkZXItY29sb3I6ICMwMDY5NUM7CiAgICBjb2xvcjogI2ZmZjsKICB9CiAg_C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/alert */ 38147);






// such override allows to keep some initial values
function getAlertConfig() {
  return Object.assign(new ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__.AlertConfig(), {
    type: 'success'
  });
}
let AlertsComponent = class AlertsComponent {
  constructor(sanitizer) {
    this.dismissible = true;
    this.alerts = [{
      type: 'success',
      msg: `You successfully read this important alert message.`
    }, {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    }, {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }];
    this.alertsHtml = [{
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    }, {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
    }, {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
    }];
    this.index = 0;
    this.messages = ['You successfully read this important alert message.', 'Now this text is different from what it was before. Go ahead and click the button one more time', 'Well done! Click reset button and you\'ll see the first message'];
    this.alertsDismiss = [];
    this.alertsHtml = this.alertsHtml.map(alert => ({
      type: alert.type,
      msg: sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.HTML, alert.msg)
    }));
  }
  reset() {
    this.alerts = this.alerts.map(alert => Object.assign({}, alert));
  }
  changeText() {
    if (this.messages.length - 1 !== this.index) {
      this.index++;
    }
  }
  add() {
    this.alertsDismiss.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
  }];
};
AlertsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  template: _alerts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
  providers: [{
    provide: ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__.AlertConfig,
    useFactory: getAlertConfig
  }],
  styles: [(C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts_css_ngResource_C_TFS_Development_DIPS_Angular_Dev_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgLmFsZXJ0LW1kLWxvY2FsIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7CiAgICBib3JkZXItY29sb3I6ICMwMDY5NUM7CiAgICBjb2xvcjogI2ZmZjsKICB9CiAg_C_TFS_Development_DIPS_Angular_Dev_src_app_views_notifications_alerts_component_ts__WEBPACK_IMPORTED_MODULE_1___default())]
})], AlertsComponent);


/***/ }),

/***/ 16202:
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/badges.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesComponent": () => (/* binding */ BadgesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _badges_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badges.component.html?ngResource */ 13167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let BadgesComponent = class BadgesComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
BadgesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  template: _badges_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], BadgesComponent);


/***/ }),

/***/ 4121:
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/modals.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsComponent": () => (/* binding */ ModalsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.component.html?ngResource */ 8135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



let ModalsComponent = class ModalsComponent {
  static #_ = this.propDecorators = {
    myModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['myModal']
    }],
    largeModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['largeModal']
    }],
    smallModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['smallModal']
    }],
    primaryModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['primaryModal']
    }],
    successModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['successModal']
    }],
    warningModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['warningModal']
    }],
    dangerModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['dangerModal']
    }],
    infoModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['infoModal']
    }]
  };
};
ModalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  template: _modals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ModalsComponent);


/***/ }),

/***/ 27781:
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsRoutingModule": () => (/* binding */ NotificationsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts.component */ 71717);
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badges.component */ 16202);
/* harmony import */ var _modals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals.component */ 4121);






const routes = [{
  path: '',
  data: {
    title: 'Notifications'
  },
  children: [{
    path: '',
    redirectTo: 'alerts'
  }, {
    path: 'alerts',
    component: _alerts_component__WEBPACK_IMPORTED_MODULE_0__.AlertsComponent,
    data: {
      title: 'Alerts'
    }
  }, {
    path: 'badges',
    component: _badges_component__WEBPACK_IMPORTED_MODULE_1__.BadgesComponent,
    data: {
      title: 'Badges'
    }
  }, {
    path: 'modals',
    component: _modals_component__WEBPACK_IMPORTED_MODULE_2__.ModalsComponent,
    data: {
      title: 'Modals'
    }
  }]
}];
let NotificationsRoutingModule = class NotificationsRoutingModule {};
NotificationsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], NotificationsRoutingModule);


/***/ }),

/***/ 9181:
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/notifications.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/alert */ 38147);
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.component */ 71717);
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badges.component */ 16202);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 26528);
/* harmony import */ var _modals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals.component */ 4121);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ 27781);

// Angular


// Alert Component



// Modal Component


// Notifications Routing

let NotificationsModule = class NotificationsModule {};
NotificationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__.NotificationsRoutingModule, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.ModalModule.forRoot()],
  declarations: [_alerts_component__WEBPACK_IMPORTED_MODULE_1__.AlertsComponent, _badges_component__WEBPACK_IMPORTED_MODULE_2__.BadgesComponent, _modals_component__WEBPACK_IMPORTED_MODULE_4__.ModalsComponent]
})], NotificationsModule);


/***/ }),

/***/ 38147:
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent),
/* harmony export */   "AlertConfig": () => (/* binding */ AlertConfig),
/* harmony export */   "AlertModule": () => (/* binding */ AlertModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/utils */ 49041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AlertComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("alert alert-" + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dismissible);
  }
}
const _c0 = ["*"];
class AlertConfig {
  constructor() {
    /**
     * default alert type
     */
    this.type = 'warning';
    /**
     * is alerts are dismissible by default
     */
    this.dismissible = false;
    /**
     * default time before alert will dismiss
     */
    this.dismissOnTimeout = undefined;
  }
}
AlertConfig.ɵfac = function AlertConfig_Factory(t) {
  return new (t || AlertConfig)();
};
AlertConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AlertConfig,
  factory: AlertConfig.ɵfac
});
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
  /**
   * @param {?} _config
   * @param {?} changeDetection
   */
  constructor(_config, changeDetection) {
    this.changeDetection = changeDetection;
    /**
     * Alert type.
     * Provides one of four bootstrap supported contextual classes:
     * `success`, `info`, `warning` and `danger`
     */
    this.type = 'warning';
    /**
     * If set, displays an inline "Close" button
     */
    this.dismissible = false;
    /**
     * Is alert visible
     */
    this.isOpen = true;
    /**
     * This event fires immediately after close instance method is called,
     * $event is an instance of Alert component.
     */
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * This event fires when alert closed, $event is an instance of Alert component
     */
    this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.classes = '';
    this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    Object.assign(this, _config);
    this.dismissibleChange.subscribe(
    /**
    * @param {?} dismissible
    * @return {?}
    */
    dismissible => {
      this.classes = this.dismissible ? 'alert-dismissible' : '';
      this.changeDetection.markForCheck();
    });
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    if (this.dismissOnTimeout) {
      // if dismissOnTimeout used as attr without binding, it will be a string
      setTimeout(
      /**
      * @return {?}
      */
      () => this.close(), parseInt( /** @type {?} */this.dismissOnTimeout, 10));
    }
  }
  // todo: animation ` If the .fade and .in classes are present on the element,
  // the alert will fade out before it is removed`
  /**
   * Closes an alert by removing it from the DOM.
   * @return {?}
   */
  close() {
    if (!this.isOpen) {
      return;
    }
    this.onClose.emit(this);
    this.isOpen = false;
    this.changeDetection.markForCheck();
    this.onClosed.emit(this);
  }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["alert"], ["bs-alert"]],
  inputs: {
    type: "type",
    dismissible: "dismissible",
    isOpen: "isOpen",
    dismissOnTimeout: "dismissOnTimeout"
  },
  outputs: {
    onClose: "onClose",
    onClosed: "onClosed"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 1,
  consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */
AlertComponent.ctorParameters = () => [{
  type: AlertConfig
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
}];
AlertComponent.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  dismissible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  dismissOnTimeout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  onClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  onClosed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.OnChange)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)], AlertComponent.prototype, "dismissible", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'alert,bs-alert',
      template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: AlertConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dismissible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onClosed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dismissOnTimeout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: AlertModule,
      providers: [AlertConfig]
    };
  }
}
AlertModule.ɵfac = function AlertModule_Factory(t) {
  return new (t || AlertModule)();
};
AlertModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AlertModule
});
AlertModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [AlertComponent],
      exports: [AlertComponent],
      entryComponents: [AlertComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertModule, {
    declarations: function () {
      return [AlertComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [AlertComponent];
    }
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 26528:
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsModalRef": () => (/* binding */ BsModalRef),
/* harmony export */   "BsModalService": () => (/* binding */ BsModalService),
/* harmony export */   "ModalBackdropComponent": () => (/* binding */ ModalBackdropComponent),
/* harmony export */   "ModalBackdropOptions": () => (/* binding */ ModalBackdropOptions),
/* harmony export */   "ModalContainerComponent": () => (/* binding */ ModalContainerComponent),
/* harmony export */   "ModalDirective": () => (/* binding */ ModalDirective),
/* harmony export */   "ModalModule": () => (/* binding */ ModalModule),
/* harmony export */   "ModalOptions": () => (/* binding */ ModalOptions),
/* harmony export */   "ɵa": () => (/* binding */ CLASS_NAME)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/utils */ 49041);
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ 11574);
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ 13993);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["*"];
class BsModalRef {
  constructor() {
    /**
     * Hides the modal
     */
    this.hide = Function;
    /**
     * Sets new class to modal window
     */
    this.setClass = Function;
  }
}
BsModalRef.ɵfac = function BsModalRef_Factory(t) {
  return new (t || BsModalRef)();
};
BsModalRef.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BsModalRef,
  factory: BsModalRef.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsModalRef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [];
  }, null);
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalBackdropOptions {
  /**
   * @param {?} options
   */
  constructor(options) {
    this.animate = true;
    Object.assign(this, options);
  }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalOptions {}
ModalOptions.ɵfac = function ModalOptions_Factory(t) {
  return new (t || ModalOptions)();
};
ModalOptions.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ModalOptions,
  factory: ModalOptions.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, null);
})();
if (false) {}
/** @type {?} */
const modalConfigDefaults = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: false,
  ignoreBackdropClick: false,
  class: '',
  animated: true,
  initialState: {}
};
/** @type {?} */
const CLASS_NAME = {
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'modal-backdrop',
  OPEN: 'modal-open',
  FADE: 'fade',
  IN: 'in',
  // bs3
  SHOW: 'show' // bs4
};
/** @type {?} */
const SELECTOR = {
  DIALOG: '.modal-dialog',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
const TRANSITION_DURATIONS = {
  MODAL: 300,
  BACKDROP: 150
};
/** @type {?} */
const DISMISS_REASONS = {
  BACKRDOP: 'backdrop-click',
  ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent {
  /**
   * @param {?} options
   * @param {?} _element
   * @param {?} _renderer
   */
  constructor(options, _element, _renderer) {
    this._element = _element;
    this._renderer = _renderer;
    this.isShown = false;
    this.isModalHiding = false;
    this.clickStartedInContent = false;
    this.config = Object.assign({}, options);
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    if (this.isAnimated) {
      this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
    }
    this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
    setTimeout(
    /**
    * @return {?}
    */
    () => {
      this.isShown = true;
      this._renderer.addClass(this._element.nativeElement, (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
    }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
    if (document && document.body) {
      if (this.bsModalService.getModalsCount() === 1) {
        this.bsModalService.checkScrollbar();
        this.bsModalService.setScrollbar();
      }
      this._renderer.addClass(document.body, CLASS_NAME.OPEN);
    }
    if (this._element.nativeElement) {
      this._element.nativeElement.focus();
    }
  }
  /**
   * @param {?} event
   * @return {?}
   */
  onClickStarted(event) {
    this.clickStartedInContent = event.target !== this._element.nativeElement;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  onClickStop(event) {
    /** @type {?} */
    const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
    if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
      this.clickStartedInContent = false;
      return;
    }
    this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
    this.hide();
  }
  /**
   * @param {?} event
   * @return {?}
   */
  onEsc(event) {
    if (!this.isShown) {
      return;
    }
    // tslint:disable-next-line:deprecation
    if (event.keyCode === 27 || event.key === 'Escape') {
      event.preventDefault();
    }
    if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
      this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
      this.hide();
    }
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    if (this.isShown) {
      this.hide();
    }
  }
  /**
   * @return {?}
   */
  hide() {
    if (this.isModalHiding || !this.isShown) {
      return;
    }
    this.isModalHiding = true;
    this._renderer.removeClass(this._element.nativeElement, (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
    setTimeout(
    /**
    * @return {?}
    */
    () => {
      this.isShown = false;
      if (document && document.body && this.bsModalService.getModalsCount() === 1) {
        this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
      }
      this.bsModalService.hide(this.level);
      this.isModalHiding = false;
    }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
  }
}
ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
  return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2));
};
ModalContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ModalContainerComponent,
  selectors: [["modal-container"]],
  hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
  hostVars: 3,
  hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
        return ctx.onClickStarted($event);
      })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) {
        return ctx.onClickStop($event);
      })("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
        return ctx.onEsc($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
    }
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [["role", "document"], [1, "modal-content"]],
  template: function ModalContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
    }
  },
  encapsulation: 2
});
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [{
  type: ModalOptions
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
}];
ModalContainerComponent.propDecorators = {
  onClickStarted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['mousedown', ['$event']]
  }],
  onClickStop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['mouseup', ['$event']]
  }],
  onEsc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['window:keydown.esc', ['$event']]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'modal-container',
      template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
      host: {
        class: 'modal',
        role: 'dialog',
        tabindex: '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'config.ariaLabelledBy',
        '[attr.aria-describedby]': 'config.ariaDescribedby'
      }
    }]
  }], function () {
    return [{
      type: ModalOptions
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }];
  }, {
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['mouseup', ['$event']]
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['window:keydown.esc', ['$event']]
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
class ModalBackdropComponent {
  /**
   * @param {?} element
   * @param {?} renderer
   */
  constructor(element, renderer) {
    this._isShown = false;
    this.element = element;
    this.renderer = renderer;
  }
  /**
   * @return {?}
   */
  get isAnimated() {
    return this._isAnimated;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set isAnimated(value) {
    this._isAnimated = value;
    // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
  }
  /**
   * @return {?}
   */
  get isShown() {
    return this._isShown;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set isShown(value) {
    this._isShown = value;
    if (value) {
      this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
    } else {
      this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
    }
    if (!(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)()) {
      if (value) {
        this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
      } else {
        this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
      }
    }
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    if (this.isAnimated) {
      this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.reflow(this.element.nativeElement);
    }
    this.isShown = true;
  }
}
ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) {
  return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2));
};
ModalBackdropComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ModalBackdropComponent,
  selectors: [["bs-modal-backdrop"]],
  hostAttrs: [1, "modal-backdrop"],
  decls: 0,
  vars: 0,
  template: function ModalBackdropComponent_Template(rf, ctx) {},
  encapsulation: 2
});
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalBackdropComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'bs-modal-backdrop',
      template: ' ',
      host: {
        class: CLASS_NAME.BACKDROP
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }];
  }, null);
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TRANSITION_DURATION = 300;
/** @type {?} */
const BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
class ModalDirective {
  /**
   * @param {?} _element
   * @param {?} _viewContainerRef
   * @param {?} _renderer
   * @param {?} clf
   */
  constructor(_element, _viewContainerRef, _renderer, clf) {
    this._element = _element;
    this._renderer = _renderer;
    /**
     * This event fires immediately when the `show` instance method is called.
     */
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * This event is fired when the modal has been made visible to the user
     * (will wait for CSS transitions to complete)
     */
    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * This event is fired immediately when
     * the hide instance method has been called.
     */
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * This event is fired when the modal has finished being
     * hidden from the user (will wait for CSS transitions to complete).
     */
    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this._isShown = false;
    this.isBodyOverflowing = false;
    this.originalBodyPadding = 0;
    this.scrollbarWidth = 0;
    this.timerHideModal = 0;
    this.timerRmBackDrop = 0;
    this.isNested = false;
    this.clickStartedInContent = false;
    this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
  }
  /**
   * allows to set modal configuration via element property
   * @param {?} conf
   * @return {?}
   */
  set config(conf) {
    this._config = this.getConfig(conf);
  }
  /**
   * @return {?}
   */
  get config() {
    return this._config;
  }
  /**
   * @return {?}
   */
  get isShown() {
    return this._isShown;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  onClickStarted(event) {
    this.clickStartedInContent = event.target !== this._element.nativeElement;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  onClickStop(event) {
    /** @type {?} */
    const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
    if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
      this.clickStartedInContent = false;
      return;
    }
    this.dismissReason = DISMISS_REASONS.BACKRDOP;
    this.hide(event);
  }
  // todo: consider preventing default and stopping propagation
  /**
   * @param {?} event
   * @return {?}
   */
  onEsc(event) {
    if (!this._isShown) {
      return;
    }
    // tslint:disable-next-line:deprecation
    if (event.keyCode === 27 || event.key === 'Escape') {
      event.preventDefault();
    }
    if (this.config.keyboard) {
      this.dismissReason = DISMISS_REASONS.ESC;
      this.hide();
    }
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.config = void 0;
    if (this._isShown) {
      this._isShown = false;
      this.hideModal();
      this._backdrop.dispose();
    }
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    this._config = this._config || this.getConfig();
    setTimeout(
    /**
    * @return {?}
    */
    () => {
      if (this._config.show) {
        this.show();
      }
    }, 0);
  }
  /* Public methods */
  /**
   * Allows to manually toggle modal visibility
   * @return {?}
   */
  toggle() {
    return this._isShown ? this.hide() : this.show();
  }
  /**
   * Allows to manually open modal
   * @return {?}
   */
  show() {
    this.dismissReason = null;
    this.onShow.emit(this);
    if (this._isShown) {
      return;
    }
    clearTimeout(this.timerHideModal);
    clearTimeout(this.timerRmBackDrop);
    this._isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body) {
      if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body.classList.contains(CLASS_NAME.OPEN)) {
        this.isNested = true;
      } else {
        this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body, CLASS_NAME.OPEN);
      }
    }
    this.showBackdrop(
    /**
    * @return {?}
    */
    () => {
      this.showElement();
    });
  }
  /**
   * Allows to manually close modal
   * @param {?=} event
   * @return {?}
   */
  hide(event) {
    if (event) {
      event.preventDefault();
    }
    this.onHide.emit(this);
    // todo: add an option to prevent hiding
    if (!this._isShown) {
      return;
    }
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.window.clearTimeout(this.timerHideModal);
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.window.clearTimeout(this.timerRmBackDrop);
    this._isShown = false;
    this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
    if (!(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)()) {
      this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
    }
    // this._addClassIn = false;
    if (this._config.animated) {
      this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.window.setTimeout(
      /**
      * @return {?}
      */
      () => this.hideModal(), TRANSITION_DURATION);
    } else {
      this.hideModal();
    }
  }
  /**
   * Private methods \@internal
   * @protected
   * @param {?=} config
   * @return {?}
   */
  getConfig(config) {
    return Object.assign({}, modalConfigDefaults, config);
  }
  /**
   *  Show dialog
   * \@internal
   * @protected
   * @return {?}
   */
  showElement() {
    // todo: replace this with component loader usage
    if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // don't move modals dom position
      if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body) {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body.appendChild(this._element.nativeElement);
      }
    }
    this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
    this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
    this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
    this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
    if (this._config.animated) {
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.reflow(this._element.nativeElement);
    }
    // this._addClassIn = true;
    this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
    if (!(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)()) {
      this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
    }
    /** @type {?} */
    const transitionComplete =
    /**
    * @return {?}
    */
    () => {
      if (this._config.focus) {
        this._element.nativeElement.focus();
      }
      this.onShown.emit(this);
    };
    if (this._config.animated) {
      setTimeout(transitionComplete, TRANSITION_DURATION);
    } else {
      transitionComplete();
    }
  }
  /**
   * \@internal
   * @protected
   * @return {?}
   */
  hideModal() {
    this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
    this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
    this.showBackdrop(
    /**
    * @return {?}
    */
    () => {
      if (!this.isNested) {
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body) {
          this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body, CLASS_NAME.OPEN);
        }
        this.resetScrollbar();
      }
      this.resetAdjustments();
      this.focusOtherModal();
      this.onHidden.emit(this);
    });
  }
  // todo: original show was calling a callback when done, but we can use
  // promise
  /**
   * \@internal
   * @protected
   * @param {?=} callback
   * @return {?}
   */
  showBackdrop(callback) {
    if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
      this.removeBackdrop();
      this._backdrop.attach(ModalBackdropComponent).to('body').show({
        isAnimated: this._config.animated
      });
      this.backdrop = this._backdrop._componentRef;
      if (!callback) {
        return;
      }
      if (!this._config.animated) {
        callback();
        return;
      }
      setTimeout(callback, BACKDROP_TRANSITION_DURATION);
    } else if (!this._isShown && this.backdrop) {
      this.backdrop.instance.isShown = false;
      /** @type {?} */
      const callbackRemove =
      /**
      * @return {?}
      */
      () => {
        this.removeBackdrop();
        if (callback) {
          callback();
        }
      };
      if (this.backdrop.instance.isAnimated) {
        this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
      } else {
        callbackRemove();
      }
    } else if (callback) {
      callback();
    }
  }
  /**
   * \@internal
   * @protected
   * @return {?}
   */
  removeBackdrop() {
    this._backdrop.hide();
  }
  /**
   * Events tricks
   * @protected
   * @return {?}
   */
  // no need for it
  // protected setEscapeEvent():void {
  //   if (this._isShown && this._config.keyboard) {
  //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
  //       if (event.which === 27) {
  //         this.hide()
  //       }
  //     })
  //
  //   } else if (!this._isShown) {
  //     $(this._element).off(Event.KEYDOWN_DISMISS)
  //   }
  // }
  // protected setResizeEvent():void {
  // console.log(this.renderer.listenGlobal('', Event.RESIZE));
  // if (this._isShown) {
  //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
  // } else {
  //   $(window).off(Event.RESIZE)
  // }
  // }
  focusOtherModal() {
    if (this._element.nativeElement.parentElement == null) {
      return;
    }
    /** @type {?} */
    const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
    if (!otherOpenedModals.length) {
      return;
    }
    otherOpenedModals[otherOpenedModals.length - 1].focus();
  }
  /**
   * \@internal
   * @protected
   * @return {?}
   */
  resetAdjustments() {
    this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
    this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
  }
  /** Scroll bar tricks */
  /**
   * \@internal
   * @protected
   * @return {?}
   */
  checkScrollbar() {
    this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }
  /**
   * @protected
   * @return {?}
   */
  setScrollbar() {
    if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document) {
      return;
    }
    this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.window.getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body).getPropertyValue('padding-right') || 0, 10);
    if (this.isBodyOverflowing) {
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
    }
  }
  /**
   * @protected
   * @return {?}
   */
  resetScrollbar() {
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body.style.paddingRight = `${this.originalBodyPadding}px`;
  }
  // thx d.walsh
  /**
   * @protected
   * @return {?}
   */
  getScrollbarWidth() {
    /** @type {?} */
    const scrollDiv = this._renderer.createElement('div');
    this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
    this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body, scrollDiv);
    /** @type {?} */
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.document.body, scrollDiv);
    return scrollbarWidth;
  }
}
ModalDirective.ɵfac = function ModalDirective_Factory(t) {
  return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory));
};
ModalDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ModalDirective,
  selectors: [["", "bsModal", ""]],
  hostBindings: function ModalDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
        return ctx.onClickStarted($event);
      })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
        return ctx.onClickStop($event);
      })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
        return ctx.onEsc($event);
      });
    }
  },
  inputs: {
    config: "config"
  },
  outputs: {
    onShow: "onShow",
    onShown: "onShown",
    onHide: "onHide",
    onHidden: "onHidden"
  },
  exportAs: ["bs-modal"]
});
/** @nocollapse */
ModalDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
}, {
  type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory
}];
ModalDirective.propDecorators = {
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  onShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onClickStarted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['mousedown', ['$event']]
  }],
  onClickStop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['mouseup', ['$event']]
  }],
  onEsc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['keydown.esc', ['$event']]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[bsModal]',
      exportAs: 'bs-modal'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory
    }];
  }, {
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['mouseup', ['$event']]
    }],
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['keydown.esc', ['$event']]
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalService {
  /**
   * @param {?} rendererFactory
   * @param {?} clf
   */
  constructor(rendererFactory, clf) {
    this.clf = clf;
    // constructor props
    this.config = modalConfigDefaults;
    // tslint:disable-next-line:no-any
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    // tslint:disable-next-line:no-any
    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    // tslint:disable-next-line:no-any
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    // tslint:disable-next-line:no-any
    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.isBodyOverflowing = false;
    this.originalBodyPadding = 0;
    this.scrollbarWidth = 0;
    this.modalsCount = 0;
    this.lastDismissReason = '';
    this.loaders = [];
    this._backdropLoader = this.clf.createLoader(null, null, null);
    this._renderer = rendererFactory.createRenderer(null, null);
  }
  /**
   * Shows a modal
   * @param {?} content
   * @param {?=} config
   * @return {?}
   */
  // tslint:disable-next-line:no-any
  show(content, config) {
    this.modalsCount++;
    this._createLoaders();
    this.config = Object.assign({}, modalConfigDefaults, config);
    this._showBackdrop();
    this.lastDismissReason = null;
    return this._showModal(content);
  }
  /**
   * @param {?} level
   * @return {?}
   */
  hide(level) {
    if (this.modalsCount === 1) {
      this._hideBackdrop();
      this.resetScrollbar();
    }
    this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
    setTimeout(
    /**
    * @return {?}
    */
    () => {
      this._hideModal(level);
      this.removeLoaders(level);
    }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
  }
  /**
   * @return {?}
   */
  _showBackdrop() {
    /** @type {?} */
    const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
    /** @type {?} */
    const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
    if (this.modalsCount === 1) {
      this.removeBackdrop();
      if (isBackdropEnabled && isBackdropInDOM) {
        this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
          isAnimated: this.config.animated
        });
        this.backdropRef = this._backdropLoader._componentRef;
      }
    }
  }
  /**
   * @return {?}
   */
  _hideBackdrop() {
    if (!this.backdropRef) {
      return;
    }
    this.backdropRef.instance.isShown = false;
    /** @type {?} */
    const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
    setTimeout(
    /**
    * @return {?}
    */
    () => this.removeBackdrop(), duration);
  }
  // tslint:disable-next-line:no-any
  /**
   * @param {?} content
   * @return {?}
   */
  _showModal(content) {
    /** @type {?} */
    const modalLoader = this.loaders[this.loaders.length - 1];
    if (this.config && this.config.providers) {
      for (const provider of this.config.providers) {
        modalLoader.provide(provider);
      }
    }
    /** @type {?} */
    const bsModalRef = new BsModalRef();
    /** @type {?} */
    const modalContainerRef = modalLoader.provide({
      provide: ModalOptions,
      useValue: this.config
    }).provide({
      provide: BsModalRef,
      useValue: bsModalRef
    }).attach(ModalContainerComponent).to('body').show({
      content,
      isAnimated: this.config.animated,
      initialState: this.config.initialState,
      bsModalService: this
    });
    modalContainerRef.instance.level = this.getModalsCount();
    bsModalRef.hide =
    /**
    * @return {?}
    */
    () => {
      /** @type {?} */
      const duration = this.config.animated ? TRANSITION_DURATIONS.MODAL : 0;
      setTimeout(
      /**
      * @return {?}
      */
      () => modalContainerRef.instance.hide(), duration);
    };
    bsModalRef.content = modalLoader.getInnerComponent() || null;
    bsModalRef.setClass =
    /**
    * @param {?} newClass
    * @return {?}
    */
    newClass => {
      modalContainerRef.instance.config.class = newClass;
    };
    return bsModalRef;
  }
  /**
   * @param {?} level
   * @return {?}
   */
  _hideModal(level) {
    /** @type {?} */
    const modalLoader = this.loaders[level - 1];
    if (modalLoader) {
      modalLoader.hide();
    }
  }
  /**
   * @return {?}
   */
  getModalsCount() {
    return this.modalsCount;
  }
  /**
   * @param {?} reason
   * @return {?}
   */
  setDismissReason(reason) {
    this.lastDismissReason = reason;
  }
  /**
   * @return {?}
   */
  removeBackdrop() {
    this._backdropLoader.hide();
    this.backdropRef = null;
  }
  /** Checks if the body is overflowing and sets scrollbar width */
  /**
   * \@internal
   * @return {?}
   */
  checkScrollbar() {
    this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }
  /**
   * @return {?}
   */
  setScrollbar() {
    if (!document) {
      return;
    }
    this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
    if (this.isBodyOverflowing) {
      document.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
    }
  }
  /**
   * @private
   * @return {?}
   */
  resetScrollbar() {
    document.body.style.paddingRight = `${this.originalBodyPadding}px`;
  }
  // thx d.walsh
  /**
   * @private
   * @return {?}
   */
  getScrollbarWidth() {
    /** @type {?} */
    const scrollDiv = this._renderer.createElement('div');
    this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
    this._renderer.appendChild(document.body, scrollDiv);
    /** @type {?} */
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this._renderer.removeChild(document.body, scrollDiv);
    return scrollbarWidth;
  }
  /**
   * @private
   * @return {?}
   */
  _createLoaders() {
    /** @type {?} */
    const loader = this.clf.createLoader(null, null, null);
    this.copyEvent(loader.onBeforeShow, this.onShow);
    this.copyEvent(loader.onShown, this.onShown);
    this.copyEvent(loader.onBeforeHide, this.onHide);
    this.copyEvent(loader.onHidden, this.onHidden);
    this.loaders.push(loader);
  }
  /**
   * @private
   * @param {?} level
   * @return {?}
   */
  removeLoaders(level) {
    this.loaders.splice(level - 1, 1);
    this.loaders.forEach(
    /**
    * @param {?} loader
    * @param {?} i
    * @return {?}
    */
    (loader, i) => {
      loader.instance.level = i + 1;
    });
  }
  // tslint:disable-next-line:no-any
  /**
   * @private
   * @param {?} from
   * @param {?} to
   * @return {?}
   */
  copyEvent(from, to) {
    from.subscribe(
    /**
    * @return {?}
    */
    () => {
      to.emit(this.lastDismissReason);
    });
  }
}
BsModalService.ɵfac = function BsModalService_Factory(t) {
  return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory));
};
BsModalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BsModalService,
  factory: BsModalService.ɵfac
});
/** @nocollapse */
BsModalService.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.RendererFactory2
}, {
  type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsModalService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.RendererFactory2
    }, {
      type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory
    }];
  }, null);
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: ModalModule,
      providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService]
    };
  }
  /**
   * @return {?}
   */
  static forChild() {
    return {
      ngModule: ModalModule,
      providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService]
    };
  }
}
ModalModule.ɵfac = function ModalModule_Factory(t) {
  return new (t || ModalModule)();
};
ModalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ModalModule
});
ModalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
      exports: [ModalBackdropComponent, ModalDirective],
      entryComponents: [ModalBackdropComponent, ModalContainerComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ModalModule, {
    declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
    exports: [ModalBackdropComponent, ModalDirective]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 65788:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/views/notifications/alerts.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgLmFsZXJ0LW1kLWxvY2FsIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7CiAgICBib3JkZXItY29sb3I6ICMwMDY5NUM7CiAgICBjb2xvcjogI2ZmZjsKICB9CiAg!./src/app/views/notifications/alerts.component.ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/app/views/notifications/alerts.component.ts"],"names":[],"mappings":";EACE;IACE,yBAAyB;IACzB,qBAAqB;IACrB,WAAW;EACb","sourcesContent":["\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 90609:
/*!**********************************************************************!*\
  !*** ./src/app/views/notifications/alerts.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Bootstrap Alerts</strong>\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/alerts\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n          </alert>\n          <alert type=\"warning\">\n            <strong>Warning!</strong> Better check yourself, you're not looking too good.\n          </alert>\n          <alert type=\"danger\">\n            <strong>Oh snap!</strong> Change a few things up and try submitting again.\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong>\n          <small>link</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n          </alert>\n          <alert type=\"warning\">\n            <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n          </alert>\n          <alert type=\"danger\">\n            <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n          </alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>additional content</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <h4 class=\"alert-heading\">Well done!</h4>\n            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dismissing</small>\n        </div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let alert of alerts\">\n            <alert [type]=\"alert.type\" [dismissible]=\"dismissible\">{{ alert.msg }}</alert>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dynamic html</small>\n        </div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let alert of alertsHtml\">\n            <alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dynamic content</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">{{messages[index]}}</alert>\n\n          <div *ngIf=\"index !== messages.length -1; else elseBlock\">\n            <button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\n          </div>\n          <ng-template #elseBlock>\n            <button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dismiss on timeout</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\" dismissOnTimeout=\"5000\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n\n          <p>If you missed alert on top of me, just press <code>Add more</code> button</p>\n          <div *ngFor=\"let alert of alertsDismiss\">\n            <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.msg }}</alert>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>global styling</small>\n        </div>\n        <div class=\"card-body\">\n          <style>\n            .alert-md-color {\n              background-color: #7B1FA2;\n              border-color: #4A148C;\n              color: #fff;\n            }\n          </style>\n          <alert type=\"md-color\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>component level styling</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"md-local\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>configuring defaults</small>\n        </div>\n        <div class=\"card-body\">\n          <alert>\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n          </alert>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 13167:
/*!**********************************************************************!*\
  !*** ./src/app/views/notifications/badges.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <div class=\"card-header-actions\">\n            <a href=\"http://coreui.io/docs/components/bootstrap-badge/\" class=\"card-header-action\" target=\"_blank\">\n              <small class=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <h1>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h1>\n          <h2>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h2>\n          <h3>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h3>\n          <h4>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h4>\n          <h5>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h5>\n          <h6>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h6>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"link\" class=\"btn btn-primary\">Notifications\n            <span class=\"badge badge-light badge-pill\" style=\"position: static;\">9</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>contextual variations</small>\n        </div>\n        <div class=\"card-body\">\n          <span class=\"badge badge-primary\">Primary</span>\n          <span class=\"badge badge-secondary\">Secondary</span>\n          <span class=\"badge badge-success\">Success</span>\n          <span class=\"badge badge-danger\">Danger</span>\n          <span class=\"badge badge-warning\">Warning</span>\n          <span class=\"badge badge-info\">Info</span>\n          <span class=\"badge badge-light\">Light</span>\n          <span class=\"badge badge-dark\">Dark</span>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>pill badges</small>\n        </div>\n        <div class=\"card-body\">\n          <span class=\"badge badge-pill badge-primary\">Primary</span>\n          <span class=\"badge badge-pill badge-secondary\">Secondary</span>\n          <span class=\"badge badge-pill badge-success\">Success</span>\n          <span class=\"badge badge-pill badge-danger\">Danger</span>\n          <span class=\"badge badge-pill badge-warning\">Warning</span>\n          <span class=\"badge badge-pill badge-info\">Info</span>\n          <span class=\"badge badge-pill badge-light\">Light</span>\n          <span class=\"badge badge-pill badge-dark\">Dark</span>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>links</small>\n        </div>\n        <div class=\"card-body\">\n          <a href=\"#\" class=\"badge badge-primary\">Primary</a>\n          <a href=\"#\" class=\"badge badge-secondary\">Secondary</a>\n          <a href=\"#\" class=\"badge badge-success\">Success</a>\n          <a href=\"#\" class=\"badge badge-danger\">Danger</a>\n          <a href=\"#\" class=\"badge badge-warning\">Warning</a>\n          <a href=\"#\" class=\"badge badge-info\">Info</a>\n          <a href=\"#\" class=\"badge badge-light\">Light</a>\n          <a href=\"#\" class=\"badge badge-dark\">Dark</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n</div>\n";

/***/ }),

/***/ 8135:
/*!**********************************************************************!*\
  !*** ./src/app/views/notifications/modals.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Modals\n        </div>\n        <div class=\"card-body\">\n          <!-- Button trigger modal -->\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n            Launch demo modal\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"largeModal.show()\">\n            Launch large modal\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\n            Launch small modal\n          </button>\n          <hr>\n          <button type=\"button\" class=\"btn btn-primary mr-1\" data-toggle=\"modal\" (click)=\"primaryModal.show()\">\n            Primary modal\n          </button>\n          <button type=\"button\" class=\"btn btn-success mr-1\" data-toggle=\"modal\" (click)=\"successModal.show()\">\n            Success modal\n          </button>\n          <button type=\"button\" class=\"btn btn-warning mr-1\" data-toggle=\"modal\" (click)=\"warningModal.show()\">\n            Warning modal\n          </button>\n          <button type=\"button\" class=\"btn btn-danger mr-1\" data-toggle=\"modal\" (click)=\"dangerModal.show()\">\n            Danger modal\n          </button>\n          <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n            Info modal\n          </button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-success\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-warning\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-warning\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_notifications_notifications_module_ts.js.map