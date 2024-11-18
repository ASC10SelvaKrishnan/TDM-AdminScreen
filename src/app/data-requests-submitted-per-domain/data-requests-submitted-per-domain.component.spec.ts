import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRequestsSubmittedPerDomainComponent } from './data-requests-submitted-per-domain.component';

describe('DataRequestsSubmittedPerDomainComponent', () => {
  let component: DataRequestsSubmittedPerDomainComponent;
  let fixture: ComponentFixture<DataRequestsSubmittedPerDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRequestsSubmittedPerDomainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataRequestsSubmittedPerDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
