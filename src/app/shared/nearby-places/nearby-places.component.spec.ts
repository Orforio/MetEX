import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NearbyPlacesComponent } from './nearby-places.component';
import { placeFactory } from '../../fixtures/places.fixtures';

describe('NearbyPlacesComponent', () => {
	let compiled: HTMLElement;
  let component: NearbyPlacesComponent;
  let fixture: ComponentFixture<NearbyPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyPlacesComponent ],
			imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
		// Arrange
    fixture = TestBed.createComponent(NearbyPlacesComponent);
    component = fixture.componentInstance;
		component.places = placeFactory.buildList(3);

		// Act
    fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
		// Assert
    expect(component).toBeTruthy();
  });

	it('should display a list of Places', () => {
		// Assert
		expect(compiled.querySelectorAll('li').length).toEqual(3);
	});

	it('should link to each Place', () => {
		// Assert
		component.places?.forEach((place, i) => {
			expect(compiled.querySelectorAll('a')[i].href).toMatch(`/places/${place?.slug}`);
			expect(compiled.querySelectorAll('a')[i].textContent).toMatch(`${place?.name}`);
		});
	});
});
