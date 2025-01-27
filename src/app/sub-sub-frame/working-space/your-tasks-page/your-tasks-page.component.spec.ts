import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTasksPageComponent } from './your-tasks-page.component';

describe('YourTasksPageComponent', () => {
  let component: YourTasksPageComponent;
  let fixture: ComponentFixture<YourTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourTasksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
