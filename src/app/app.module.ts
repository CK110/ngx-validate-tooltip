import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ValidateTooltipModule} from './components/validate-tooltip/validate-tooltip.module';
import {InputTextModule} from 'primeng/primeng';
import {ValidateMsgService} from './components/providers/validate-msg.service';
import {CustomValidateMsgService} from 'app/custom-validate-msg.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ValidateTooltipModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  providers: [
    // ValidateMsgService
    { provide: ValidateMsgService, useClass: CustomValidateMsgService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
