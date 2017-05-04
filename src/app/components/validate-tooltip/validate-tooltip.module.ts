import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ValidateTooltipComponent} from './validate-tooltip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateTooltipComponent],
  exports: [ValidateTooltipComponent]
})
export class ValidateTooltipModule { }
