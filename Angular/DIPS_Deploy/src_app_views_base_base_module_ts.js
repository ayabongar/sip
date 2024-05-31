(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_views_base_base_module_ts"],{

/***/ 54427:
/*!***************************************************!*\
  !*** ./src/app/views/base/base-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRoutingModule": () => (/* binding */ BaseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbars/navbars.component */ 49332);




const routes = [{
  path: '',
  data: {
    title: 'Base'
  },
  children: [{
    path: '',
    redirectTo: 'cards'
  }, {
    path: 'cards',
    // component: '',
    data: {
      title: 'Cards'
    }
  }, {
    path: 'forms',
    // component: 'FormsComponent',
    data: {
      title: 'Forms'
    }
  }, {
    path: 'switches',
    // component: 'omponent,
    data: {
      title: 'Switches'
    }
  }, {
    path: 'tables',
    // component: 'TablesComponent',
    data: {
      title: 'Tables'
    }
  }, {
    path: 'tabs',
    // component: 'TabsComponent',
    data: {
      title: 'Tabs'
    }
  }, {
    path: 'carousels',
    // component: 'CarouselsComponent',
    data: {
      title: 'Carousels'
    }
  }, {
    path: 'collapses',
    // component: 'CollapsesComponent',
    data: {
      title: 'Collapses'
    }
  }, {
    path: 'paginations',
    // component: 'PaginationsComponent',
    data: {
      title: 'Pagination'
    }
  }, {
    path: 'popovers',
    //component: 'PopoversComponent',
    data: {
      title: 'Popover'
    }
  }, {
    path: 'progress',
    //component: 'ProgressComponent',
    data: {
      title: 'Progress'
    }
  }, {
    path: 'tooltips',
    // component: 'TooltipsComponent',
    data: {
      title: 'Tooltips'
    }
  }, {
    path: 'navbars',
    component: _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_0__.NavbarsComponent,
    data: {
      title: 'Navbars'
    }
  }]
}];
let BaseRoutingModule = class BaseRoutingModule {};
BaseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BaseRoutingModule);


/***/ }),

/***/ 5433:
/*!*******************************************!*\
  !*** ./src/app/views/base/base.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModule": () => (/* binding */ BaseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 15215);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 83401);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/popover */ 22367);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ 9115);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbars/navbars.component */ 49332);
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-routing.module */ 54427);

// Angular



// Forms Component
// Tabs Component

// Carousel Component

// Collapse Component

// Dropdowns Component

// Pagination Component

// Popover Component

// Progress Component

// Tooltip Component

// navbars

// Components Routing

let BaseModule = class BaseModule {};
BaseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _base_routing_module__WEBPACK_IMPORTED_MODULE_9__.BaseRoutingModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsModule, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseModule.forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationModule.forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverModule.forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__.ProgressbarModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule.forRoot()],
  declarations: [_navbars_navbars_component__WEBPACK_IMPORTED_MODULE_8__.NavbarsComponent]
})], BaseModule);


/***/ }),

/***/ 49332:
/*!*********************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarsComponent": () => (/* binding */ NavbarsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _navbars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbars.component.html?ngResource */ 54175);
/* harmony import */ var _navbars_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbars.component.css?ngResource */ 142);
/* harmony import */ var _navbars_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbars_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);





let NavbarsComponent = class NavbarsComponent {
  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    if (this.collapseRef) {
      // temp fix for "overflow: hidden"
      if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
        this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
      }
    }
    return this._isCollapsed;
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._isCollapsed = true;
  }
  ngOnInit() {}
  ngAfterViewChecked() {
    this.collapseRef = this.collapse;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
  }];
  static #_2 = this.propDecorators = {
    collapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef,
        static: false
      }]
    }]
  };
};
NavbarsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-navbars',
  template: _navbars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navbars_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavbarsComponent);


/***/ }),

/***/ 15215:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent),
/* harmony export */   "CarouselConfig": () => (/* binding */ CarouselConfig),
/* harmony export */   "CarouselModule": () => (/* binding */ CarouselModule),
/* harmony export */   "SlideComponent": () => (/* binding */ SlideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/utils */ 49041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


function CarouselComponent_ol_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.selectSlide(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", slide_r4.active === true);
  }
}
function CarouselComponent_ol_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
  }
}
function CarouselComponent_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CarouselComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.previousSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
  }
}
function CarouselComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.nextSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
  }
}
const _c0 = function (a0) {
  return {
    "display": a0
  };
};
const _c1 = ["*"];
class CarouselConfig {
  constructor() {
    /* Default interval of auto changing of slides */
    this.interval = 5000;
    /* Is loop of auto changing of slides can be paused */
    this.noPause = false;
    /* Is slides can wrap from the last to the first slide */
    this.noWrap = false;
    /* Show carousel-indicators */
    this.showIndicators = true;
    /* Slides can be paused on focus */
    this.pauseOnFocus = false;
    /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
    this.indicatorsByChunk = false;
    /* If value more then 1 — carousel works in multilist mode */
    this.itemsPerSlide = 1;
    /* If `true` — carousel shifts by one element. By default carousel shifts by number
        of visible elements (itemsPerSlide field) */
    this.singleSlideOffset = false;
  }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) {
  return new (t || CarouselConfig)();
};
CarouselConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CarouselConfig,
  factory: CarouselConfig.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
  /** @type {?} */
  let l = array.length;
  while (l--) {
    if (predicate(array[l], l, array)) {
      return l;
    }
  }
  return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
  /** @type {?} */
  const out = [];
  /** @type {?} */
  const n = Math.ceil(array.length / size);
  /** @type {?} */
  let i = 0;
  while (i < n) {
    /** @type {?} */
    const chunk = array.splice(0, i === n - 1 && size < array.length ? array.length : size);
    out.push(chunk);
    i++;
  }
  return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
  UNKNOWN: 0,
  NEXT: 1,
  PREV: 2
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
  /**
   * @param {?} config
   * @param {?} ngZone
   */
  constructor(config, ngZone) {
    this.ngZone = ngZone;
    /* If `true` - carousel indicators indicate slides chunks
         works ONLY if singleSlideOffset = FALSE */
    this.indicatorsByChunk = false;
    /* If value more then 1 — carousel works in multilist mode */
    this.itemsPerSlide = 1;
    /* If `true` — carousel shifts by one element. By default carousel shifts by number
         of visible elements (itemsPerSlide field) */
    this.singleSlideOffset = false;
    /**
     * Turn on/off animation. Animation doesn't work for multilist carousel
     */
    this.isAnimated = false;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     */
    this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
    /**
     * Will be emitted when active slides has been changed in multilist mode
     */
    this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /* Index to start display slides from it */
    this.startFromIndex = 0;
    this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
    this._currentVisibleSlidesIndex = 0;
    this.destroyed = false;
    this.getActive =
    /**
    * @param {?} slide
    * @return {?}
    */
    slide => slide.active;
    this.makeSlidesConsistent =
    /**
    * @param {?} slides
    * @return {?}
    */
    slides => {
      slides.forEach(
      /**
      * @param {?} slide
      * @param {?} index
      * @return {?}
      */
      (slide, index) => slide.item.order = index);
    };
    Object.assign(this, config);
  }
  /**
   * Index of currently displayed slide(started for 0)
   * @param {?} index
   * @return {?}
   */
  set activeSlide(index) {
    if (this.multilist) {
      return;
    }
    if (this._slides.length && index !== this._currentActiveSlide) {
      this._select(index);
    }
  }
  /**
   * @return {?}
   */
  get activeSlide() {
    return this._currentActiveSlide;
  }
  /**
   * Delay of item cycling in milliseconds. If false, carousel won't cycle
   * automatically.
   * @return {?}
   */
  get interval() {
    return this._interval;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set interval(value) {
    this._interval = value;
    this.restartTimer();
  }
  /**
   * @return {?}
   */
  get slides() {
    return this._slides.toArray();
  }
  /**
   * @return {?}
   */
  get isBs4() {
    return !(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)();
  }
  /**
   * @return {?}
   */
  ngAfterViewInit() {
    setTimeout(
    /**
    * @return {?}
    */
    () => {
      if (this.singleSlideOffset) {
        this.indicatorsByChunk = false;
      }
      if (this.multilist) {
        this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
        this.selectInitialSlides();
      }
    }, 0);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.destroyed = true;
  }
  /**
   * Adds new slide. If this slide is first in collection - set it as active
   * and starts auto changing
   * @param {?} slide
   * @return {?}
   */
  addSlide(slide) {
    this._slides.add(slide);
    if (this.multilist && this._slides.length <= this.itemsPerSlide) {
      slide.active = true;
    }
    if (!this.multilist && this.isAnimated) {
      slide.isAnimated = true;
    }
    if (!this.multilist && this._slides.length === 1) {
      this._currentActiveSlide = undefined;
      this.activeSlide = 0;
      this.play();
    }
    if (this.multilist && this._slides.length > this.itemsPerSlide) {
      this.play();
    }
  }
  /**
   * Removes specified slide. If this slide is active - will roll to another
   * slide
   * @param {?} slide
   * @return {?}
   */
  removeSlide(slide) {
    /** @type {?} */
    const remIndex = this._slides.indexOf(slide);
    if (this._currentActiveSlide === remIndex) {
      // removing of active slide
      /** @type {?} */
      let nextSlideIndex = void 0;
      if (this._slides.length > 1) {
        // if this slide last - will roll to first slide, if noWrap flag is
        // FALSE or to previous, if noWrap is TRUE in case, if this slide in
        // middle of collection, index of next slide is same to removed
        nextSlideIndex = !this.isLast(remIndex) ? remIndex : this.noWrap ? remIndex - 1 : 0;
      }
      this._slides.remove(remIndex);
      // prevents exception with changing some value after checking
      setTimeout(
      /**
      * @return {?}
      */
      () => {
        this._select(nextSlideIndex);
      }, 0);
    } else {
      this._slides.remove(remIndex);
      /** @type {?} */
      const currentSlideIndex = this.getCurrentSlideIndex();
      setTimeout(
      /**
      * @return {?}
      */
      () => {
        // after removing, need to actualize index of current active slide
        this._currentActiveSlide = currentSlideIndex;
        this.activeSlideChange.emit(this._currentActiveSlide);
      }, 0);
    }
  }
  /**
   * @param {?=} force
   * @return {?}
   */
  nextSlideFromInterval(force = false) {
    this.move(Direction.NEXT, force);
  }
  /**
   * Rolling to next slide
   * @param {?=} force
   * @return {?}
   */
  nextSlide(force = false) {
    if (this.isPlaying) {
      this.restartTimer();
    }
    this.move(Direction.NEXT, force);
  }
  /**
   * Rolling to previous slide
   * @param {?=} force
   * @return {?}
   */
  previousSlide(force = false) {
    if (this.isPlaying) {
      this.restartTimer();
    }
    this.move(Direction.PREV, force);
  }
  /**
   * @return {?}
   */
  getFirstVisibleIndex() {
    return this.slides.findIndex(this.getActive);
  }
  /**
   * @return {?}
   */
  getLastVisibleIndex() {
    return findLastIndex(this.slides, this.getActive);
  }
  /**
   * @param {?} direction
   * @param {?=} force
   * @return {?}
   */
  move(direction, force = false) {
    /** @type {?} */
    const firstVisibleIndex = this.getFirstVisibleIndex();
    /** @type {?} */
    const lastVisibleIndex = this.getLastVisibleIndex();
    if (this.noWrap) {
      if (direction === Direction.NEXT && this.isLast(lastVisibleIndex) || direction === Direction.PREV && firstVisibleIndex === 0) {
        return;
      }
    }
    if (!this.multilist) {
      this.activeSlide = this.findNextSlideIndex(direction, force);
    } else {
      this.moveMultilist(direction);
    }
  }
  /**
   * Swith slides by enter, space and arrows keys
   * \@internal
   * @param {?} event
   * @return {?}
   */
  keydownPress(event) {
    // tslint:disable-next-line:deprecation
    if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
      this.nextSlide();
      event.preventDefault();
      return;
    }
    // tslint:disable-next-line:deprecation
    if (event.keyCode === 37 || event.key === 'LeftArrow') {
      this.previousSlide();
      return;
    }
    // tslint:disable-next-line:deprecation
    if (event.keyCode === 39 || event.key === 'RightArrow') {
      this.nextSlide();
      return;
    }
  }
  /**
   * Play on mouse leave
   * \@internal
   * @return {?}
   */
  onMouseLeave() {
    if (!this.pauseOnFocus) {
      this.play();
    }
  }
  /**
   * Play on mouse up
   * \@internal
   * @return {?}
   */
  onMouseUp() {
    if (!this.pauseOnFocus) {
      this.play();
    }
  }
  /**
   * When slides on focus autoplay is stopped(optional)
   * \@internal
   * @return {?}
   */
  pauseFocusIn() {
    if (this.pauseOnFocus) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }
  /**
   * When slides out of focus autoplay is started
   * \@internal
   * @return {?}
   */
  pauseFocusOut() {
    this.play();
  }
  /**
   * Rolling to specified slide
   * @param {?} index
   * @return {?}
   */
  selectSlide(index) {
    if (this.isPlaying) {
      this.restartTimer();
    }
    if (!this.multilist) {
      this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
    } else {
      this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
    }
  }
  /**
   * Starts a auto changing of slides
   * @return {?}
   */
  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }
  /**
   * Stops a auto changing of slides
   * @return {?}
   */
  pause() {
    if (!this.noPause) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }
  /**
   * Finds and returns index of currently displayed slide
   * @return {?}
   */
  getCurrentSlideIndex() {
    return this._slides.findIndex(this.getActive);
  }
  /**
   * Defines, whether the specified index is last in collection
   * @param {?} index
   * @return {?}
   */
  isLast(index) {
    return index + 1 >= this._slides.length;
  }
  /**
   * Defines, whether the specified index is first in collection
   * @param {?} index
   * @return {?}
   */
  isFirst(index) {
    return index === 0;
  }
  /**
   * @return {?}
   */
  indicatorsSlides() {
    return this.slides.filter(
    /**
    * @param {?} slide
    * @param {?} index
    * @return {?}
    */
    (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0);
  }
  /**
   * @private
   * @return {?}
   */
  selectInitialSlides() {
    /** @type {?} */
    const startIndex = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
    this.hideSlides();
    if (this.singleSlideOffset) {
      this._slidesWithIndexes = this.mapSlidesAndIndexes();
      if (this._slides.length - startIndex < this.itemsPerSlide) {
        /** @type {?} */
        const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
        this._slidesWithIndexes = [...this._slidesWithIndexes, ...slidesToAppend].slice(slidesToAppend.length).slice(0, this.itemsPerSlide);
      } else {
        this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
      }
      this._slidesWithIndexes.forEach(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.item.active = true);
      this.makeSlidesConsistent(this._slidesWithIndexes);
    } else {
      this.selectRangeByNestedIndex(startIndex);
    }
    this.slideRangeChange.emit(this.getVisibleIndexes());
  }
  /**
   * Defines next slide index, depending of direction
   * @private
   * @param {?} direction
   * @param {?} force
   * @return {?}
   */
  findNextSlideIndex(direction, force) {
    /** @type {?} */
    let nextSlideIndex = 0;
    if (!force && this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap) {
      return undefined;
    }
    switch (direction) {
      case Direction.NEXT:
        // if this is last slide, not force, looping is disabled
        // and need to going forward - select current slide, as a next
        nextSlideIndex = !this.isLast(this._currentActiveSlide) ? this._currentActiveSlide + 1 : !force && this.noWrap ? this._currentActiveSlide : 0;
        break;
      case Direction.PREV:
        // if this is first slide, not force, looping is disabled
        // and need to going backward - select current slide, as a next
        nextSlideIndex = this._currentActiveSlide > 0 ? this._currentActiveSlide - 1 : !force && this.noWrap ? this._currentActiveSlide : this._slides.length - 1;
        break;
      default:
        throw new Error('Unknown direction');
    }
    return nextSlideIndex;
  }
  /**
   * @private
   * @return {?}
   */
  mapSlidesAndIndexes() {
    return this.slides.slice().map(
    /**
    * @param {?} slide
    * @param {?} index
    * @return {?}
    */
    (slide, index) => {
      return {
        index,
        item: slide
      };
    });
  }
  /**
   * @private
   * @param {?} index
   * @return {?}
   */
  selectSlideRange(index) {
    if (this.isIndexInRange(index)) {
      return;
    }
    this.hideSlides();
    if (!this.singleSlideOffset) {
      this.selectRangeByNestedIndex(index);
    } else {
      /** @type {?} */
      const startIndex = this.isIndexOnTheEdges(index) ? index : index - this.itemsPerSlide + 1;
      /** @type {?} */
      const endIndex = this.isIndexOnTheEdges(index) ? index + this.itemsPerSlide : index + 1;
      this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
      this.makeSlidesConsistent(this._slidesWithIndexes);
      this._slidesWithIndexes.forEach(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.item.active = true);
    }
    this.slideRangeChange.emit(this.getVisibleIndexes());
  }
  /**
   * @private
   * @param {?} index
   * @return {?}
   */
  selectRangeByNestedIndex(index) {
    /** @type {?} */
    const selectedRange = this._chunkedSlides.map(
    /**
    * @param {?} slidesList
    * @param {?} i
    * @return {?}
    */
    (slidesList, i) => {
      return {
        index: i,
        list: slidesList
      };
    }).find(
    /**
    * @param {?} slidesList
    * @return {?}
    */
    slidesList => {
      return slidesList.list.find(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.index === index) !== undefined;
    });
    this._currentVisibleSlidesIndex = selectedRange.index;
    this._chunkedSlides[selectedRange.index].forEach(
    /**
    * @param {?} slide
    * @return {?}
    */
    slide => {
      slide.item.active = true;
    });
  }
  /**
   * @private
   * @param {?} index
   * @return {?}
   */
  isIndexOnTheEdges(index) {
    return index + 1 - this.itemsPerSlide <= 0 || index + this.itemsPerSlide <= this._slides.length;
  }
  /**
   * @private
   * @param {?} index
   * @return {?}
   */
  isIndexInRange(index) {
    if (this.singleSlideOffset) {
      /** @type {?} */
      const visibleIndexes = this._slidesWithIndexes.map(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.index);
      return visibleIndexes.indexOf(index) >= 0;
    }
    return index <= this.getLastVisibleIndex() && index >= this.getFirstVisibleIndex();
  }
  /**
   * @private
   * @return {?}
   */
  hideSlides() {
    this.slides.forEach(
    /**
    * @param {?} slide
    * @return {?}
    */
    slide => slide.active = false);
  }
  /**
   * @private
   * @return {?}
   */
  isVisibleSlideListLast() {
    return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
  }
  /**
   * @private
   * @return {?}
   */
  isVisibleSlideListFirst() {
    return this._currentVisibleSlidesIndex === 0;
  }
  /**
   * @private
   * @param {?} direction
   * @return {?}
   */
  moveSliderByOneItem(direction) {
    /** @type {?} */
    let firstVisibleIndex;
    /** @type {?} */
    let lastVisibleIndex;
    /** @type {?} */
    let indexToHide;
    /** @type {?} */
    let indexToShow;
    if (this.noWrap) {
      firstVisibleIndex = this.getFirstVisibleIndex();
      lastVisibleIndex = this.getLastVisibleIndex();
      indexToHide = direction === Direction.NEXT ? firstVisibleIndex : lastVisibleIndex;
      indexToShow = direction !== Direction.NEXT ? firstVisibleIndex - 1 : !this.isLast(lastVisibleIndex) ? lastVisibleIndex + 1 : 0;
      this._slides.get(indexToHide).active = false;
      this._slides.get(indexToShow).active = true;
      /** @type {?} */
      const slidesToReorder = this.mapSlidesAndIndexes().filter(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.item.active);
      this.makeSlidesConsistent(slidesToReorder);
      this.slideRangeChange.emit(this.getVisibleIndexes());
    } else {
      /** @type {?} */
      let displayedIndex;
      firstVisibleIndex = this._slidesWithIndexes[0].index;
      lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
      if (direction === Direction.NEXT) {
        this._slidesWithIndexes.shift();
        displayedIndex = this.isLast(lastVisibleIndex) ? 0 : lastVisibleIndex + 1;
        this._slidesWithIndexes.push({
          index: displayedIndex,
          item: this._slides.get(displayedIndex)
        });
      } else {
        this._slidesWithIndexes.pop();
        displayedIndex = this.isFirst(firstVisibleIndex) ? this._slides.length - 1 : firstVisibleIndex - 1;
        this._slidesWithIndexes = [{
          index: displayedIndex,
          item: this._slides.get(displayedIndex)
        }, ...this._slidesWithIndexes];
      }
      this.hideSlides();
      this._slidesWithIndexes.forEach(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.item.active = true);
      this.makeSlidesConsistent(this._slidesWithIndexes);
      this.slideRangeChange.emit(this._slidesWithIndexes.map(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.index));
    }
  }
  /**
   * @private
   * @param {?} direction
   * @return {?}
   */
  moveMultilist(direction) {
    if (this.singleSlideOffset) {
      this.moveSliderByOneItem(direction);
    } else {
      this.hideSlides();
      if (this.noWrap) {
        this._currentVisibleSlidesIndex = direction === Direction.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1;
      } else {
        if (direction === Direction.NEXT) {
          this._currentVisibleSlidesIndex = this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1;
        } else {
          this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst() ? this._chunkedSlides.length - 1 : this._currentVisibleSlidesIndex - 1;
        }
      }
      this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.item.active = true);
      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
  }
  /**
   * @private
   * @return {?}
   */
  getVisibleIndexes() {
    if (!this.singleSlideOffset) {
      return this._chunkedSlides[this._currentVisibleSlidesIndex].map(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.index);
    } else {
      return this._slidesWithIndexes.map(
      /**
      * @param {?} slide
      * @return {?}
      */
      slide => slide.index);
    }
  }
  /**
   * Sets a slide, which specified through index, as active
   * @private
   * @param {?} index
   * @return {?}
   */
  _select(index) {
    if (isNaN(index)) {
      this.pause();
      return;
    }
    if (!this.multilist) {
      /** @type {?} */
      const currentSlide = this._slides.get(this._currentActiveSlide);
      if (currentSlide) {
        currentSlide.active = false;
      }
    }
    /** @type {?} */
    const nextSlide = this._slides.get(index);
    if (nextSlide) {
      this._currentActiveSlide = index;
      nextSlide.active = true;
      this.activeSlide = index;
      this.activeSlideChange.emit(index);
    }
  }
  /**
   * Starts loop of auto changing of slides
   * @private
   * @return {?}
   */
  restartTimer() {
    this.resetTimer();
    /** @type {?} */
    const interval = +this.interval;
    if (!isNaN(interval) && interval > 0) {
      this.currentInterval = this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => {
        return setInterval(
        /**
        * @return {?}
        */
        () => {
          /** @type {?} */
          const nInterval = +this.interval;
          this.ngZone.run(
          /**
          * @return {?}
          */
          () => {
            if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
              this.nextSlideFromInterval();
            } else {
              this.pause();
            }
          });
        }, interval);
      });
    }
  }
  /**
   * @return {?}
   */
  get multilist() {
    return this.itemsPerSlide > 1;
  }
  /**
   * Stops loop of auto changing of slides
   * @private
   * @return {?}
   */
  resetTimer() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = void 0;
    }
  }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
CarouselComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["carousel"]],
  inputs: {
    indicatorsByChunk: "indicatorsByChunk",
    itemsPerSlide: "itemsPerSlide",
    singleSlideOffset: "singleSlideOffset",
    isAnimated: "isAnimated",
    startFromIndex: "startFromIndex",
    activeSlide: "activeSlide",
    interval: "interval",
    noWrap: "noWrap",
    noPause: "noPause",
    showIndicators: "showIndicators",
    pauseOnFocus: "pauseOnFocus"
  },
  outputs: {
    activeSlideChange: "activeSlideChange",
    slideRangeChange: "slideRangeChange"
  },
  ngContentSelectors: _c1,
  decls: 6,
  vars: 6,
  consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() {
        return ctx.pause();
      })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
        return ctx.onMouseLeave();
      })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() {
        return ctx.onMouseUp();
      })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) {
        return ctx.keydownPress($event);
      })("focusin", function CarouselComponent_Template_div_focusin_0_listener() {
        return ctx.pauseFocusIn();
      })("focusout", function CarouselComponent_Template_div_focusout_0_listener() {
        return ctx.pauseFocusOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  encapsulation: 2
});
/** @nocollapse */
CarouselComponent.ctorParameters = () => [{
  type: CarouselConfig
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
}];
CarouselComponent.propDecorators = {
  noWrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  noPause: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  showIndicators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  pauseOnFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  indicatorsByChunk: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  itemsPerSlide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  singleSlideOffset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  activeSlideChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  slideRangeChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  activeSlide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  startFromIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  interval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'carousel',
      template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
    }]
  }], function () {
    return [{
      type: CarouselConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    indicatorsByChunk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    itemsPerSlide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    singleSlideOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeSlideChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    slideRangeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    startFromIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeSlide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    interval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noWrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noPause: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pauseOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
  /**
   * @param {?} carousel
   */
  constructor(carousel) {
    this.itemWidth = '100%';
    this.order = 0;
    /**
     * Wraps element by appropriate CSS classes
     */
    this.addClass = true;
    this.carousel = carousel;
  }
  /**
   * Fires changes in container collection after adding a new slide instance
   * @return {?}
   */
  ngOnInit() {
    this.carousel.addSlide(this);
    this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
  }
  /**
   * Fires changes in container collection after removing of this slide instance
   * @return {?}
   */
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) {
  return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselComponent));
};
SlideComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SlideComponent,
  selectors: [["slide"]],
  hostVars: 13,
  hostBindings: function SlideComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", !ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
    }
  },
  inputs: {
    active: "active"
  },
  ngContentSelectors: _c1,
  decls: 2,
  vars: 2,
  consts: [[1, "item"]],
  template: function SlideComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.active);
    }
  },
  styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"]
});
/** @nocollapse */
SlideComponent.ctorParameters = () => [{
  type: CarouselComponent
}];
SlideComponent.propDecorators = {
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  itemWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['style.width']
  }],
  order: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['style.order']
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.carousel-animation']
  }],
  addClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.item']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.carousel-item']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlideComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'slide',
      template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        '[attr.aria-hidden]': '!active'
      },
      styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: CarouselComponent
    }];
  }, {
    itemWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['style.width']
    }],
    order: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['style.order']
    }],
    addClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.item']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.carousel-item']
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.active']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.carousel-animation']
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: CarouselModule,
      providers: []
    };
  }
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) {
  return new (t || CarouselModule)();
};
CarouselModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CarouselModule
});
CarouselModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [CarouselConfig],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [SlideComponent, CarouselComponent],
      exports: [SlideComponent, CarouselComponent],
      providers: [CarouselConfig]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, {
    declarations: function () {
      return [SlideComponent, CarouselComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [SlideComponent, CarouselComponent];
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

/***/ 47273:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseDirective": () => (/* binding */ CollapseDirective),
/* harmony export */   "CollapseModule": () => (/* binding */ CollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */


const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
const expandAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  visibility: 'hidden'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(COLLAPSE_ANIMATION_TIMING, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  visibility: 'visible'
}))];
/** @type {?} */
const collapseAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  visibility: 'visible'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(COLLAPSE_ANIMATION_TIMING, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  visibility: 'hidden'
}))];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseDirective {
  /**
   * @param {?} _el
   * @param {?} _renderer
   * @param {?} _builder
   */
  constructor(_el, _renderer, _builder) {
    this._el = _el;
    this._renderer = _renderer;
    /**
     * This event fires as soon as content collapses
     */
    this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * This event fires when collapsing is started
     */
    this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * This event fires as soon as content becomes visible
     */
    this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * This event fires when expansion is started
     */
    this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    // shown
    this.isExpanded = true;
    this.collapseNewValue = true;
    // hidden
    this.isCollapsed = false;
    // stale state
    this.isCollapse = true;
    // animation state
    this.isCollapsing = false;
    /**
     * turn on/off animation
     */
    this.isAnimated = false;
    this._display = 'block';
    this._stylesLoaded = false;
    this._COLLAPSE_ACTION_NAME = 'collapse';
    this._EXPAND_ACTION_NAME = 'expand';
    this._factoryCollapseAnimation = _builder.build(collapseAnimation);
    this._factoryExpandAnimation = _builder.build(expandAnimation);
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set display(value) {
    if (!this.isAnimated) {
      this._renderer.setStyle(this._el.nativeElement, 'display', value);
      return;
    }
    this._display = value;
    if (value === 'none') {
      this.hide();
      return;
    }
    this.show();
  }
  /**
   * A flag indicating visibility of content (shown or hidden)
   * @param {?} value
   * @return {?}
   */
  set collapse(value) {
    this.collapseNewValue = value;
    if (!this._player || this._isAnimationDone) {
      this.isExpanded = value;
      this.toggle();
    }
  }
  /**
   * @return {?}
   */
  get collapse() {
    return this.isExpanded;
  }
  /**
   * @return {?}
   */
  ngAfterViewChecked() {
    this._stylesLoaded = true;
    if (!this._player || !this._isAnimationDone) {
      return;
    }
    this._player.reset();
    this._renderer.setStyle(this._el.nativeElement, 'height', '*');
  }
  /**
   * allows to manually toggle content visibility
   * @return {?}
   */
  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }
  /**
   * allows to manually hide content
   * @return {?}
   */
  hide() {
    this.isCollapsing = true;
    this.isExpanded = false;
    this.isCollapsed = true;
    this.isCollapsing = false;
    this.collapses.emit(this);
    this._isAnimationDone = false;
    this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(
    /**
    * @return {?}
    */
    () => {
      this._isAnimationDone = true;
      if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
        this.show();
        return;
      }
      this.collapsed.emit(this);
      this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
    });
  }
  /**
   * allows to manually show collapsed content
   * @return {?}
   */
  show() {
    this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
    this.isCollapsing = true;
    this.isExpanded = true;
    this.isCollapsed = false;
    this.isCollapsing = false;
    this.expands.emit(this);
    this._isAnimationDone = false;
    this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(
    /**
    * @return {?}
    */
    () => {
      this._isAnimationDone = true;
      if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
        this.hide();
        return;
      }
      this.expanded.emit(this);
      this._renderer.removeStyle(this._el.nativeElement, 'overflow');
    });
  }
  /**
   * @param {?} isAnimated
   * @param {?} action
   * @return {?}
   */
  animationRun(isAnimated, action) {
    if (!isAnimated || !this._stylesLoaded) {
      return (
        /**
        * @param {?} callback
        * @return {?}
        */
        callback => callback()
      );
    }
    this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
    this._renderer.addClass(this._el.nativeElement, 'collapse');
    /** @type {?} */
    const factoryAnimation = action === this._EXPAND_ACTION_NAME ? this._factoryExpandAnimation : this._factoryCollapseAnimation;
    if (this._player) {
      this._player.destroy();
    }
    this._player = factoryAnimation.create(this._el.nativeElement);
    this._player.play();
    return (
      /**
      * @param {?} callback
      * @return {?}
      */
      callback => this._player.onDone(callback)
    );
  }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) {
  return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder));
};
CollapseDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CollapseDirective,
  selectors: [["", "collapse", ""]],
  hostVars: 10,
  hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    }
  },
  inputs: {
    isAnimated: "isAnimated",
    display: "display",
    collapse: "collapse"
  },
  outputs: {
    collapsed: "collapsed",
    collapses: "collapses",
    expanded: "expanded",
    expands: "expands"
  },
  exportAs: ["bs-collapse"]
});
/** @nocollapse */
CollapseDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
}, {
  type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder
}];
CollapseDirective.propDecorators = {
  collapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  collapses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  expands: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  isExpanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.in']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.show']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['attr.aria-expanded']
  }],
  isCollapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['attr.aria-hidden']
  }],
  isCollapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.collapse']
  }],
  isCollapsing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.collapsing']
  }],
  display: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  collapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[collapse]',
      exportAs: 'bs-collapse',
      host: {
        '[class.collapse]': 'true'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder
    }];
  }, {
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    collapses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    expands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    isExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.in']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.show']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['attr.aria-expanded']
    }],
    isCollapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['attr.aria-hidden']
    }],
    isCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.collapse']
    }],
    isCollapsing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.collapsing']
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    collapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: CollapseModule,
      providers: []
    };
  }
}
CollapseModule.ɵfac = function CollapseModule_Factory(t) {
  return new (t || CollapseModule)();
};
CollapseModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CollapseModule
});
CollapseModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [CollapseDirective],
      exports: [CollapseDirective]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CollapseModule, {
    declarations: [CollapseDirective],
    exports: [CollapseDirective]
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

/***/ 22367:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverConfig": () => (/* binding */ PopoverConfig),
/* harmony export */   "PopoverContainerComponent": () => (/* binding */ PopoverContainerComponent),
/* harmony export */   "PopoverDirective": () => (/* binding */ PopoverDirective),
/* harmony export */   "PopoverModule": () => (/* binding */ PopoverModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ 11574);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ 49041);
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ 13993);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */




function PopoverContainerComponent_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
const _c0 = ["*"];
class PopoverConfig {
  constructor() {
    /**
     * sets disable adaptive position
     */
    this.adaptivePosition = true;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
     */
    this.placement = 'top';
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    this.triggers = 'click';
    this.outsideClick = false;
    /**
     * delay before showing the tooltip
     */
    this.delay = 0;
  }
}
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) {
  return new (t || PopoverConfig)();
};
PopoverConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PopoverConfig,
  factory: PopoverConfig.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PopoverConfig, [{
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
class PopoverContainerComponent {
  /**
   * @param {?} config
   */
  constructor(config) {
    Object.assign(this, config);
  }
  /**
   * @return {?}
   */
  get isBs3() {
    return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.isBs3)();
  }
}
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) {
  return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](PopoverConfig));
};
PopoverContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PopoverContainerComponent,
  selectors: [["popover-container"]],
  hostAttrs: ["role", "tooltip", 2, "display", "block"],
  hostVars: 6,
  hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    }
  },
  inputs: {
    placement: "placement",
    title: "title"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
  template: function PopoverContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"],
  changeDetection: 0
});
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [{
  type: PopoverConfig
}];
PopoverContainerComponent.propDecorators = {
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PopoverContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'popover-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      host: {
        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
        '[class.show]': '!isBs3',
        '[class.bs3]': 'isBs3',
        role: 'tooltip',
        style: 'display:block;'
      },
      template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
      styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
    }]
  }], function () {
    return [{
      type: PopoverConfig
    }];
  }, {
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
  /**
   * @param {?} _config
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _viewContainerRef
   * @param {?} cis
   * @param {?} _positionService
   */
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    /**
     * Close popover on outside click
     */
    this.outsideClick = false;
    /**
     * Css class for popover container
     */
    this.containerClass = '';
    this._isInited = false;
    this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
      provide: PopoverConfig,
      useValue: _config
    });
    Object.assign(this, _config);
    this.onShown = this._popover.onShown;
    this.onHidden = this._popover.onHidden;
    // fix: no focus on button on Mac OS #1795
    if (typeof window !== 'undefined') {
      _elementRef.nativeElement.addEventListener('click',
      /**
      * @return {?}
      */
      function () {
        try {
          _elementRef.nativeElement.focus();
        } catch (err) {
          return;
        }
      });
    }
  }
  /**
   * Returns whether or not the popover is currently being shown
   * @return {?}
   */
  get isOpen() {
    return this._popover.isShown;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  /**
   * Opens an element’s popover. This is considered a “manual” triggering of
   * the popover.
   * @return {?}
   */
  show() {
    if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
      return;
    }
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this.adaptivePosition
        },
        preventOverflow: {
          enabled: this.adaptivePosition
        }
      }
    });
    /** @type {?} */
    const showPopover =
    /**
    * @return {?}
    */
    () => {
      if (this._delayTimeoutId) {
        this._delayTimeoutId = undefined;
      }
      this._popover.attach(PopoverContainerComponent).to(this.container).position({
        attachment: this.placement
      }).show({
        content: this.popover,
        context: this.popoverContext,
        placement: this.placement,
        title: this.popoverTitle,
        containerClass: this.containerClass
      });
      if (!this.adaptivePosition) {
        this._positionService.calcPosition();
        this._positionService.deletePositionElement(this._popover._componentRef.location);
      }
      this.isOpen = true;
    };
    /** @type {?} */
    const cancelDelayedTooltipShowing =
    /**
    * @return {?}
    */
    () => {
      if (this._popoverCancelShowFn) {
        this._popoverCancelShowFn();
      }
    };
    if (this.delay) {
      /** @type {?} */
      const _timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(this.delay).subscribe(
      /**
      * @return {?}
      */
      () => {
        showPopover();
        cancelDelayedTooltipShowing();
      });
      if (this.triggers) {
        (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.parseTriggers)(this.triggers).forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        trigger => {
          this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close,
          /**
          * @return {?}
          */
          () => {
            _timer.unsubscribe();
            cancelDelayedTooltipShowing();
          });
        });
      }
    } else {
      showPopover();
    }
  }
  /**
   * Closes an element’s popover. This is considered a “manual” triggering of
   * the popover.
   * @return {?}
   */
  hide() {
    if (this._delayTimeoutId) {
      clearTimeout(this._delayTimeoutId);
      this._delayTimeoutId = undefined;
    }
    if (this.isOpen) {
      this._popover.hide();
      this.isOpen = false;
    }
  }
  /**
   * Toggles an element’s popover. This is considered a “manual” triggering of
   * the popover.
   * @return {?}
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    // fix: seems there are an issue with `routerLinkActive`
    // which result in duplicated call ngOnInit without call to ngOnDestroy
    // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
    if (this._isInited) {
      return;
    }
    this._isInited = true;
    this._popover.listen({
      triggers: this.triggers,
      outsideClick: this.outsideClick,
      show:
      /**
      * @return {?}
      */
      () => this.show()
    });
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._popover.dispose();
  }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
  return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService));
};
PopoverDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: PopoverDirective,
  selectors: [["", "popover", ""]],
  inputs: {
    outsideClick: "outsideClick",
    containerClass: "containerClass",
    isOpen: "isOpen",
    adaptivePosition: "adaptivePosition",
    popover: "popover",
    popoverContext: "popoverContext",
    popoverTitle: "popoverTitle",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    delay: "delay"
  },
  outputs: {
    onShown: "onShown",
    onHidden: "onHidden"
  },
  exportAs: ["bs-popover"]
});
/** @nocollapse */
PopoverDirective.ctorParameters = () => [{
  type: PopoverConfig
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
}, {
  type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory
}, {
  type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService
}];
PopoverDirective.propDecorators = {
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  popoverContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  popoverTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  outsideClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  containerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  delay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PopoverDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[popover]',
      exportAs: 'bs-popover'
    }]
  }], function () {
    return [{
      type: PopoverConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
    }, {
      type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory
    }, {
      type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService
    }];
  }, {
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    adaptivePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    popover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    popoverContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    popoverTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: PopoverModule,
      providers: [PopoverConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService]
    };
  }
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) {
  return new (t || PopoverModule)();
};
PopoverModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PopoverModule
});
PopoverModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [PopoverDirective, PopoverContainerComponent],
      exports: [PopoverDirective],
      entryComponents: [PopoverContainerComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PopoverModule, {
    declarations: function () {
      return [PopoverDirective, PopoverContainerComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function () {
      return [PopoverDirective];
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

/***/ 9115:
/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarComponent": () => (/* binding */ BarComponent),
/* harmony export */   "ProgressbarComponent": () => (/* binding */ ProgressbarComponent),
/* harmony export */   "ProgressbarConfig": () => (/* binding */ ProgressbarConfig),
/* harmony export */   "ProgressbarModule": () => (/* binding */ ProgressbarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/utils */ 49041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


function ProgressbarComponent_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.type)("value", ctx_r0._value);
  }
}
function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", item_r3.type)("value", item_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.label);
  }
}
function ProgressbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 3, "bar", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1._value);
  }
}
const _c0 = ["*"];
class ProgressbarConfig {
  constructor() {
    /**
     * if `true` changing value of progress bar will be animated
     */
    this.animate = false;
    /**
     * maximum total value of progress element
     */
    this.max = 100;
  }
}
ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) {
  return new (t || ProgressbarConfig)();
};
ProgressbarConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProgressbarConfig,
  factory: ProgressbarConfig.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressbarConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressbarComponent {
  /**
   * @param {?} config
   */
  constructor(config) {
    this.isStacked = false;
    this.addClass = true;
    /* tslint:disable-next-line:no-any */
    this.bars = [];
    this._max = 100;
    Object.assign(this, config);
  }
  /**
   * if `true` changing value of progress bar will be animated
   * @param {?} value
   * @return {?}
   */
  set animate(value) {
    this._animate = value;
    this.bars.forEach(
    /**
    * @param {?} b
    * @return {?}
    */
    b => {
      b.animate = value;
    });
  }
  /**
   * If `true`, striped classes are applied
   * @param {?} value
   * @return {?}
   */
  set striped(value) {
    this._striped = value;
    this.bars.forEach(
    /**
    * @param {?} b
    * @return {?}
    */
    b => {
      b.striped = value;
    });
  }
  /**
   * current value of progress bar. Could be a number or array of objects
   * like {"value":15,"type":"info","label":"15 %"}
   * @param {?} value
   * @return {?}
   */
  set value(value) {
    this.isStacked = Array.isArray(value);
    this._value = value;
  }
  /**
   * @return {?}
   */
  get isBs3() {
    return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)();
  }
  /**
   * maximum total value of progress element
   * @return {?}
   */
  get max() {
    return this._max;
  }
  /**
   * @param {?} v
   * @return {?}
   */
  set max(v) {
    this._max = v;
    this.bars.forEach(
    /**
    * @param {?} bar
    * @return {?}
    */
    bar => {
      bar.recalculatePercentage();
    });
  }
  /**
   * @param {?} bar
   * @return {?}
   */
  addBar(bar) {
    bar.animate = this._animate;
    bar.striped = this._striped;
    this.bars.push(bar);
  }
  /**
   * @param {?} bar
   * @return {?}
   */
  removeBar(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
  }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) {
  return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ProgressbarConfig));
};
ProgressbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProgressbarComponent,
  selectors: [["progressbar"]],
  hostVars: 3,
  hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("max", ctx.max);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("progress", ctx.addClass);
    }
  },
  inputs: {
    animate: "animate",
    striped: "striped",
    value: "value",
    max: "max",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [[3, "type", "value", 4, "ngIf"], [3, "ngIf"], [3, "type", "value"], [3, "type", "value", 4, "ngFor", "ngForOf"]],
  template: function ProgressbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProgressbarComponent_bar_0_Template, 2, 2, "bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isStacked);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isStacked);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, BarComponent];
  },
  styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"]
});
/** @nocollapse */
ProgressbarComponent.ctorParameters = () => [{
  type: ProgressbarConfig
}];
ProgressbarComponent.propDecorators = {
  animate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  striped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['attr.max']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  addClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.progress']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressbarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'progressbar',
      template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
      styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: ProgressbarConfig
    }];
  }, {
    addClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.progress']
    }],
    animate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    striped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['attr.max']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: number pipe
// todo: use query from progress?
class BarComponent {
  /**
   * @param {?} el
   * @param {?} progress
   * @param {?} renderer
   */
  constructor(el, progress, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.addClass = true;
    this.percent = 0;
    this.progress = progress;
  }
  /**
   * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
   * @return {?}
   */
  get type() {
    return this._type;
  }
  /**
   * @param {?} v
   * @return {?}
   */
  set type(v) {
    this._type = v;
    this.applyTypeClasses();
  }
  /**
   * current value of progress bar
   * @return {?}
   */
  get value() {
    return this._value;
  }
  /**
   * @param {?} v
   * @return {?}
   */
  set value(v) {
    if (!v && v !== 0) {
      return;
    }
    this._value = v;
    this.recalculatePercentage();
  }
  /**
   * @return {?}
   */
  get setBarWidth() {
    this.recalculatePercentage();
    return this.percent;
  }
  /**
   * @return {?}
   */
  get isBs3() {
    return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)();
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    this.progress.addBar(this);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.progress.removeBar(this);
  }
  /**
   * @return {?}
   */
  recalculatePercentage() {
    this.percent = +(this.value / this.progress.max * 100).toFixed(2);
    /** @type {?} */
    const totalPercentage = this.progress.bars.reduce(
    /**
    * @param {?} total
    * @param {?} bar
    * @return {?}
    */
    function (total, bar) {
      return total + bar.percent;
    }, 0);
    if (totalPercentage > 100) {
      this.percent -= totalPercentage - 100;
    }
  }
  /**
   * @private
   * @return {?}
   */
  applyTypeClasses() {
    if (this._prevType) {
      /** @type {?} */
      const barTypeClass = `progress-bar-${this._prevType}`;
      /** @type {?} */
      const bgClass = `bg-${this._prevType}`;
      this.renderer.removeClass(this.el.nativeElement, barTypeClass);
      this.renderer.removeClass(this.el.nativeElement, bgClass);
      this._prevType = null;
    }
    if (this._type) {
      /** @type {?} */
      const barTypeClass = `progress-bar-${this._type}`;
      /** @type {?} */
      const bgClass = `bg-${this._type}`;
      this.renderer.addClass(this.el.nativeElement, barTypeClass);
      this.renderer.addClass(this.el.nativeElement, bgClass);
      this._prevType = this._type;
    }
  }
}
BarComponent.ɵfac = function BarComponent_Factory(t) {
  return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ProgressbarComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
BarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BarComponent,
  selectors: [["bar"]],
  hostAttrs: ["role", "progressbar", "aria-valuemin", "0"],
  hostVars: 15,
  hostBindings: function BarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", "100", "%")("width", ctx.setBarWidth, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
    }
  },
  inputs: {
    type: "type",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
/** @nocollapse */
BarComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}, {
  type: ProgressbarComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
}];
BarComponent.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  setBarWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['style.width.%']
  }],
  addClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['class.progress-bar']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'bar',
      template: "<ng-content></ng-content>\n",
      host: {
        role: 'progressbar',
        'aria-valuemin': '0',
        '[class.progress-bar-animated]': '!isBs3 && animate',
        '[class.progress-bar-striped]': 'striped',
        '[class.active]': 'isBs3 && animate',
        '[attr.aria-valuenow]': 'value',
        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
        '[attr.aria-valuemax]': 'max',
        '[style.height.%]': '"100"'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: ProgressbarComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    addClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.progress-bar']
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    setBarWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['style.width.%']
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressbarModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: ProgressbarModule,
      providers: [ProgressbarConfig]
    };
  }
}
ProgressbarModule.ɵfac = function ProgressbarModule_Factory(t) {
  return new (t || ProgressbarModule)();
};
ProgressbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProgressbarModule
});
ProgressbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [BarComponent, ProgressbarComponent],
      exports: [BarComponent, ProgressbarComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressbarModule, {
    declarations: function () {
      return [BarComponent, ProgressbarComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [BarComponent, ProgressbarComponent];
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

/***/ 78539:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipConfig": () => (/* binding */ TooltipConfig),
/* harmony export */   "TooltipContainerComponent": () => (/* binding */ TooltipContainerComponent),
/* harmony export */   "TooltipDirective": () => (/* binding */ TooltipDirective),
/* harmony export */   "TooltipModule": () => (/* binding */ TooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/utils */ 49041);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ 11574);
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ 13993);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */



const _c0 = ["*"];
class TooltipConfig {
  constructor() {
    /**
     * sets disable adaptive position
     */
    this.adaptivePosition = true;
    /**
     * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
     */
    this.placement = 'top';
    /**
     * array of event names which triggers tooltip opening
     */
    this.triggers = 'hover focus';
    /**
     * delay before showing the tooltip
     */
    this.delay = 0;
  }
}
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) {
  return new (t || TooltipConfig)();
};
TooltipConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TooltipConfig,
  factory: TooltipConfig.ɵfac
});
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipContainerComponent {
  /**
   * @param {?} config
   */
  constructor(config) {
    Object.assign(this, config);
  }
  /**
   * @return {?}
   */
  get isBs3() {
    return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.isBs3)();
  }
  /**
   * @return {?}
   */
  ngAfterViewInit() {
    this.classMap = {
      in: false,
      fade: false
    };
    this.classMap[this.placement] = true;
    this.classMap[`tooltip-${this.placement}`] = true;
    this.classMap.in = true;
    if (this.animation) {
      this.classMap.fade = true;
    }
    if (this.containerClass) {
      this.classMap[this.containerClass] = true;
    }
  }
}
TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) {
  return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TooltipConfig));
};
TooltipContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TooltipContainerComponent,
  selectors: [["bs-tooltip-container"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 7,
  hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    }
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
  template: function TooltipContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"],
  changeDetection: 0
});
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [{
  type: TooltipConfig
}];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let id = 0;
class TooltipDirective {
  /**
   * @param {?} _viewContainerRef
   * @param {?} cis
   * @param {?} config
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _positionService
   */
  constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    this.tooltipId = id++;
    /**
     * Fired when tooltip content changes
     */
    /* tslint:disable-next-line:no-any */
    this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * Css class for tooltip container
     */
    this.containerClass = '';
    /**
     * @deprecated - removed, will be added to configuration
     */
    this.tooltipAnimation = true;
    /**
     * @deprecated
     */
    this.tooltipFadeDuration = 150;
    /**
     * @deprecated
     */
    this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
      provide: TooltipConfig,
      useValue: config
    });
    Object.assign(this, config);
    this.onShown = this._tooltip.onShown;
    this.onHidden = this._tooltip.onHidden;
  }
  /**
   * Returns whether or not the tooltip is currently being shown
   * @return {?}
   */
  get isOpen() {
    return this._tooltip.isShown;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  /**
   * @deprecated - please use `tooltip` instead
   * @param {?} value
   * @return {?}
   */
  set htmlContent(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipHtml was deprecated, please use `tooltip` instead');
    this.tooltip = value;
  }
  /**
   * @deprecated - please use `placement` instead
   * @param {?} value
   * @return {?}
   */
  set _placement(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipPlacement was deprecated, please use `placement` instead');
    this.placement = value;
  }
  /**
   * @deprecated - please use `isOpen` instead
   * @param {?} value
   * @return {?}
   */
  set _isOpen(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipIsOpen was deprecated, please use `isOpen` instead');
    this.isOpen = value;
  }
  /**
   * @return {?}
   */
  get _isOpen() {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipIsOpen was deprecated, please use `isOpen` instead');
    return this.isOpen;
  }
  /**
   * @deprecated - please use `isDisabled` instead
   * @param {?} value
   * @return {?}
   */
  set _enable(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipEnable was deprecated, please use `isDisabled` instead');
    this.isDisabled = !value;
  }
  /**
   * @return {?}
   */
  get _enable() {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipEnable was deprecated, please use `isDisabled` instead');
    return this.isDisabled;
  }
  /**
   * @deprecated - please use `container="body"` instead
   * @param {?} value
   * @return {?}
   */
  set _appendToBody(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipAppendToBody was deprecated, please use `container="body"` instead');
    this.container = value ? 'body' : this.container;
  }
  /**
   * @return {?}
   */
  get _appendToBody() {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipAppendToBody was deprecated, please use `container="body"` instead');
    return this.container === 'body';
  }
  /**
   * @deprecated - will replaced with customClass
   * @param {?} value
   * @return {?}
   */
  set _popupClass(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipClass deprecated');
  }
  /**
   * @deprecated - removed
   * @param {?} value
   * @return {?}
   */
  set _tooltipContext(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipContext deprecated');
  }
  /**
   * @deprecated
   * @param {?} value
   * @return {?}
   */
  set _tooltipPopupDelay(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipPopupDelay is deprecated, use `delay` instead');
    this.delay = value;
  }
  /**
   * @deprecated -  please use `triggers` instead
   * @return {?}
   */
  get _tooltipTrigger() {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipTrigger was deprecated, please use `triggers` instead');
    return this.triggers;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set _tooltipTrigger(value) {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.warnOnce)('tooltipTrigger was deprecated, please use `triggers` instead');
    this.triggers = (value || '').toString();
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    this._tooltip.listen({
      triggers: this.triggers,
      show:
      /**
      * @return {?}
      */
      () => this.show()
    });
    /* tslint:disable-next-line:no-any */
    this.tooltipChange.subscribe(
    /**
    * @param {?} value
    * @return {?}
    */
    value => {
      if (!value) {
        this._tooltip.hide();
      }
    });
    this.onShown.subscribe(
    /**
    * @return {?}
    */
    () => {
      this.setAriaDescribedBy();
    });
    this.onHidden.subscribe(
    /**
    * @return {?}
    */
    () => {
      this.setAriaDescribedBy();
    });
  }
  /**
   * @return {?}
   */
  setAriaDescribedBy() {
    this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : null;
    if (this._ariaDescribedby) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
    } else {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
    }
  }
  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of
   * the tooltip.
   * @return {?}
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * Opens an element’s tooltip. This is considered a “manual” triggering of
   * the tooltip.
   * @return {?}
   */
  show() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this.adaptivePosition
        },
        preventOverflow: {
          enabled: this.adaptivePosition
        }
      }
    });
    if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
      return;
    }
    /** @type {?} */
    const showTooltip =
    /**
    * @return {?}
    */
    () => {
      if (this._delayTimeoutId) {
        this._delayTimeoutId = undefined;
      }
      this._tooltip.attach(TooltipContainerComponent).to(this.container).position({
        attachment: this.placement
      }).show({
        content: this.tooltip,
        placement: this.placement,
        containerClass: this.containerClass,
        id: `tooltip-${this.tooltipId}`
      });
    };
    /** @type {?} */
    const cancelDelayedTooltipShowing =
    /**
    * @return {?}
    */
    () => {
      if (this._tooltipCancelShowFn) {
        this._tooltipCancelShowFn();
      }
    };
    if (this.delay) {
      if (this._delaySubscription) {
        this._delaySubscription.unsubscribe();
      }
      this._delaySubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(this.delay).subscribe(
      /**
      * @return {?}
      */
      () => {
        showTooltip();
        cancelDelayedTooltipShowing();
      });
      if (this.triggers) {
        (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.parseTriggers)(this.triggers).forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        trigger => {
          this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close,
          /**
          * @return {?}
          */
          () => {
            this._delaySubscription.unsubscribe();
            cancelDelayedTooltipShowing();
          });
        });
      }
    } else {
      showTooltip();
    }
  }
  /**
   * Closes an element’s tooltip. This is considered a “manual” triggering of
   * the tooltip.
   * @return {?}
   */
  hide() {
    if (this._delayTimeoutId) {
      clearTimeout(this._delayTimeoutId);
      this._delayTimeoutId = undefined;
    }
    if (!this._tooltip.isShown) {
      return;
    }
    this._tooltip.instance.classMap.in = false;
    setTimeout(
    /**
    * @return {?}
    */
    () => {
      this._tooltip.hide();
    }, this.tooltipFadeDuration);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._tooltip.dispose();
    this.tooltipChange.unsubscribe();
    if (this._delaySubscription) {
      this._delaySubscription.unsubscribe();
    }
    this.onShown.unsubscribe();
    this.onHidden.unsubscribe();
  }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService));
};
TooltipDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: TooltipDirective,
  selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
  inputs: {
    containerClass: "containerClass",
    tooltipAnimation: "tooltipAnimation",
    tooltipFadeDuration: "tooltipFadeDuration",
    isOpen: "isOpen",
    htmlContent: ["tooltipHtml", "htmlContent"],
    tooltip: "tooltip",
    _placement: ["tooltipPlacement", "_placement"],
    placement: "placement",
    _isOpen: ["tooltipIsOpen", "_isOpen"],
    _enable: ["tooltipEnable", "_enable"],
    isDisabled: "isDisabled",
    _appendToBody: ["tooltipAppendToBody", "_appendToBody"],
    container: "container",
    _popupClass: ["tooltipClass", "_popupClass"],
    _tooltipContext: ["tooltipContext", "_tooltipContext"],
    _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"],
    delay: "delay",
    _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"],
    triggers: "triggers",
    adaptivePosition: "adaptivePosition"
  },
  outputs: {
    tooltipChange: "tooltipChange",
    tooltipStateChanged: "tooltipStateChanged",
    onShown: "onShown",
    onHidden: "onHidden"
  },
  exportAs: ["bs-tooltip"]
});
/** @nocollapse */
TooltipDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
}, {
  type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory
}, {
  type: TooltipConfig
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
}, {
  type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService
}];
TooltipDirective.propDecorators = {
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  tooltip: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  tooltipChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  containerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  delay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  htmlContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipHtml']
  }],
  _placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipPlacement']
  }],
  _isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipIsOpen']
  }],
  _enable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipEnable']
  }],
  _appendToBody: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipAppendToBody']
  }],
  tooltipAnimation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  _popupClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipClass']
  }],
  _tooltipContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipContext']
  }],
  _tooltipPopupDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipPopupDelay']
  }],
  tooltipFadeDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  _tooltipTrigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['tooltipTrigger']
  }],
  tooltipStateChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.OnChange)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [];
  }, null);
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'bs-tooltip-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      host: {
        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
        '[class.show]': '!isBs3',
        '[class.bs3]': 'isBs3',
        '[attr.id]': 'this.id',
        role: 'tooltip'
      },
      template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
      styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: TooltipConfig
    }];
  }, null);
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[tooltip], [tooltipHtml]',
      exportAs: 'bs-tooltip'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
    }, {
      type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory
    }, {
      type: TooltipConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService
    }];
  }, {
    tooltipChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    tooltipAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    tooltipFadeDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    tooltipStateChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    htmlContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipHtml']
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    _placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipPlacement']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    _isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipIsOpen']
    }],
    _enable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipEnable']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    _appendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipAppendToBody']
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    _popupClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipClass']
    }],
    _tooltipContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipContext']
    }],
    _tooltipPopupDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipPopupDelay']
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    _tooltipTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipTrigger']
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    adaptivePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
  /**
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: TooltipModule,
      providers: [TooltipConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService]
    };
  }
}
TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || TooltipModule)();
};
TooltipModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TooltipModule
});
TooltipModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      declarations: [TooltipDirective, TooltipContainerComponent],
      exports: [TooltipDirective],
      entryComponents: [TooltipContainerComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TooltipModule, {
    declarations: function () {
      return [TooltipDirective, TooltipContainerComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule];
    },
    exports: function () {
      return [TooltipDirective];
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

/***/ 142:
/*!*********************************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.css?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 54175:
/*!**********************************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Navbar\n        </div>\n        <div class=\"card-body\">\n          <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n            <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n            <button aria-controls=\"navbarSupportedContent\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" class=\"navbar-toggler\" type=\"button\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n              <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">Link</a>\n                </li>\n                <li class=\"nav-item dropdown\" dropdown>\n                  <a id=\"link-dropdown\" class=\"nav-link dropdown-toggle\" href dropdownToggle (click)=\"false\" aria-controls=\"your-dropdown\">\n                    Dropdown\n                  </a>\n                  <div id=\"your-dropdown\" class=\"dropdown-menu\" aria-labelledby=\"link-dropdown\" *dropdownMenu>\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                </li>\n              </ul>\n              <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n              </form>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_base_base_module_ts.js.map