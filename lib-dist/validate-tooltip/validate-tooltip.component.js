import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { DomHandler } from 'primeng/primeng';
import { ValidateMsgService } from '../providers/validate-msg.service';
var ValidateTooltipComponent = (function () {
    function ValidateTooltipComponent(domHandler, el, validateMsgService) {
        this.domHandler = domHandler;
        this.el = el;
        this.validateMsgService = validateMsgService;
        this.tooltipPosition = 'right';
    }
    ValidateTooltipComponent.prototype.onMouseEnter = function () {
        if (this.control.invalid) {
            this.errorMessage = this.getErrorMsg();
            this.show();
        }
    };
    ValidateTooltipComponent.prototype.onMouseLeave = function () {
        this.hide();
    };
    ValidateTooltipComponent.prototype.onFocusIn = function () {
        if (this.control.invalid) {
            this.errorMessage = this.getErrorMsg();
            this.show();
        }
    };
    ValidateTooltipComponent.prototype.onFocusOut = function () {
        this.hide();
    };
    ValidateTooltipComponent.prototype.onKeyup = function () {
        if (this.control.invalid) {
            this.errorMessage = this.getErrorMsg();
            this.show();
        }
        else {
            this.hide();
        }
    };
    ValidateTooltipComponent.prototype.getErrorMsg = function () {
        var _this = this;
        var errMsg = '';
        Object.keys(this.control.errors).map(function (key) {
            errMsg = _this.validateMsgService.getValidatorErrorMessage(key, _this.control.errors[key]);
        });
        return errMsg;
    };
    ValidateTooltipComponent.prototype.hide = function () {
        this.ngOnDestroy();
    };
    ValidateTooltipComponent.prototype.show = function () {
        /** 如果存在则不新建，只需要修改里面的内容 **/
        if (!this.container) {
            this.create();
        }
        else {
            this.domHandler.findSingle(this.container, '.ui-tooltip-text').innerText = this.errorMessage;
        }
        var offset = this.domHandler.getOffset(this.in.nativeElement);
        var targetTop = offset.top;
        var targetLeft = offset.left;
        var left;
        var top;
        this.container.style.display = 'block';
        switch (this.tooltipPosition) {
            case 'right':
                left = targetLeft + this.domHandler.getOuterWidth(this.in.nativeElement);
                top = targetTop + (this.domHandler.getOuterHeight(this.in.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
                console.log(left);
                console.log(top);
                break;
            case 'left':
                left = targetLeft - this.domHandler.getOuterWidth(this.container);
                top = targetTop + (this.domHandler.getOuterHeight(this.in.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
                break;
            case 'top':
                left = targetLeft + (this.domHandler.getOuterWidth(this.in.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
                top = targetTop - this.domHandler.getOuterHeight(this.container);
                break;
            case 'bottom':
                left = targetLeft + (this.domHandler.getOuterWidth(this.in.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
                top = targetTop + this.domHandler.getOuterHeight(this.in.nativeElement);
                break;
        }
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
        this.container.style.zIndex = 999999; // different from PrimeNg
    };
    ValidateTooltipComponent.prototype.create = function () {
        var styleClass = 'ui-widget ui-tooltip ui-tooltip-' + this.tooltipPosition;
        this.container = document.createElement('div');
        if (this.tooltipStyleClass) {
            styleClass += ' ' + this.tooltipStyleClass;
        }
        this.container.className = styleClass;
        var tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        var tooltipText = document.createElement('div');
        tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        tooltipText.innerHTML = this.errorMessage;
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(tooltipText);
        document.body.appendChild(this.container);
    };
    ValidateTooltipComponent.prototype.ngOnDestroy = function () {
        if (this.container && this.container.parentElement) {
            document.body.removeChild(this.container);
        }
        this.container = null;
    };
    return ValidateTooltipComponent;
}());
export { ValidateTooltipComponent };
ValidateTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-validate-tooltip',
                template: "<div #in style=\"display:inline-block;position:relative\"><ng-content></ng-content></div>",
                styles: [""],
                providers: [DomHandler]
            },] },
];
/** @nocollapse */
ValidateTooltipComponent.ctorParameters = function () { return [
    { type: DomHandler, },
    { type: ElementRef, },
    { type: ValidateMsgService, },
]; };
ValidateTooltipComponent.propDecorators = {
    'tooltipPosition': [{ type: Input },],
    'control': [{ type: Input },],
    'positionStyle': [{ type: Input },],
    'tooltipStyleClass': [{ type: Input },],
    'in': [{ type: ViewChild, args: ['in',] },],
    'tip': [{ type: ViewChild, args: ['tip',] },],
    'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
    'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    'onFocusIn': [{ type: HostListener, args: ['focusin',] },],
    'onFocusOut': [{ type: HostListener, args: ['focusout',] },],
    'onKeyup': [{ type: HostListener, args: ['keyup',] },],
};
//# sourceMappingURL=validate-tooltip.component.js.map