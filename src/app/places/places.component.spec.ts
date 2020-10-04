import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { PlacesComponent } from './places.component';
import { placeFactory } from '../fixtures/places.fixtures';

describe('PlacesComponent', () => {
	let compiled: HTMLElement;
	let component: PlacesComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<PlacesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PlacesComponent ],
			imports: [
				ApolloTestingModule,
				FontAwesomeTestingModule,
				RouterTestingModule
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		controller = TestBed.inject(ApolloTestingController);
		fixture = TestBed.createComponent(PlacesComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display a list of Places', (done: DoneFn) => {
		// Arrange
		const placeFixtures = placeFactory.buildList(3);

		// Act
		// Assert
		component.places$.subscribe(() => {
			fixture.detectChanges();
			expect(compiled.querySelectorAll('a').length).toEqual(3);
			placeFixtures.forEach((place, i) => {
				expect(compiled.querySelectorAll('a')[i].textContent).toMatch(`${place?.name}`);
				expect(compiled.querySelectorAll('a')[i].href).toMatch(`${place?.slug}`);
			});
			done();
		});

		const query = controller.expectOne('Places');
		query.flush({
			data: {
				places: placeFixtures
			}
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the list of Places', (done: DoneFn) => {
			// Arrange
			const placeFixtures = placeFactory.buildList(3);

			// Act
			component.ngOnInit();

			// Assert
			component.places$.subscribe(places => {
				places?.forEach((place, i) => {
					expect(place?.name).toMatch(placeFixtures[i].name);
					expect(place?.slug).toMatch(placeFixtures[i].slug!);
				});
				done();
			});

			const query = controller.expectOne('Places');
			query.flush({
				data: {
					places: placeFixtures
				}
			});
		});
	});
});
