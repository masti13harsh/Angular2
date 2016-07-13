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
    var ShoppingComponentAddItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingComponentAddItem = (function () {
                function ShoppingComponentAddItem() {
                    this.item = { name: '', amount: 0 };
                    this.addItemEvent = new core_1.EventEmitter();
                }
                ShoppingComponentAddItem.prototype.onAddItemClick = function () {
                    this.addItemEvent.emit(this.item);
                };
                ShoppingComponentAddItem = __decorate([
                    core_1.Component({
                        selector: 'shopping-component-add-item',
                        template: "\n    <h3>Add new Item</h3>\n    <div>\n      <label htmlFor=\"name\">Name: </label>\n      <input type=\"text\" [(ngModel)]=\"item.name\"/>\n    </div>\n    <div>\n      <label htmlFor=\"amount\">Amount: </label>\n      <input type=\"text\" [(ngModel)]=\"item.amount\"/>\n    </div>\n    <button (click)=\"onAddItemClick()\">Add Item</button>\n  ",
                        outputs: ['addItemEvent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingComponentAddItem);
                return ShoppingComponentAddItem;
            }());
            exports_1("ShoppingComponentAddItem", ShoppingComponentAddItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nQWRkSXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBRTdCLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFrQyxDQUFDO2dCQUtwRSxDQUFDO2dCQUhDLGlEQUFjLEdBQWQ7b0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQXhCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSw2QkFBNkI7d0JBQ3ZDLFFBQVEsRUFBRSw2VkFXVDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7cUJBQzFCLENBQUM7OzRDQUFBO2dCQVVGLCtCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwrREFRQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nQWRkSXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctY29tcG9uZW50LWFkZC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDM+QWRkIG5ldyBJdGVtPC9oMz5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPkFtb3VudDogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIi8+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGRJdGVtQ2xpY2soKVwiPkFkZCBJdGVtPC9idXR0b24+XG4gIGAsXG4gIG91dHB1dHM6IFsnYWRkSXRlbUV2ZW50J11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NvbXBvbmVudEFkZEl0ZW0ge1xuICBpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xuXG4gIGFkZEl0ZW1FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXJ9PigpO1xuXG4gIG9uQWRkSXRlbUNsaWNrKCkge1xuICAgIHRoaXMuYWRkSXRlbUV2ZW50LmVtaXQodGhpcy5pdGVtKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
