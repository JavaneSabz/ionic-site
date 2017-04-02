/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './fab';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import11 from '../icon/icon.ngfactory';
export declare class Wrapper_FabContainer {
    _eventHandler: Function;
    context: import0.FabContainer;
    _changed: boolean;
    constructor(p0: any);
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_FabButton {
    _eventHandler: Function;
    context: import0.FabButton;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    constructor(p0: any, p1: any, p2: any);
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_color(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_mode(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_FabList {
    _eventHandler: Function;
    context: import0.FabList;
    _changed: boolean;
    constructor(p0: any, p1: any, p2: any);
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const FabContainerNgFactory: import8.ComponentFactory<import0.FabContainer>;
export declare class View_FabContainer0 extends import1.AppView<import0.FabContainer> {
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
}
export declare const FabButtonNgFactory: import8.ComponentFactory<import0.FabButton>;
export declare class View_FabButton0 extends import1.AppView<import0.FabButton> {
    _el_0: any;
    _Icon_0_3: import11.Wrapper_Icon;
    _el_1: any;
    _el_2: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}