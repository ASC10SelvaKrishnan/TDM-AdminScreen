import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedAutomationComponent } from './failed-automation.component';

describe('FailedAutomationComponent', () => {
  let component: FailedAutomationComponent;
  let fixture: ComponentFixture<FailedAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailedAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FailedAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
