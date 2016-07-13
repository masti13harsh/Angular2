System.register(['angular2/core', './shoppingAddItem.component', './shoppingEditItem.component'], function(exports_1, context_1) {
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
    var core_1, shoppingAddItem_component_1, shoppingEditItem_component_1;
    var ShoppingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shoppingAddItem_component_1_1) {
                shoppingAddItem_component_1 = shoppingAddItem_component_1_1;
            },
            function (shoppingEditItem_component_1_1) {
                shoppingEditItem_component_1 = shoppingEditItem_component_1_1;
            }],
        execute: function() {
            ShoppingComponent = (function () {
                function ShoppingComponent() {
                    this.itemList = new Array();
                    this.selectedItem = null;
                }
                ShoppingComponent.prototype.onAddItemEvent = function (item) {
                    this.itemList.push({ name: item.name, amount: item.amount });
                };
                ShoppingComponent.prototype.onSelectingItemEvent = function (item) {
                    this.selectedItem = item;
                };
                ShoppingComponent.prototype.onDeleteItemEvent = function (item) {
                    this.itemList.splice(this.itemList.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-component',
                        template: "\n    <section>\n      <shopping-component-add-item (addItemEvent)=\"onAddItemEvent($event)\"></shopping-component-add-item>\n    </section>\n    <section>\n      <h3>Items in cart are: </h3>\n      <div>\n        <ul>\n          <li *ngFor=\"#item of itemList\" (click)=\"onSelectingItemEvent(item)\">{{item.name}} {{(item.amount)}}</li>\n        </ul>\n      </div>\n    </section>\n    <section *ngIf=\"selectedItem != null\">\n      <shopping-component-edit-item [item]=\"selectedItem\" (deleteItemEvent)=\"onDeleteItemEvent($event)\"></shopping-component-edit-item>\n    </section>\n  ",
                        directives: [shoppingAddItem_component_1.ShoppingComponentAddItem, shoppingEditItem_component_1.ShoppingComponentEditItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingComponent);
                return ShoppingComponent;
            }());
            exports_1("ShoppingComponent", ShoppingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFBQTtvQkFDRSxhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQWdDLENBQUM7b0JBQ3JELGlCQUFZLEdBQUcsSUFBSSxDQUFDO2dCQWN0QixDQUFDO2dCQVpDLDBDQUFjLEdBQWQsVUFBZSxJQUFJO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFFRCxnREFBb0IsR0FBcEIsVUFBcUIsSUFBSTtvQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLElBQUk7b0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFwQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsZ2xCQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9EQUF3QixFQUFFLHNEQUF5QixDQUFDO3FCQUNsRSxDQUFDOztxQ0FBQTtnQkFrQkYsd0JBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELGlEQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdDb21wb25lbnRBZGRJdGVtfSBmcm9tICcuL3Nob3BwaW5nQWRkSXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtTaG9wcGluZ0NvbXBvbmVudEVkaXRJdGVtfSBmcm9tICcuL3Nob3BwaW5nRWRpdEl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxzaG9wcGluZy1jb21wb25lbnQtYWRkLWl0ZW0gKGFkZEl0ZW1FdmVudCk9XCJvbkFkZEl0ZW1FdmVudCgkZXZlbnQpXCI+PC9zaG9wcGluZy1jb21wb25lbnQtYWRkLWl0ZW0+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgzPkl0ZW1zIGluIGNhcnQgYXJlOiA8L2gzPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtTGlzdFwiIChjbGljayk9XCJvblNlbGVjdGluZ0l0ZW1FdmVudChpdGVtKVwiPnt7aXRlbS5uYW1lfX0ge3soaXRlbS5hbW91bnQpfX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cbiAgICAgIDxzaG9wcGluZy1jb21wb25lbnQtZWRpdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChkZWxldGVJdGVtRXZlbnQpPVwib25EZWxldGVJdGVtRXZlbnQoJGV2ZW50KVwiPjwvc2hvcHBpbmctY29tcG9uZW50LWVkaXQtaXRlbT5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0NvbXBvbmVudEFkZEl0ZW0sIFNob3BwaW5nQ29tcG9uZW50RWRpdEl0ZW1dXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdDb21wb25lbnQge1xuICBpdGVtTGlzdCA9IG5ldyBBcnJheTx7bmFtZTpzdHJpbmcsIGFtb3VudDpudW1iZXJ9PigpO1xuICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuXG4gIG9uQWRkSXRlbUV2ZW50KGl0ZW0pIHtcbiAgICB0aGlzLml0ZW1MaXN0LnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgYW1vdW50OiBpdGVtLmFtb3VudH0pO1xuICB9XG5cbiAgb25TZWxlY3RpbmdJdGVtRXZlbnQoaXRlbSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgfVxuXG4gIG9uRGVsZXRlSXRlbUV2ZW50KGl0ZW0pIHtcbiAgICB0aGlzLml0ZW1MaXN0LnNwbGljZSh0aGlzLml0ZW1MaXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
