System.register(['angular2/core', './services/initial.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, initial_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (initial_service_1_1) {
                initial_service_1 = initial_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(service) {
                    this.service = service;
                    console.log("constructor initialized");
                }
                AppComponent.prototype.onButtonClick = function () {
                    var _this = this;
                    this.service.callApi()
                        .subscribe(function (res) {
                        _this.result = res;
                        console.log(res);
                    }, null, function () { return console.log("Call complete"); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <button (click)=\"onButtonClick()\">Click Me</button>\n      <ul>\n        <li *ngFor=\"#item of result\">{{item.id}}</li>\n      </ul>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [initial_service_1.InitialService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map