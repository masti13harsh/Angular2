System.register(['angular2/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectiveComponent = (function () {
                function AttributeDirectiveComponent() {
                }
                AttributeDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directive',
                        template: "\n      <div myHighlight [highlightColor]=\"'red'\">Highlight Me</div>\n      <br/>\n      <div myHighlight>Another Div</div>\n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectiveComponent);
                return AttributeDirectiveComponent;
            }());
            exports_1("AttributeDirectiveComponent", AttributeDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFaRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSxxSUFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFDbkMsQ0FBQzs7K0NBQUE7Z0JBSUYsa0NBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFFQUVDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLWRpcmVjdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hdHRyaWJ1dGUtZGlyZWN0aXZlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBteUhpZ2hsaWdodCBbaGlnaGxpZ2h0Q29sb3JdPVwiJ3JlZCdcIj5IaWdobGlnaHQgTWU8L2Rpdj5cbiAgICAgIDxici8+XG4gICAgICA8ZGl2IG15SGlnaGxpZ2h0PkFub3RoZXIgRGl2PC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSGlnaGxpZ2h0RGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZUNvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
