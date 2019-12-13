(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"header\" color=\"primary\" fxLayoutAlign=\"center center\">\r\n    <h1>Datos del personal ingresado en el primer trimestre 2019 </h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n\r\n\r\n\r\n    <button class=\"title\" mat-button [matMenuTriggerFor]=\"personal\"><h1>Datos\r\n            Clientes</h1></button>\r\n    <mat-menu #personal=\"matMenu\">\r\n        <button mat-menu-item [matMenuTriggerFor]=\"fromAPI\">From API</button>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"inventado\">Inventado</button>\r\n    </mat-menu>\r\n\r\n    <img id=\"hand\" src=\"../assets/hand.svg\" alt=\"up hand\">\r\n\r\n    <mat-menu #fromAPI=\"matMenu\" class=\"matMenuDad\">\r\n        <mat-card *ngFor=\"let person of dataArray; let i= index\">\r\n            <div class=\"dataWrapper\">\r\n                <h4>BookingId:</h4>\r\n                <span>{{person.bookingId}}</span>\r\n            </div>\r\n\r\n            <div class=\"dataWrapper\">\r\n                <h4>Cliente:</h4>\r\n                <span>{{person.locationId.tutenUser.firstName +\" \"+\r\n                    person.locationId.tutenUser.lastName}}</span>\r\n            </div>\r\n\r\n            <div class=\"dataWrapper\">\r\n                <h4>Fecha de Creación:</h4>\r\n                <span>{{person.bookingTime | date}}</span>\r\n            </div>\r\n\r\n            <div class=\"dataWrapper\">\r\n                <h4>Dirección:</h4>\r\n                <span>{{person.locationId.streetAddress}}</span>\r\n            </div>\r\n\r\n            <div class=\"dataWrapper\">\r\n                <h4>Precio:</h4>\r\n                <span>{{person.bookingPrice}}</span>\r\n            </div>\r\n\r\n        </mat-card>\r\n    </mat-menu>\r\n\r\n    <mat-menu #inventado=\"matMenu\">\r\n        <button mat-menu-item>Datos X</button>\r\n    </mat-menu>\r\n\r\n\r\n\r\n    <div class=\"mat-card-wrapper\">\r\n        <ng-container *ngFor=\"let person of\r\n            dataArray\">\r\n            <mat-card class=\"bigCards\" #maty *ngIf=\"person.visible == true\">\r\n                <mat-card-title-group>\r\n\r\n                    <mat-card-subtitle>\r\n                        <span class=\"boldy\">BookingId:</span>\r\n                        <span>\r\n                            {{person.bookingId}}\r\n                        </span>\r\n                        <span class=\"boldy\"> Cliente:</span>\r\n                        <span>\r\n                            {{person.locationId.tutenUser.firstName +\" \"+\r\n                            person.locationId.tutenUser.lastName}}\r\n                        </span>\r\n                        <span class=\"boldy\">Fecha de Creación</span>\r\n                        <span>{{person.bookingTime | date}}</span>\r\n                        <span class=\"boldy\">Dirección</span>\r\n                        <span>{{person.locationId.streetAddress}}</span>\r\n                        <span class=\"boldy\">Precio</span>\r\n                        <span>{{person.bookingPrice}}</span>\r\n                    </mat-card-subtitle>\r\n                </mat-card-title-group>\r\n            </mat-card>\r\n        </ng-container>\r\n    </div>\r\n\r\n    <select class=\"pricePicker\" #slct name=\"\" (change)=\"change(slct)\">\r\n        <option value=\"z\">Seleccionar Precio</option>\r\n        <option value=\"allprices\"> todos los precios</option>\r\n        <option value=\"over\">Precio mayor de 2000</option>\r\n        <option value=\"under\">Precio menor de 2000</option>\r\n    </select>\r\n\r\n\r\n</div>\r\n<mat-toolbar id=\"footer\" color=\"primary\" fxLayoutAlign=\"center center\">\r\n    <p>&copy Reserva de derechos. Tuten</p>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: pls;\n  src: url('PlaylistScript.otf') format(\"opentype\"); }\n\n.title {\n  padding: 10px;\n  font-family: Roboto;\n  -webkit-animation: glow 2s linear infinite alternate;\n          animation: glow 2s linear infinite alternate; }\n\n@-webkit-keyframes glow {\n  0% {\n    background-color: rgba(51, 1, 45, 0.3);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    color: #333; }\n  100% {\n    background-color: rgba(51, 1, 45, 0.7);\n    -webkit-transform: scale(0.997);\n            transform: scale(0.997);\n    color: #fff; } }\n\n@keyframes glow {\n  0% {\n    background-color: rgba(51, 1, 45, 0.3);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    color: #333; }\n  100% {\n    background-color: rgba(51, 1, 45, 0.7);\n    -webkit-transform: scale(0.997);\n            transform: scale(0.997);\n    color: #fff; } }\n\n#header h1 {\n  font-family: pls;\n  font-size: 30px;\n  letter-spacing: 1px; }\n\n.container {\n  margin: 20px;\n  display: flex; }\n\n.container .alphied {\n    background-color: rgba(128, 0, 128, 0.5); }\n\nmat-menu {\n  padding: 8px !important;\n  margin-bottom: 0px !important; }\n\n.mat-card-wrapper {\n  justify-content: center;\n  margin-bottom: 0px !important;\n  margin-top: -60px; }\n\nmat-card {\n  margin: 10px;\n  padding: 15px !important; }\n\nmat-card h4 {\n    display: inline-block;\n    color: #333;\n    margin: 3px !important; }\n\nmat-card span {\n    font-size: 13px; }\n\nmat-card .dataWrapper {\n    margin-bottom: 10px; }\n\nspan {\n  display: block; }\n\n.boldy {\n  font-weight: bold;\n  font-size: 14px !important; }\n\n.boldy + span {\n    margin-bottom: 10px; }\n\n.mat-card-wrapper {\n  display: flex; }\n\nselect {\n  margin: 10px auto;\n  background-color: transparent;\n  padding: 10px;\n  border-radius: 20px;\n  border: 2px groove palevioletred;\n  box-shadow: 2px 5px 8px palevioletred;\n  color: #333; }\n\n#hand {\n  width: 50px;\n  align-self: center;\n  -webkit-animation: fall .6s ease-in infinite alternate;\n          animation: fall .6s ease-in infinite alternate; }\n\n@-webkit-keyframes fall {\n  from {\n    -webkit-transform: translateY(-25px) scale(1);\n            transform: translateY(-25px) scale(1);\n    opacity: 0; }\n  to {\n    -webkit-transform: translateY(13px) scale(0.9);\n            transform: translateY(13px) scale(0.9);\n    opacity: 1; } }\n\n@keyframes fall {\n  from {\n    -webkit-transform: translateY(-25px) scale(1);\n            transform: translateY(-25px) scale(1);\n    opacity: 0; }\n  to {\n    -webkit-transform: translateY(13px) scale(0.9);\n            transform: translateY(13px) scale(0.9);\n    opacity: 1; } }\n\n.bigCards {\n  width: 25%; }\n\n#footer p {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKdWxpb1xcT25lRHJpdmVcXEVzY3JpdG9yaW9cXHByb2dyYW1hY2lvblxcQUxMQ09ERTJcXHR1dGVuVGVzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLGtEQUEyRCxFQUFBOztBQUkvRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIscURBQTRDO1VBQTVDLDZDQUE0QyxFQUMvQzs7QUFFRDtFQUNJO0lBQ0ksdUNBQTZDO0lBQzdDLDRCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsWUFYUSxFQUFBO0VBYVo7SUFDSSx1Q0FBNkM7SUFDN0MsZ0NBQXNCO1lBQXRCLHdCQUFzQjtJQUN0QixZQUFXLEVBQUEsRUFBQTs7QUFUbkI7RUFDSTtJQUNJLHVDQUE2QztJQUM3Qyw0QkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLFlBWFEsRUFBQTtFQWFaO0lBQ0ksdUNBQTZDO0lBQzdDLGdDQUFzQjtZQUF0Qix3QkFBc0I7SUFDdEIsWUFBVyxFQUFBLEVBQUE7O0FBSW5CO0VBRVEsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2Ysb0JBQW1CLEVBQ3RCOztBQUdMO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFJaEI7O0FBTkQ7SUFJUSx5Q0FBcUMsRUFDeEM7O0FBR0w7RUFDSSx3QkFBc0I7RUFDdEIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1oseUJBQXVCLEVBWTFCOztBQWREO0lBSVEsc0JBQXFCO0lBQ3JCLFlBcERRO0lBcURSLHVCQUFxQixFQUN4Qjs7QUFQTDtJQVNRLGdCQUFlLEVBQ2xCOztBQVZMO0lBWVEsb0JBQW1CLEVBQ3RCOztBQUdMO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQiwyQkFBeUIsRUFJNUI7O0FBTkQ7SUFJUSxvQkFBbUIsRUFDdEI7O0FBR0w7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLDhCQUE2QjtFQUM3QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGlDQUFnQztFQUNoQyxzQ0FBcUM7RUFDckMsWUFBVyxFQUNkOztBQUVEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQix1REFBOEM7VUFBOUMsK0NBQThDLEVBQ2pEOztBQUVEO0VBQ0k7SUFDSSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQVUsRUFBQTtFQUVkO0lBQ0ksK0NBQXFDO1lBQXJDLHVDQUFxQztJQUNyQyxXQUFVLEVBQUEsRUFBQTs7QUFQbEI7RUFDSTtJQUNJLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FBVSxFQUFBO0VBRWQ7SUFDSSwrQ0FBcUM7WUFBckMsdUNBQXFDO0lBQ3JDLFdBQVUsRUFBQSxFQUFBOztBQUlsQjtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUVRLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogcGxzO1xyXG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvUGxheWxpc3RTY3JpcHQub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG59XHJcblxyXG4kbWFpbkJsYWNrOiAjMzMzO1xyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBhbmltYXRpb246IGdsb3cgMnMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBnbG93IHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmdiKDUxLCAxLCA0NSksICRhbHBoYTogLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgY29sb3I6ICRtYWluQmxhY2s7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmdiKDUxLCAxLCA0NSksICRhbHBoYTogLjcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk5Nyk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBwbHM7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5hbHBoaWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcHVycGxlLCAkYWxwaGE6IC41KVxyXG4gICAgfVxyXG59XHJcblxyXG5tYXQtbWVudSB7XHJcbiAgICBwYWRkaW5nOiA4cHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC13cmFwcGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbkJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogM3B4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5kYXRhV3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJvbGR5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICtzcGFuIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZ3Jvb3ZlIHBhbGV2aW9sZXRyZWQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDhweCBwYWxldmlvbGV0cmVkO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbiNoYW5kIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiBmYWxsIC42cyBlYXNlLWluIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWxsIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCkgc2NhbGUoMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCkgc2NhbGUoLjkpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iaWdDYXJkcyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(fetchDataService, el, renderer) {
        this.fetchDataService = fetchDataService;
        this.el = el;
        this.renderer = renderer;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.dataArray = this.fetchDataService.getDataArray();
        this.renderer.setStyle(this.slct.nativeElement, 'width', 'fit-content'); // Es mejor modificar atributos CSS desde la hoja de estilo, Esto es sólo para fines demostrativos del manejo del DOM en el contexto del modelo :)
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
            targets: 'mat-card',
            scale: [
                { value: .1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 1200 }
            ],
            rotateZ: animejs__WEBPACK_IMPORTED_MODULE_3__["default"].stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
            delay: animejs__WEBPACK_IMPORTED_MODULE_3__["default"].stagger(200, { grid: [14, 5], from: 'center' }),
            direction: 'alternate'
        });
    };
    AppComponent.prototype.change = function (x) {
        if (x.value === 'over') {
            for (var index = 0; index < this.dataArray.length; index++) {
                this.dataArray[index].bookingPrice > 20000 ? this.dataArray[index].visible = true : this.dataArray[index].visible = false;
            }
        }
        else if (x.value === 'under') {
            for (var index = 0; index < this.dataArray.length; index++) {
                this.dataArray[index].bookingPrice < 20000 ? this.dataArray[index].visible = true : this.dataArray[index].visible = false;
            }
        }
        else {
            for (var index = 0; index < this.dataArray.length; index++) {
                this.dataArray[index].visible = true;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slct'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "slct", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_2__["FetchDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            ],
            providers: [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_12__["FetchDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/fetch-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/fetch-data.service.ts ***!
  \************************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_personal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/personal */ "./src/app/shared/personal.ts");



var FetchDataService = /** @class */ (function () {
    function FetchDataService() {
    }
    FetchDataService.prototype.getDataArray = function () {
        return _shared_personal__WEBPACK_IMPORTED_MODULE_2__["dataArray"];
    };
    FetchDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FetchDataService);
    return FetchDataService;
}());



/***/ }),

/***/ "./src/app/shared/personal.ts":
/*!************************************!*\
  !*** ./src/app/shared/personal.ts ***!
  \************************************/
/*! exports provided: dataArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataArray", function() { return dataArray; });
var dataArray = [
    {
        'visible': true,
        'bookingFields': '{"extras":[{"id":1,"description":"Refrigerador","imageUri":"img/icon-refrigerador.png","time":"0.5","checked":false},{"id":2,"description":"Horno","imageUri":"img/icon-horno.png","time":"0.5","checked":false},{"id":3,"description":"Lavado Ropa","imageUri":"img/icon-lavado.png","time":"0.5","checked":false},{"id":4,"description":"Secado Ropa","imageUri":"img/icon-secado.png","time":"1","checked":false},{"id":5,"description":"Planchado","imageUri":"img/icon-plancha.png","time":"1","checked":false},{"id":6,"description":"Interior Vidrios","imageUri":"img/icon-vidrios.png","time":"1.5","checked":true}],"pets":false,"selectedRooms":4,"selectedBathrooms":3,"isCarpeted":true,"location":{"streetAddress":"Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile","locationId":1259,"city":"Santiago","commune":"La Reina","apartmentNumber":"Casa C"},"frecuency":4,"date":"12-07-2016","time":"08:00","paymentType":{},"selectedLamps":2,"selectedBulbs":0,"selectedExtractors":1,"selectedHoods":0,"stairRequired":"No","selectedPlugs":2,"selectedSwitches":0,"selectedTvs":1,"concreteWall":true,"willProvideSupport":false,"tvSizeGreaterThan42":false,"willProvideHelp":false,"bookingRole":"PRO_CLEAN_HOUSE","buildSelector":"dpto","buildType":"tipo_2","backyardClean":false,"elementSize":"medium","workType":"Instalación","taps":1,"tubs":1,"wcs":1,"toiletOpen":true,"disherOpen":false,"handwasherOpen":false,"sewerageOpen":false,"waterLine":false,"gasLine":true,"thermos":1,"stoves":1,"washers":1,"haveTaps":false,"needDrain":false,"bathTaps":0,"smallFrames":0,"largeFrames":0,"locks":1,"cylinders":0,"haveMaterials":false,"tapsRemove":true,"bathTapsRemove":false,"tubsRemove":true,"wcsRemove":true,"recurrency":1,"holidays":false,"gasEnergyType":"natural","thermosOutputType":"forzado","bookingAddHours":0.0,"replaceSameThermo":false,"cupon":"","ironHours":2.0,"curtains":5,"haveCylinders":false,"removeLocks":false}',
        'bookingChecklistData': null,
        'bookingDurationTime': 6.5,
        'recurrentWeeks': null,
        'tutenUserProfessionalRole': {
            'userRole': 'PRO_CLEAN_HOUSE',
            'description': 'limpieza de hogar',
            'fatherUserRole': 'PRO',
            'domain': 'tuten',
            'estatus': null,
            'defaultNamespace': null,
            'id': 10
        },
        'bookingStatusTime': 1468380006228,
        'bookingCreatedTime': 1467774270402,
        'tutenUserProfessional': {
            'weekAvailability': '{}',
            'hourAvailability': '{}',
            'serviceData': '[{"id":1,"name":"Limpieza de casa","checked":true},{"id":2,"name":"Limpieza de oficina","checked":true},{"id":3,"name":"Limpieza de alfombras","checked":false},{"id":4,"name":"Lámparas","checked":false},{"id":5,"name":"Extractores y campanas","checked":false},{"id":6,"name":"Enchufes e interruptores","checked":false},{"id":7,"name":"Trabajo a la medida","checked":false},{"id":8,"name":"Montaje de TV","checked":false},{"id":9,"name":"Instalación de cuadros","checked":false},{"id":10,"name":"Armado de muebles","checked":false},{"id":11,"name":"Mudanza","checked":false},{"id":12,"name":"Cerrajería","checked":false},{"id":13,"name":"Trabajo a la medida","checked":false},{"id":14,"name":"Calefont y Cocinas","checked":false},{"id":15,"name":"Grifería","checked":false},{"id":16,"name":"WC","checked":false},{"id":17,"name":"Lavadoras","checked":false},{"id":18,"name":"Trabajo a la medida","checked":false},{"id":19,"name":"Pintura interior","checked":false},{"id":20,"name":"Limpieza de carrete","checked":true}]',
            'referrers': '{"0":{"name":"Maria hernandez","phone":"74265282"},"1":{"name":"Corina Diaz","phone":"88449846"}}',
            'whyTuten': '[]',
            'tutenRoleList': [
                {
                    'userRole': 'PRO_CLEAN_HOUSE',
                    'description': 'limpieza de hogar',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 10
                },
                {
                    'userRole': 'PRO_CLEAN_IRON',
                    'description': 'planchado',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 11
                },
                {
                    'userRole': 'PRO_CLEAN_OFFICE',
                    'description': 'limpieza de oficina',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 12
                },
                {
                    'userRole': 'PRO_CLEAN_PARTY',
                    'description': 'limpieza carrete',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 13
                }
            ],
            'active': -1,
            'tutenUser': 'vanesa.saldivia_25@gmail.com',
            'legallyElegibleToWork': false,
            'paidYearsExperience': 6,
            'experience': false,
            'willingToBackgroundCheck': false,
            'declaredCommitedCrime': false,
            'referred': null,
            'workExperience': ' ',
            'shirtSize': ' ',
            'maxHoursPerWeek': 0,
            'workPetsAround': false,
            'training': ' ',
            'applicationStep': 1,
            'score': 4.583333333333333,
            'applyDate': 1460061739310,
            'birthdate': 1460061739310,
            'transportation': ' ',
            'smartphone': 'Android',
            'bankAccount': false,
            'referredBy': '""',
            'apartmentNumber': '112',
            'city': 'Santiago',
            'country': ' ',
            'rut': '17637585K',
            'skills': ' ',
            'state': 'Providencia',
            'streetAddress': 'Av. Francisco Bilbao 3615, Providencia, Providencia, Región Metropolitana, Chile',
            'zipcode': ' ',
            'comments': 'Se desactiva por no trabajar durante 60 días en Tuten.',
            'gender': ' ',
            'tutenUser1': {
                'serviceData': null,
                'userAvailability': '{"monday":{"morning":true,"afternoon":true,"night":true},"tuesday":{"morning":true,"afternoon":true,"night":true},"wednesday":{"morning":true,"afternoon":true,"night":true},"thursday":{"morning":true,"afternoon":true,"night":true},"friday":{"morning":true,"afternoon":true,"night":true},"saturday":{"morning":true,"afternoon":true,"night":true},"sunday":{"morning":true,"afternoon":true,"night":true}}',
                'sessionTokenBck': null,
                'firstName': 'Vanesa',
                'lastName': 'Saldivia  Diaz',
                'email': 'vanesa.saldivia_25@gmail.com',
                'active': false,
                'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                'sessionTokenWeb': null,
                'phoneNumber': '52462576',
                'agreedToTermsOfUse': true,
                'whereKnownUs': 'TV',
                'lastLogin': 1480695219615,
                'sessionTokenCli': null,
                'sessionTokenPro': '4n7sap0s5hmku3574uphcgujco',
                'funds': null,
                'tokenFacebook': null,
                'tokenGoogle': null,
                'tokensIonic': 'dkOn_cnZenk:APA91bEHNjDq5zsB7y5XtDUI7IJixogX3G2vTlglGY1kOb4tPMKmr3su-LOsagduNKLcjcK9ff4CH8-yObC-AZZ2EtXky5Wsv-hdOUoimPYEG0L635nEPc9wA8IOzpeqDIswFcKnDlJR',
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'PRO',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 3
                },
                'sync': 10807,
                'usedCodeList': '',
                'referrer': 'VANESA4264',
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 8105,
                'appVersion': null,
                'estatus': null
            },
            'bank': 'BANCO DEL ESTADO DE CHILE',
            'bankCode': '0012',
            'bankAccountNumber': '17637585',
            'bankAccountType': 'Rut',
            'hasTraining': true,
            'wonderlic': null,
            'workCommunes': null,
            'latitude': -33.4332893,
            'longitude': -70.586141,
            'region': null,
            'locationW': null,
            'locationS': null,
            'materialsProvided': null,
            'lastLocation': null,
            'inactivityWarning': false,
            'inactivityWarningDate': null,
            'intermediary': null,
            'bankRut': '0970300007',
            'company': null,
            'companyRut': null,
            'companyPhone': null,
            'commercialBusiness': null
        },
        'bookingTime': 1468310400000,
        'bookingId': 1179,
        'bookingState': 3,
        'bookingPrice': 23286,
        'locationId': {
            'streetAddress': 'Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile',
            'apartmentNumber': 'Casa C',
            'country': 'Chile',
            'city': 'Santiago',
            'state': null,
            'zipCode': null,
            'locationId': 1259,
            'commune': 'La Reina',
            'region': 'RM',
            'county': null,
            'active': true,
            'tutenUser': {
                'serviceData': '{}',
                'userAvailability': null,
                'sessionTokenBck': null,
                'firstName': 'Jimena',
                'lastName': 'Balic',
                'email': 'jimena.balic@gmail.com',
                'active': true,
                'passwordHash': null,
                'sessionTokenWeb': null,
                'phoneNumber': '98157427',
                'agreedToTermsOfUse': false,
                'whereKnownUs': null,
                'lastLogin': 1510482315176,
                'sessionTokenCli': 'mp8u4mvudc95ju535ssjebbf5k',
                'sessionTokenPro': null,
                'funds': 0,
                'tokenFacebook': null,
                'tokenGoogle': null,
                'tokensIonic': '06795e1838fa7cdffededfeebe3b829ccb61602791d4776e13238b6cf8c71a9b',
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'CUSTOMER',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 2
                },
                'sync': 0,
                'usedCodeList': '',
                'referrer': 'JIMENA5129',
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 1125,
                'appVersion': null,
                'estatus': null
            },
            'latitude': -33.4391423,
            'longitude': -70.524264
        },
        'paymentId': {
            'paymentPaypalCardToken': null,
            'paymentName': 'WebPay Oneclick - MasterCard **** 4299',
            'paymentType': '3',
            'paymentState': null,
            'paymentId': 7094,
            'paymentData': '{"authCode":"778565","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"tbkUser":"85304c29-3708-4b33-ae45-cd22cd030579"}',
            'active': true
        },
        'tutenUserClient': {
            'serviceData': '{}',
            'userAvailability': null,
            'sessionTokenBck': null,
            'firstName': 'Juan',
            'lastName': 'Perez',
            'email': 'contacto@tuten.cl',
            'active': true,
            'passwordHash': null,
            'sessionTokenWeb': null,
            'phoneNumber': '25677864',
            'agreedToTermsOfUse': false,
            'whereKnownUs': null,
            'lastLogin': 1470165129772,
            'sessionTokenCli': '84o8i4o2d8kanmblsm1scouf8b',
            'sessionTokenPro': null,
            'funds': 0,
            'tokenFacebook': null,
            'tokenGoogle': null,
            'tokensIonic': null,
            'photoPath': null,
            'photoExt': null,
            'userRole': {
                'userRole': 'PRO',
                'description': '',
                'fatherUserRole': null,
                'domain': 'tuten',
                'estatus': null,
                'defaultNamespace': null,
                'id': 3
            },
            'sync': 0,
            'usedCodeList': '',
            'referrer': 'JUAN5990',
            'rut': null,
            'domain': 'tuten',
            'typeProfessional': 'externo',
            'tutenSubRole': null,
            'userId': 6123,
            'appVersion': null,
            'estatus': null
        },
        'score': 5,
        'details': 'No hay comentarios extra',
        'comments': null,
        'commentsPro': null,
        'commentsClient': null,
        'cost': 17056,
        'paid': 23286,
        'professionalPrice': 15556,
        'professionalBonus': 1500,
        'bookingInitiateTime': 1468325789188,
        'bookingFinishTime': 1468380006239,
        'stateExtraData': null,
        'proPaid': null,
        'formPaid': null,
        'to': null,
        'paymentResult': '{"buyOrder":"20160706030430403","payOutput":{"authorizationCode":"745275","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"transactionId":472989952}}',
        'recurrency': {
            'recurrencyId': 45,
            'description': 'Una vez a la semana - 10% Desc.',
            'discount': 0.1,
            'holidays': false,
            'frecuencyPerWeek': 1,
            'active': false,
            'sellerId': null,
            'repeatWeeklyMonday': null,
            'repeatWeeklyTuesday': null,
            'repeatWeeklyWednesday': null,
            'repeatWeeklyThursday': null,
            'repeatWeeklyFriday': null
        },
        'parentBooking': {
            'bookingFields': '{"extras":[{"id":1,"description":"Refrigerador","imageUri":"img/icon-refrigerador.png","time":"0.5","checked":false},{"id":2,"description":"Horno","imageUri":"img/icon-horno.png","time":"0.5","checked":false},{"id":3,"description":"Lavado Ropa","imageUri":"img/icon-lavado.png","time":"0.5","checked":false},{"id":4,"description":"Secado Ropa","imageUri":"img/icon-secado.png","time":"1","checked":false},{"id":5,"description":"Planchado","imageUri":"img/icon-plancha.png","time":"1","checked":false},{"id":6,"description":"Interior Vidrios","imageUri":"img/icon-vidrios.png","time":"1.5","checked":true}],"pets":false,"selectedRooms":4,"selectedBathrooms":3,"isCarpeted":true,"location":{"streetAddress":"Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile","locationId":1259,"city":"Santiago","commune":"La Reina","apartmentNumber":"Casa C"},"frecuency":4,"date":"05-07-2016","time":"08:00","paymentType":{},"selectedLamps":2,"selectedBulbs":0,"selectedExtractors":1,"selectedHoods":0,"stairRequired":"No","selectedPlugs":2,"selectedSwitches":0,"selectedTvs":1,"concreteWall":true,"willProvideSupport":false,"tvSizeGreaterThan42":false,"willProvideHelp":false,"bookingRole":"PRO_CLEAN_HOUSE","buildSelector":"dpto","buildType":"tipo_2","backyardClean":false,"elementSize":"medium","workType":"Instalación","taps":1,"tubs":1,"wcs":1,"toiletOpen":true,"disherOpen":false,"handwasherOpen":false,"sewerageOpen":false,"waterLine":false,"gasLine":true,"thermos":1,"stoves":1,"washers":1,"haveTaps":false,"needDrain":false,"bathTaps":0,"smallFrames":0,"largeFrames":0,"locks":1,"cylinders":0,"haveMaterials":false,"tapsRemove":true,"bathTapsRemove":false,"tubsRemove":true,"wcsRemove":true,"recurrency":1,"holidays":false,"gasEnergyType":"natural","thermosOutputType":"forzado","bookingAddHours":0.0,"replaceSameThermo":false,"cupon":"","ironHours":2.0,"curtains":5,"haveCylinders":false,"removeLocks":false}',
            'bookingChecklistData': null,
            'bookingDurationTime': 6.5,
            'recurrentWeeks': null,
            'tutenUserProfessionalRole': {
                'userRole': 'PRO_CLEAN_HOUSE',
                'description': 'limpieza de hogar',
                'fatherUserRole': 'PRO',
                'domain': 'tuten',
                'estatus': null,
                'defaultNamespace': null,
                'id': 10
            },
            'bookingStatusTime': 1467774268103,
            'bookingCreatedTime': 1467230910324,
            'tutenUserProfessional': {
                'weekAvailability': '{}',
                'hourAvailability': '{}',
                'serviceData': '[{"id":1,"name":"Limpieza de casa","checked":true},{"id":2,"name":"Limpieza de oficina","checked":true},{"id":3,"name":"Limpieza de alfombras","checked":true},{"id":4,"name":"Lámparas","checked":false},{"id":5,"name":"Extractores y campanas","checked":false},{"id":6,"name":"Enchufes e interruptores","checked":false},{"id":7,"name":"Trabajo a la medida","checked":false},{"id":8,"name":"Montaje de TV","checked":false},{"id":9,"name":"Instalación de cuadros","checked":false},{"id":10,"name":"Armado de muebles","checked":false},{"id":11,"name":"Mudanza","checked":false},{"id":12,"name":"Cerrajería","checked":false},{"id":13,"name":"Trabajo a la medida","checked":false},{"id":14,"name":"Calefont y Cocinas","checked":false},{"id":15,"name":"Grifería","checked":false},{"id":16,"name":"WC","checked":false},{"id":17,"name":"Lavadoras","checked":false},{"id":18,"name":"Trabajo a la medida","checked":false},{"id":19,"name":"Pintura interior","checked":false},{"id":20,"name":"Limpieza de carrete","checked":true}]',
                'referrers': '{}',
                'whyTuten': '[]',
                'tutenRoleList': [
                    {
                        'userRole': 'PRO_CLEAN_CARPET',
                        'description': 'limpieza de alfombra',
                        'fatherUserRole': 'PRO',
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 7
                    },
                    {
                        'userRole': 'PRO_CLEAN_HOUSE',
                        'description': 'limpieza de hogar',
                        'fatherUserRole': 'PRO',
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 10
                    },
                    {
                        'userRole': 'PRO_CLEAN_OFFICE',
                        'description': 'limpieza de oficina',
                        'fatherUserRole': 'PRO',
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 12
                    },
                    {
                        'userRole': 'PRO_CLEAN_PARTY',
                        'description': 'limpieza carrete',
                        'fatherUserRole': 'PRO',
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 13
                    }
                ],
                'active': -1,
                'tutenUser': 'mariagonzake43@gmail.com',
                'legallyElegibleToWork': false,
                'paidYearsExperience': 0,
                'experience': false,
                'willingToBackgroundCheck': false,
                'declaredCommitedCrime': false,
                'referred': null,
                'workExperience': ' ',
                'shirtSize': ' ',
                'maxHoursPerWeek': 0,
                'workPetsAround': false,
                'training': ' ',
                'applicationStep': 1,
                'score': 4.769230769230769,
                'applyDate': 1467210865713,
                'birthdate': 1467210865713,
                'transportation': ' ',
                'smartphone': ' ',
                'bankAccount': false,
                'referredBy': '""',
                'apartmentNumber': ' ',
                'city': 'Santiago',
                'country': ' ',
                'rut': '100295792',
                'skills': ' ',
                'state': 'Maipú',
                'streetAddress': ' ',
                'zipcode': ' ',
                'comments': 'Cta. Rut.\n\nSe desactiva por no trabajar durante 60 días en Tuten.',
                'gender': ' ',
                'tutenUser1': {
                    'serviceData': null,
                    'userAvailability': '{"monday":{"morning":true,"afternoon":true,"night":true},"tuesday":{"morning":true,"afternoon":true,"night":true},"wednesday":{"morning":true,"afternoon":true,"night":true},"thursday":{"morning":true,"afternoon":true,"night":true},"friday":{"morning":true,"afternoon":true,"night":true},"saturday":{"morning":true,"afternoon":true,"night":true},"sunday":{"morning":true,"afternoon":true,"night":true}}',
                    'sessionTokenBck': null,
                    'firstName': 'Maria Isabel',
                    'lastName': 'Gonzalez Troncoso',
                    'email': 'mariagonzake43@gmail.com',
                    'active': false,
                    'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                    'sessionTokenWeb': 'mariagonzake43@gmail.comi2bkfkdkluuelb5m8es8rp067r',
                    'phoneNumber': '997537188',
                    'agreedToTermsOfUse': true,
                    'whereKnownUs': ' ',
                    'lastLogin': 1470685402687,
                    'sessionTokenCli': null,
                    'sessionTokenPro': 'mariagonzake43@gmail.comi2bkfkdkluuelb5m8es8rp067r',
                    'funds': null,
                    'tokenFacebook': null,
                    'tokenGoogle': null,
                    'tokensIonic': 'f_keyABnti0:APA91bG1duH8n5XLVWsJjbD6FBYw5DEdDUTDG5Z86EBfWgomDsAcxr5TAIwztP7lxRzWstcQsWR-ie-f4fh6cjFxPdhbUhkdgSRX09J25rD9Gj3JrFHYgAVdg3wbYZZhL28s76FvDvyZ',
                    'photoPath': null,
                    'photoExt': null,
                    'userRole': {
                        'userRole': 'PRO',
                        'description': '',
                        'fatherUserRole': null,
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 3
                    },
                    'sync': 110,
                    'usedCodeList': '',
                    'referrer': 'MARIA ISABEL5373',
                    'rut': null,
                    'domain': 'tuten',
                    'typeProfessional': 'externo',
                    'tutenSubRole': null,
                    'userId': 6370,
                    'appVersion': null,
                    'estatus': null
                },
                'bank': 'BANCO DEL ESTADO DE CHILE',
                'bankCode': '0012',
                'bankAccountNumber': '10029579',
                'bankAccountType': 'Rut',
                'hasTraining': true,
                'wonderlic': null,
                'workCommunes': null,
                'latitude': null,
                'longitude': null,
                'region': 'Región Metropolitana de Santiago',
                'locationW': null,
                'locationS': null,
                'materialsProvided': null,
                'lastLocation': null,
                'inactivityWarning': true,
                'inactivityWarningDate': 1475712000000,
                'intermediary': null,
                'bankRut': '0970300007',
                'company': null,
                'companyRut': null,
                'companyPhone': null,
                'commercialBusiness': null
            },
            'bookingTime': 1467705600000,
            'bookingId': 1115,
            'bookingState': 3,
            'bookingPrice': 23286,
            'locationId': {
                'streetAddress': 'Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile',
                'apartmentNumber': 'Casa C',
                'country': 'Chile',
                'city': 'Santiago',
                'state': null,
                'zipCode': null,
                'locationId': 1259,
                'commune': 'La Reina',
                'region': 'RM',
                'county': null,
                'active': true,
                'tutenUser': {
                    'serviceData': '{}',
                    'userAvailability': null,
                    'sessionTokenBck': null,
                    'firstName': 'Jimena',
                    'lastName': 'Balic',
                    'email': 'jimena.balic@gmail.com',
                    'active': true,
                    'passwordHash': null,
                    'sessionTokenWeb': null,
                    'phoneNumber': '98157427',
                    'agreedToTermsOfUse': false,
                    'whereKnownUs': null,
                    'lastLogin': 1510482315176,
                    'sessionTokenCli': 'mp8u4mvudc95ju535ssjebbf5k',
                    'sessionTokenPro': null,
                    'funds': 0,
                    'tokenFacebook': null,
                    'tokenGoogle': null,
                    'tokensIonic': '06795e1838fa7cdffededfeebe3b829ccb61602791d4776e13238b6cf8c71a9b',
                    'photoPath': null,
                    'photoExt': null,
                    'userRole': {
                        'userRole': 'CUSTOMER',
                        'description': '',
                        'fatherUserRole': null,
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 2
                    },
                    'sync': 0,
                    'usedCodeList': '',
                    'referrer': 'JIMENA5129',
                    'rut': null,
                    'domain': 'tuten',
                    'typeProfessional': 'externo',
                    'tutenSubRole': null,
                    'userId': 1125,
                    'appVersion': null,
                    'estatus': null
                },
                'latitude': -33.4391423,
                'longitude': -70.524264
            },
            'paymentId': {
                'paymentPaypalCardToken': null,
                'paymentName': 'WebPay Oneclick - MasterCard **** 4299',
                'paymentType': '3',
                'paymentState': null,
                'paymentId': 7094,
                'paymentData': '{"authCode":"778565","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"tbkUser":"85304c29-3708-4b33-ae45-cd22cd030579"}',
                'active': true
            },
            'tutenUserClient': {
                'serviceData': null,
                'userAvailability': null,
                'sessionTokenBck': 'contacto@tutem.clq9c9c4asemo7vcu89u9o7lv2ot',
                'firstName': 'admin',
                'lastName': 'de lectura',
                'email': 'contacto@tutem.cl',
                'active': true,
                'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                'sessionTokenWeb': 'contacto@tutem.clq9c9c4asemo7vcu89u9o7lv2ot',
                'phoneNumber': null,
                'agreedToTermsOfUse': false,
                'whereKnownUs': null,
                'lastLogin': 1558043066461,
                'sessionTokenCli': 'contacto@tutem.clm5pcfvvv7jsn3an0roop07qg8f',
                'sessionTokenPro': 'contacto@tutem.cl9sl50d964367gt8p320vavhgdq',
                'funds': 0,
                'tokenFacebook': null,
                'tokenGoogle': null,
                'tokensIonic': null,
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'PRO',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 3
                },
                'sync': 0,
                'usedCodeList': '',
                'referrer': null,
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 17564,
                'appVersion': 'OLD',
                'estatus': null
            },
            'score': 3,
            'details': 'No hay comentarios extra',
            'comments': null,
            'commentsPro': null,
            'commentsClient': null,
            'cost': 15556,
            'paid': 23286,
            'professionalPrice': 15556,
            'professionalBonus': 0,
            'bookingInitiateTime': 1467726349974,
            'bookingFinishTime': 1467774268105,
            'stateExtraData': null,
            'proPaid': null,
            'formPaid': null,
            'to': null,
            'paymentResult': '{"buyOrder":"20160629200830325","payOutput":{"authorizationCode":"405206","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"transactionId":468502334}}',
            'recurrency': {
                'recurrencyId': 45,
                'description': 'Una vez a la semana - 10% Desc.',
                'discount': 0.1,
                'holidays': false,
                'frecuencyPerWeek': 1,
                'active': false,
                'sellerId': null,
                'repeatWeeklyMonday': null,
                'repeatWeeklyTuesday': null,
                'repeatWeeklyWednesday': null,
                'repeatWeeklyThursday': null,
                'repeatWeeklyFriday': null
            },
            'parentBooking': {
                'bookingFields': '{"extras":[{"id":1,"description":"Refrigerador","imageUri":"img/icon-refrigerador.png","time":"0.5","checked":false},{"id":2,"description":"Horno","imageUri":"img/icon-horno.png","time":"0.5","checked":false},{"id":3,"description":"Lavado Ropa","imageUri":"img/icon-lavado.png","time":"0.5","checked":false},{"id":4,"description":"Secado Ropa","imageUri":"img/icon-secado.png","time":"1","checked":false},{"id":5,"description":"Planchado","imageUri":"img/icon-plancha.png","time":"1","checked":false},{"id":6,"description":"Interior Vidrios","imageUri":"img/icon-vidrios.png","time":"1.5","checked":true}],"pets":false,"selectedRooms":4,"selectedBathrooms":3,"isCarpeted":true,"location":{"streetAddress":"Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile","locationId":1259,"city":"Santiago","commune":"La Reina","apartmentNumber":"Casa C"},"frecuency":4,"date":"28-06-2016","time":"08:00","paymentType":{},"selectedLamps":2,"selectedBulbs":0,"selectedExtractors":1,"selectedHoods":0,"stairRequired":"No","selectedPlugs":2,"selectedSwitches":0,"selectedTvs":1,"concreteWall":true,"willProvideSupport":false,"tvSizeGreaterThan42":false,"willProvideHelp":false,"bookingRole":"PRO_CLEAN_HOUSE","buildSelector":"dpto","buildType":"tipo_2","backyardClean":false,"elementSize":"medium","workType":"Instalación","taps":1,"tubs":1,"wcs":1,"toiletOpen":true,"disherOpen":false,"handwasherOpen":false,"sewerageOpen":false,"waterLine":false,"gasLine":true,"thermos":1,"stoves":1,"washers":1,"haveTaps":false,"needDrain":false,"bathTaps":0,"smallFrames":0,"largeFrames":0,"locks":1,"cylinders":0,"haveMaterials":false,"tapsRemove":true,"bathTapsRemove":false,"tubsRemove":true,"wcsRemove":true,"recurrency":1,"holidays":false,"gasEnergyType":"natural","thermosOutputType":"forzado","bookingAddHours":0.0,"replaceSameThermo":false,"cupon":"","ironHours":2.0,"curtains":5,"haveCylinders":false,"removeLocks":false}',
                'bookingChecklistData': '{"rooms":[{"number":1,"checked":false,"$$hashKey":"object:42"},{"number":2,"checked":false,"$$hashKey":"object:43"},{"number":3,"checked":true,"$$hashKey":"object:44","date":"22:03"},{"number":4,"checked":false,"$$hashKey":"object:45"}],"bathrooms":[{"number":1,"checked":false,"$$hashKey":"object:50"},{"number":2,"checked":false,"$$hashKey":"object:51"},{"number":3,"checked":true,"$$hashKey":"object:52","date":"22:03"}],"extras":[{"id":6,"description":"Interior Vidrios","checked":true,"time":"1.5","imageUri":"img/icon-vidrios.png","$$hashKey":"object:40","date":"22:04"}],"livingRoom":[{"checked":true,"number":1,"$$hashKey":"object:57","date":"22:03"}],"kitchen":[{"checked":false,"number":1,"$$hashKey":"object:59"}],"diningRoom":[{"checked":true,"number":1,"$$hashKey":"object:61","date":"22:03"}],"logia":[{"checked":true,"number":1,"$$hashKey":"object:63","date":"22:04"}]}',
                'bookingDurationTime': 6.5,
                'recurrentWeeks': null,
                'tutenUserProfessionalRole': {
                    'userRole': 'PRO_CLEAN_HOUSE',
                    'description': 'limpieza de hogar',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 10
                },
                'bookingStatusTime': 1467230899906,
                'bookingCreatedTime': 1466534880456,
                'tutenUserProfessional': {
                    'weekAvailability': '{}',
                    'hourAvailability': '{}',
                    'serviceData': '[{"id":1,"name":"Limpieza de casa","checked":true},{"id":2,"name":"Limpieza de oficina","checked":true},{"id":3,"name":"Limpieza de alfombras","checked":true},{"id":4,"name":"Lámparas","checked":false},{"id":5,"name":"Extractores y campanas","checked":false},{"id":6,"name":"Enchufes e interruptores","checked":false},{"id":7,"name":"Trabajo a la medida","checked":false},{"id":8,"name":"Montaje de TV","checked":false},{"id":9,"name":"Instalación de cuadros","checked":false},{"id":10,"name":"Armado de muebles","checked":false},{"id":11,"name":"Mudanza","checked":false},{"id":12,"name":"Cerrajería","checked":false},{"id":13,"name":"Trabajo a la medida","checked":false},{"id":14,"name":"Desagues","checked":false},{"id":15,"name":"Grifería","checked":false},{"id":16,"name":"WC","checked":false},{"id":17,"name":"Sifones","checked":false},{"id":18,"name":"Trabajo a la medida","checked":false},{"id":19,"name":"Pintura interior","checked":false}]',
                    'referrers': '{"0":{"name":"Blanca","phone":"84520045"},"1":{"name":"Paulina","phone":"82477731"}}',
                    'whyTuten': '[]',
                    'tutenRoleList': [
                        {
                            'userRole': 'PRO_CLEAN_HOUSE',
                            'description': 'limpieza de hogar',
                            'fatherUserRole': 'PRO',
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 10
                        },
                        {
                            'userRole': 'PRO_CLEAN_IRON',
                            'description': 'planchado',
                            'fatherUserRole': 'PRO',
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 11
                        },
                        {
                            'userRole': 'PRO_CLEAN_OFFICE',
                            'description': 'limpieza de oficina',
                            'fatherUserRole': 'PRO',
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 12
                        },
                        {
                            'userRole': 'PRO_CLEAN_PARTY',
                            'description': 'limpieza carrete',
                            'fatherUserRole': 'PRO',
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 13
                        }
                    ],
                    'active': 1,
                    'tutenUser': 'edithgiovana13@gmail.com',
                    'legallyElegibleToWork': false,
                    'paidYearsExperience': 15,
                    'experience': false,
                    'willingToBackgroundCheck': false,
                    'declaredCommitedCrime': false,
                    'referred': null,
                    'workExperience': ' ',
                    'shirtSize': ' ',
                    'maxHoursPerWeek': 0,
                    'workPetsAround': false,
                    'training': ' ',
                    'applicationStep': 1,
                    'score': 2.241758241758242,
                    'applyDate': 1446220603486,
                    'birthdate': 1446249600000,
                    'transportation': ' ',
                    'smartphone': 'Android',
                    'bankAccount': false,
                    'referredBy': '""',
                    'apartmentNumber': ' ',
                    'city': 'Santiago',
                    'country': ' ',
                    'rut': '215623076',
                    'skills': ' ',
                    'state': 'Santiago Centro',
                    'streetAddress': 'Gral Gana 679, Santiago, Región Metropolitana, Chile',
                    'zipcode': ' ',
                    'comments': 'CuentaRut',
                    'gender': ' ',
                    'tutenUser1': {
                        'serviceData': null,
                        'userAvailability': '{"monday":{"morning":true,"afternoon":true,"night":true},"tuesday":{"morning":true,"afternoon":true,"night":true},"wednesday":{"morning":true,"afternoon":true,"night":true},"thursday":{"morning":true,"afternoon":true,"night":true},"friday":{"morning":true,"afternoon":true,"night":true},"saturday":{"morning":false,"afternoon":false,"night":false},"sunday":{"morning":false,"afternoon":false,"night":false}}',
                        'sessionTokenBck': null,
                        'firstName': 'Edith Giovana',
                        'lastName': 'Reyes Minano',
                        'email': 'edithgiovana13@gmail.com',
                        'active': false,
                        'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                        'sessionTokenWeb': 'edithgiovana13@gmail.comfmu47kk5g2n0bt5prqeeeku8td',
                        'phoneNumber': '75342362',
                        'agreedToTermsOfUse': true,
                        'whereKnownUs': 'Referido',
                        'lastLogin': 1551186969840,
                        'sessionTokenCli': null,
                        'sessionTokenPro': 'bb17ifgpvuo2aor4jor32fkscv',
                        'funds': null,
                        'tokenFacebook': null,
                        'tokenGoogle': null,
                        'tokensIonic': 'dGsJ19yTDcM:APA91bHPGoTTSw5--tVmQ0HXYCaRsKtoNN57lPl6lP-8guVxupfRkFBpGnV4psBJsPfWUuSh21ofUEI4n9kbnUWAjcVHwab2GyvZVzEdnE6sVVNKdrNRWC3NYgymr-b2iM7lL0cBBVOM',
                        'photoPath': null,
                        'photoExt': null,
                        'userRole': {
                            'userRole': 'PRO',
                            'description': '',
                            'fatherUserRole': null,
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 3
                        },
                        'sync': -8,
                        'usedCodeList': '',
                        'referrer': 'EDI681G',
                        'rut': null,
                        'domain': 'tuten',
                        'typeProfessional': 'externo',
                        'tutenSubRole': null,
                        'userId': 8049,
                        'appVersion': '0.4.2',
                        'estatus': null
                    },
                    'bank': 'BANCO DEL ESTADO DE CHILE ',
                    'bankCode': '0012',
                    'bankAccountNumber': '21562307',
                    'bankAccountType': 'Rut ',
                    'hasTraining': true,
                    'wonderlic': 0,
                    'workCommunes': null,
                    'latitude': -33.4703458,
                    'longitude': -70.6416345,
                    'region': null,
                    'locationW': -70.54726792,
                    'locationS': -33.40834514,
                    'materialsProvided': null,
                    'lastLocation': '{"provider":"gps","time":1.551271034447E12,"latitude":-33.40834514,"longitude":-70.54726792,"accuracy":39.44199752807617,"speed":0.0,"altitude":880.0,"locationProvider":0}',
                    'inactivityWarning': false,
                    'inactivityWarningDate': null,
                    'intermediary': null,
                    'bankRut': null,
                    'company': null,
                    'companyRut': null,
                    'companyPhone': null,
                    'commercialBusiness': null
                },
                'bookingTime': 1467100800000,
                'bookingId': 1056,
                'bookingState': 3,
                'bookingPrice': 23286,
                'locationId': {
                    'streetAddress': 'Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile',
                    'apartmentNumber': 'Casa C',
                    'country': 'Chile',
                    'city': 'Santiago',
                    'state': null,
                    'zipCode': null,
                    'locationId': 1259,
                    'commune': 'La Reina',
                    'region': 'RM',
                    'county': null,
                    'active': true,
                    'tutenUser': {
                        'serviceData': '{}',
                        'userAvailability': null,
                        'sessionTokenBck': null,
                        'firstName': 'Jimena',
                        'lastName': 'Balic',
                        'email': 'jimena.balic@gmail.com',
                        'active': true,
                        'passwordHash': null,
                        'sessionTokenWeb': null,
                        'phoneNumber': '98157427',
                        'agreedToTermsOfUse': false,
                        'whereKnownUs': null,
                        'lastLogin': 1510482315176,
                        'sessionTokenCli': 'mp8u4mvudc95ju535ssjebbf5k',
                        'sessionTokenPro': null,
                        'funds': 0,
                        'tokenFacebook': null,
                        'tokenGoogle': null,
                        'tokensIonic': '06795e1838fa7cdffededfeebe3b829ccb61602791d4776e13238b6cf8c71a9b',
                        'photoPath': null,
                        'photoExt': null,
                        'userRole': {
                            'userRole': 'CUSTOMER',
                            'description': '',
                            'fatherUserRole': null,
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 2
                        },
                        'sync': 0,
                        'usedCodeList': '',
                        'referrer': 'JIMENA5129',
                        'rut': null,
                        'domain': 'tuten',
                        'typeProfessional': 'externo',
                        'tutenSubRole': null,
                        'userId': 1125,
                        'appVersion': null,
                        'estatus': null
                    },
                    'latitude': -33.4391423,
                    'longitude': -70.524264
                },
                'paymentId': {
                    'paymentPaypalCardToken': null,
                    'paymentName': 'WebPay Oneclick - MasterCard **** 4299',
                    'paymentType': '3',
                    'paymentState': null,
                    'paymentId': 7094,
                    'paymentData': '{"authCode":"778565","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"tbkUser":"85304c29-3708-4b33-ae45-cd22cd030579"}',
                    'active': true
                },
                'tutenUserClient': {
                    'serviceData': null,
                    'userAvailability': null,
                    'sessionTokenBck': 'contacto@tutem.clq9c9c4asemo7vcu89u9o7lv2ot',
                    'firstName': 'admin',
                    'lastName': 'de lectura',
                    'email': 'contacto@tutem.cl',
                    'active': true,
                    'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                    'sessionTokenWeb': 'contacto@tutem.clq9c9c4asemo7vcu89u9o7lv2ot',
                    'phoneNumber': null,
                    'agreedToTermsOfUse': false,
                    'whereKnownUs': null,
                    'lastLogin': 1558043066461,
                    'sessionTokenCli': 'contacto@tutem.clm5pcfvvv7jsn3an0roop07qg8f',
                    'sessionTokenPro': 'contacto@tutem.cl9sl50d964367gt8p320vavhgdq',
                    'funds': 0,
                    'tokenFacebook': null,
                    'tokenGoogle': null,
                    'tokensIonic': null,
                    'photoPath': null,
                    'photoExt': null,
                    'userRole': {
                        'userRole': 'PRO',
                        'description': '',
                        'fatherUserRole': null,
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 3
                    },
                    'sync': 0,
                    'usedCodeList': '',
                    'referrer': null,
                    'rut': null,
                    'domain': 'tuten',
                    'typeProfessional': 'externo',
                    'tutenSubRole': null,
                    'userId': 17564,
                    'appVersion': 'OLD',
                    'estatus': null
                },
                'score': 5,
                'details': 'No hay comentarios extra',
                'comments': null,
                'commentsPro': null,
                'commentsClient': null,
                'cost': 17056,
                'paid': 23286,
                'professionalPrice': 15556,
                'professionalBonus': 1500,
                'bookingInitiateTime': 1467143751052,
                'bookingFinishTime': 1467230899907,
                'stateExtraData': null,
                'proPaid': null,
                'formPaid': null,
                'to': null,
                'paymentResult': '{"buyOrder":"20160621184800457","payOutput":{"authorizationCode":"423282","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"transactionId":464687129}}',
                'recurrency': {
                    'recurrencyId': 45,
                    'description': 'Una vez a la semana - 10% Desc.',
                    'discount': 0.1,
                    'holidays': false,
                    'frecuencyPerWeek': 1,
                    'active': false,
                    'sellerId': null,
                    'repeatWeeklyMonday': null,
                    'repeatWeeklyTuesday': null,
                    'repeatWeeklyWednesday': null,
                    'repeatWeeklyThursday': null,
                    'repeatWeeklyFriday': null
                },
                'parentBooking': {
                    'bookingFields': '{"extras":[{"id":1,"description":"Refrigerador","imageUri":"img/icon-refrigerador.png","time":"0.5","checked":false},{"id":2,"description":"Horno","imageUri":"img/icon-horno.png","time":"0.5","checked":false},{"id":3,"description":"Lavado Ropa","imageUri":"img/icon-lavado.png","time":"0.5","checked":false},{"id":4,"description":"Secado Ropa","imageUri":"img/icon-secado.png","time":"1","checked":false},{"id":5,"description":"Planchado","imageUri":"img/icon-plancha.png","time":"1","checked":false},{"id":6,"description":"Interior Vidrios","imageUri":"img/icon-vidrios.png","time":"1.5","checked":true}],"pets":false,"selectedRooms":4,"selectedBathrooms":3,"isCarpeted":true,"location":{"streetAddress":"Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile","locationId":1259,"city":"Santiago","commune":"La Reina","apartmentNumber":"Casa C"},"frecuency":4,"date":"21-06-2016","time":"08:00","paymentType":{},"selectedLamps":2,"selectedBulbs":0,"selectedExtractors":1,"selectedHoods":0,"stairRequired":"No","selectedPlugs":2,"selectedSwitches":0,"selectedTvs":1,"concreteWall":true,"willProvideSupport":false,"tvSizeGreaterThan42":false,"willProvideHelp":false,"bookingRole":"PRO_CLEAN_HOUSE","buildSelector":"dpto","buildType":"tipo_2","backyardClean":false,"elementSize":"medium","workType":"Instalación","taps":1,"tubs":1,"wcs":1,"toiletOpen":true,"disherOpen":false,"handwasherOpen":false,"sewerageOpen":false,"waterLine":false,"gasLine":true,"thermos":1,"stoves":1,"washers":1,"haveTaps":false,"needDrain":false,"bathTaps":0,"smallFrames":0,"largeFrames":0,"locks":1,"cylinders":0,"haveMaterials":false,"tapsRemove":true,"bathTapsRemove":false,"tubsRemove":true,"wcsRemove":true,"recurrency":1,"holidays":false,"gasEnergyType":"natural","thermosOutputType":"forzado","bookingAddHours":0.0,"replaceSameThermo":false,"cupon":"","ironHours":2.0,"curtains":5,"haveCylinders":false,"removeLocks":false}',
                    'bookingChecklistData': '{"rooms":[{"number":1,"checked":true,"$$hashKey":"object:57","date":"08:59"},{"number":2,"checked":true,"$$hashKey":"object:58","date":"13:44"},{"number":3,"checked":true,"$$hashKey":"object:59","date":"13:44"},{"number":4,"checked":true,"$$hashKey":"object:60","date":"13:44"}],"bathrooms":[{"number":1,"checked":true,"$$hashKey":"object:65","date":"13:44"},{"number":2,"checked":true,"$$hashKey":"object:66","date":"13:44"},{"number":3,"checked":true,"$$hashKey":"object:67","date":"13:44"}],"extras":[{"id":6,"description":"Interior Vidrios","checked":true,"imageUri":"img/icon-vidrios.png","$$hashKey":"object:55","date":"13:44"}],"livingRoom":[{"checked":true,"number":1,"$$hashKey":"object:72","date":"13:44"}],"kitchen":[{"checked":true,"number":1,"$$hashKey":"object:74","date":"14:34"}],"diningRoom":[{"checked":true,"number":1,"$$hashKey":"object:76","date":"13:44"}],"logia":[{"checked":true,"number":1,"$$hashKey":"object:78","date":"13:44"}]}',
                    'bookingDurationTime': 6.5,
                    'recurrentWeeks': 4,
                    'tutenUserProfessionalRole': {
                        'userRole': 'PRO_CLEAN_HOUSE',
                        'description': 'limpieza de hogar',
                        'fatherUserRole': 'PRO',
                        'domain': 'tuten',
                        'estatus': null,
                        'defaultNamespace': null,
                        'id': 10
                    },
                    'bookingStatusTime': 1466534851842,
                    'bookingCreatedTime': 1466108680522,
                    'tutenUserProfessional': {
                        'weekAvailability': '{}',
                        'hourAvailability': '{}',
                        'serviceData': '[{"id":1,"name":"Limpieza de casa","checked":true},{"id":2,"name":"Limpieza de oficina","checked":true},{"id":3,"name":"Limpieza de alfombras","checked":false},{"id":4,"name":"Lámparas","checked":false},{"id":5,"name":"Extractores y campanas","checked":false},{"id":6,"name":"Enchufes e interruptores","checked":false},{"id":7,"name":"Trabajo a la medida","checked":false},{"id":8,"name":"Montaje de TV","checked":false},{"id":9,"name":"Instalación de cuadros","checked":false},{"id":10,"name":"Armado de muebles","checked":false},{"id":11,"name":"Mudanza","checked":false},{"id":12,"name":"Cerrajería","checked":false},{"id":13,"name":"Trabajo a la medida","checked":false},{"id":14,"name":"Desagues","checked":false},{"id":15,"name":"Grifería","checked":false},{"id":16,"name":"WC","checked":false},{"id":17,"name":"Sifones","checked":false},{"id":18,"name":"Trabajo a la medida","checked":false},{"id":19,"name":"Pintura interior","checked":false}]',
                        'referrers': '{"0":{"phone":"88185993","name":"magdalena irarrazabal"},"1":{"name":"carmen gloria"}}',
                        'whyTuten': '[]',
                        'tutenRoleList': [
                            {
                                'userRole': 'PRO_CLEAN_HOUSE',
                                'description': 'limpieza de hogar',
                                'fatherUserRole': 'PRO',
                                'domain': 'tuten',
                                'estatus': null,
                                'defaultNamespace': null,
                                'id': 10
                            },
                            {
                                'userRole': 'PRO_CLEAN_IRON',
                                'description': 'planchado',
                                'fatherUserRole': 'PRO',
                                'domain': 'tuten',
                                'estatus': null,
                                'defaultNamespace': null,
                                'id': 11
                            },
                            {
                                'userRole': 'PRO_CLEAN_OFFICE',
                                'description': 'limpieza de oficina',
                                'fatherUserRole': 'PRO',
                                'domain': 'tuten',
                                'estatus': null,
                                'defaultNamespace': null,
                                'id': 12
                            },
                            {
                                'userRole': 'PRO_CLEAN_PARTY',
                                'description': 'limpieza carrete',
                                'fatherUserRole': 'PRO',
                                'domain': 'tuten',
                                'estatus': null,
                                'defaultNamespace': null,
                                'id': 13
                            }
                        ],
                        'active': 1,
                        'tutenUser': 'andrea.aco321@gmail.com',
                        'legallyElegibleToWork': false,
                        'paidYearsExperience': 10,
                        'experience': false,
                        'willingToBackgroundCheck': false,
                        'declaredCommitedCrime': false,
                        'referred': null,
                        'workExperience': ' ',
                        'shirtSize': ' ',
                        'maxHoursPerWeek': 0,
                        'workPetsAround': false,
                        'training': ' ',
                        'applicationStep': 1,
                        'score': 1.6176853055916776,
                        'applyDate': 1448586795820,
                        'birthdate': 1448582400000,
                        'transportation': ' ',
                        'smartphone': 'Android',
                        'bankAccount': false,
                        'referredBy': '{"name":"Pro se encuentra embarazada. No contesta más el teléfono."}',
                        'apartmentNumber': 'casa',
                        'city': 'Maipo',
                        'country': ' ',
                        'rut': '156174750',
                        'skills': ' ',
                        'state': 'san bernardo',
                        'streetAddress': 'Carirriñe 15310, San Bernardo, Región Metropolitana, Chile',
                        'zipcode': ' ',
                        'comments': 'CuentaRut',
                        'gender': ' ',
                        'tutenUser1': {
                            'serviceData': null,
                            'userAvailability': '{"monday":{"morning":true,"afternoon":true,"night":true},"tuesday":{"morning":true,"afternoon":true,"night":true},"wednesday":{"morning":true,"afternoon":true,"night":true},"thursday":{"morning":true,"afternoon":true,"night":true},"friday":{"morning":true,"afternoon":true,"night":true},"saturday":{"morning":true,"afternoon":true,"night":true},"sunday":{"morning":true,"afternoon":true,"night":true}}',
                            'sessionTokenBck': null,
                            'firstName': 'andrea bernardita',
                            'lastName': 'acosta barra',
                            'email': 'andrea.aco321@gmail.com',
                            'active': false,
                            'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                            'sessionTokenWeb': 'andrea.aco321@gmail.comva8d61dscsesdo80ueufith9a6',
                            'phoneNumber': '71484918',
                            'agreedToTermsOfUse': true,
                            'whereKnownUs': 'Bolsas Laborales',
                            'lastLogin': 1539123768749,
                            'sessionTokenCli': 'andrea.aco321@gmail.com1pn8f5gl0f1psnv0hp4pic1rh9',
                            'sessionTokenPro': 'jagfhtgfv7mgg6bmg4uaa5ad9m',
                            'funds': null,
                            'tokenFacebook': 'CAAWrZB93XrVoBACDUDpmM7bIMfkfZCpeqYLrqeudLWIGZAg16Htl2fEp4L6tsNJTb5p2rUOAHUmFyoZCZCos4pqf5E3f9Hmi1CTowYrewzkZCrMssT4s3O7NA9OBGcLf2T0t4n5Vn3cUrBgKXllMixTLGv5y7OOJ6i6bZA8GQ3xnJ8l4CN0uTx1CEn9OnsvUOEDGsqszU9BC6wjN097GZBuR',
                            'tokenGoogle': null,
                            'tokensIonic': 'fr4TY9SytGI:APA91bG5lASCwt1yN_feYOt5aJ3MT8NiiXlC8eeNCquvjBUujrD0_SKqcQL-EFRzazviUYUH7qSX7DOMsSXMvctwPu0EFVrqrmbUYLMOX7v4KBZK1H_cN0To3C4hBGG4ciEfZX31g8vv',
                            'photoPath': null,
                            'photoExt': null,
                            'userRole': {
                                'userRole': 'PRO',
                                'description': '',
                                'fatherUserRole': null,
                                'domain': 'tuten',
                                'estatus': null,
                                'defaultNamespace': null,
                                'id': 3
                            },
                            'sync': -3549,
                            'usedCodeList': '',
                            'referrer': 'AND125G',
                            'rut': null,
                            'domain': 'tuten',
                            'typeProfessional': 'externo',
                            'tutenSubRole': null,
                            'userId': 8383,
                            'appVersion': '0.4.2',
                            'estatus': null
                        },
                        'bank': 'BANCO DEL ESTADO DE CHILE',
                        'bankCode': '0012',
                        'bankAccountNumber': '15617475',
                        'bankAccountType': 'Rut',
                        'hasTraining': true,
                        'wonderlic': 0,
                        'workCommunes': null,
                        'latitude': -33.5976459,
                        'longitude': -70.6894244,
                        'region': null,
                        'locationW': -70.68924163,
                        'locationS': -33.59783114,
                        'materialsProvided': null,
                        'lastLocation': '{"provider":"gps","time":1.556995876E12,"latitude":-33.59783114,"longitude":-70.68924163,"accuracy":12.86400032043457,"speed":0.0,"altitude":602.4078369140625,"locationProvider":0}',
                        'inactivityWarning': false,
                        'inactivityWarningDate': null,
                        'intermediary': null,
                        'bankRut': '0970300007',
                        'company': null,
                        'companyRut': null,
                        'companyPhone': null,
                        'commercialBusiness': null
                    },
                    'bookingTime': 1466496000000,
                    'bookingId': 1011,
                    'bookingState': 3,
                    'bookingPrice': 23286,
                    'locationId': {
                        'streetAddress': 'Escr Benjamin Subercaseaux 10252, La Reina, La Reina, Región Metropolitana, Chile',
                        'apartmentNumber': 'Casa C',
                        'country': 'Chile',
                        'city': 'Santiago',
                        'state': null,
                        'zipCode': null,
                        'locationId': 1259,
                        'commune': 'La Reina',
                        'region': 'RM',
                        'county': null,
                        'active': true,
                        'tutenUser': {
                            'serviceData': '{}',
                            'userAvailability': null,
                            'sessionTokenBck': null,
                            'firstName': 'Jimena',
                            'lastName': 'Balic',
                            'email': 'jimena.balic@gmail.com',
                            'active': true,
                            'passwordHash': null,
                            'sessionTokenWeb': null,
                            'phoneNumber': '98157427',
                            'agreedToTermsOfUse': false,
                            'whereKnownUs': null,
                            'lastLogin': 1510482315176,
                            'sessionTokenCli': 'mp8u4mvudc95ju535ssjebbf5k',
                            'sessionTokenPro': null,
                            'funds': 0,
                            'tokenFacebook': null,
                            'tokenGoogle': null,
                            'tokensIonic': '06795e1838fa7cdffededfeebe3b829ccb61602791d4776e13238b6cf8c71a9b',
                            'photoPath': null,
                            'photoExt': null,
                            'userRole': {
                                'userRole': 'CUSTOMER',
                                'description': '',
                                'fatherUserRole': null,
                                'domain': 'tuten',
                                'estatus': null,
                                'defaultNamespace': null,
                                'id': 2
                            },
                            'sync': 0,
                            'usedCodeList': '',
                            'referrer': 'JIMENA5129',
                            'rut': null,
                            'domain': 'tuten',
                            'typeProfessional': 'externo',
                            'tutenSubRole': null,
                            'userId': 1125,
                            'appVersion': null,
                            'estatus': null
                        },
                        'latitude': -33.4391423,
                        'longitude': -70.524264
                    },
                    'paymentId': {
                        'paymentPaypalCardToken': null,
                        'paymentName': 'WebPay Oneclick - MasterCard **** 4299',
                        'paymentType': '3',
                        'paymentState': null,
                        'paymentId': 7094,
                        'paymentData': '{"authCode":"778565","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"tbkUser":"85304c29-3708-4b33-ae45-cd22cd030579"}',
                        'active': true
                    },
                    'tutenUserClient': {
                        'serviceData': '{}',
                        'userAvailability': null,
                        'sessionTokenBck': null,
                        'firstName': 'Jimena',
                        'lastName': 'Balic',
                        'email': 'jimena.balic@gmail.com',
                        'active': true,
                        'passwordHash': null,
                        'sessionTokenWeb': null,
                        'phoneNumber': '98157427',
                        'agreedToTermsOfUse': false,
                        'whereKnownUs': null,
                        'lastLogin': 1510482315176,
                        'sessionTokenCli': 'mp8u4mvudc95ju535ssjebbf5k',
                        'sessionTokenPro': null,
                        'funds': 0,
                        'tokenFacebook': null,
                        'tokenGoogle': null,
                        'tokensIonic': '06795e1838fa7cdffededfeebe3b829ccb61602791d4776e13238b6cf8c71a9b',
                        'photoPath': null,
                        'photoExt': null,
                        'userRole': {
                            'userRole': 'CUSTOMER',
                            'description': '',
                            'fatherUserRole': null,
                            'domain': 'tuten',
                            'estatus': null,
                            'defaultNamespace': null,
                            'id': 2
                        },
                        'sync': 0,
                        'usedCodeList': '',
                        'referrer': 'JIMENA5129',
                        'rut': null,
                        'domain': 'tuten',
                        'typeProfessional': 'externo',
                        'tutenSubRole': null,
                        'userId': 1125,
                        'appVersion': null,
                        'estatus': null
                    },
                    'score': 5,
                    'details': 'No hay comentarios extra',
                    'comments': null,
                    'commentsPro': null,
                    'commentsClient': null,
                    'cost': 17056,
                    'paid': 23286,
                    'professionalPrice': 15556,
                    'professionalBonus': 1500,
                    'bookingInitiateTime': 1466513310237,
                    'bookingFinishTime': 1466534851852,
                    'stateExtraData': null,
                    'proPaid': null,
                    'formPaid': null,
                    'to': null,
                    'paymentResult': '{"buyOrder":"20160616202440523","payOutput":{"authorizationCode":"432009","creditCardType":"MASTER_CARD","last4CardDigits":"4299","responseCode":0,"transactionId":462491810}}',
                    'recurrency': {
                        'recurrencyId': 45,
                        'description': 'Una vez a la semana - 10% Desc.',
                        'discount': 0.1,
                        'holidays': false,
                        'frecuencyPerWeek': 1,
                        'active': false,
                        'sellerId': null,
                        'repeatWeeklyMonday': null,
                        'repeatWeeklyTuesday': null,
                        'repeatWeeklyWednesday': null,
                        'repeatWeeklyThursday': null,
                        'repeatWeeklyFriday': null
                    },
                    'parentBooking': null,
                    'assignedProEmailSent': true,
                    'bookingInitMatch': null,
                    'bookingSubState': null,
                    'proPayment': null,
                    'nullifyResult': null,
                    'listPrice': null,
                    'childSubState': null,
                    'nextChildCreationAttempt': null,
                    'mapHash': null,
                    'formData': null,
                    'textTasks': null,
                    'arrivalDate': null,
                    'uninitiatedPushSent': null,
                    'couponDiscount': null,
                    'coupon': null,
                    'namespace': null,
                    'bookingDomain': null,
                    'token': '2487b62d-fdb2-46a6-ae85-43adf4e85d31-1011',
                    'frameworkId': null,
                    'domain': 'tuten',
                    'selectedRecurrency': null,
                    'seenProDate': null,
                    'lastChildBooking': null,
                    'calcPrice': null,
                    'calcProPrice': null,
                    'suppliesCost': null,
                    'kilometers': null,
                    'salesChannel': null,
                    'bookingOnDemand': false,
                    'quotationState': 0,
                    'tags': [
                        {
                            'tagId': 7,
                            'tag': 'termino-de-obra',
                            'context': 'file'
                        }
                    ],
                    'attachment': null,
                    'caseId': null,
                    'bookingAceptedAt': null
                },
                'assignedProEmailSent': true,
                'bookingInitMatch': 1466791231224,
                'bookingSubState': null,
                'proPayment': null,
                'nullifyResult': null,
                'listPrice': null,
                'childSubState': null,
                'nextChildCreationAttempt': null,
                'mapHash': null,
                'formData': null,
                'textTasks': null,
                'arrivalDate': null,
                'uninitiatedPushSent': null,
                'couponDiscount': null,
                'coupon': null,
                'namespace': null,
                'bookingDomain': null,
                'token': '3eec8a5d-644e-41b9-a1ac-1ae99096c748-1056',
                'frameworkId': null,
                'domain': 'tuten',
                'selectedRecurrency': null,
                'seenProDate': 1506555007489,
                'lastChildBooking': null,
                'calcPrice': null,
                'calcProPrice': null,
                'suppliesCost': null,
                'kilometers': null,
                'salesChannel': null,
                'bookingOnDemand': false,
                'quotationState': 0,
                'tags': [
                    {
                        'tagId': 7,
                        'tag': 'termino-de-obra',
                        'context': 'file'
                    }
                ],
                'attachment': null,
                'caseId': null,
                'bookingAceptedAt': null
            },
            'assignedProEmailSent': true,
            'bookingInitMatch': 1467540000106,
            'bookingSubState': null,
            'proPayment': null,
            'nullifyResult': null,
            'listPrice': null,
            'childSubState': null,
            'nextChildCreationAttempt': null,
            'mapHash': null,
            'formData': null,
            'textTasks': null,
            'arrivalDate': null,
            'uninitiatedPushSent': null,
            'couponDiscount': null,
            'coupon': null,
            'namespace': null,
            'bookingDomain': null,
            'token': '037c6af7-a129-41e4-9447-336ba5de1175-1115',
            'frameworkId': null,
            'domain': 'tuten',
            'selectedRecurrency': null,
            'seenProDate': null,
            'lastChildBooking': null,
            'calcPrice': null,
            'calcProPrice': null,
            'suppliesCost': null,
            'kilometers': null,
            'salesChannel': null,
            'bookingOnDemand': false,
            'quotationState': 0,
            'tags': [],
            'attachment': null,
            'caseId': null,
            'bookingAceptedAt': null
        },
        'assignedProEmailSent': true,
        'bookingInitMatch': 1468022400066,
        'bookingSubState': null,
        'proPayment': null,
        'nullifyResult': null,
        'listPrice': null,
        'childSubState': null,
        'nextChildCreationAttempt': null,
        'mapHash': null,
        'formData': null,
        'textTasks': null,
        'arrivalDate': null,
        'uninitiatedPushSent': null,
        'couponDiscount': null,
        'coupon': null,
        'namespace': null,
        'bookingDomain': null,
        'token': '1645e0fb-4be7-434c-b628-401803560b2c-1179',
        'frameworkId': null,
        'domain': 'tuten',
        'selectedRecurrency': null,
        'seenProDate': null,
        'lastChildBooking': null,
        'calcPrice': null,
        'calcProPrice': null,
        'suppliesCost': null,
        'kilometers': null,
        'salesChannel': null,
        'bookingOnDemand': false,
        'quotationState': 0,
        'tags': [],
        'attachment': null,
        'caseId': null,
        'bookingAceptedAt': null
    },
    { 'visible': true,
        'bookingFields': '{"extras":[{"id":1,"description":"Refrigerador","imageUri":"img%2Ficon-refrigerador.png","time":"0.5","checked":false},{"id":2,"description":"Horno","imageUri":"img%2Ficon-horno.png","time":"0.5","checked":false},{"id":3,"description":"Lavado Ropa","imageUri":"img%2Ficon-lavado.png","time":"0.5","checked":false},{"id":4,"description":"Secado Ropa","imageUri":"img%2Ficon-secado.png","time":"1","checked":false},{"id":5,"description":"Planchado","imageUri":"img%2Ficon-plancha.png","time":"1","checked":true},{"id":6,"description":"Interior Vidrios","imageUri":"img%2Ficon-vidrios.png","time":"1.5","checked":false}],"pets":false,"selectedRooms":2,"selectedBathrooms":2,"isCarpeted":true,"location":{"streetAddress":"Crescente Errázuriz 401, Ñuñoa, Ñuñoa, Región Metropolitana, Chile","locationId":1212,"city":"Santiago","commune":"Ñuñoa","apartmentNumber":"912"},"frecuency":4,"date":"11-07-2016","time":"16:00","paymentType":{},"selectedLamps":2,"selectedBulbs":0,"selectedExtractors":1,"selectedHoods":0,"stairRequired":"No","selectedPlugs":1,"selectedSwitches":0,"selectedTvs":1,"concreteWall":true,"willProvideSupport":false,"tvSizeGreaterThan42":false,"willProvideHelp":false,"bookingRole":"PRO_CLEAN_HOUSE","buildSelector":"dpto","buildType":"tipo_2","backyardClean":true,"elementSize":"medium","workType":"Instalación","taps":1,"tubs":1,"wcs":1,"toiletOpen":true,"disherOpen":false,"handwasherOpen":false,"sewerageOpen":false,"waterLine":true,"gasLine":true,"thermos":1,"stoves":1,"washers":1,"haveTaps":false,"needDrain":false,"bathTaps":0,"smallFrames":0,"largeFrames":0,"locks":1,"cylinders":0,"haveMaterials":true,"tapsRemove":true,"bathTapsRemove":true,"tubsRemove":true,"wcsRemove":true,"recurrency":0,"holidays":false,"gasEnergyType":"natural","thermosOutputType":"forzado","bookingAddHours":0,"replaceSameThermo":false,"cupon":"TUTENBCH","ironHours":2,"curtains":1,"haveCylinders":false,"removeLocks":true,"cuponDetail":"10%","o":"origin","originApp":"WEBAPP"}',
        'bookingChecklistData': '{"rooms":[{"number":1,"checked":true,"$$hashKey":"object:59","date":"20:11"},{"number":2,"checked":true,"$$hashKey":"object:60","date":"20:11"}],"bathrooms":[{"number":1,"checked":true,"$$hashKey":"object:63","date":"20:11"},{"number":2,"checked":true,"$$hashKey":"object:64","date":"20:11"}],"extras":[{"id":5,"description":"Planchado","checked":true,"time":"1","imageUri":"img%2Ficon-plancha.png","$$hashKey":"object:57","date":"20:11"}],"livingRoom":[{"checked":true,"number":1,"$$hashKey":"object:68","date":"20:11"}],"kitchen":[{"checked":true,"number":1,"$$hashKey":"object:70","date":"20:11"}],"diningRoom":[{"checked":true,"number":1,"$$hashKey":"object:72","date":"20:11"}],"logia":[{"checked":true,"number":1,"$$hashKey":"object:74","date":"20:11"}]}',
        'bookingDurationTime': 4.5,
        'recurrentWeeks': 4,
        'tutenUserProfessionalRole': {
            'userRole': 'PRO_CLEAN_HOUSE',
            'description': 'limpieza de hogar',
            'fatherUserRole': 'PRO',
            'domain': 'tuten',
            'estatus': null,
            'defaultNamespace': null,
            'id': 10
        },
        'bookingStatusTime': 1468283099904,
        'bookingCreatedTime': 1467819544990,
        'tutenUserProfessional': {
            'weekAvailability': '{}',
            'hourAvailability': '{}',
            'serviceData': '[{"id":1,"name":"Limpieza de casa","checked":true},{"id":2,"name":"Limpieza de oficina","checked":true},{"id":3,"name":"Limpieza de alfombras","checked":false},{"id":4,"name":"Lámparas","checked":false},{"id":5,"name":"Extractores y campanas","checked":false},{"id":6,"name":"Enchufes e interruptores","checked":false},{"id":7,"name":"Trabajo a la medida","checked":false},{"id":8,"name":"Montaje de TV","checked":false},{"id":9,"name":"Instalación de cuadros","checked":false},{"id":10,"name":"Armado de muebles","checked":false},{"id":11,"name":"Mudanza","checked":false},{"id":12,"name":"Cerrajería","checked":false},{"id":13,"name":"Trabajo a la medida","checked":false},{"id":14,"name":"Desagues","checked":false},{"id":15,"name":"Grifería","checked":false},{"id":16,"name":"WC","checked":false},{"id":17,"name":"Sifones","checked":false},{"id":18,"name":"Trabajo a la medida","checked":false},{"id":19,"name":"Pintura interior","checked":false}]',
            'referrers': '{"0":{"phone":"88185993","name":"magdalena irarrazabal"},"1":{"name":"carmen gloria"}}',
            'whyTuten': '[]',
            'tutenRoleList': [
                {
                    'userRole': 'PRO_CLEAN_HOUSE',
                    'description': 'limpieza de hogar',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 10
                },
                {
                    'userRole': 'PRO_CLEAN_IRON',
                    'description': 'planchado',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 11
                },
                {
                    'userRole': 'PRO_CLEAN_OFFICE',
                    'description': 'limpieza de oficina',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 12
                },
                {
                    'userRole': 'PRO_CLEAN_PARTY',
                    'description': 'limpieza carrete',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 13
                }
            ],
            'active': 1,
            'tutenUser': 'andrea.aco321@gmail.com',
            'legallyElegibleToWork': false,
            'paidYearsExperience': 10,
            'experience': false,
            'willingToBackgroundCheck': false,
            'declaredCommitedCrime': false,
            'referred': null,
            'workExperience': ' ',
            'shirtSize': ' ',
            'maxHoursPerWeek': 0,
            'workPetsAround': false,
            'training': ' ',
            'applicationStep': 1,
            'score': 1.6176853055916776,
            'applyDate': 1448586795820,
            'birthdate': 1448582400000,
            'transportation': ' ',
            'smartphone': 'Android',
            'bankAccount': false,
            'referredBy': '{"name":"Pro se encuentra embarazada. No contesta más el teléfono."}',
            'apartmentNumber': 'casa',
            'city': 'Maipo',
            'country': ' ',
            'rut': '156174750',
            'skills': ' ',
            'state': 'san bernardo',
            'streetAddress': 'Carirriñe 15310, San Bernardo, Región Metropolitana, Chile',
            'zipcode': ' ',
            'comments': 'CuentaRut',
            'gender': ' ',
            'tutenUser1': {
                'serviceData': null,
                'userAvailability': '{"monday":{"morning":true,"afternoon":true,"night":true},"tuesday":{"morning":true,"afternoon":true,"night":true},"wednesday":{"morning":true,"afternoon":true,"night":true},"thursday":{"morning":true,"afternoon":true,"night":true},"friday":{"morning":true,"afternoon":true,"night":true},"saturday":{"morning":true,"afternoon":true,"night":true},"sunday":{"morning":true,"afternoon":true,"night":true}}',
                'sessionTokenBck': null,
                'firstName': 'andrea bernardita',
                'lastName': 'acosta barra',
                'email': 'andrea.aco321@gmail.com',
                'active': false,
                'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                'sessionTokenWeb': 'andrea.aco321@gmail.comva8d61dscsesdo80ueufith9a6',
                'phoneNumber': '71484918',
                'agreedToTermsOfUse': true,
                'whereKnownUs': 'Bolsas Laborales',
                'lastLogin': 1539123768749,
                'sessionTokenCli': 'andrea.aco321@gmail.com1pn8f5gl0f1psnv0hp4pic1rh9',
                'sessionTokenPro': 'jagfhtgfv7mgg6bmg4uaa5ad9m',
                'funds': null,
                'tokenFacebook': 'CAAWrZB93XrVoBACDUDpmM7bIMfkfZCpeqYLrqeudLWIGZAg16Htl2fEp4L6tsNJTb5p2rUOAHUmFyoZCZCos4pqf5E3f9Hmi1CTowYrewzkZCrMssT4s3O7NA9OBGcLf2T0t4n5Vn3cUrBgKXllMixTLGv5y7OOJ6i6bZA8GQ3xnJ8l4CN0uTx1CEn9OnsvUOEDGsqszU9BC6wjN097GZBuR',
                'tokenGoogle': null,
                'tokensIonic': 'fr4TY9SytGI:APA91bG5lASCwt1yN_feYOt5aJ3MT8NiiXlC8eeNCquvjBUujrD0_SKqcQL-EFRzazviUYUH7qSX7DOMsSXMvctwPu0EFVrqrmbUYLMOX7v4KBZK1H_cN0To3C4hBGG4ciEfZX31g8vv',
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'PRO',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 3
                },
                'sync': -3549,
                'usedCodeList': '',
                'referrer': 'AND125G',
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 8383,
                'appVersion': '0.4.2',
                'estatus': null
            },
            'bank': 'BANCO DEL ESTADO DE CHILE',
            'bankCode': '0012',
            'bankAccountNumber': '15617475',
            'bankAccountType': 'Rut',
            'hasTraining': true,
            'wonderlic': 0,
            'workCommunes': null,
            'latitude': -33.5976459,
            'longitude': -70.6894244,
            'region': null,
            'locationW': -70.68924163,
            'locationS': -33.59783114,
            'materialsProvided': null,
            'lastLocation': '{"provider":"gps","time":1.556995876E12,"latitude":-33.59783114,"longitude":-70.68924163,"accuracy":12.86400032043457,"speed":0.0,"altitude":602.4078369140625,"locationProvider":0}',
            'inactivityWarning': false,
            'inactivityWarningDate': null,
            'intermediary': null,
            'bankRut': '0970300007',
            'company': null,
            'companyRut': null,
            'companyPhone': null,
            'commercialBusiness': null
        },
        'bookingTime': 1468252800000,
        'bookingId': 1182,
        'bookingState': 3,
        'bookingPrice': 18336,
        'locationId': {
            'streetAddress': 'Crescente Errázuriz 401, Ñuñoa, Ñuñoa, Región Metropolitana, Chile',
            'apartmentNumber': '912',
            'country': 'Chile',
            'city': 'Santiago',
            'state': null,
            'zipCode': null,
            'locationId': 1212,
            'commune': 'Ñuñoa',
            'region': 'RM',
            'county': null,
            'active': true,
            'tutenUser': {
                'serviceData': '{}',
                'userAvailability': null,
                'sessionTokenBck': null,
                'firstName': 'Felipe',
                'lastName': 'Chacon Vargas',
                'email': 'felipechacon@yahoo.com',
                'active': true,
                'passwordHash': null,
                'sessionTokenWeb': 'idkl1h1lptf5b4nfcdqduksks3',
                'phoneNumber': '96476551',
                'agreedToTermsOfUse': false,
                'whereKnownUs': null,
                'lastLogin': 1468891171665,
                'sessionTokenCli': 'suvl4lq9n25seilmh33u6b0cig',
                'sessionTokenPro': null,
                'funds': 0,
                'tokenFacebook': null,
                'tokenGoogle': null,
                'tokensIonic': null,
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'CUSTOMER',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 2
                },
                'sync': 0,
                'usedCodeList': '',
                'referrer': 'FELIPE5014',
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 1003,
                'appVersion': null,
                'estatus': null
            },
            'latitude': -33.4574944,
            'longitude': -70.62514139999999
        },
        'paymentId': {
            'paymentPaypalCardToken': null,
            'paymentName': 'WebPay Oneclick - Visa **** 6936',
            'paymentType': '3',
            'paymentState': null,
            'paymentId': 6840,
            'paymentData': '{"authCode":"288143","creditCardType":"VISA","last4CardDigits":"6936","responseCode":0,"tbkUser":"2c152636-d497-4401-9a73-f5c6850ab2b5"}',
            'active': true
        },
        'tutenUserClient': {
            'serviceData': '{}',
            'userAvailability': null,
            'sessionTokenBck': null,
            'firstName': 'Juan',
            'lastName': 'Perez',
            'email': 'contacto@tuten.cl',
            'active': true,
            'passwordHash': null,
            'sessionTokenWeb': null,
            'phoneNumber': '25677864',
            'agreedToTermsOfUse': false,
            'whereKnownUs': null,
            'lastLogin': 1470165129772,
            'sessionTokenCli': '84o8i4o2d8kanmblsm1scouf8b',
            'sessionTokenPro': null,
            'funds': 0,
            'tokenFacebook': null,
            'tokenGoogle': null,
            'tokensIonic': null,
            'photoPath': null,
            'photoExt': null,
            'userRole': {
                'userRole': 'PRO',
                'description': '',
                'fatherUserRole': null,
                'domain': 'tuten',
                'estatus': null,
                'defaultNamespace': null,
                'id': 3
            },
            'sync': 0,
            'usedCodeList': '',
            'referrer': 'JUAN5990',
            'rut': null,
            'domain': 'tuten',
            'typeProfessional': 'externo',
            'tutenSubRole': null,
            'userId': 6123,
            'appVersion': null,
            'estatus': null
        },
        'score': 5,
        'details': 'No hay comentarios extra',
        'comments': null,
        'commentsPro': null,
        'commentsClient': null,
        'cost': 14375,
        'paid': 18336,
        'professionalPrice': 12875,
        'professionalBonus': 1500,
        'bookingInitiateTime': 1468269121533,
        'bookingFinishTime': 1468283099907,
        'stateExtraData': null,
        'proPaid': null,
        'formPaid': null,
        'to': null,
        'paymentResult': '{"buyOrder":"20160706153904991","payOutput":{"authorizationCode":"076601","creditCardType":"VISA","last4CardDigits":"6936","responseCode":0,"transactionId":473194366}}',
        'recurrency': null,
        'parentBooking': null,
        'assignedProEmailSent': true,
        'bookingInitMatch': 1467996034212,
        'bookingSubState': null,
        'proPayment': null,
        'nullifyResult': null,
        'listPrice': null,
        'childSubState': null,
        'nextChildCreationAttempt': null,
        'mapHash': null,
        'formData': null,
        'textTasks': null,
        'arrivalDate': null,
        'uninitiatedPushSent': null,
        'couponDiscount': null,
        'coupon': null,
        'namespace': null,
        'bookingDomain': null,
        'token': 'd7bf327a-2497-4ea1-b30d-f000146f5bf1-1182',
        'frameworkId': null,
        'domain': 'tuten',
        'selectedRecurrency': null,
        'seenProDate': null,
        'lastChildBooking': null,
        'calcPrice': null,
        'calcProPrice': null,
        'suppliesCost': null,
        'kilometers': null,
        'salesChannel': null,
        'bookingOnDemand': false,
        'quotationState': 0,
        'tags': [],
        'attachment': null,
        'caseId': null,
        'bookingAceptedAt': null
    },
    { 'visible': true,
        'bookingFields': '{"extras":[{"id":1,"description":"Refrigerador","imageUri":"img/icon-refrigerador.png","time":"0.5","checked":false},{"id":2,"description":"Horno","imageUri":"img/icon-horno.png","time":"0.5","checked":false},{"id":3,"description":"Lavado Ropa","imageUri":"img/icon-lavado.png","time":"0.5","checked":false},{"id":4,"description":"Secado Ropa","imageUri":"img/icon-secado.png","time":"1","checked":false},{"id":5,"description":"Planchado","imageUri":"img/icon-plancha.png","time":"1","checked":false},{"id":6,"description":"Interior Vidrios","imageUri":"img/icon-vidrios.png","time":"1.5","checked":false}],"pets":false,"selectedRooms":3,"selectedBathrooms":2,"isCarpeted":true,"location":{"streetAddress":"Av. Eliécer Parada 1891, Ñuñoa, Región Metropolitana, Chile","locationId":1419,"city":"Santiago","commune":"Ñuñoa","apartmentNumber":"305"},"frecuency":4,"date":"08-07-2016","time":"08:00","paymentType":{},"selectedLamps":2,"selectedBulbs":0,"selectedExtractors":1,"selectedHoods":0,"stairRequired":"No","selectedPlugs":1,"selectedSwitches":0,"selectedTvs":1,"concreteWall":true,"willProvideSupport":false,"tvSizeGreaterThan42":false,"willProvideHelp":false,"bookingRole":"PRO_CLEAN_HOUSE","buildSelector":"dpto","buildType":"tipo_2","backyardClean":true,"elementSize":"medium","workType":"Instalación","taps":1,"tubs":1,"wcs":1,"toiletOpen":true,"disherOpen":false,"handwasherOpen":false,"sewerageOpen":false,"waterLine":true,"gasLine":true,"thermos":1,"stoves":1,"washers":1,"haveTaps":false,"needDrain":false,"bathTaps":0,"smallFrames":0,"largeFrames":0,"locks":1,"cylinders":0,"haveMaterials":true,"tapsRemove":true,"bathTapsRemove":true,"tubsRemove":true,"wcsRemove":true,"recurrency":0,"holidays":true,"gasEnergyType":"natural","thermosOutputType":"forzado","bookingAddHours":0.0,"replaceSameThermo":false,"cupon":"","ironHours":2.0,"curtains":1,"haveCylinders":false,"removeLocks":true,"o":"origin","originApp":"WEBAPP"}',
        'bookingChecklistData': '{"rooms":[{"number":1,"checked":true,"$$hashKey":"object:159","date":"13:00"},{"number":2,"checked":true,"$$hashKey":"object:160","date":"13:00"},{"number":3,"checked":true,"$$hashKey":"object:161","date":"13:00"}],"bathrooms":[{"number":1,"checked":true,"$$hashKey":"object:165","date":"13:00"},{"number":2,"checked":true,"$$hashKey":"object:166","date":"13:00"}],"extras":[],"livingRoom":[{"checked":true,"number":1,"$$hashKey":"object:169","date":"13:00"}],"kitchen":[{"checked":true,"number":1,"$$hashKey":"object:171","date":"13:00"}],"diningRoom":[{"checked":true,"number":1,"$$hashKey":"object:173","date":"13:00"}],"logia":[{"checked":true,"number":1,"$$hashKey":"object:175","date":"13:00"}]}',
        'bookingDurationTime': 4,
        'recurrentWeeks': 4,
        'tutenUserProfessionalRole': {
            'userRole': 'PRO_CLEAN_HOUSE',
            'description': 'limpieza de hogar',
            'fatherUserRole': 'PRO',
            'domain': 'tuten',
            'estatus': null,
            'defaultNamespace': null,
            'id': 10
        },
        'bookingStatusTime': 1467998046433,
        'bookingCreatedTime': 1467818232789,
        'tutenUserProfessional': {
            'weekAvailability': '{}',
            'hourAvailability': '{}',
            'serviceData': '[{"id":1,"name":"Limpieza de casa","checked":false},{"id":2,"name":"Limpieza de oficina","checked":false},{"id":3,"name":"Limpieza de alfombras","checked":false},{"id":4,"name":"Lámparas","checked":false},{"id":5,"name":"Extractores y campanas","checked":false},{"id":6,"name":"Enchufes e interruptores","checked":false},{"id":7,"name":"Trabajo a la medida","checked":false},{"id":8,"name":"Montaje de TV","checked":false},{"id":9,"name":"Instalación de cuadros","checked":false},{"id":10,"name":"Armado de muebles","checked":false},{"id":11,"name":"Mudanza","checked":false},{"id":12,"name":"Cerrajería","checked":false},{"id":13,"name":"Trabajo a la medida","checked":false},{"id":14,"name":"Calefont y Cocinas","checked":false},{"id":15,"name":"Grifería","checked":false},{"id":16,"name":"WC","checked":false},{"id":17,"name":"Lavadoras","checked":false},{"id":18,"name":"Trabajo a la medida","checked":false},{"id":19,"name":"Pintura interior","checked":false},{"id":20,"name":"Limpieza de carrete","checked":false}]',
            'referrers': '{}',
            'whyTuten': '[]',
            'tutenRoleList': [
                {
                    'userRole': 'PRO_CLEAN_HOUSE',
                    'description': 'limpieza de hogar',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 10
                },
                {
                    'userRole': 'PRO_CLEAN_IRON',
                    'description': 'planchado',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 11
                },
                {
                    'userRole': 'PRO_CLEAN_OFFICE',
                    'description': 'limpieza de oficina',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 12
                },
                {
                    'userRole': 'PRO_CLEAN_PARTY',
                    'description': 'limpieza carrete',
                    'fatherUserRole': 'PRO',
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 13
                }
            ],
            'active': -1,
            'tutenUser': 'aerodriguez1960@gmail.com',
            'legallyElegibleToWork': false,
            'paidYearsExperience': 0,
            'experience': false,
            'willingToBackgroundCheck': false,
            'declaredCommitedCrime': false,
            'referred': null,
            'workExperience': ' ',
            'shirtSize': ' ',
            'maxHoursPerWeek': 0,
            'workPetsAround': false,
            'training': ' ',
            'applicationStep': 0,
            'score': 3.9444444444444446,
            'applyDate': 1461677920116,
            'birthdate': 1461715200000,
            'transportation': ' ',
            'smartphone': ' ',
            'bankAccount': false,
            'referredBy': '""',
            'apartmentNumber': '',
            'city': 'santiago',
            'country': 'chile',
            'rut': '80280238',
            'skills': ' ',
            'state': ' ',
            'streetAddress': 'bactereologico 10545, la florida',
            'zipcode': ' ',
            'comments': 'desactivada',
            'gender': 'F ',
            'tutenUser1': {
                'serviceData': null,
                'userAvailability': '{"monday":{"morning":true,"afternoon":false,"night":false},"tuesday":{"morning":true,"afternoon":false,"night":false},"wednesday":{"morning":true,"afternoon":false,"night":false},"thursday":{"morning":true,"afternoon":false,"night":false},"friday":{"morning":true,"afternoon":false,"night":false},"saturday":{"morning":true,"afternoon":false,"night":false},"sunday":{"morning":false,"afternoon":false,"night":false}}',
                'sessionTokenBck': null,
                'firstName': 'Angela',
                'lastName': 'Espinoza',
                'email': 'aerodriguez1960@gmail.com',
                'active': false,
                'passwordHash': 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
                'sessionTokenWeb': null,
                'phoneNumber': '42522112',
                'agreedToTermsOfUse': false,
                'whereKnownUs': ' ',
                'lastLogin': 1466462006739,
                'sessionTokenCli': null,
                'sessionTokenPro': '9b9niggqamq2idp54l7av1d357',
                'funds': null,
                'tokenFacebook': null,
                'tokenGoogle': null,
                'tokensIonic': 'fdDYmuOlcRQ:APA91bHmHJHUUsof1KY8-eJqfvpSiuUrCZQQFLNLzdlbBYAoXUjbAjWVrddwYF6DJo6npoVIuRhg6KSVXXBx7-UoWTT8Nwyr0Py3LT3Vdim7uoMycpiURnSx_Ma5jVEeK1m3ZUiq_urL',
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'PRO',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 3
                },
                'sync': 12,
                'usedCodeList': '',
                'referrer': null,
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 5767,
                'appVersion': null,
                'estatus': null
            },
            'bank': 'BANCO DEL ESTADO DE CHILE ',
            'bankCode': null,
            'bankAccountNumber': '8028023',
            'bankAccountType': 'Rut ',
            'hasTraining': false,
            'wonderlic': null,
            'workCommunes': null,
            'latitude': null,
            'longitude': null,
            'region': null,
            'locationW': null,
            'locationS': null,
            'materialsProvided': null,
            'lastLocation': null,
            'inactivityWarning': false,
            'inactivityWarningDate': null,
            'intermediary': null,
            'bankRut': null,
            'company': null,
            'companyRut': null,
            'companyPhone': null,
            'commercialBusiness': null
        },
        'bookingTime': 1467964800000,
        'bookingId': 1181,
        'bookingState': 3,
        'bookingPrice': 18999,
        'locationId': {
            'streetAddress': 'Av. Eliécer Parada 1891, Ñuñoa, Región Metropolitana, Chile',
            'apartmentNumber': '305',
            'country': 'Chile',
            'city': 'Santiago',
            'state': null,
            'zipCode': null,
            'locationId': 1419,
            'commune': 'Ñuñoa',
            'region': 'RM',
            'county': null,
            'active': true,
            'tutenUser': {
                'serviceData': '{}',
                'userAvailability': null,
                'sessionTokenBck': null,
                'firstName': 'Osvaldo',
                'lastName': 'Beltrán',
                'email': 'osvaldobeltran@gmail.com',
                'active': true,
                'passwordHash': null,
                'sessionTokenWeb': '6httm46s4ul0afb9bl4kinov6h',
                'phoneNumber': '95067731',
                'agreedToTermsOfUse': false,
                'whereKnownUs': null,
                'lastLogin': 1516916951715,
                'sessionTokenCli': 'umnnc6daklvfd38r1fmpvv8b3o',
                'sessionTokenPro': null,
                'funds': 0,
                'tokenFacebook': null,
                'tokenGoogle': null,
                'tokensIonic': 'fU9j5eXa7So:APA91bFMZFA29ROh1d5W-FufWOAhJuhwob15AuEk25SxgjzFy771_m4S61elpLCDtNJMAsxvf5elHngyeZGTuQhW8ok9lRILLdfurmCYi16sL_iqcRN4Cz3NZx5Jzk81x8ohtl4XXDUx',
                'photoPath': null,
                'photoExt': null,
                'userRole': {
                    'userRole': 'CUSTOMER',
                    'description': '',
                    'fatherUserRole': null,
                    'domain': 'tuten',
                    'estatus': null,
                    'defaultNamespace': null,
                    'id': 2
                },
                'sync': 0,
                'usedCodeList': '',
                'referrer': 'OSVALDO5477',
                'rut': null,
                'domain': 'tuten',
                'typeProfessional': 'externo',
                'tutenSubRole': null,
                'userId': 1486,
                'appVersion': 'OLD',
                'estatus': null
            },
            'latitude': -33.4386772,
            'longitude': -70.5863507
        },
        'paymentId': {
            'paymentPaypalCardToken': null,
            'paymentName': 'WebPay Plus',
            'paymentType': '2',
            'paymentState': null,
            'paymentId': 7904,
            'paymentData': '{"token":"e7ca1aa61122ef584507ef8ac026e3b71ab9d5edde83d803291f2bc306a0c4c4","redirectURL":"https://webpay3g.transbank.cl:443/filtroUnificado/initTransaction?token_ws\\u003de7ca1aa61122ef584507ef8ac026e3b71ab9d5edde83d803291f2bc306a0c4c4","buyOrder":"20160706151533746","transactionResult":{"accountingDate":"0706","buyOrder":"20160706151533746","cardDetail":{"cardNumber":"9192"},"detailOutput":[{"authorizationCode":"004388","paymentTypeCode":"VD","responseCode":0,"sharesNumber":0,"amount":18999,"commerceCode":"597031665612","buyOrder":"20160706151533746"}],"transactionDate":{"year":2016,"month":7,"day":6,"timezone":-240,"hour":11,"minute":2,"second":12,"fractionalSecond":0.365},"urlRedirection":"https://webpay3g.transbank.cl:443/filtroUnificado/voucher.cgi","vci":"TSY"}}',
            'active': false
        },
        'tutenUserClient': {
            'serviceData': '{}',
            'userAvailability': null,
            'sessionTokenBck': null,
            'firstName': 'Juan',
            'lastName': 'Perez',
            'email': 'contacto@tuten.cl',
            'active': true,
            'passwordHash': null,
            'sessionTokenWeb': null,
            'phoneNumber': '25677864',
            'agreedToTermsOfUse': false,
            'whereKnownUs': null,
            'lastLogin': 1470165129772,
            'sessionTokenCli': '84o8i4o2d8kanmblsm1scouf8b',
            'sessionTokenPro': null,
            'funds': 0,
            'tokenFacebook': null,
            'tokenGoogle': null,
            'tokensIonic': null,
            'photoPath': null,
            'photoExt': null,
            'userRole': {
                'userRole': 'PRO',
                'description': '',
                'fatherUserRole': null,
                'domain': 'tuten',
                'estatus': null,
                'defaultNamespace': null,
                'id': 3
            },
            'sync': 0,
            'usedCodeList': '',
            'referrer': 'JUAN5990',
            'rut': null,
            'domain': 'tuten',
            'typeProfessional': 'externo',
            'tutenSubRole': null,
            'userId': 6123,
            'appVersion': null,
            'estatus': null
        },
        'score': 5,
        'details': 'No hay comentarios extra',
        'comments': null,
        'commentsPro': null,
        'commentsClient': null,
        'cost': 13500,
        'paid': 18999,
        'professionalPrice': 12000,
        'professionalBonus': 1500,
        'bookingInitiateTime': 1467980189684,
        'bookingFinishTime': 1467998046434,
        'stateExtraData': null,
        'proPaid': null,
        'formPaid': null,
        'to': null,
        'paymentResult': null,
        'recurrency': null,
        'parentBooking': null,
        'assignedProEmailSent': true,
        'bookingInitMatch': 1467818250102,
        'bookingSubState': null,
        'proPayment': null,
        'nullifyResult': null,
        'listPrice': null,
        'childSubState': null,
        'nextChildCreationAttempt': null,
        'mapHash': null,
        'formData': null,
        'textTasks': null,
        'arrivalDate': null,
        'uninitiatedPushSent': null,
        'couponDiscount': null,
        'coupon': null,
        'namespace': null,
        'bookingDomain': null,
        'token': '3b9a9dae-16c6-4c82-abf7-3c9ceb52b0e2-1181',
        'frameworkId': null,
        'domain': 'tuten',
        'selectedRecurrency': null,
        'seenProDate': null,
        'lastChildBooking': null,
        'calcPrice': null,
        'calcProPrice': null,
        'suppliesCost': null,
        'kilometers': null,
        'salesChannel': null,
        'bookingOnDemand': false,
        'quotationState': 0,
        'tags': [
            {
                'tagId': 7,
                'tag': 'termino-de-obra',
                'context': 'file'
            }
        ],
        'attachment': null,
        'caseId': null,
        'bookingAceptedAt': null
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Julio\OneDrive\Escritorio\programacion\ALLCODE2\tutenTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map