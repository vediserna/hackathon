/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
import * as import0 from './auto-resize';
export var Wrapper_AutoResize = (function () {
    function Wrapper_AutoResize(p0) {
        this.changed = false;
        this.context = new import0.AutoResize(p0);
    }
    Wrapper_AutoResize.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_AutoResize;
}());
//# sourceMappingURL=auto-resize.ngfactory.js.map