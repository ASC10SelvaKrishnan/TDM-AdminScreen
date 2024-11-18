import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTimePerAutomationComponent } from './average-time-per-automation.component';

describe('AverageTimePerAutomationComponent', () => {
  let component: AverageTimePerAutomationComponent;
  let fixture: ComponentFixture<AverageTimePerAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageTimePerAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AverageTimePerAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
