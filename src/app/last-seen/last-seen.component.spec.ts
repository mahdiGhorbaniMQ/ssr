import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSeenComponent } from './last-seen.component';

describe('LastSeenComponent', () => {
  let component: LastSeenComponent;
  let fixture: ComponentFixture<LastSeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
