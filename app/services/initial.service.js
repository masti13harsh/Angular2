System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var InitialService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            InitialService = (function () {
                function InitialService(http) {
                    this.http = http;
                    this.url = "https://api.github.com/users/mralexgray/repos";
                    this.callApi();
                }
                InitialService.prototype.callApi = function () {
                    var _this = this;
                    if (this.data) {
                        return Observable_1.Observable.of(this.data);
                    }
                    else {
                        console.log("made an external api request");
                        return this.http.get(this.url)
                            .map(function (res) { return res.json(); })
                            .do(function (res) { return _this.data = res; });
                    }
                };
                InitialService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InitialService);
                return InitialService;
            }());
            exports_1("InitialService", InitialService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2luaXRpYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFJRSx3QkFBb0IsSUFBVztvQkFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO29CQUZ2QixRQUFHLEdBQVUsK0NBQStDLENBQUM7b0JBR25FLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxnQ0FBTyxHQUFQO29CQUFBLGlCQVVDO29CQVRDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNiLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO3dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs2QkFDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzs2QkFDdEIsRUFBRSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQWYsQ0FBZSxDQUFDLENBQUM7b0JBQ3pDLENBQUM7Z0JBQ0gsQ0FBQztnQkFuQkg7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBcUJiLHFCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwyQ0FvQkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9pbml0aWFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0aWFsU2VydmljZSB7XG4gIHByaXZhdGUgZGF0YTphbnk7XG4gIHByaXZhdGUgdXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9tcmFsZXhncmF5L3JlcG9zXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwIDogSHR0cCkge1xuICAgIHRoaXMuY2FsbEFwaSgpO1xuICB9XG5cbiAgY2FsbEFwaSgpIHtcbiAgICBpZih0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJtYWRlIGFuIGV4dGVybmFsIGFwaSByZXF1ZXN0XCIpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpXG4gICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgIC5kbyhyZXMgPT4gdGhpcy5kYXRhID0gcmVzKTtcbiAgICB9XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
