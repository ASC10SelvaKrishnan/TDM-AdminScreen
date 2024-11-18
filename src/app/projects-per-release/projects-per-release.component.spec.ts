import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPerReleaseComponent } from './projects-per-release.component';

describe('ProjectsPerReleaseComponent', () => {
  let component: ProjectsPerReleaseComponent;
  let fixture: ComponentFixture<ProjectsPerReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPerReleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsPerReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
