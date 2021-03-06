var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/list/list';
import * as import15 from 'ionic-angular/components/item/item';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from 'ionic-angular/components/label/label';
import * as import18 from 'ionic-angular/components/toggle/toggle';
import * as import19 from '@angular/forms/src/directives/ng_model';
import * as import20 from '@angular/forms/src/directives/ng_control_status';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/navigation/nav-controller';
import * as import27 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
import * as import32 from 'ionic-angular/gestures/gesture-controller';
import * as import33 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from '../../node_modules/ionic-angular/components/toggle/toggle.ngfactory';
import * as import36 from 'ionic-angular/util/haptic';
import * as import37 from '@angular/forms/src/directives/control_value_accessor';
import * as import38 from '@angular/forms/src/directives/ng_control';
import * as import39 from 'ionic-angular/components/nav/nav';
import * as import40 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import41 from 'ionic-angular/navigation/nav-controller-base';
import * as import42 from '@angular/core/src/linker/component_factory_resolver';
import * as import43 from 'ionic-angular/transitions/transition-controller';
import * as import44 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = [];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import24.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import25.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import26.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import27.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Toggle', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import28.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import25.App), this.parentInjector.get(import29.Keyboard), this.parentInjector.get(import30.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import31.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import32.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item item-block');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import33.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import15.ItemContent();
        this._query_Label_13_0 = new import16.QueryList();
        this._query_Button_13_1 = new import16.QueryList();
        this._query_Icon_13_2 = new import16.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_15_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_15), this.renderer, null, null, null, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Frodo Baggins', null);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-toggle', null);
        this._appEl_18 = new import2.AppElement(18, 13, this, this._el_18);
        var compView_18 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Toggle_18_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_18), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_13_4);
        this._NG_VALUE_ACCESSOR_18_5 = [this._Toggle_18_4];
        this._NgModel_18_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_18_5);
        this._NgControl_18_7 = this._NgModel_18_6;
        this._NgControlStatus_18_8 = new import20.NgControlStatus(this._NgControl_18_7);
        this._appEl_18.initComponent(this._Toggle_18_4, [], compView_18);
        compView_18.create(this._Toggle_18_4, [], null);
        this._text_19 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([this._Label_15_3]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [].concat([this._el_15]),
            [].concat([
                this._text_14,
                this._text_17,
                this._text_19
            ]),
            [],
            [].concat([this._el_18])
        ], null);
        this._text_20 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'item item-block');
        this._appEl_21 = new import2.AppElement(21, 11, this, this._el_21);
        var compView_21 = import33.viewFactory_Item0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Item_21_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_21), this.renderer);
        this._ItemContent_21_5 = new import15.ItemContent();
        this._query_Label_21_0 = new import16.QueryList();
        this._query_Button_21_1 = new import16.QueryList();
        this._query_Icon_21_2 = new import16.QueryList();
        this._appEl_21.initComponent(this._Item_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n      ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_23_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_23), this.renderer, null, null, null, null);
        this._text_24 = this.renderer.createText(this._el_23, 'Sam', null);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-toggle', null);
        this._appEl_26 = new import2.AppElement(26, 21, this, this._el_26);
        var compView_26 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Toggle_26_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_26), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_21_4);
        this._NG_VALUE_ACCESSOR_26_5 = [this._Toggle_26_4];
        this._NgModel_26_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_26_5);
        this._NgControl_26_7 = this._NgModel_26_6;
        this._NgControlStatus_26_8 = new import20.NgControlStatus(this._NgControl_26_7);
        this._appEl_26.initComponent(this._Toggle_26_4, [], compView_26);
        compView_26.create(this._Toggle_26_4, [], null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_21_0.reset([this._Label_23_3]);
        this._Item_21_4.contentLabel = this._query_Label_21_0.first;
        compView_21.create(this._Item_21_4, [
            [],
            [].concat([this._el_23]),
            [].concat([
                this._text_22,
                this._text_25,
                this._text_27
            ]),
            [],
            [].concat([this._el_26])
        ], null);
        this._text_28 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_29 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_29, 'class', 'item item-block');
        this._appEl_29 = new import2.AppElement(29, 11, this, this._el_29);
        var compView_29 = import33.viewFactory_Item0(this.viewUtils, this.injector(29), this._appEl_29);
        this._Item_29_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_29), this.renderer);
        this._ItemContent_29_5 = new import15.ItemContent();
        this._query_Label_29_0 = new import16.QueryList();
        this._query_Button_29_1 = new import16.QueryList();
        this._query_Icon_29_2 = new import16.QueryList();
        this._appEl_29.initComponent(this._Item_29_4, [], compView_29);
        this._text_30 = this.renderer.createText(null, '\n      ', null);
        this._el_31 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_31_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_31), this.renderer, null, null, null, null);
        this._text_32 = this.renderer.createText(this._el_31, 'Éowyn', null);
        this._text_33 = this.renderer.createText(null, '\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_34, 'color', 'danger');
        this._appEl_34 = new import2.AppElement(34, 29, this, this._el_34);
        var compView_34 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(34), this._appEl_34);
        this._Toggle_34_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_34), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_29_4);
        this._NG_VALUE_ACCESSOR_34_5 = [this._Toggle_34_4];
        this._NgModel_34_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_34_5);
        this._NgControl_34_7 = this._NgModel_34_6;
        this._NgControlStatus_34_8 = new import20.NgControlStatus(this._NgControl_34_7);
        this._appEl_34.initComponent(this._Toggle_34_4, [], compView_34);
        compView_34.create(this._Toggle_34_4, [], null);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_29_0.reset([this._Label_31_3]);
        this._Item_29_4.contentLabel = this._query_Label_29_0.first;
        compView_29.create(this._Item_29_4, [
            [],
            [].concat([this._el_31]),
            [].concat([
                this._text_30,
                this._text_33,
                this._text_35
            ]),
            [],
            [].concat([this._el_34])
        ], null);
        this._text_36 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_37 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'item item-block');
        this._appEl_37 = new import2.AppElement(37, 11, this, this._el_37);
        var compView_37 = import33.viewFactory_Item0(this.viewUtils, this.injector(37), this._appEl_37);
        this._Item_37_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_37), this.renderer);
        this._ItemContent_37_5 = new import15.ItemContent();
        this._query_Label_37_0 = new import16.QueryList();
        this._query_Button_37_1 = new import16.QueryList();
        this._query_Icon_37_2 = new import16.QueryList();
        this._appEl_37.initComponent(this._Item_37_4, [], compView_37);
        this._text_38 = this.renderer.createText(null, '\n      ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_39_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_39), this.renderer, null, null, null, null);
        this._text_40 = this.renderer.createText(this._el_39, 'Legolas', null);
        this._text_41 = this.renderer.createText(null, '\n      ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_42, 'disabled', 'true');
        this._appEl_42 = new import2.AppElement(42, 37, this, this._el_42);
        var compView_42 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Toggle_42_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_42), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_37_4);
        this._NG_VALUE_ACCESSOR_42_5 = [this._Toggle_42_4];
        this._NgModel_42_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_42_5);
        this._NgControl_42_7 = this._NgModel_42_6;
        this._NgControlStatus_42_8 = new import20.NgControlStatus(this._NgControl_42_7);
        this._appEl_42.initComponent(this._Toggle_42_4, [], compView_42);
        compView_42.create(this._Toggle_42_4, [], null);
        this._text_43 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_37_0.reset([this._Label_39_3]);
        this._Item_37_4.contentLabel = this._query_Label_37_0.first;
        compView_37.create(this._Item_37_4, [
            [],
            [].concat([this._el_39]),
            [].concat([
                this._text_38,
                this._text_41,
                this._text_43
            ]),
            [],
            [].concat([this._el_42])
        ], null);
        this._text_44 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_45 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_45, 'class', 'item item-block');
        this._appEl_45 = new import2.AppElement(45, 11, this, this._el_45);
        var compView_45 = import33.viewFactory_Item0(this.viewUtils, this.injector(45), this._appEl_45);
        this._Item_45_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_45), this.renderer);
        this._ItemContent_45_5 = new import15.ItemContent();
        this._query_Label_45_0 = new import16.QueryList();
        this._query_Button_45_1 = new import16.QueryList();
        this._query_Icon_45_2 = new import16.QueryList();
        this._appEl_45.initComponent(this._Item_45_4, [], compView_45);
        this._text_46 = this.renderer.createText(null, '\n      ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_47_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_47), this.renderer, null, null, null, null);
        this._text_48 = this.renderer.createText(this._el_47, 'Gimli', null);
        this._text_49 = this.renderer.createText(null, '\n      ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_50, 'color', 'danger');
        this._appEl_50 = new import2.AppElement(50, 45, this, this._el_50);
        var compView_50 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(50), this._appEl_50);
        this._Toggle_50_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_50), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_45_4);
        this._NG_VALUE_ACCESSOR_50_5 = [this._Toggle_50_4];
        this._NgModel_50_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_50_5);
        this._NgControl_50_7 = this._NgModel_50_6;
        this._NgControlStatus_50_8 = new import20.NgControlStatus(this._NgControl_50_7);
        this._appEl_50.initComponent(this._Toggle_50_4, [], compView_50);
        compView_50.create(this._Toggle_50_4, [], null);
        this._text_51 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_45_0.reset([this._Label_47_3]);
        this._Item_45_4.contentLabel = this._query_Label_45_0.first;
        compView_45.create(this._Item_45_4, [
            [],
            [].concat([this._el_47]),
            [].concat([
                this._text_46,
                this._text_49,
                this._text_51
            ]),
            [],
            [].concat([this._el_50])
        ], null);
        this._text_52 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_53 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'item item-block');
        this._appEl_53 = new import2.AppElement(53, 11, this, this._el_53);
        var compView_53 = import33.viewFactory_Item0(this.viewUtils, this.injector(53), this._appEl_53);
        this._Item_53_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_53), this.renderer);
        this._ItemContent_53_5 = new import15.ItemContent();
        this._query_Label_53_0 = new import16.QueryList();
        this._query_Button_53_1 = new import16.QueryList();
        this._query_Icon_53_2 = new import16.QueryList();
        this._appEl_53.initComponent(this._Item_53_4, [], compView_53);
        this._text_54 = this.renderer.createText(null, '\n      ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_55_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_55), this.renderer, null, null, null, null);
        this._text_56 = this.renderer.createText(this._el_55, 'Saruman', null);
        this._text_57 = this.renderer.createText(null, '\n      ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_58, 'color', 'dark');
        this._appEl_58 = new import2.AppElement(58, 53, this, this._el_58);
        var compView_58 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(58), this._appEl_58);
        this._Toggle_58_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_58), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_53_4);
        this._NG_VALUE_ACCESSOR_58_5 = [this._Toggle_58_4];
        this._NgModel_58_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_58_5);
        this._NgControl_58_7 = this._NgModel_58_6;
        this._NgControlStatus_58_8 = new import20.NgControlStatus(this._NgControl_58_7);
        this._appEl_58.initComponent(this._Toggle_58_4, [], compView_58);
        compView_58.create(this._Toggle_58_4, [], null);
        this._text_59 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_53_0.reset([this._Label_55_3]);
        this._Item_53_4.contentLabel = this._query_Label_53_0.first;
        compView_53.create(this._Item_53_4, [
            [],
            [].concat([this._el_55]),
            [].concat([
                this._text_54,
                this._text_57,
                this._text_59
            ]),
            [],
            [].concat([this._el_58])
        ], null);
        this._text_60 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_61 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_61, 'class', 'item item-block');
        this._appEl_61 = new import2.AppElement(61, 11, this, this._el_61);
        var compView_61 = import33.viewFactory_Item0(this.viewUtils, this.injector(61), this._appEl_61);
        this._Item_61_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_61), this.renderer);
        this._ItemContent_61_5 = new import15.ItemContent();
        this._query_Label_61_0 = new import16.QueryList();
        this._query_Button_61_1 = new import16.QueryList();
        this._query_Icon_61_2 = new import16.QueryList();
        this._appEl_61.initComponent(this._Item_61_4, [], compView_61);
        this._text_62 = this.renderer.createText(null, '\n      ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_63_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_63), this.renderer, null, null, null, null);
        this._text_64 = this.renderer.createText(this._el_63, 'Gandalf', null);
        this._text_65 = this.renderer.createText(null, '\n      ', null);
        this._el_66 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_66, 'color', 'secondary');
        this._appEl_66 = new import2.AppElement(66, 61, this, this._el_66);
        var compView_66 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(66), this._appEl_66);
        this._Toggle_66_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_66), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_61_4);
        this._NG_VALUE_ACCESSOR_66_5 = [this._Toggle_66_4];
        this._NgModel_66_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_66_5);
        this._NgControl_66_7 = this._NgModel_66_6;
        this._NgControlStatus_66_8 = new import20.NgControlStatus(this._NgControl_66_7);
        this._appEl_66.initComponent(this._Toggle_66_4, [], compView_66);
        compView_66.create(this._Toggle_66_4, [], null);
        this._text_67 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_61_0.reset([this._Label_63_3]);
        this._Item_61_4.contentLabel = this._query_Label_61_0.first;
        compView_61.create(this._Item_61_4, [
            [],
            [].concat([this._el_63]),
            [].concat([
                this._text_62,
                this._text_65,
                this._text_67
            ]),
            [],
            [].concat([this._el_66])
        ], null);
        this._text_68 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_69 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_69, 'class', 'item item-block');
        this._appEl_69 = new import2.AppElement(69, 11, this, this._el_69);
        var compView_69 = import33.viewFactory_Item0(this.viewUtils, this.injector(69), this._appEl_69);
        this._Item_69_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_69), this.renderer);
        this._ItemContent_69_5 = new import15.ItemContent();
        this._query_Label_69_0 = new import16.QueryList();
        this._query_Button_69_1 = new import16.QueryList();
        this._query_Icon_69_2 = new import16.QueryList();
        this._appEl_69.initComponent(this._Item_69_4, [], compView_69);
        this._text_70 = this.renderer.createText(null, '\n      ', null);
        this._el_71 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_71_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_71), this.renderer, null, null, null, null);
        this._text_72 = this.renderer.createText(this._el_71, 'Arwen', null);
        this._text_73 = this.renderer.createText(null, '\n      ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_74, 'disabled', 'true');
        this._appEl_74 = new import2.AppElement(74, 69, this, this._el_74);
        var compView_74 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(74), this._appEl_74);
        this._Toggle_74_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_74), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_69_4);
        this._NG_VALUE_ACCESSOR_74_5 = [this._Toggle_74_4];
        this._NgModel_74_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_74_5);
        this._NgControl_74_7 = this._NgModel_74_6;
        this._NgControlStatus_74_8 = new import20.NgControlStatus(this._NgControl_74_7);
        this._appEl_74.initComponent(this._Toggle_74_4, [], compView_74);
        compView_74.create(this._Toggle_74_4, [], null);
        this._text_75 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_69_0.reset([this._Label_71_3]);
        this._Item_69_4.contentLabel = this._query_Label_69_0.first;
        compView_69.create(this._Item_69_4, [
            [],
            [].concat([this._el_71]),
            [].concat([
                this._text_70,
                this._text_73,
                this._text_75
            ]),
            [],
            [].concat([this._el_74])
        ], null);
        this._text_76 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_77 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_77, 'class', 'item item-block');
        this._appEl_77 = new import2.AppElement(77, 11, this, this._el_77);
        var compView_77 = import33.viewFactory_Item0(this.viewUtils, this.injector(77), this._appEl_77);
        this._Item_77_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_77), this.renderer);
        this._ItemContent_77_5 = new import15.ItemContent();
        this._query_Label_77_0 = new import16.QueryList();
        this._query_Button_77_1 = new import16.QueryList();
        this._query_Icon_77_2 = new import16.QueryList();
        this._appEl_77.initComponent(this._Item_77_4, [], compView_77);
        this._text_78 = this.renderer.createText(null, '\n      ', null);
        this._el_79 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_79_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_79), this.renderer, null, null, null, null);
        this._text_80 = this.renderer.createText(this._el_79, 'Boromir', null);
        this._text_81 = this.renderer.createText(null, '\n      ', null);
        this._el_82 = this.renderer.createElement(null, 'ion-toggle', null);
        this._appEl_82 = new import2.AppElement(82, 77, this, this._el_82);
        var compView_82 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(82), this._appEl_82);
        this._Toggle_82_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_82), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_77_4);
        this._NG_VALUE_ACCESSOR_82_5 = [this._Toggle_82_4];
        this._NgModel_82_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_82_5);
        this._NgControl_82_7 = this._NgModel_82_6;
        this._NgControlStatus_82_8 = new import20.NgControlStatus(this._NgControl_82_7);
        this._appEl_82.initComponent(this._Toggle_82_4, [], compView_82);
        compView_82.create(this._Toggle_82_4, [], null);
        this._text_83 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_77_0.reset([this._Label_79_3]);
        this._Item_77_4.contentLabel = this._query_Label_77_0.first;
        compView_77.create(this._Item_77_4, [
            [],
            [].concat([this._el_79]),
            [].concat([
                this._text_78,
                this._text_81,
                this._text_83
            ]),
            [],
            [].concat([this._el_82])
        ], null);
        this._text_84 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_85 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_85, 'class', 'item item-block');
        this._appEl_85 = new import2.AppElement(85, 11, this, this._el_85);
        var compView_85 = import33.viewFactory_Item0(this.viewUtils, this.injector(85), this._appEl_85);
        this._Item_85_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_85), this.renderer);
        this._ItemContent_85_5 = new import15.ItemContent();
        this._query_Label_85_0 = new import16.QueryList();
        this._query_Button_85_1 = new import16.QueryList();
        this._query_Icon_85_2 = new import16.QueryList();
        this._appEl_85.initComponent(this._Item_85_4, [], compView_85);
        this._text_86 = this.renderer.createText(null, '\n      ', null);
        this._el_87 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_87_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_87), this.renderer, null, null, null, null);
        this._text_88 = this.renderer.createText(this._el_87, 'Gollum', null);
        this._text_89 = this.renderer.createText(null, '\n      ', null);
        this._el_90 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_90, 'color', 'dark');
        this._appEl_90 = new import2.AppElement(90, 85, this, this._el_90);
        var compView_90 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(90), this._appEl_90);
        this._Toggle_90_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_90), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_85_4);
        this._NG_VALUE_ACCESSOR_90_5 = [this._Toggle_90_4];
        this._NgModel_90_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_90_5);
        this._NgControl_90_7 = this._NgModel_90_6;
        this._NgControlStatus_90_8 = new import20.NgControlStatus(this._NgControl_90_7);
        this._appEl_90.initComponent(this._Toggle_90_4, [], compView_90);
        compView_90.create(this._Toggle_90_4, [], null);
        this._text_91 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_85_0.reset([this._Label_87_3]);
        this._Item_85_4.contentLabel = this._query_Label_85_0.first;
        compView_85.create(this._Item_85_4, [
            [],
            [].concat([this._el_87]),
            [].concat([
                this._text_86,
                this._text_89,
                this._text_91
            ]),
            [],
            [].concat([this._el_90])
        ], null);
        this._text_92 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_93 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_93, 'class', 'item item-block');
        this._appEl_93 = new import2.AppElement(93, 11, this, this._el_93);
        var compView_93 = import33.viewFactory_Item0(this.viewUtils, this.injector(93), this._appEl_93);
        this._Item_93_4 = new import15.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_93), this.renderer);
        this._ItemContent_93_5 = new import15.ItemContent();
        this._query_Label_93_0 = new import16.QueryList();
        this._query_Button_93_1 = new import16.QueryList();
        this._query_Icon_93_2 = new import16.QueryList();
        this._appEl_93.initComponent(this._Item_93_4, [], compView_93);
        this._text_94 = this.renderer.createText(null, '\n      ', null);
        this._el_95 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_95_3 = new import17.Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_95), this.renderer, null, null, null, null);
        this._text_96 = this.renderer.createText(this._el_95, 'Galadriel', null);
        this._text_97 = this.renderer.createText(null, '\n      ', null);
        this._el_98 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_98, 'color', 'secondary');
        this._appEl_98 = new import2.AppElement(98, 93, this, this._el_98);
        var compView_98 = import35.viewFactory_Toggle0(this.viewUtils, this.injector(98), this._appEl_98);
        this._Toggle_98_4 = new import18.Toggle(this.parentInjector.get(import34.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_98), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_93_4);
        this._NG_VALUE_ACCESSOR_98_5 = [this._Toggle_98_4];
        this._NgModel_98_6 = new import19.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_98_5);
        this._NgControl_98_7 = this._NgModel_98_6;
        this._NgControlStatus_98_8 = new import20.NgControlStatus(this._NgControl_98_7);
        this._appEl_98.initComponent(this._Toggle_98_4, [], compView_98);
        compView_98.create(this._Toggle_98_4, [], null);
        this._text_99 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_93_0.reset([this._Label_95_3]);
        this._Item_93_4.contentLabel = this._query_Label_93_0.first;
        compView_93.create(this._Item_93_4, [
            [],
            [].concat([this._el_95]),
            [].concat([
                this._text_94,
                this._text_97,
                this._text_99
            ]),
            [],
            [].concat([this._el_98])
        ], null);
        this._text_100 = this.renderer.createText(this._el_11, '\n\n  ', null);
        this._text_101 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_101
            ]),
            []
        ], null);
        this._text_102 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_18, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_18_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_18_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_18_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_26, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_26_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_26_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_26_0.bind(this)));
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_34, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_34_0.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_34_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_34_0.bind(this)));
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_42, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_42_0.bind(this)));
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        var subscription_3 = this._NgModel_42_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_42_0.bind(this)));
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_50, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_50_0.bind(this)));
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        var subscription_4 = this._NgModel_50_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_50_0.bind(this)));
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_58, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_58_0.bind(this)));
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        var subscription_5 = this._NgModel_58_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_58_0.bind(this)));
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        this._expr_60 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_66, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_66_0.bind(this)));
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_64 = import7.UNINITIALIZED;
        this._expr_65 = import7.UNINITIALIZED;
        var subscription_6 = this._NgModel_66_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_66_0.bind(this)));
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        this._expr_68 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_74, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_74_0.bind(this)));
        this._expr_73 = import7.UNINITIALIZED;
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        var subscription_7 = this._NgModel_74_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_74_0.bind(this)));
        this._expr_77 = import7.UNINITIALIZED;
        this._expr_78 = import7.UNINITIALIZED;
        this._expr_79 = import7.UNINITIALIZED;
        this._expr_80 = import7.UNINITIALIZED;
        this._expr_81 = import7.UNINITIALIZED;
        this._expr_82 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_82, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_82_0.bind(this)));
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        var subscription_8 = this._NgModel_82_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_82_0.bind(this)));
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        this._expr_88 = import7.UNINITIALIZED;
        this._expr_89 = import7.UNINITIALIZED;
        this._expr_90 = import7.UNINITIALIZED;
        this._expr_91 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_90, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_90_0.bind(this)));
        this._expr_93 = import7.UNINITIALIZED;
        this._expr_94 = import7.UNINITIALIZED;
        this._expr_95 = import7.UNINITIALIZED;
        var subscription_9 = this._NgModel_90_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_90_0.bind(this)));
        this._expr_96 = import7.UNINITIALIZED;
        this._expr_97 = import7.UNINITIALIZED;
        this._expr_98 = import7.UNINITIALIZED;
        this._expr_99 = import7.UNINITIALIZED;
        this._expr_100 = import7.UNINITIALIZED;
        this._expr_101 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_98, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_98_0.bind(this)));
        this._expr_103 = import7.UNINITIALIZED;
        this._expr_104 = import7.UNINITIALIZED;
        this._expr_105 = import7.UNINITIALIZED;
        var subscription_10 = this._NgModel_98_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_98_0.bind(this)));
        this._expr_106 = import7.UNINITIALIZED;
        this._expr_107 = import7.UNINITIALIZED;
        this._expr_108 = import7.UNINITIALIZED;
        this._expr_109 = import7.UNINITIALIZED;
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._text_89,
            this._el_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._text_97,
            this._el_98,
            this._text_99,
            this._text_100,
            this._text_101,
            this._text_102
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10
        ], [
            subscription_0,
            subscription_1,
            subscription_2,
            subscription_3,
            subscription_4,
            subscription_5,
            subscription_6,
            subscription_7,
            subscription_8,
            subscription_9,
            subscription_10
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import17.Label) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Label_15_3;
        }
        if (((token === import18.Toggle) && (18 === requestNodeIndex))) {
            return this._Toggle_18_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_5;
        }
        if (((token === import19.NgModel) && (18 === requestNodeIndex))) {
            return this._NgModel_18_6;
        }
        if (((token === import38.NgControl) && (18 === requestNodeIndex))) {
            return this._NgControl_18_7;
        }
        if (((token === import20.NgControlStatus) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_8;
        }
        if (((token === import15.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_13_4;
        }
        if (((token === import15.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_13_5;
        }
        if (((token === import17.Label) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Label_23_3;
        }
        if (((token === import18.Toggle) && (26 === requestNodeIndex))) {
            return this._Toggle_26_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (26 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_26_5;
        }
        if (((token === import19.NgModel) && (26 === requestNodeIndex))) {
            return this._NgModel_26_6;
        }
        if (((token === import38.NgControl) && (26 === requestNodeIndex))) {
            return this._NgControl_26_7;
        }
        if (((token === import20.NgControlStatus) && (26 === requestNodeIndex))) {
            return this._NgControlStatus_26_8;
        }
        if (((token === import15.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_21_4;
        }
        if (((token === import15.ItemContent) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_21_5;
        }
        if (((token === import17.Label) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Label_31_3;
        }
        if (((token === import18.Toggle) && (34 === requestNodeIndex))) {
            return this._Toggle_34_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (34 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_34_5;
        }
        if (((token === import19.NgModel) && (34 === requestNodeIndex))) {
            return this._NgModel_34_6;
        }
        if (((token === import38.NgControl) && (34 === requestNodeIndex))) {
            return this._NgControl_34_7;
        }
        if (((token === import20.NgControlStatus) && (34 === requestNodeIndex))) {
            return this._NgControlStatus_34_8;
        }
        if (((token === import15.Item) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item_29_4;
        }
        if (((token === import15.ItemContent) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemContent_29_5;
        }
        if (((token === import17.Label) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Label_39_3;
        }
        if (((token === import18.Toggle) && (42 === requestNodeIndex))) {
            return this._Toggle_42_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (42 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_42_5;
        }
        if (((token === import19.NgModel) && (42 === requestNodeIndex))) {
            return this._NgModel_42_6;
        }
        if (((token === import38.NgControl) && (42 === requestNodeIndex))) {
            return this._NgControl_42_7;
        }
        if (((token === import20.NgControlStatus) && (42 === requestNodeIndex))) {
            return this._NgControlStatus_42_8;
        }
        if (((token === import15.Item) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._Item_37_4;
        }
        if (((token === import15.ItemContent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._ItemContent_37_5;
        }
        if (((token === import17.Label) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Label_47_3;
        }
        if (((token === import18.Toggle) && (50 === requestNodeIndex))) {
            return this._Toggle_50_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (50 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_50_5;
        }
        if (((token === import19.NgModel) && (50 === requestNodeIndex))) {
            return this._NgModel_50_6;
        }
        if (((token === import38.NgControl) && (50 === requestNodeIndex))) {
            return this._NgControl_50_7;
        }
        if (((token === import20.NgControlStatus) && (50 === requestNodeIndex))) {
            return this._NgControlStatus_50_8;
        }
        if (((token === import15.Item) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Item_45_4;
        }
        if (((token === import15.ItemContent) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._ItemContent_45_5;
        }
        if (((token === import17.Label) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Label_55_3;
        }
        if (((token === import18.Toggle) && (58 === requestNodeIndex))) {
            return this._Toggle_58_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (58 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_58_5;
        }
        if (((token === import19.NgModel) && (58 === requestNodeIndex))) {
            return this._NgModel_58_6;
        }
        if (((token === import38.NgControl) && (58 === requestNodeIndex))) {
            return this._NgControl_58_7;
        }
        if (((token === import20.NgControlStatus) && (58 === requestNodeIndex))) {
            return this._NgControlStatus_58_8;
        }
        if (((token === import15.Item) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Item_53_4;
        }
        if (((token === import15.ItemContent) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._ItemContent_53_5;
        }
        if (((token === import17.Label) && ((63 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Label_63_3;
        }
        if (((token === import18.Toggle) && (66 === requestNodeIndex))) {
            return this._Toggle_66_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (66 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_66_5;
        }
        if (((token === import19.NgModel) && (66 === requestNodeIndex))) {
            return this._NgModel_66_6;
        }
        if (((token === import38.NgControl) && (66 === requestNodeIndex))) {
            return this._NgControl_66_7;
        }
        if (((token === import20.NgControlStatus) && (66 === requestNodeIndex))) {
            return this._NgControlStatus_66_8;
        }
        if (((token === import15.Item) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._Item_61_4;
        }
        if (((token === import15.ItemContent) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._ItemContent_61_5;
        }
        if (((token === import17.Label) && ((71 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._Label_71_3;
        }
        if (((token === import18.Toggle) && (74 === requestNodeIndex))) {
            return this._Toggle_74_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (74 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_74_5;
        }
        if (((token === import19.NgModel) && (74 === requestNodeIndex))) {
            return this._NgModel_74_6;
        }
        if (((token === import38.NgControl) && (74 === requestNodeIndex))) {
            return this._NgControl_74_7;
        }
        if (((token === import20.NgControlStatus) && (74 === requestNodeIndex))) {
            return this._NgControlStatus_74_8;
        }
        if (((token === import15.Item) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Item_69_4;
        }
        if (((token === import15.ItemContent) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._ItemContent_69_5;
        }
        if (((token === import17.Label) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._Label_79_3;
        }
        if (((token === import18.Toggle) && (82 === requestNodeIndex))) {
            return this._Toggle_82_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (82 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_82_5;
        }
        if (((token === import19.NgModel) && (82 === requestNodeIndex))) {
            return this._NgModel_82_6;
        }
        if (((token === import38.NgControl) && (82 === requestNodeIndex))) {
            return this._NgControl_82_7;
        }
        if (((token === import20.NgControlStatus) && (82 === requestNodeIndex))) {
            return this._NgControlStatus_82_8;
        }
        if (((token === import15.Item) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._Item_77_4;
        }
        if (((token === import15.ItemContent) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._ItemContent_77_5;
        }
        if (((token === import17.Label) && ((87 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._Label_87_3;
        }
        if (((token === import18.Toggle) && (90 === requestNodeIndex))) {
            return this._Toggle_90_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (90 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_90_5;
        }
        if (((token === import19.NgModel) && (90 === requestNodeIndex))) {
            return this._NgModel_90_6;
        }
        if (((token === import38.NgControl) && (90 === requestNodeIndex))) {
            return this._NgControl_90_7;
        }
        if (((token === import20.NgControlStatus) && (90 === requestNodeIndex))) {
            return this._NgControlStatus_90_8;
        }
        if (((token === import15.Item) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._Item_85_4;
        }
        if (((token === import15.ItemContent) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._ItemContent_85_5;
        }
        if (((token === import17.Label) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._Label_95_3;
        }
        if (((token === import18.Toggle) && (98 === requestNodeIndex))) {
            return this._Toggle_98_4;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (98 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_98_5;
        }
        if (((token === import19.NgModel) && (98 === requestNodeIndex))) {
            return this._NgModel_98_6;
        }
        if (((token === import38.NgControl) && (98 === requestNodeIndex))) {
            return this._NgControl_98_7;
        }
        if (((token === import20.NgControlStatus) && (98 === requestNodeIndex))) {
            return this._NgControlStatus_98_8;
        }
        if (((token === import15.Item) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 99)))) {
            return this._Item_93_4;
        }
        if (((token === import15.ItemContent) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 99)))) {
            return this._ItemContent_93_5;
        }
        if (((token === import14.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 100)))) {
            return this._List_11_3;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 101)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_5 = this.context.data.frodo;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgModel_18_6.model = currVal_5;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_5, currVal_5);
            this._expr_5 = currVal_5;
        }
        if ((changes !== null)) {
            this._NgModel_18_6.ngOnChanges(changes);
        }
        changes = null;
        var currVal_14 = this.context.data.sam;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._NgModel_26_6.model = currVal_14;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_14, currVal_14);
            this._expr_14 = currVal_14;
        }
        if ((changes !== null)) {
            this._NgModel_26_6.ngOnChanges(changes);
        }
        var currVal_22 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._Toggle_34_4.color = currVal_22;
            this._expr_22 = currVal_22;
        }
        changes = null;
        var currVal_24 = this.context.data.eowyn;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._NgModel_34_6.model = currVal_24;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_24, currVal_24);
            this._expr_24 = currVal_24;
        }
        if ((changes !== null)) {
            this._NgModel_34_6.ngOnChanges(changes);
        }
        var currVal_32 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._Toggle_42_4.disabled = currVal_32;
            this._expr_32 = currVal_32;
        }
        changes = null;
        var currVal_34 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._NgModel_42_6.isDisabled = currVal_34;
            if ((changes === null)) {
                (changes = {});
            }
            changes['isDisabled'] = new import7.SimpleChange(this._expr_34, currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = this.context.data.legolas;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._NgModel_42_6.model = currVal_35;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_35, currVal_35);
            this._expr_35 = currVal_35;
        }
        if ((changes !== null)) {
            this._NgModel_42_6.ngOnChanges(changes);
        }
        var currVal_43 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this._Toggle_50_4.color = currVal_43;
            this._expr_43 = currVal_43;
        }
        changes = null;
        var currVal_45 = this.context.data.gimli;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this._NgModel_50_6.model = currVal_45;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_45, currVal_45);
            this._expr_45 = currVal_45;
        }
        if ((changes !== null)) {
            this._NgModel_50_6.ngOnChanges(changes);
        }
        var currVal_53 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this._Toggle_58_4.color = currVal_53;
            this._expr_53 = currVal_53;
        }
        changes = null;
        var currVal_55 = this.context.data.saruman;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this._NgModel_58_6.model = currVal_55;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_55, currVal_55);
            this._expr_55 = currVal_55;
        }
        if ((changes !== null)) {
            this._NgModel_58_6.ngOnChanges(changes);
        }
        var currVal_63 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this._Toggle_66_4.color = currVal_63;
            this._expr_63 = currVal_63;
        }
        changes = null;
        var currVal_65 = this.context.data.gandalf;
        if (import4.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this._NgModel_66_6.model = currVal_65;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_65, currVal_65);
            this._expr_65 = currVal_65;
        }
        if ((changes !== null)) {
            this._NgModel_66_6.ngOnChanges(changes);
        }
        var currVal_73 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this._Toggle_74_4.disabled = currVal_73;
            this._expr_73 = currVal_73;
        }
        changes = null;
        var currVal_75 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this._NgModel_74_6.isDisabled = currVal_75;
            if ((changes === null)) {
                (changes = {});
            }
            changes['isDisabled'] = new import7.SimpleChange(this._expr_75, currVal_75);
            this._expr_75 = currVal_75;
        }
        var currVal_76 = this.context.data.arwen;
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this._NgModel_74_6.model = currVal_76;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_76, currVal_76);
            this._expr_76 = currVal_76;
        }
        if ((changes !== null)) {
            this._NgModel_74_6.ngOnChanges(changes);
        }
        changes = null;
        var currVal_85 = this.context.data.boromir;
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this._NgModel_82_6.model = currVal_85;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_85, currVal_85);
            this._expr_85 = currVal_85;
        }
        if ((changes !== null)) {
            this._NgModel_82_6.ngOnChanges(changes);
        }
        var currVal_93 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this._Toggle_90_4.color = currVal_93;
            this._expr_93 = currVal_93;
        }
        changes = null;
        var currVal_95 = this.context.data.gollum;
        if (import4.checkBinding(throwOnChange, this._expr_95, currVal_95)) {
            this._NgModel_90_6.model = currVal_95;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_95, currVal_95);
            this._expr_95 = currVal_95;
        }
        if ((changes !== null)) {
            this._NgModel_90_6.ngOnChanges(changes);
        }
        var currVal_103 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_103, currVal_103)) {
            this._Toggle_98_4.color = currVal_103;
            this._expr_103 = currVal_103;
        }
        changes = null;
        var currVal_105 = this.context.data.galadriel;
        if (import4.checkBinding(throwOnChange, this._expr_105, currVal_105)) {
            this._NgModel_98_6.model = currVal_105;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_105, currVal_105);
            this._expr_105 = currVal_105;
        }
        if ((changes !== null)) {
            this._NgModel_98_6.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_21_1.dirty) {
                this._query_Button_21_1.reset([]);
                this._Item_21_4._buttons = this._query_Button_21_1;
                this._query_Button_21_1.notifyOnChanges();
            }
            if (this._query_Icon_21_2.dirty) {
                this._query_Icon_21_2.reset([]);
                this._Item_21_4._icons = this._query_Icon_21_2;
                this._query_Icon_21_2.notifyOnChanges();
            }
            if (this._query_Button_29_1.dirty) {
                this._query_Button_29_1.reset([]);
                this._Item_29_4._buttons = this._query_Button_29_1;
                this._query_Button_29_1.notifyOnChanges();
            }
            if (this._query_Icon_29_2.dirty) {
                this._query_Icon_29_2.reset([]);
                this._Item_29_4._icons = this._query_Icon_29_2;
                this._query_Icon_29_2.notifyOnChanges();
            }
            if (this._query_Button_37_1.dirty) {
                this._query_Button_37_1.reset([]);
                this._Item_37_4._buttons = this._query_Button_37_1;
                this._query_Button_37_1.notifyOnChanges();
            }
            if (this._query_Icon_37_2.dirty) {
                this._query_Icon_37_2.reset([]);
                this._Item_37_4._icons = this._query_Icon_37_2;
                this._query_Icon_37_2.notifyOnChanges();
            }
            if (this._query_Button_45_1.dirty) {
                this._query_Button_45_1.reset([]);
                this._Item_45_4._buttons = this._query_Button_45_1;
                this._query_Button_45_1.notifyOnChanges();
            }
            if (this._query_Icon_45_2.dirty) {
                this._query_Icon_45_2.reset([]);
                this._Item_45_4._icons = this._query_Icon_45_2;
                this._query_Icon_45_2.notifyOnChanges();
            }
            if (this._query_Button_53_1.dirty) {
                this._query_Button_53_1.reset([]);
                this._Item_53_4._buttons = this._query_Button_53_1;
                this._query_Button_53_1.notifyOnChanges();
            }
            if (this._query_Icon_53_2.dirty) {
                this._query_Icon_53_2.reset([]);
                this._Item_53_4._icons = this._query_Icon_53_2;
                this._query_Icon_53_2.notifyOnChanges();
            }
            if (this._query_Button_61_1.dirty) {
                this._query_Button_61_1.reset([]);
                this._Item_61_4._buttons = this._query_Button_61_1;
                this._query_Button_61_1.notifyOnChanges();
            }
            if (this._query_Icon_61_2.dirty) {
                this._query_Icon_61_2.reset([]);
                this._Item_61_4._icons = this._query_Icon_61_2;
                this._query_Icon_61_2.notifyOnChanges();
            }
            if (this._query_Button_69_1.dirty) {
                this._query_Button_69_1.reset([]);
                this._Item_69_4._buttons = this._query_Button_69_1;
                this._query_Button_69_1.notifyOnChanges();
            }
            if (this._query_Icon_69_2.dirty) {
                this._query_Icon_69_2.reset([]);
                this._Item_69_4._icons = this._query_Icon_69_2;
                this._query_Icon_69_2.notifyOnChanges();
            }
            if (this._query_Button_77_1.dirty) {
                this._query_Button_77_1.reset([]);
                this._Item_77_4._buttons = this._query_Button_77_1;
                this._query_Button_77_1.notifyOnChanges();
            }
            if (this._query_Icon_77_2.dirty) {
                this._query_Icon_77_2.reset([]);
                this._Item_77_4._icons = this._query_Icon_77_2;
                this._query_Icon_77_2.notifyOnChanges();
            }
            if (this._query_Button_85_1.dirty) {
                this._query_Button_85_1.reset([]);
                this._Item_85_4._buttons = this._query_Button_85_1;
                this._query_Button_85_1.notifyOnChanges();
            }
            if (this._query_Icon_85_2.dirty) {
                this._query_Icon_85_2.reset([]);
                this._Item_85_4._icons = this._query_Icon_85_2;
                this._query_Icon_85_2.notifyOnChanges();
            }
            if (this._query_Button_93_1.dirty) {
                this._query_Button_93_1.reset([]);
                this._Item_93_4._buttons = this._query_Button_93_1;
                this._query_Button_93_1.notifyOnChanges();
            }
            if (this._query_Icon_93_2.dirty) {
                this._query_Icon_93_2.reset([]);
                this._Item_93_4._icons = this._query_Icon_93_2;
                this._query_Icon_93_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_18_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_26_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_21_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_34_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_29_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_42_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_37_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_50_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_45_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_58_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_53_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_66_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_61_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_74_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_69_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_82_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_77_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_90_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_85_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_98_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_93_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Toggle_18_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_18, 'toggle-disabled', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._NgControlStatus_18_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_18, 'ng-untouched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_18_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_18, 'ng-touched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_18_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_18, 'ng-pristine', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_18_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_18, 'ng-dirty', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_18_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_18, 'ng-valid', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_18_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_18, 'ng-invalid', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_13 = this._Toggle_26_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_26, 'toggle-disabled', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_15 = this._NgControlStatus_26_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_26, 'ng-untouched', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_26_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_26, 'ng-touched', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_26_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_26, 'ng-pristine', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_26_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_26, 'ng-dirty', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_26_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_26, 'ng-valid', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this._NgControlStatus_26_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_26, 'ng-invalid', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_23 = this._Toggle_34_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_34, 'toggle-disabled', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_25 = this._NgControlStatus_34_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_34, 'ng-untouched', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_34_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_34, 'ng-touched', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_34_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_34, 'ng-pristine', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_34_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_34, 'ng-dirty', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = this._NgControlStatus_34_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_34, 'ng-valid', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = this._NgControlStatus_34_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_34, 'ng-invalid', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_33 = this._Toggle_42_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_42, 'toggle-disabled', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_36 = this._NgControlStatus_42_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_42, 'ng-untouched', currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_37 = this._NgControlStatus_42_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementClass(this._el_42, 'ng-touched', currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = this._NgControlStatus_42_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_42, 'ng-pristine', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_39 = this._NgControlStatus_42_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_42, 'ng-dirty', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_40 = this._NgControlStatus_42_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementClass(this._el_42, 'ng-valid', currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_41 = this._NgControlStatus_42_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_42, 'ng-invalid', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_44 = this._Toggle_50_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_50, 'toggle-disabled', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_46 = this._NgControlStatus_50_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementClass(this._el_50, 'ng-untouched', currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_47 = this._NgControlStatus_50_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementClass(this._el_50, 'ng-touched', currVal_47);
            this._expr_47 = currVal_47;
        }
        var currVal_48 = this._NgControlStatus_50_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setElementClass(this._el_50, 'ng-pristine', currVal_48);
            this._expr_48 = currVal_48;
        }
        var currVal_49 = this._NgControlStatus_50_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_50, 'ng-dirty', currVal_49);
            this._expr_49 = currVal_49;
        }
        var currVal_50 = this._NgControlStatus_50_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementClass(this._el_50, 'ng-valid', currVal_50);
            this._expr_50 = currVal_50;
        }
        var currVal_51 = this._NgControlStatus_50_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementClass(this._el_50, 'ng-invalid', currVal_51);
            this._expr_51 = currVal_51;
        }
        var currVal_54 = this._Toggle_58_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementClass(this._el_58, 'toggle-disabled', currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_56 = this._NgControlStatus_58_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_58, 'ng-untouched', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_57 = this._NgControlStatus_58_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setElementClass(this._el_58, 'ng-touched', currVal_57);
            this._expr_57 = currVal_57;
        }
        var currVal_58 = this._NgControlStatus_58_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setElementClass(this._el_58, 'ng-pristine', currVal_58);
            this._expr_58 = currVal_58;
        }
        var currVal_59 = this._NgControlStatus_58_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementClass(this._el_58, 'ng-dirty', currVal_59);
            this._expr_59 = currVal_59;
        }
        var currVal_60 = this._NgControlStatus_58_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setElementClass(this._el_58, 'ng-valid', currVal_60);
            this._expr_60 = currVal_60;
        }
        var currVal_61 = this._NgControlStatus_58_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setElementClass(this._el_58, 'ng-invalid', currVal_61);
            this._expr_61 = currVal_61;
        }
        var currVal_64 = this._Toggle_66_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setElementClass(this._el_66, 'toggle-disabled', currVal_64);
            this._expr_64 = currVal_64;
        }
        var currVal_66 = this._NgControlStatus_66_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this.renderer.setElementClass(this._el_66, 'ng-untouched', currVal_66);
            this._expr_66 = currVal_66;
        }
        var currVal_67 = this._NgControlStatus_66_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this.renderer.setElementClass(this._el_66, 'ng-touched', currVal_67);
            this._expr_67 = currVal_67;
        }
        var currVal_68 = this._NgControlStatus_66_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this.renderer.setElementClass(this._el_66, 'ng-pristine', currVal_68);
            this._expr_68 = currVal_68;
        }
        var currVal_69 = this._NgControlStatus_66_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_66, 'ng-dirty', currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_70 = this._NgControlStatus_66_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setElementClass(this._el_66, 'ng-valid', currVal_70);
            this._expr_70 = currVal_70;
        }
        var currVal_71 = this._NgControlStatus_66_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_66, 'ng-invalid', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_74 = this._Toggle_74_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this.renderer.setElementClass(this._el_74, 'toggle-disabled', currVal_74);
            this._expr_74 = currVal_74;
        }
        var currVal_77 = this._NgControlStatus_74_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementClass(this._el_74, 'ng-untouched', currVal_77);
            this._expr_77 = currVal_77;
        }
        var currVal_78 = this._NgControlStatus_74_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementClass(this._el_74, 'ng-touched', currVal_78);
            this._expr_78 = currVal_78;
        }
        var currVal_79 = this._NgControlStatus_74_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this.renderer.setElementClass(this._el_74, 'ng-pristine', currVal_79);
            this._expr_79 = currVal_79;
        }
        var currVal_80 = this._NgControlStatus_74_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this.renderer.setElementClass(this._el_74, 'ng-dirty', currVal_80);
            this._expr_80 = currVal_80;
        }
        var currVal_81 = this._NgControlStatus_74_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setElementClass(this._el_74, 'ng-valid', currVal_81);
            this._expr_81 = currVal_81;
        }
        var currVal_82 = this._NgControlStatus_74_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this.renderer.setElementClass(this._el_74, 'ng-invalid', currVal_82);
            this._expr_82 = currVal_82;
        }
        var currVal_84 = this._Toggle_82_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this.renderer.setElementClass(this._el_82, 'toggle-disabled', currVal_84);
            this._expr_84 = currVal_84;
        }
        var currVal_86 = this._NgControlStatus_82_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setElementClass(this._el_82, 'ng-untouched', currVal_86);
            this._expr_86 = currVal_86;
        }
        var currVal_87 = this._NgControlStatus_82_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setElementClass(this._el_82, 'ng-touched', currVal_87);
            this._expr_87 = currVal_87;
        }
        var currVal_88 = this._NgControlStatus_82_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setElementClass(this._el_82, 'ng-pristine', currVal_88);
            this._expr_88 = currVal_88;
        }
        var currVal_89 = this._NgControlStatus_82_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setElementClass(this._el_82, 'ng-dirty', currVal_89);
            this._expr_89 = currVal_89;
        }
        var currVal_90 = this._NgControlStatus_82_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_90, currVal_90)) {
            this.renderer.setElementClass(this._el_82, 'ng-valid', currVal_90);
            this._expr_90 = currVal_90;
        }
        var currVal_91 = this._NgControlStatus_82_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setElementClass(this._el_82, 'ng-invalid', currVal_91);
            this._expr_91 = currVal_91;
        }
        var currVal_94 = this._Toggle_90_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this.renderer.setElementClass(this._el_90, 'toggle-disabled', currVal_94);
            this._expr_94 = currVal_94;
        }
        var currVal_96 = this._NgControlStatus_90_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_96, currVal_96)) {
            this.renderer.setElementClass(this._el_90, 'ng-untouched', currVal_96);
            this._expr_96 = currVal_96;
        }
        var currVal_97 = this._NgControlStatus_90_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this.renderer.setElementClass(this._el_90, 'ng-touched', currVal_97);
            this._expr_97 = currVal_97;
        }
        var currVal_98 = this._NgControlStatus_90_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this.renderer.setElementClass(this._el_90, 'ng-pristine', currVal_98);
            this._expr_98 = currVal_98;
        }
        var currVal_99 = this._NgControlStatus_90_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_99, currVal_99)) {
            this.renderer.setElementClass(this._el_90, 'ng-dirty', currVal_99);
            this._expr_99 = currVal_99;
        }
        var currVal_100 = this._NgControlStatus_90_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_100, currVal_100)) {
            this.renderer.setElementClass(this._el_90, 'ng-valid', currVal_100);
            this._expr_100 = currVal_100;
        }
        var currVal_101 = this._NgControlStatus_90_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_101, currVal_101)) {
            this.renderer.setElementClass(this._el_90, 'ng-invalid', currVal_101);
            this._expr_101 = currVal_101;
        }
        var currVal_104 = this._Toggle_98_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_104, currVal_104)) {
            this.renderer.setElementClass(this._el_98, 'toggle-disabled', currVal_104);
            this._expr_104 = currVal_104;
        }
        var currVal_106 = this._NgControlStatus_98_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementClass(this._el_98, 'ng-untouched', currVal_106);
            this._expr_106 = currVal_106;
        }
        var currVal_107 = this._NgControlStatus_98_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementClass(this._el_98, 'ng-touched', currVal_107);
            this._expr_107 = currVal_107;
        }
        var currVal_108 = this._NgControlStatus_98_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementClass(this._el_98, 'ng-pristine', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = this._NgControlStatus_98_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setElementClass(this._el_98, 'ng-dirty', currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = this._NgControlStatus_98_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementClass(this._el_98, 'ng-valid', currVal_110);
            this._expr_110 = currVal_110;
        }
        var currVal_111 = this._NgControlStatus_98_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setElementClass(this._el_98, 'ng-invalid', currVal_111);
            this._expr_111 = currVal_111;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Toggle_18_4.ngOnDestroy();
        this._NgModel_18_6.ngOnDestroy();
        this._Toggle_26_4.ngOnDestroy();
        this._NgModel_26_6.ngOnDestroy();
        this._Toggle_34_4.ngOnDestroy();
        this._NgModel_34_6.ngOnDestroy();
        this._Toggle_42_4.ngOnDestroy();
        this._NgModel_42_6.ngOnDestroy();
        this._Toggle_50_4.ngOnDestroy();
        this._NgModel_50_6.ngOnDestroy();
        this._Toggle_58_4.ngOnDestroy();
        this._NgModel_58_6.ngOnDestroy();
        this._Toggle_66_4.ngOnDestroy();
        this._NgModel_66_6.ngOnDestroy();
        this._Toggle_74_4.ngOnDestroy();
        this._NgModel_74_6.ngOnDestroy();
        this._Toggle_82_4.ngOnDestroy();
        this._NgModel_82_6.ngOnDestroy();
        this._Toggle_90_4.ngOnDestroy();
        this._NgModel_90_6.ngOnDestroy();
        this._Toggle_98_4.ngOnDestroy();
        this._NgModel_98_6.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.frodo = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_26_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.sam = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_34_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.eowyn = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_42_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.legolas = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_50_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.gimli = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_58_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.saruman = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_66_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.gandalf = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_74_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.arwen = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_82_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.boromir = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_90_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.gollum = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_98_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.galadriel = $event) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/toggle/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import40.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import39.Nav(this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import41.NavControllerBase, null), this.parentInjector.get(import25.App), this.parentInjector.get(import21.Config), this.parentInjector.get(import29.Keyboard), new import22.ElementRef(this._el_0), this.parentInjector.get(import30.NgZone), this.renderer, this.parentInjector.get(import42.ComponentFactoryResolver), this.parentInjector.get(import32.GestureController), this.parentInjector.get(import43.TransitionController), this.parentInjector.get(import44.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import39.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/toggle/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
