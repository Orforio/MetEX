import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPlayerComponent } from './journey-player.component';

describe('JourneyPlayerComponent', () => {
  let component: JourneyPlayerComponent;
  let fixture: ComponentFixture<JourneyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
