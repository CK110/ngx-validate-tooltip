# NgValidateTooltip
a validate tooltip built with Angular4 inspired by [PrimeNG](https://github.com/primefaces/primeng/blob/master/components/tooltip/tooltip.ts)

## Installation

npm i ngx-validate-tooltip --save

## Usage

### Import In AppModule

```typescript
....
+ import {ValidateMsgService, ValidateTooltipModule} from 'ngx-validate-tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
+    ValidateTooltipModule,
  ],
  providers: [
+    ValidateMsgService
    // { provide: ValidateMsgService, useClass: CustomValidateMsgService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Use In Templete

```
// app.component.html
<form [formGroup]="ngForm" >
  <app-validate-tooltip [control]="ngForm.get('start')">
    <input pInputText formControlName="start">
  </app-validate-tooltip>

  <app-validate-tooltip [control]="ngForm.get('end')">
    <input pInputText formControlName="end">
  </app-validate-tooltip>

  <app-validate-tooltip [control]="ngForm.get('city')">
    <input pInputText formControlName="city">
  </app-validate-tooltip>
</form>

```
```
// app.component.ts
export class AppComponent implements OnInit{

  ngForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.ngForm = this.fb.group({
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', []],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
}

```

### Custom Your Own ValidateMsg

like [this](https://github.com/CK110/ngx-validate-tooltip/blob/master/src/app/custom-validate-msg.service.ts) And You should import in AppModule.

```
  providers: [
    //ValidateMsgService
+     { provide: ValidateMsgService, useClass: CustomValidateMsgService }
  ],

```


