import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRequestsSubmittedComponent } from './data-requests-submitted.component';

describe('DataRequestsSubmittedComponent', () => {
  let component: DataRequestsSubmittedComponent;
  let fixture: ComponentFixture<DataRequestsSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRequestsSubmittedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataRequestsSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
