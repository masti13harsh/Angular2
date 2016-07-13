System.register(['angular2/core', './services/logging.service', './services/calculator.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this.result = '';
                }
                Component1Component.prototype.onSendClick = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onAddClick = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component.prototype.onMultiplyClick = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n    <div class=\"container\">\n      <input type=\"text\" #message/>\n      <button (click)=\"onSendClick(message.value)\">Send</button>\n    </div>\n    <div class=\"container\">\n      <input type=\"text\" #num1/>\n      <input type=\"text\" #num2/>\n      <p>{{result}}</p>\n      <button (click)=\"onAddClick(num1.value, num2.value)\">Add</button>\n      <button (click)=\"onMultiplyClick(num1.value, num2.value)\">Multiply</button>\n    </div>\n  ",
                        providers: [calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUVFLDZCQUFxQixlQUErQixFQUFVLGtCQUFxQztvQkFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBRG5HLFdBQU0sR0FBRyxFQUFFLENBQUM7Z0JBQzBGLENBQUM7Z0JBRXZHLHlDQUFXLEdBQVgsVUFBWSxPQUFlO29CQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLElBQVk7b0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFFRCw2Q0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxJQUFZO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBaENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBQyx3Y0FZUjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztxQkFDL0IsQ0FBQzs7dUNBQUE7Z0JBaUJGLDBCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxxREFlQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtMScsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZS8+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJvblNlbmRDbGljayhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMS8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMi8+XG4gICAgICA8cD57e3Jlc3VsdH19PC9wPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGRDbGljayhudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseUNsaWNrKG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+TXVsdGlwbHk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbQ2FsY3VsYXRvclNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudHtcbiAgcmVzdWx0ID0gJyc7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSkge31cblxuICBvblNlbmRDbGljayhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG4gIH1cblxuICBvbkFkZENsaWNrKG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXN1bHQgPSAnJyArIHRoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwgK251bTIpO1xuICB9XG5cbiAgb25NdWx0aXBseUNsaWNrKG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXN1bHQgPSAnJyArIHRoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
