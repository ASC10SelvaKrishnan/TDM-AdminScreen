import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportToMeasureSuccessComponent } from './report-to-measure-success.component';

describe('ReportToMeasureSuccessComponent', () => {
  let component: ReportToMeasureSuccessComponent;
  let fixture: ComponentFixture<ReportToMeasureSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportToMeasureSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportToMeasureSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
