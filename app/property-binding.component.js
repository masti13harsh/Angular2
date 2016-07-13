System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.hobbiesChangedEvent = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChangedEvent.emit(hobbies);
                };
                __decorate([
                    core_1.Input('myName'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "name", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n    <h2>This is child component!</h2>\n    <p>Hii {{name}}</p>\n    <h3>Enter your hobbies: </h3>\n    <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies/>\n  ",
                        outputs: ['hobbiesChangedEvent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7b0JBQ21CLFNBQUksR0FBRyxFQUFFLENBQUM7b0JBQzNCLHdCQUFtQixHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO2dCQUtuRCxDQUFDO2dCQUhDLG1EQUFnQixHQUFoQixVQUFrQixPQUFlO29CQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUxEO29CQUFDLFlBQUssQ0FBQyxRQUFRLENBQUM7O3NFQUFBO2dCQVpsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSwwTEFLVDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDakMsQ0FBQzs7NENBQUE7Z0JBU0YsK0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtEQU9DLENBQUEiLCJmaWxlIjoicHJvcGVydHktYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXByb3BlcnR5LWJpbmRpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5UaGlzIGlzIGNoaWxkIGNvbXBvbmVudCE8L2gyPlxuICAgIDxwPkhpaSB7e25hbWV9fTwvcD5cbiAgICA8aDM+RW50ZXIgeW91ciBob2JiaWVzOiA8L2gzPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJvbkhvYmJpZXNDaGFuZ2VkKGhvYmJpZXMudmFsdWUpXCIgI2hvYmJpZXMvPlxuICBgLFxuICBvdXRwdXRzOiBbJ2hvYmJpZXNDaGFuZ2VkRXZlbnQnXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5QmluZGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgnbXlOYW1lJykgbmFtZSA9ICcnO1xuICBob2JiaWVzQ2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25Ib2JiaWVzQ2hhbmdlZCAoaG9iYmllczogc3RyaW5nKSB7XG4gICAgdGhpcy5ob2JiaWVzQ2hhbmdlZEV2ZW50LmVtaXQoaG9iYmllcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
