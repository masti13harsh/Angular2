System.register(['angular2/core', './unless.directive'], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var CustomDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            CustomDirectiveComponent = (function () {
                function CustomDirectiveComponent() {
                }
                CustomDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-custom-component',
                        template: "\n    <h2>Custom Directive Component</h2>\n    <div>\n      <label htmlFor=\"condition\">Enter true or false: </label>\n      <input type=\"text\" #condition (keyup)=\"0\"/>\n    </div>\n    <div *myUnless=\"condition.value != 'false'\">\n      Only show if 'false' is selected.\n    </div>\n  ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomDirectiveComponent);
                return CustomDirectiveComponent;
            }());
            exports_1("CustomDirectiveComponent", CustomDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbURpcmVjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFqQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixRQUFRLEVBQUUsd1NBU1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDOUIsQ0FBQzs7NENBQUE7Z0JBSUYsK0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtEQUVDLENBQUEiLCJmaWxlIjoiY3VzdG9tRGlyZWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tICcuL3VubGVzcy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jdXN0b20tY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDI+Q3VzdG9tIERpcmVjdGl2ZSBDb21wb25lbnQ8L2gyPlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmRpdGlvblwiPkVudGVyIHRydWUgb3IgZmFsc2U6IDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29uZGl0aW9uIChrZXl1cCk9XCIwXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm15VW5sZXNzPVwiY29uZGl0aW9uLnZhbHVlICE9ICdmYWxzZSdcIj5cbiAgICAgIE9ubHkgc2hvdyBpZiAnZmFsc2UnIGlzIHNlbGVjdGVkLlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbVW5sZXNzRGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIEN1c3RvbURpcmVjdGl2ZUNvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
