import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAndEventsPageComponent } from './project-and-events-page.component';

describe('ProjectAndEventsPageComponent', () => {
  let component: ProjectAndEventsPageComponent;
  let fixture: ComponentFixture<ProjectAndEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAndEventsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectAndEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
