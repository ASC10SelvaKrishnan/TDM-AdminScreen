import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOnProjectLevelComponent } from './reports-on-project-level.component';

describe('ReportsOnProjectLevelComponent', () => {
  let component: ReportsOnProjectLevelComponent;
  let fixture: ComponentFixture<ReportsOnProjectLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsOnProjectLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsOnProjectLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
