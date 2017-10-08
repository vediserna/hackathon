import { Directive, HostListener, ElementRef } from "@angular/core";
export var AutoResize = (function () {
    function AutoResize(element) {
        this.element = element;
    }
    AutoResize.prototype.onInput = function (textArea) {
        this.resize();
    };
    AutoResize.prototype.ngOnInit = function () {
        this.resize();
    };
    AutoResize.prototype.resize = function () {
        var textAreaToResize = this.element.nativeElement.querySelector("textarea");
        if (textAreaToResize) {
            textAreaToResize.style.overflow = "hidden";
            textAreaToResize.style.height = "auto";
            textAreaToResize.style.height = textAreaToResize.scrollHeight + "px";
        } /* end if textAreaToResize */
    }; /* end resize */
    AutoResize.decorators = [
        { type: Directive, args: [{
                    selector: "ion-textarea[auto-resize]"
                },] },
    ];
    /** @nocollapse */
    AutoResize.ctorParameters = [
        { type: ElementRef, },
    ];
    AutoResize.propDecorators = {
        'onInput': [{ type: HostListener, args: ["input", ["$event.target"],] },],
    };
    return AutoResize;
}()); /* end export class AutoResize */
//# sourceMappingURL=auto-resize.js.map