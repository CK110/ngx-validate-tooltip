import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTooltipComponent } from './validate-tooltip.component';

describe('ValidateTooltipComponent', () => {
  let component: ValidateTooltipComponent;
  let fixture: ComponentFixture<ValidateTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
