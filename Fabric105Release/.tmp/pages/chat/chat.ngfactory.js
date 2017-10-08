/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './chat';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../services/onymos-services';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from 'ionic-angular/util/events';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/components/toolbar/toolbar';
import * as import26 from '@angular/core/src/linker/template_ref';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from '@angular/common/src/directives/ng_if';
import * as import34 from 'ionic-angular/components/navbar/navbar';
import * as import35 from 'ionic-angular/components/list/list';
import * as import36 from 'ionic-angular/components/content/content';
import * as import37 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import38 from 'ionic-angular/components/button/button';
export var Wrapper_Chat = (function () {
    function Wrapper_Chat(p0, p1, p2, p3) {
        this.changed = false;
        this.context = new import0.Chat(p0, p1, p2, p3);
    }
    Wrapper_Chat.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Chat;
}());
var renderType_Chat_Host = null;
var _View_Chat_Host0 = (function (_super) {
    __extends(_View_Chat_Host0, _super);
    function _View_Chat_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Chat_Host0, renderType_Chat_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Chat_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-chat', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Chat0(this.viewUtils, this.injector(0), this._appEl_0);
        this._OnymosServices_0_4 = new import4.OnymosServices();
        this._Chat_0_5 = new Wrapper_Chat(this.parentInjector.get(import9.NavController), this._OnymosServices_0_4, compView_0.ref, this.parentInjector.get(import10.Events));
        this._appEl_0.initComponent(this._Chat_0_5.context, [], compView_0);
        compView_0.create(this._Chat_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Chat_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import4.OnymosServices) && (0 === requestNodeIndex))) {
            return this._OnymosServices_0_4;
        }
        if (((token === import0.Chat) && (0 === requestNodeIndex))) {
            return this._Chat_0_5.context;
        }
        return notFoundResult;
    };
    _View_Chat_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Chat_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Chat_Host0;
}(import1.AppView));
function viewFactory_Chat_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Chat_Host === null)) {
        (renderType_Chat_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_Chat_Host0(viewUtils, parentInjector, declarationEl);
}
export var ChatNgFactory = new import12.ComponentFactory('page-chat', viewFactory_Chat_Host0, import0.Chat);
var styles_Chat = [];
var renderType_Chat = null;
var _View_Chat0 = (function (_super) {
    __extends(_View_Chat0, _super);
    function _View_Chat0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Chat0, renderType_Chat, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Chat0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import14.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import9.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n		', null);
        this._el_4 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_4, 'start', '');
        this._ToolbarItem_4_3 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import16.QueryList();
        this._text_5 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_6 = this.renderer.createText(this._el_4, '\n		', null);
        this._text_7 = this.renderer.createText(null, '\n		', null);
        this._el_8 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_8 = new import3.AppElement(8, 2, this, this._el_8);
        var compView_8 = import17.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(8), this._appEl_8);
        this._ToolbarTitle_8_4 = new import17.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_8), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_8.initComponent(this._ToolbarTitle_8_4.context, [], compView_8);
        compView_8.create(this._ToolbarTitle_8_4.context, [[]], null);
        this._text_9 = this.renderer.createText(null, '\n		', null);
        this._el_10 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_10, 'end', '');
        this._ToolbarItem_10_3 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_10_0 = new import16.QueryList();
        this._text_11 = this.renderer.createText(this._el_10, '\n			', null);
        this._text_12 = this.renderer.createText(this._el_10, '\n			', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._appEl_13 = new import3.AppElement(13, 10, this, this._anchor_13);
        this._TemplateRef_13_5 = new import26.TemplateRef_(this._appEl_13, viewFactory_Chat1);
        this._NgIf_13_6 = new import18.Wrapper_NgIf(this._appEl_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_10, '\n		', null);
        this._text_15 = this.renderer.createText(null, '\n\n	', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [].concat([this._el_4]),
            [].concat([this._el_10]),
            [].concat([
                this._text_3,
                this._text_7,
                this._el_8,
                this._text_9,
                this._text_15
            ])
        ], null);
        this._text_16 = this.renderer.createText(this._el_0, '\n', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_18 = new import3.AppElement(18, null, this, this._el_18);
        var compView_18 = import19.viewFactory_Content0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Content_18_4 = new import19.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_18), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_18.initComponent(this._Content_18_4.context, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n	', null);
        this._el_20 = this.renderer.createElement(null, 'h4', null);
        this._text_21 = this.renderer.createText(this._el_20, 'You have entered the CHAT', null);
        this._text_22 = this.renderer.createText(null, '\n\n	', null);
        this._el_23 = this.renderer.createElement(null, 'ion-list', null);
        this._List_23_3 = new import20.Wrapper_List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_23), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_24 = this.renderer.createText(this._el_23, '\n		', null);
        this._text_25 = this.renderer.createText(this._el_23, '\n	', null);
        this._text_26 = this.renderer.createText(null, '\n', null);
        compView_18.create(this._Content_18_4.context, [
            [],
            [].concat([
                this._text_19,
                this._el_20,
                this._text_22,
                this._el_23,
                this._text_26
            ]),
            []
        ], null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        this._expr_3 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27
        ], [], []);
        return null;
    };
    _View_Chat0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarItem_4_3.context;
        }
        if (((token === import32.ToolbarTitle) && (8 === requestNodeIndex))) {
            return this._ToolbarTitle_8_4.context;
        }
        if (((token === import26.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import33.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import31.ToolbarItem) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ToolbarItem_10_3.context;
        }
        if (((token === import34.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import25.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Header_0_3.context;
        }
        if (((token === import35.List) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._List_23_3.context;
        }
        if (((token === import36.Content) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Content_18_4.context;
        }
        return notFoundResult;
    };
    _View_Chat0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        this._ToolbarItem_4_3.detectChangesInternal(this, this._el_4, throwOnChange);
        if (this._ToolbarTitle_8_4.detectChangesInternal(this, this._el_8, throwOnChange)) {
            this._appEl_8.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_10_3.detectChangesInternal(this, this._el_10, throwOnChange);
        var currVal_2 = this.context.authenticated;
        this._NgIf_13_6.check_ngIf(currVal_2, throwOnChange, false);
        this._NgIf_13_6.detectChangesInternal(this, this._anchor_13, throwOnChange);
        if (this._Content_18_4.detectChangesInternal(this, this._el_18, throwOnChange)) {
            this._appEl_18.componentView.markAsCheckOnce();
        }
        this._List_23_3.detectChangesInternal(this, this._el_23, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([]);
                this._ToolbarItem_4_3.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_10_0.dirty) {
                this._query_Button_10_0.reset([this._appEl_13.mapNestedViews(_View_Chat1, function (nestedView) {
                        return [nestedView._Button_0_4.context];
                    })]);
                this._ToolbarItem_10_3.context._buttons = this._query_Button_10_0;
                this._query_Button_10_0.notifyOnChanges();
            }
        }
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._Content_18_4.context._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_18, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Chat0.prototype.destroyInternal = function () {
        this._Content_18_4.context.ngOnDestroy();
    };
    return _View_Chat0;
}(import1.AppView));
export function viewFactory_Chat0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Chat === null)) {
        (renderType_Chat = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_Chat, {}));
    }
    return new _View_Chat0(viewUtils, parentInjector, declarationEl);
}
var _View_Chat1 = (function (_super) {
    __extends(_View_Chat1, _super);
    function _View_Chat1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Chat1, renderType_Chat, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Chat1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'ion-button', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import37.viewFactory_Button0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Button_0_4 = new import37.Wrapper_Button(null, '', this.parent.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Button_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n				Logout\n			', null);
        compView_0.create(this._Button_0_4.context, [[].concat([this._text_1])], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_Chat1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import38.Button) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Button_0_4.context;
        }
        return notFoundResult;
    };
    _View_Chat1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Button_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_0_4.context.ngAfterContentInit();
            }
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Chat1.prototype.dirtyParentQueriesInternal = function () {
        this.parent._query_Button_10_0.setDirty();
    };
    _View_Chat1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.socialLogout() !== false);
        return (true && pd_0);
    };
    return _View_Chat1;
}(import1.AppView));
function viewFactory_Chat1(viewUtils, parentInjector, declarationEl) {
    return new _View_Chat1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=chat.ngfactory.js.map