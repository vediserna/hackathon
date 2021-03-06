/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/util/events';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/img/img.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from 'ionic-angular/platform/platform';
import * as import29 from 'ionic-angular/gestures/gesture-controller';
import * as import30 from 'ionic-angular/util/form';
import * as import31 from 'ionic-angular/components/item/item-reorder';
import * as import32 from 'ionic-angular/components/navbar/navbar';
import * as import33 from 'ionic-angular/components/toolbar/toolbar';
import * as import34 from 'ionic-angular/components/img/img';
import * as import35 from 'ionic-angular/components/icon/icon';
import * as import36 from 'ionic-angular/components/item/item';
import * as import37 from 'ionic-angular/components/list/list';
import * as import38 from 'ionic-angular/components/card/card';
import * as import39 from 'ionic-angular/components/content/content';
import * as import40 from '@angular/core/src/security';
export class Wrapper_Home {
  context:import0.Home;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.Home(p0,p1);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_Home_Host:import2.RenderComponentType = (null as any);
class _View_Home_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Home_0_4:Wrapper_Home;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Home_Host0,renderType_Home_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Home0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Home_0_4 = new Wrapper_Home(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.Events));
    this._appEl_0.initComponent(this._Home_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Home_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Home) && (0 === requestNodeIndex))) { return this._Home_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Home_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Home_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_Home_Host === (null as any))) { (renderType_Home_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Home_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeNgFactory:import11.ComponentFactory<import0.Home> = new import11.ComponentFactory<import0.Home>('page-home',viewFactory_Home_Host0,import0.Home);
const styles_Home:any[] = ([] as any[]);
var renderType_Home:import2.RenderComponentType = (null as any);
class _View_Home0 extends import1.AppView<import0.Home> {
  _el_0:any;
  _Header_0_3:import12.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import13.Wrapper_Navbar;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _Content_7_4:import14.Wrapper_Content;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import3.AppElement;
  _Img_12_4:import15.Wrapper_Img;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _Card_17_3:import16.Wrapper_Card;
  _text_18:any;
  _el_19:any;
  _List_19_3:import17.Wrapper_List;
  _text_20:any;
  _el_21:any;
  /*private*/ _appEl_21:import3.AppElement;
  _Item_21_4:import18.Wrapper_Item;
  _ItemContent_21_5:import18.Wrapper_ItemContent;
  _query_Label_21_0:import19.QueryList<any>;
  _query_Button_21_1:import19.QueryList<any>;
  _query_Icon_21_2:import19.QueryList<any>;
  _text_22:any;
  _el_23:any;
  _Icon_23_3:import20.Wrapper_Icon;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  /*private*/ _appEl_29:import3.AppElement;
  _Item_29_4:import18.Wrapper_Item;
  _ItemContent_29_5:import18.Wrapper_ItemContent;
  _query_Label_29_0:import19.QueryList<any>;
  _query_Button_29_1:import19.QueryList<any>;
  _query_Icon_29_2:import19.QueryList<any>;
  _text_30:any;
  _el_31:any;
  _Icon_31_3:import20.Wrapper_Icon;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  /*private*/ _appEl_37:import3.AppElement;
  _Item_37_4:import18.Wrapper_Item;
  _ItemContent_37_5:import18.Wrapper_ItemContent;
  _query_Label_37_0:import19.QueryList<any>;
  _query_Button_37_1:import19.QueryList<any>;
  _query_Icon_37_2:import19.QueryList<any>;
  _text_38:any;
  _el_39:any;
  _Icon_39_3:import20.Wrapper_Icon;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Home0,renderType_Home,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import23.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import13.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import24.App),this.parentInjector.get(import23.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n		',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n	',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._text_4
      ]
      )
    ]
    ,(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_7 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_7,'padding','');
    this._appEl_7 = new import3.AppElement(7,(null as any),this,this._el_7);
    var compView_7:any = import14.viewFactory_Content0(this.viewUtils,this.injector(7),this._appEl_7);
    this._Content_7_4 = new import14.Wrapper_Content(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_7),this.renderer,this.parentInjector.get(import24.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import23.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_7.initComponent(this._Content_7_4.context,([] as any[]),compView_7);
    this._text_8 = this.renderer.createText((null as any),'\n	',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'h4',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Welcome to Sensei',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n\n	',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'ion-img',(null as any));
    this.renderer.setElementAttribute(this._el_12,'height','80');
    this.renderer.setElementAttribute(this._el_12,'src','../../images/sensei.png');
    this.renderer.setElementAttribute(this._el_12,'width','80');
    this._appEl_12 = new import3.AppElement(12,7,this,this._el_12);
    var compView_12:any = import15.viewFactory_Img0(this.viewUtils,this.injector(12),this._appEl_12);
    this._Img_12_4 = new import15.Wrapper_Img(new import22.ElementRef(this._el_12),this.parentInjector.get(import28.Platform),this.parentInjector.get(import26.NgZone));
    this._appEl_12.initComponent(this._Img_12_4.context,([] as any[]),compView_12);
    compView_12.create(this._Img_12_4.context,([] as any[]),(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n\n	',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n		If you would like Sensei to help you with your life, you have to login in.\n	',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n\n	',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-card',(null as any));
    this._Card_17_3 = new import16.Wrapper_Card(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_17),this.renderer);
    this._text_18 = this.renderer.createText(this._el_17,'\n		\n		',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'ion-list',(null as any));
    this._List_19_3 = new import17.Wrapper_List(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_19),this.renderer,this.parentInjector.get(import29.GestureController));
    this._text_20 = this.renderer.createText(this._el_19,'\n\n			',(null as any));
    this._el_21 = this.renderer.createElement(this._el_19,'button',(null as any));
    this.renderer.setElementAttribute(this._el_21,'class','item item-block');
    this.renderer.setElementAttribute(this._el_21,'ion-item','');
    this._appEl_21 = new import3.AppElement(21,19,this,this._el_21);
    var compView_21:any = import18.viewFactory_Item0(this.viewUtils,this.injector(21),this._appEl_21);
    this._Item_21_4 = new import18.Wrapper_Item(this.parentInjector.get(import30.Form),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_21),this.renderer,this.parentInjector.get(import31.ItemReorder,(null as any)));
    this._ItemContent_21_5 = new import18.Wrapper_ItemContent();
    this._query_Label_21_0 = new import19.QueryList<any>();
    this._query_Button_21_1 = new import19.QueryList<any>();
    this._query_Icon_21_2 = new import19.QueryList<any>();
    this._appEl_21.initComponent(this._Item_21_4.context,([] as any[]),compView_21);
    this._text_22 = this.renderer.createText((null as any),'\n				',(null as any));
    this._el_23 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_23,'class','login-social-icon facebook');
    this.renderer.setElementAttribute(this._el_23,'item-left','');
    this.renderer.setElementAttribute(this._el_23,'name','logo-facebook');
    this.renderer.setElementAttribute(this._el_23,'role','img');
    this._Icon_23_3 = new import20.Wrapper_Icon(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_23),this.renderer);
    this._text_24 = this.renderer.createText((null as any),'\n				',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'h3',(null as any));
    this.renderer.setElementAttribute(this._el_25,'class','login-social-name');
    this._text_26 = this.renderer.createText(this._el_25,'Facebook',(null as any));
    this._text_27 = this.renderer.createText((null as any),'\n			',(null as any));
    this._query_Label_21_0.reset(([] as any[]));
    this._Item_21_4.context.contentLabel = this._query_Label_21_0.first;
    compView_21.create(this._Item_21_4.context,[
      ([] as any[]).concat([this._el_23]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_22,
        this._text_24,
        this._el_25,
        this._text_27
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_28 = this.renderer.createText(this._el_19,'\n\n			',(null as any));
    this._el_29 = this.renderer.createElement(this._el_19,'button',(null as any));
    this.renderer.setElementAttribute(this._el_29,'class','item item-block');
    this.renderer.setElementAttribute(this._el_29,'ion-item','');
    this._appEl_29 = new import3.AppElement(29,19,this,this._el_29);
    var compView_29:any = import18.viewFactory_Item0(this.viewUtils,this.injector(29),this._appEl_29);
    this._Item_29_4 = new import18.Wrapper_Item(this.parentInjector.get(import30.Form),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_29),this.renderer,this.parentInjector.get(import31.ItemReorder,(null as any)));
    this._ItemContent_29_5 = new import18.Wrapper_ItemContent();
    this._query_Label_29_0 = new import19.QueryList<any>();
    this._query_Button_29_1 = new import19.QueryList<any>();
    this._query_Icon_29_2 = new import19.QueryList<any>();
    this._appEl_29.initComponent(this._Item_29_4.context,([] as any[]),compView_29);
    this._text_30 = this.renderer.createText((null as any),'\n				',(null as any));
    this._el_31 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_31,'class','login-social-icon google');
    this.renderer.setElementAttribute(this._el_31,'item-left','');
    this.renderer.setElementAttribute(this._el_31,'name','logo-google');
    this.renderer.setElementAttribute(this._el_31,'role','img');
    this._Icon_31_3 = new import20.Wrapper_Icon(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_31),this.renderer);
    this._text_32 = this.renderer.createText((null as any),'\n				',(null as any));
    this._el_33 = this.renderer.createElement((null as any),'h3',(null as any));
    this.renderer.setElementAttribute(this._el_33,'class','login-social-name');
    this._text_34 = this.renderer.createText(this._el_33,'Google',(null as any));
    this._text_35 = this.renderer.createText((null as any),'\n			',(null as any));
    this._query_Label_29_0.reset(([] as any[]));
    this._Item_29_4.context.contentLabel = this._query_Label_29_0.first;
    compView_29.create(this._Item_29_4.context,[
      ([] as any[]).concat([this._el_31]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_30,
        this._text_32,
        this._el_33,
        this._text_35
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_36 = this.renderer.createText(this._el_19,'\n\n			',(null as any));
    this._el_37 = this.renderer.createElement(this._el_19,'button',(null as any));
    this.renderer.setElementAttribute(this._el_37,'class','item item-block');
    this.renderer.setElementAttribute(this._el_37,'ion-item','');
    this._appEl_37 = new import3.AppElement(37,19,this,this._el_37);
    var compView_37:any = import18.viewFactory_Item0(this.viewUtils,this.injector(37),this._appEl_37);
    this._Item_37_4 = new import18.Wrapper_Item(this.parentInjector.get(import30.Form),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_37),this.renderer,this.parentInjector.get(import31.ItemReorder,(null as any)));
    this._ItemContent_37_5 = new import18.Wrapper_ItemContent();
    this._query_Label_37_0 = new import19.QueryList<any>();
    this._query_Button_37_1 = new import19.QueryList<any>();
    this._query_Icon_37_2 = new import19.QueryList<any>();
    this._appEl_37.initComponent(this._Item_37_4.context,([] as any[]),compView_37);
    this._text_38 = this.renderer.createText((null as any),'\n				',(null as any));
    this._el_39 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_39,'class','login-social-icon twitter');
    this.renderer.setElementAttribute(this._el_39,'item-left','');
    this.renderer.setElementAttribute(this._el_39,'name','logo-twitter');
    this.renderer.setElementAttribute(this._el_39,'role','img');
    this._Icon_39_3 = new import20.Wrapper_Icon(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_39),this.renderer);
    this._text_40 = this.renderer.createText((null as any),'\n				',(null as any));
    this._el_41 = this.renderer.createElement((null as any),'h3',(null as any));
    this.renderer.setElementAttribute(this._el_41,'class','login-social-name');
    this._text_42 = this.renderer.createText(this._el_41,'Twitter',(null as any));
    this._text_43 = this.renderer.createText((null as any),'\n			',(null as any));
    this._query_Label_37_0.reset(([] as any[]));
    this._Item_37_4.context.contentLabel = this._query_Label_37_0.first;
    compView_37.create(this._Item_37_4.context,[
      ([] as any[]).concat([this._el_39]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_38,
        this._text_40,
        this._el_41,
        this._text_43
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_44 = this.renderer.createText(this._el_19,'\n\n		',(null as any));
    this._text_45 = this.renderer.createText(this._el_17,'\n\n	',(null as any));
    this._text_46 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_7.create(this._Content_7_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_8,
        this._el_9,
        this._text_11,
        this._el_12,
        this._text_13,
        this._el_14,
        this._text_16,
        this._el_17,
        this._text_46
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_21,'click',this.eventHandler(this._handle_click_21_0.bind(this)));
    this._expr_10 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_29,'click',this.eventHandler(this._handle_click_29_0.bind(this)));
    this._expr_13 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_37,'click',this.eventHandler(this._handle_click_37_0.bind(this)));
    this._expr_16 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._Navbar_2_4.context; }
    if (((token === import33.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Header_0_3.context; }
    if (((token === import34.Img) && (12 === requestNodeIndex))) { return this._Img_12_4.context; }
    if (((token === import35.Icon) && (23 === requestNodeIndex))) { return this._Icon_23_3.context; }
    if (((token === import36.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Item_21_4.context; }
    if (((token === import36.ItemContent) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._ItemContent_21_5.context; }
    if (((token === import35.Icon) && (31 === requestNodeIndex))) { return this._Icon_31_3.context; }
    if (((token === import36.Item) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._Item_29_4.context; }
    if (((token === import36.ItemContent) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._ItemContent_29_5.context; }
    if (((token === import35.Icon) && (39 === requestNodeIndex))) { return this._Icon_39_3.context; }
    if (((token === import36.Item) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Item_37_4.context; }
    if (((token === import36.ItemContent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._ItemContent_37_5.context; }
    if (((token === import37.List) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._List_19_3.context; }
    if (((token === import38.Card) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._Card_17_3.context; }
    if (((token === import39.Content) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._Content_7_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._Content_7_4.detectChangesInternal(this,this._el_7,throwOnChange)) { this._appEl_7.componentView.markAsCheckOnce(); }
    const currVal_3:any = '../../images/sensei.png';
    this._Img_12_4.check_src(currVal_3,throwOnChange,false);
    const currVal_4:any = '80';
    this._Img_12_4.check_width(currVal_4,throwOnChange,false);
    const currVal_5:any = '80';
    this._Img_12_4.check_height(currVal_5,throwOnChange,false);
    if (this._Img_12_4.detectChangesInternal(this,this._el_12,throwOnChange)) { this._appEl_12.componentView.markAsCheckOnce(); }
    this._Card_17_3.detectChangesInternal(this,this._el_17,throwOnChange);
    this._List_19_3.detectChangesInternal(this,this._el_19,throwOnChange);
    if (this._Item_21_4.detectChangesInternal(this,this._el_21,throwOnChange)) { this._appEl_21.componentView.markAsCheckOnce(); }
    this._ItemContent_21_5.detectChangesInternal(this,this._el_21,throwOnChange);
    const currVal_9:any = 'logo-facebook';
    this._Icon_23_3.check_name(currVal_9,throwOnChange,false);
    this._Icon_23_3.detectChangesInternal(this,this._el_23,throwOnChange);
    if (this._Item_29_4.detectChangesInternal(this,this._el_29,throwOnChange)) { this._appEl_29.componentView.markAsCheckOnce(); }
    this._ItemContent_29_5.detectChangesInternal(this,this._el_29,throwOnChange);
    const currVal_12:any = 'logo-google';
    this._Icon_31_3.check_name(currVal_12,throwOnChange,false);
    this._Icon_31_3.detectChangesInternal(this,this._el_31,throwOnChange);
    if (this._Item_37_4.detectChangesInternal(this,this._el_37,throwOnChange)) { this._appEl_37.componentView.markAsCheckOnce(); }
    this._ItemContent_37_5.detectChangesInternal(this,this._el_37,throwOnChange);
    const currVal_15:any = 'logo-twitter';
    this._Icon_39_3.check_name(currVal_15,throwOnChange,false);
    this._Icon_39_3.detectChangesInternal(this,this._el_39,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_21_1.dirty) {
        this._query_Button_21_1.reset(([] as any[]));
        this._Item_21_4.context._buttons = this._query_Button_21_1;
        this._query_Button_21_1.notifyOnChanges();
      }
      if (this._query_Icon_21_2.dirty) {
        this._query_Icon_21_2.reset([this._Icon_23_3.context]);
        this._Item_21_4.context._icons = this._query_Icon_21_2;
        this._query_Icon_21_2.notifyOnChanges();
      }
      if (this._query_Button_29_1.dirty) {
        this._query_Button_29_1.reset(([] as any[]));
        this._Item_29_4.context._buttons = this._query_Button_29_1;
        this._query_Button_29_1.notifyOnChanges();
      }
      if (this._query_Icon_29_2.dirty) {
        this._query_Icon_29_2.reset([this._Icon_31_3.context]);
        this._Item_29_4.context._icons = this._query_Icon_29_2;
        this._query_Icon_29_2.notifyOnChanges();
      }
      if (this._query_Button_37_1.dirty) {
        this._query_Button_37_1.reset(([] as any[]));
        this._Item_37_4.context._buttons = this._query_Button_37_1;
        this._query_Button_37_1.notifyOnChanges();
      }
      if (this._query_Icon_37_2.dirty) {
        this._query_Icon_37_2.reset([this._Icon_39_3.context]);
        this._Item_37_4.context._icons = this._query_Icon_37_2;
        this._query_Icon_37_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_21_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_29_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_37_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_7_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_7,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_6:any = this._Img_12_4.context._width;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementStyle(this._el_12,'width',((this.viewUtils.sanitizer.sanitize(import40.SecurityContext.STYLE,currVal_6) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import40.SecurityContext.STYLE,currVal_6).toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Img_12_4.context._height;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementStyle(this._el_12,'height',((this.viewUtils.sanitizer.sanitize(import40.SecurityContext.STYLE,currVal_7) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import40.SecurityContext.STYLE,currVal_7).toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_10:any = this._Icon_23_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_23,'hide',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_13:any = this._Icon_31_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_31,'hide',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_16:any = this._Icon_39_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_39,'hide',currVal_16);
      this._expr_16 = currVal_16;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_23_3.context.ngOnDestroy();
    this._Icon_31_3.context.ngOnDestroy();
    this._Icon_39_3.context.ngOnDestroy();
    this._Content_7_4.context.ngOnDestroy();
  }
  private _handle_click_21_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.socialLogin('facebook')) !== false);
    return (true && pd_0);
  }
  private _handle_click_29_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.socialLogin('google')) !== false);
    return (true && pd_0);
  }
  private _handle_click_37_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.socialLogin('twitter')) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Home0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.Home> {
  if ((renderType_Home === (null as any))) { (renderType_Home = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_Home,{})); }
  return new _View_Home0(viewUtils,parentInjector,declarationEl);
}