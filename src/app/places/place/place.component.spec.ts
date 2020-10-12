import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { MarkdownModule } from 'ngx-markdown';

import { PlaceComponent } from './place.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { ConnectionsComponent } from '../../shared/connections/connections.component';
import { placeFactory } from '../../fixtures/places.fixtures';

describe('PlaceComponent', () => {
	let activatedRouteMock: ActivatedRoute;
	let compiled: HTMLElement;
	let component: PlaceComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<PlaceComponent>;
	let routerMock: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				PlaceComponent,
				MockComponent(CarouselComponent),
				MockComponent(ConnectionsComponent)
			],
			imports: [
				ApolloTestingModule,
				RouterTestingModule,
				MockModule(MarkdownModule)
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		activatedRouteMock = TestBed.inject(ActivatedRoute);
		routerMock = TestBed.inject(Router);

		spyOn(activatedRouteMock.snapshot.paramMap, 'get').and.returnValue('sample-place');
		spyOn(routerMock, 'navigateByUrl');

		controller = TestBed.inject(ApolloTestingController);
		fixture = TestBed.createComponent(PlaceComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display the Place information', (done: DoneFn) => {
		// Arrange
		const placeFixture = placeFactory.build();

		// Act
		// Assert
		component.place$.subscribe(() => {
			fixture.detectChanges();
			expect(compiled.querySelector('h1')?.textContent).toMatch(placeFixture.name);
			done();
		});

		const query = controller.expectOne('Place');
		query.flush({
			data: {
				place: placeFixture
			}
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the requested Place', (done: DoneFn) => {
			// Arrange
			const placeFixture = placeFactory.build();

			// Act
			component.ngOnInit();

			// Assert
			component.place$.subscribe(place => {
				expect(query.operation.variables.slug).toEqual('sample-place');
				expect(place?.name).toMatch(placeFixture.name);
				expect(place?.description).toMatch(placeFixture.description);
				done();
			});

			const query = controller.expectOne('Place');
			query.flush({
				data: {
					place: placeFixture
				}
			});
		});

		it('should redirect to the 404 page if Place not found', (done: DoneFn) => {
			// Arrange

			// Act
			component.ngOnInit();

			// Assert
			component.place$.subscribe(() => {
				expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/404');
				done();
			});

			const query = controller.expectOne('Place');
			query.flush({
				data: {
					place: null
				}
			});
		});
	});
});
