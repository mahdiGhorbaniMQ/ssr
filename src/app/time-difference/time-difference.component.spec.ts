import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDifferenceComponent } from './time-difference.component';

describe('TimeDifferenceComponent', () => {
  let component: TimeDifferenceComponent;
  let fixture: ComponentFixture<TimeDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
