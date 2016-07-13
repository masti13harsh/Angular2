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
    var ShoppingComponentEditItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingComponentEditItem = (function () {
                function ShoppingComponentEditItem() {
                    this.item = { name: '', amount: 0 };
                    this.deleteItemEvent = new core_1.EventEmitter();
                }
                ShoppingComponentEditItem.prototype.onDeleteItemClick = function () {
                    this.deleteItemEvent.emit(this.item);
                };
                ShoppingComponentEditItem = __decorate([
                    core_1.Component({
                        selector: 'shopping-component-edit-item',
                        template: "\n    <h3>Edit Item</h3>\n    <div>\n      <label htmlFor=\"name\">Name: </label>\n      <input type=\"text\" [(ngModel)]=\"item.name\"/>\n    </div>\n    <div>\n      <label htmlFor=\"amount\">Amount: </label>\n      <input type=\"text\" [(ngModel)]=\"item.amount\"/>\n    </div>\n    <button (click)=\"onDeleteItemClick()\">Delete Item</button>\n  ",
                        inputs: ['item'],
                        outputs: ['deleteItemEvent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingComponentEditItem);
                return ShoppingComponentEditItem;
            }());
            exports_1("ShoppingComponentEditItem", ShoppingComponentEditItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nRWRpdEl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUFBO29CQUNFLFNBQUksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO29CQUU3QixvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBaUMsQ0FBQztnQkFLdEUsQ0FBQztnQkFIQyxxREFBaUIsR0FBakI7b0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQXpCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSw4QkFBOEI7d0JBQ3hDLFFBQVEsRUFBRSxnV0FXVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO3FCQUM3QixDQUFDOzs2Q0FBQTtnQkFVRixnQ0FBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsaUVBUUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZ0VkaXRJdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaG9wcGluZy1jb21wb25lbnQtZWRpdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDM+RWRpdCBJdGVtPC9oMz5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPkFtb3VudDogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIi8+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25EZWxldGVJdGVtQ2xpY2soKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+XG4gIGAsXG4gIGlucHV0czogWydpdGVtJ10sXG4gIG91dHB1dHM6IFsnZGVsZXRlSXRlbUV2ZW50J11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NvbXBvbmVudEVkaXRJdGVtIHtcbiAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcblxuICBkZWxldGVJdGVtRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFtb3VudDpudW1iZXJ9PigpO1xuXG4gIG9uRGVsZXRlSXRlbUNsaWNrKCkge1xuICAgIHRoaXMuZGVsZXRlSXRlbUV2ZW50LmVtaXQodGhpcy5pdGVtKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
