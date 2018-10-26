(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/angular-zxcvbn/fesm5/mralexandernickel-angular-zxcvbn.js":
/*!***********************************************************************!*\
  !*** ./dist/angular-zxcvbn/fesm5/mralexandernickel-angular-zxcvbn.js ***!
  \***********************************************************************/
/*! exports provided: zxcvbnValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zxcvbnValidator", function() { return zxcvbnValidator; });
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zxcvbn */ "./node_modules/zxcvbn/lib/main.js");
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var zxcvbn = zxcvbn__WEBPACK_IMPORTED_MODULE_0__;
/**
 * @param {?} minStrength
 * @return {?}
 */
function zxcvbnValidator(minStrength) {
    return function (control) {
        /** @type {?} */
        var response = null;
        if (control.value && control.value.length > 0) {
            /** @type {?} */
            var result = zxcvbn(control.value);
            if (result.score < minStrength) {
                response = {
                    'zxcvbn': result.feedback
                };
            }
        }
        return response;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJhbGV4YW5kZXJuaWNrZWwtYW5ndWxhci16eGN2Ym4uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BtcmFsZXhhbmRlcm5pY2tlbC9hbmd1bGFyLXp4Y3Zibi9saWIvenhjdmJuLnZhbGlkYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgenhjdmJuXyBmcm9tICd6eGN2Ym4nO1xuXG5jb25zdCB6eGN2Ym4gPSB6eGN2Ym5fOyAvLyBmaXggZm9yIHJvbGx1cC1lcnJvciBcImNhbm5vdCBjYWxsIG5hbWVzcGFjZS4uLlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVpYQ1ZCTlZhbGlkYXRvclJlc3VsdCB7XG4gIHp4Y3ZibjogenhjdmJuXy5aWENWQk5GZWVkYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHp4Y3ZiblZhbGlkYXRvcihtaW5TdHJlbmd0aDogenhjdmJuXy5aWENWQk5TY29yZSk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBJWlhDVkJOVmFsaWRhdG9yUmVzdWx0IHzDgsKgbnVsbCA9PiB7XG4gICAgbGV0IHJlc3BvbnNlOiBJWlhDVkJOVmFsaWRhdG9yUmVzdWx0IHzDgsKgbnVsbCA9IG51bGw7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXN1bHQ6IHp4Y3Zibl8uWlhDVkJOUmVzdWx0ID0genhjdmJuKGNvbnRyb2wudmFsdWUpO1xuICAgICAgaWYgKHJlc3VsdC5zY29yZSA8IG1pblN0cmVuZ3RoKSB7XG4gICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICd6eGN2Ym4nOiByZXN1bHQuZmVlZGJhY2tcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7SUFFTSxNQUFNLEdBQUcsT0FBTzs7Ozs7QUFNdEIsU0FBZ0IsZUFBZSxDQUFDLFdBQWdDO0lBQzlELE9BQU8sVUFBQyxPQUF3Qjs7WUFDMUIsUUFBUSxHQUFrQyxJQUFJO1FBQ2xELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUN2QyxNQUFNLEdBQXlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzFELElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEVBQUU7Z0JBQzlCLFFBQVEsR0FBRztvQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7aUJBQzFCLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7S0FDakIsQ0FBQztDQUNIOzs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"center-block\">Password:\n  <input\n    [attr.type]=\"inputType\"\n    class=\"form-control\"\n    [formControl]=\"password\"\n    placeholder=\"Please enter your desired password\">\n  <a *ngIf=\"inputType === 'password'\" (click)=\"showPassword()\">\n    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n      <path fill=\"#000000\" d=\"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z\" />\n    </svg>\n  </a>\n  <a *ngIf=\"inputType === 'text'\" (click)=\"hidePassword()\">\n    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n      <path fill=\"#000000\" d=\"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z\" />\n    </svg>\n  </a>\n</label>\n<div\n  class=\"feedback\"\n  *ngIf=\"password.errors && password.errors.zxcvbn\">\n  <div\n    class=\"warning\"\n    *ngIf=\"password.errors.zxcvbn.warning\">\n    <h3>Warning</h3>\n    <p>{{ password.errors.zxcvbn.warning }}</p>\n  </div>\n  <div\n    class=\"suggestions\"\n    *ngIf=\"password.errors.zxcvbn.suggestions\">\n    <h3>Suggestions</h3>\n    <p *ngFor=\"let suggestion of password.errors.zxcvbn.suggestions\">{{ suggestion }}</p>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mralexandernickel_angular_zxcvbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mralexandernickel/angular-zxcvbn */ "./dist/angular-zxcvbn/fesm5/mralexandernickel-angular-zxcvbn.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.inputType = 'password';
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.password, [
            Object(_mralexandernickel_angular_zxcvbn__WEBPACK_IMPORTED_MODULE_2__["zxcvbnValidator"])(2)
        ]);
    }
    AppComponent.prototype.showPassword = function () {
        this.inputType = 'text';
    };
    AppComponent.prototype.hidePassword = function () {
        this.inputType = 'password';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/mralexandernickel/angular-zxcvbn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map