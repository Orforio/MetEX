import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBadgeComponent } from './line-badge.component';

describe('LineBadgeComponent', () => {
  let component: LineBadgeComponent;
  let fixture: ComponentFixture<LineBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
