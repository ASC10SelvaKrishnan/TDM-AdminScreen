import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDetailsSubmittedThruTheToolComponent } from './reports-details-submitted-thru-the-tool.component';

describe('ReportsDetailsSubmittedThruTheToolComponent', () => {
  let component: ReportsDetailsSubmittedThruTheToolComponent;
  let fixture: ComponentFixture<ReportsDetailsSubmittedThruTheToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsDetailsSubmittedThruTheToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsDetailsSubmittedThruTheToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
