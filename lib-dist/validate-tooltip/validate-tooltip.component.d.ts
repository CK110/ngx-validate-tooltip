import { ElementRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomHandler } from 'primeng/primeng';
import { ValidateMsgService } from '../providers/validate-msg.service';
export declare class ValidateTooltipComponent implements OnDestroy {
    private domHandler;
    private el;
    private validateMsgService;
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right';
    control: FormControl;
    positionStyle: string;
    tooltipStyleClass: string;
    errorMessage: string;
    container: any;
    in: ElementRef;
    tip: ElementRef;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onFocusIn(): void;
    onFocusOut(): void;
    onKeyup(): void;
    constructor(domHandler: DomHandler, el: ElementRef, validateMsgService: ValidateMsgService);
    getErrorMsg(): string;
    hide(): void;
    show(): void;
    create(): void;
    ngOnDestroy(): void;
}
