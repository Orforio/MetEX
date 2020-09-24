import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientSoundComponent } from './ambient-sound.component';

describe('AmbientSoundComponent', () => {
  let component: AmbientSoundComponent;
  let fixture: ComponentFixture<AmbientSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientSoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
