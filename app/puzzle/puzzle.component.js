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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n    <section class=\"setup\">\n      <h2>Game Setup</h2>\n      Enter your name please:\n      <input type=\"text\"  #name (keyup)=\"0\"/>\n    </section>\n\n    <section\n      [ngClass]=\"{\n        puzzle: true,\n        solved: switch1.value == switch1Number &&\n                switch2.value == switch2Number &&\n                switch3.value == switch3Number &&\n                switch4.value == switch4Number\n      }\"\n      [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n      >\n      <h2>The Puzzle | {{switch1.value == switch1Number &&\n              switch2.value == switch2Number &&\n              switch3.value == switch3Number &&\n              switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}</h2>\n      <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n      <br />\n      Switch 1: <input type=\"text\" #switch1 (keyup)=\"0\"/>\n      <br />\n      Switch 2: <input type=\"text\" #switch2 (keyup)=\"0\"/>\n      <br />\n      Switch 3: <input type=\"text\" #switch3 (keyup)=\"0\"/>\n      <br />\n      Switch 4: <input type=\"text\" #switch4 (keyup)=\"0\"/>\n      <br />\n    </section>\n\n    <h2 [ngStyle]=\"{display: switch1.value == switch1Number &&\n            switch2.value == switch2Number &&\n            switch3.value == switch3Number &&\n            switch4.value == switch4Number ? 'block' : 'none'}\">\n            Congratulations {{name.value}}, you did it!</h2>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQUFBO2dCQWVBLENBQUM7Z0JBVEMsa0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RixDQUFDO2dCQXhESDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsczZDQXNDVDtxQkFDRixDQUFDOzttQ0FBQTtnQkFpQkYsc0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXB1enpsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICAjbmFtZSAoa2V5dXApPVwiMFwiLz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvblxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXG4gICAgICB9XCJcbiAgICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCJcbiAgICAgID5cbiAgICAgIDxoMj5UaGUgUHV6emxlIHwge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcbiAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXG4gICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxuICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXIgPyAnU09MVkVEJyA6ICdOT1QgU09MVkVEJ319PC9oMj5cbiAgICAgIDxwPk9rLCB3ZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7bmFtZS52YWx1ZX19PC9zcGFuPjwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgU3dpdGNoIDE6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCIvPlxuICAgICAgPGJyIC8+XG4gICAgICBTd2l0Y2ggMjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIi8+XG4gICAgICA8YnIgLz5cbiAgICAgIFN3aXRjaCAzOiA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiLz5cbiAgICAgIDxiciAvPlxuICAgICAgU3dpdGNoIDQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCIvPlxuICAgICAgPGJyIC8+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPGgyIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcbiAgICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJlxuICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmXG4gICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXIgPyAnYmxvY2snIDogJ25vbmUnfVwiPlxuICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25zIHt7bmFtZS52YWx1ZX19LCB5b3UgZGlkIGl0ITwvaDI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcbiAgc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XG4gIHN3aXRjaDROdW1iZXI6IG51bWJlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyLCB0aGlzLnN3aXRjaDJOdW1iZXIsIHRoaXMuc3dpdGNoM051bWJlciwgdGhpcy5zd2l0Y2g0TnVtYmVyKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
