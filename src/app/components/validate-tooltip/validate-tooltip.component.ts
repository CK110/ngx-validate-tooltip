import { Component, ElementRef, HostListener, Input, OnDestroy, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DomHandler} from 'primeng/primeng';
import {ValidateMsgService} from '../providers/validate-msg.service';

@Component({
  selector: 'app-validate-tooltip',
  templateUrl: './validate-tooltip.component.html',
  styleUrls: ['./validate-tooltip.component.css'],
  providers: [DomHandler]
})
export class ValidateTooltipComponent implements OnDestroy {

  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'right';
  @Input() control: FormControl;
  @Input() positionStyle: string;
  @Input() tooltipStyleClass: string;

  errorMessage: string;

  container: any;

  @ViewChild('in')
  in: ElementRef;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.control.invalid) {
      this.showErrMsg();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hide();
  }

  @HostListener('focusin')
  onFocusIn() {
    if (this.control.invalid) {
      this.showErrMsg();
    }
  }

  @HostListener('focusout')
  onFocusOut() {
    this.hide();
  }

  @HostListener('keyup')
  onKeyup() {
    if (this.control.invalid) {
      this.showErrMsg();
    }else {
      this.hide();
    }
  }

  constructor(private domHandler: DomHandler, private el: ElementRef, private validateMsgService: ValidateMsgService) {

  }

  showErrMsg(): void {
    this.errorMessage = this.getErrorMsg();
    if (this.errorMessage !== null && this.errorMessage !== undefined) {
      this.show();
    }
  }

  getErrorMsg(): string {
    let errMsg = '' ;
    Object.keys(this.control.errors).map(key => {
      errMsg = this.validateMsgService.getValidatorErrorMessage(key, this.control.errors[key]);
    });
    return errMsg ;
  }

  hide() {
    this.ngOnDestroy();
  }

  show() {
    /** 如果存在则不新建，只需要修改里面的内容 **/
    if (!this.container) {
      this.create();
    }else {
      this.domHandler.findSingle(this.container, '.ui-tooltip-text').innerText = this.errorMessage;
    }
    const offset = this.domHandler.getOffset(this.in.nativeElement);
    const targetTop = offset.top;
    const targetLeft = offset.left;
    let left: number;
    let top: number;

    this.container.style.display = 'block';

    switch (this.tooltipPosition) {
      case 'right':
        left = targetLeft + this.domHandler.getOuterWidth(this.in.nativeElement);
        top = targetTop + (this.domHandler.getOuterHeight(this.in.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
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

  }

  create() {
    let styleClass = 'ui-widget ui-tooltip ui-tooltip-' + this.tooltipPosition;
    this.container = document.createElement('div');
    if (this.tooltipStyleClass) {
      styleClass += ' ' + this.tooltipStyleClass;
    }
    this.container.className = styleClass;

    const tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'ui-tooltip-arrow';
    this.container.appendChild(tooltipArrow);

    const tooltipText = document.createElement('div');
    tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
    tooltipText.innerHTML = this.errorMessage;

    if (this.positionStyle) {
      this.container.style.position = this.positionStyle;
    }

    this.container.appendChild(tooltipText);

    document.body.appendChild(this.container);

  }

  ngOnDestroy() {
    if (this.container && this.container.parentElement) {
      document.body.removeChild(this.container);
    }
    this.container = null;
  }
}
