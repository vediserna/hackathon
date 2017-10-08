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
import * as import0 from './digime';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../services/onymos-services';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import23 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import25 from '../../directives/auto-resize/auto-resize.ngfactory';
import * as import26 from 'ionic-angular/config/config';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from 'ionic-angular/navigation/view-controller';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from 'ionic-angular/components/toolbar/toolbar';
import * as import31 from 'ionic-angular/components/menu/menu-controller';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from '@angular/core/src/linker/template_ref';
import * as import36 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from 'ionic-angular/components/item/item';
import * as import39 from 'ionic-angular/platform/platform';
import * as import40 from 'ionic-angular/components/icon/icon';
import * as import41 from 'ionic-angular/components/button/button';
import * as import42 from 'ionic-angular/components/menu/menu-toggle';
import * as import43 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import44 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import45 from 'ionic-angular/components/navbar/navbar';
import * as import46 from '@angular/common/src/directives/ng_for';
import * as import47 from '@angular/forms/src/directives/ng_model';
import * as import48 from '@angular/forms/src/directives/ng_control';
import * as import49 from '@angular/forms/src/directives/ng_control_status';
import * as import50 from 'ionic-angular/components/input/input';
import * as import51 from '../../directives/auto-resize/auto-resize';
import * as import52 from 'ionic-angular/components/content/content';
export var Wrapper_DigiMe = (function () {
    function Wrapper_DigiMe(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.DigiMe(p0, p1, p2);
    }
    Wrapper_DigiMe.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_DigiMe;
}());
var renderType_DigiMe_Host = null;
var _View_DigiMe_Host0 = (function (_super) {
    __extends(_View_DigiMe_Host0, _super);
    function _View_DigiMe_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DigiMe_Host0, renderType_DigiMe_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_DigiMe_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-digime', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DigiMe0(this.viewUtils, this.injector(0), this._appEl_0);
        this._OnymosServices_0_4 = new import4.OnymosServices();
        this._DigiMe_0_5 = new Wrapper_DigiMe(this.parentInjector.get(import9.NavController), this._OnymosServices_0_4, compView_0.ref);
        this._appEl_0.initComponent(this._DigiMe_0_5.context, [], compView_0);
        compView_0.create(this._DigiMe_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_DigiMe_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import4.OnymosServices) && (0 === requestNodeIndex))) {
            return this._OnymosServices_0_4;
        }
        if (((token === import0.DigiMe) && (0 === requestNodeIndex))) {
            return this._DigiMe_0_5.context;
        }
        return notFoundResult;
    };
    _View_DigiMe_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DigiMe_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DigiMe_Host0;
}(import1.AppView));
function viewFactory_DigiMe_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DigiMe_Host === null)) {
        (renderType_DigiMe_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_DigiMe_Host0(viewUtils, parentInjector, declarationEl);
}
export var DigiMeNgFactory = new import11.ComponentFactory('page-digime', viewFactory_DigiMe_Host0, import0.DigiMe);
var styles_DigiMe = [];
var renderType_DigiMe = null;
var _View_DigiMe0 = (function (_super) {
    __extends(_View_DigiMe0, _super);
    function _View_DigiMe0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DigiMe0, renderType_DigiMe, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_DigiMe0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import28.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import9.NavController, null), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n		', null);
        this._el_4 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_4, 'start', '');
        this._ToolbarItem_4_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import15.QueryList();
        this._text_5 = this.renderer.createText(this._el_4, '\n			', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_6, 'menuToggle', '');
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import16.viewFactory_Button0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Button_6_4 = new import16.Wrapper_Button('', '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_6), this.renderer);
        this._MenuToggle_6_5 = new import17.Wrapper_MenuToggle(this.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_6), this.parentInjector.get(import28.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_6_6 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_6), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_6_0 = new import15.QueryList();
        this._appEl_6.initComponent(this._Button_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, '\n				', null);
        this._el_8 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_8, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_8, 'role', 'img');
        this._Icon_8_3 = new import18.Wrapper_Icon(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_8), this.renderer);
        this._text_9 = this.renderer.createText(null, '\n			', null);
        compView_6.create(this._Button_6_4.context, [[].concat([
                this._text_7,
                this._el_8,
                this._text_9
            ])], null);
        this._text_10 = this.renderer.createText(this._el_4, '\n		', null);
        this._text_11 = this.renderer.createText(null, '\n		', null);
        this._el_12 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_12 = new import3.AppElement(12, 2, this, this._el_12);
        var compView_12 = import19.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(12), this._appEl_12);
        this._ToolbarTitle_12_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_12), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_12.initComponent(this._ToolbarTitle_12_4.context, [], compView_12);
        this._text_13 = this.renderer.createText(null, 'SenseiChat', null);
        compView_12.create(this._ToolbarTitle_12_4.context, [[].concat([this._text_13])], null);
        this._text_14 = this.renderer.createText(null, '\n	', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [].concat([this._el_4]),
            [],
            [].concat([
                this._text_3,
                this._text_11,
                this._el_12,
                this._text_14
            ])
        ], null);
        this._text_15 = this.renderer.createText(this._el_0, '\n', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_17 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_17 = new import3.AppElement(17, null, this, this._el_17);
        var compView_17 = import20.viewFactory_Content0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Content_17_4 = new import20.Wrapper_Content(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_17.initComponent(this._Content_17_4.context, [], compView_17);
        this._text_18 = this.renderer.createText(null, '\n		', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_19 = new import3.AppElement(19, 17, this, this._anchor_19);
        this._TemplateRef_19_5 = new import35.TemplateRef_(this._appEl_19, viewFactory_DigiMe1);
        this._NgFor_19_6 = new import21.Wrapper_NgFor(this._appEl_19.vcRef, this._TemplateRef_19_5, this.parentInjector.get(import36.IterableDiffers), this.ref);
        this._text_20 = this.renderer.createText(null, '\n\n		', null);
        this._el_21 = this.renderer.createElement(null, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_21, 'auto-resize', '');
        this.renderer.setElementAttribute(this._el_21, 'class', 'chat-message-textarea');
        this.renderer.setElementAttribute(this._el_21, 'placeholder', 'Enter your message here...');
        this._appEl_21 = new import3.AppElement(21, 17, this, this._el_21);
        var compView_21 = import24.viewFactory_TextArea0(this.viewUtils, this.injector(21), this._appEl_21);
        this._NgModel_21_4 = new import22.Wrapper_NgModel(null, null, null, null);
        this._NgControl_21_5 = this._NgModel_21_4.context;
        this._NgControlStatus_21_6 = new import23.Wrapper_NgControlStatus(this._NgControl_21_5);
        this._TextArea_21_7 = new import24.Wrapper_TextArea(this.parentInjector.get(import26.Config), this.parentInjector.get(import37.Form), this.parentInjector.get(import38.Item, null), this.parentInjector.get(import29.App), this.parentInjector.get(import39.Platform), new import27.ElementRef(this._el_21), this.renderer, this._Content_17_4.context, this.parentInjector.get(import9.NavController, null), this._NgControl_21_5);
        this._AutoResize_21_8 = new import25.Wrapper_AutoResize(new import27.ElementRef(this._el_21));
        this._appEl_21.initComponent(this._TextArea_21_7.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n		', null);
        compView_21.create(this._TextArea_21_7.context, [], null);
        this._text_23 = this.renderer.createText(null, '\n\n	', null);
        this._el_24 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'chat-send-button');
        this.renderer.setElementAttribute(this._el_24, 'ion-button', '');
        this._appEl_24 = new import3.AppElement(24, 17, this, this._el_24);
        var compView_24 = import16.viewFactory_Button0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Button_24_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_24), this.renderer);
        this._appEl_24.initComponent(this._Button_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, '\n		Send\n	', null);
        compView_24.create(this._Button_24_4.context, [[].concat([this._text_25])], null);
        this._text_26 = this.renderer.createText(null, '\n	', null);
        this._text_27 = this.renderer.createText(null, '\n\n			', null);
        this._text_28 = this.renderer.createText(null, '\n\n			', null);
        this._text_29 = this.renderer.createText(null, '\n\n', null);
        compView_17.create(this._Content_17_4.context, [
            [],
            [].concat([
                this._text_18,
                this._appEl_19,
                this._text_20,
                this._el_21,
                this._text_23,
                this._el_24,
                this._text_26,
                this._text_27,
                this._text_28,
                this._text_29
            ]),
            []
        ], null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this._expr_4 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
        this._expr_7 = import8.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_21, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_21, 'input', this.eventHandler(this._handle_input_21_1.bind(this)));
        var subscription_0 = this._NgModel_21_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        this._expr_12 = import8.UNINITIALIZED;
        this._expr_13 = import8.UNINITIALIZED;
        this._expr_14 = import8.UNINITIALIZED;
        this._expr_15 = import8.UNINITIALIZED;
        this._expr_16 = import8.UNINITIALIZED;
        this._expr_17 = import8.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_DigiMe0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.Icon) && (8 === requestNodeIndex))) {
            return this._Icon_8_3.context;
        }
        if (((token === import41.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Button_6_4.context;
        }
        if (((token === import42.MenuToggle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._MenuToggle_6_5.context;
        }
        if (((token === import43.ToolbarItem) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._ToolbarItem_6_6.context;
        }
        if (((token === import43.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarItem_4_3.context;
        }
        if (((token === import44.ToolbarTitle) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._ToolbarTitle_12_4.context;
        }
        if (((token === import45.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import30.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Header_0_3.context;
        }
        if (((token === import35.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import46.NgFor) && (19 === requestNodeIndex))) {
            return this._NgFor_19_6.context;
        }
        if (((token === import47.NgModel) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._NgModel_21_4.context;
        }
        if (((token === import48.NgControl) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._NgControl_21_5;
        }
        if (((token === import49.NgControlStatus) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._NgControlStatus_21_6.context;
        }
        if (((token === import50.TextArea) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._TextArea_21_7.context;
        }
        if (((token === import51.AutoResize) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._AutoResize_21_8.context;
        }
        if (((token === import41.Button) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Button_24_4.context;
        }
        if (((token === import52.Content) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Content_17_4.context;
        }
        return notFoundResult;
    };
    _View_DigiMe0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        this._ToolbarItem_4_3.detectChangesInternal(this, this._el_4, throwOnChange);
        if (this._Button_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_6_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_6_5.detectChangesInternal(this, this._el_6, throwOnChange);
        this._ToolbarItem_6_6.detectChangesInternal(this, this._el_6, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_8_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_8_3.detectChangesInternal(this, this._el_8, throwOnChange);
        if (this._ToolbarTitle_12_4.detectChangesInternal(this, this._el_12, throwOnChange)) {
            this._appEl_12.componentView.markAsCheckOnce();
        }
        if (this._Content_17_4.detectChangesInternal(this, this._el_17, throwOnChange)) {
            this._appEl_17.componentView.markAsCheckOnce();
        }
        var currVal_8 = this.context.messages;
        this._NgFor_19_6.check_ngForOf(currVal_8, throwOnChange, false);
        this._NgFor_19_6.detectChangesInternal(this, this._anchor_19, throwOnChange);
        var currVal_11 = this.context.messageContent;
        this._NgModel_21_4.check_model(currVal_11, throwOnChange, false);
        this._NgModel_21_4.detectChangesInternal(this, this._el_21, throwOnChange);
        this._NgControlStatus_21_6.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_18 = 'Enter your message here...';
        this._TextArea_21_7.check_placeholder(currVal_18, throwOnChange, false);
        this._TextArea_21_7.detectChangesInternal(this, this._el_21, throwOnChange);
        this._AutoResize_21_8.detectChangesInternal(this, this._el_21, throwOnChange);
        if (this._Button_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_6_0.dirty) {
                this._query_Button_6_0.reset([this._Button_6_4.context]);
                this._ToolbarItem_6_6.context._buttons = this._query_Button_6_0;
                this._query_Button_6_0.notifyOnChanges();
            }
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_6_4.context]);
                this._ToolbarItem_4_3.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_6_4.context.ngAfterContentInit();
            }
            this._TextArea_21_7.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Button_24_4.context.ngAfterContentInit();
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
        var currVal_4 = this._MenuToggle_6_5.context.isHidden;
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_6, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_8_3.context._hidden;
        if (import5.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_8, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_17_4.context._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_17, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_12 = this._NgControlStatus_21_6.context.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_21, 'ng-untouched', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_21_6.context.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_21, 'ng-touched', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_21_6.context.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_21, 'ng-pristine', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_21_6.context.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_21, 'ng-dirty', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_21_6.context.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_21, 'ng-valid', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_21_6.context.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_21, 'ng-invalid', currVal_17);
            this._expr_17 = currVal_17;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_DigiMe0.prototype.destroyInternal = function () {
        this._Icon_8_3.context.ngOnDestroy();
        this._NgModel_21_4.context.ngOnDestroy();
        this._TextArea_21_7.context.ngOnDestroy();
        this._Content_17_4.context.ngOnDestroy();
    };
    _View_DigiMe0.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_6_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_DigiMe0.prototype._handle_ngModelChange_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.messageContent = $event) !== false);
        return (true && pd_0);
    };
    _View_DigiMe0.prototype._handle_input_21_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._AutoResize_21_8.context.onInput($event.target) !== false);
        return (true && pd_0);
    };
    _View_DigiMe0.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.sendMessage() !== false);
        return (true && pd_0);
    };
    return _View_DigiMe0;
}(import1.AppView));
export function viewFactory_DigiMe0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DigiMe === null)) {
        (renderType_DigiMe = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_DigiMe, {}));
    }
    return new _View_DigiMe0(viewUtils, parentInjector, declarationEl);
}
var _View_DigiMe1 = (function (_super) {
    __extends(_View_DigiMe1, _super);
    function _View_DigiMe1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DigiMe1, renderType_DigiMe, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_DigiMe1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n		', null);
        this._expr_0 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_DigiMe1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import5.interpolate(2, '', this.context.$implicit.name, ': ', this.context.$implicit.body, '');
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DigiMe1;
}(import1.AppView));
function viewFactory_DigiMe1(viewUtils, parentInjector, declarationEl) {
    return new _View_DigiMe1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=digime.ngfactory.js.map