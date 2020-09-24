import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementLinkComponent } from './movement-link.component';

describe('MovementLinkComponent', () => {
  let component: MovementLinkComponent;
  let fixture: ComponentFixture<MovementLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
