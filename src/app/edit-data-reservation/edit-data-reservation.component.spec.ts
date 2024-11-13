import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataReservationComponent } from './edit-data-reservation.component';

describe('EditDataReservationComponent', () => {
  let component: EditDataReservationComponent;
  let fixture: ComponentFixture<EditDataReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDataReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
