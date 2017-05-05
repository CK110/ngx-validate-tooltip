import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ButtonModule, DialogModule, InputTextModule} from 'primeng/primeng';
import {ValidateTooltipModule} from './components/validate-tooltip/validate-tooltip.module';
import {ValidateMsgService} from './components/providers/validate-msg.service';
import {CustomValidateMsgService} from './custom-validate-msg.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [
    // ValidateMsgService
    { provide: ValidateMsgService, useClass: CustomValidateMsgService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
