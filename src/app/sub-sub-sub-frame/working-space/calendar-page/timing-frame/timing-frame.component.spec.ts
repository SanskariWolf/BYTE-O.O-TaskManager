import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingFrameComponent } from './timing-frame.component';

describe('TimingFrameComponent', () => {
  let component: TimingFrameComponent;
  let fixture: ComponentFixture<TimingFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimingFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
