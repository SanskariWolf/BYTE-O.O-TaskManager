import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesFrameComponent } from './dates-frame.component';

describe('DatesFrameComponent', () => {
  let component: DatesFrameComponent;
  let fixture: ComponentFixture<DatesFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatesFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatesFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
