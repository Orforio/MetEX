import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';

import { StationComponent } from './station.component';
import { AmbientSoundComponent } from '../../shared/ambient-sound/ambient-sound.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { ConnectionsComponent } from '../../shared/connections/connections.component';
import { LineBadgeComponent } from '../../shared/line-badge/line-badge.component';
import { MovementLinkComponent } from '../../shared/movement-link/movement-link.component';
import { NearbyPlacesComponent } from '../../shared/nearby-places/nearby-places.component';
import { stationFactory } from '../../fixtures/stations.fixtures';

describe('StationComponent', () => {
	let compiled: HTMLElement;
	let component: StationComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<StationComponent>;
	let routerMock: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				StationComponent,
				MockComponent(AmbientSoundComponent),
				MockComponent(CarouselComponent),
				MockComponent(ConnectionsComponent),
				MockComponent(LineBadgeComponent),
				MockComponent(MovementLinkComponent),
				MockComponent(NearbyPlacesComponent)
			],
			imports: [
				ApolloTestingModule,
				RouterTestingModule,
				MockModule(MarkdownModule)
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						paramMap: of(convertToParamMap({ lineSlug: 'sample-line', stationSlug: 'sample-station'}))
					}
				}
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		routerMock = TestBed.inject(Router);

		spyOn(routerMock, 'navigateByUrl');

		controller = TestBed.inject(ApolloTestingController);
		fixture = TestBed.createComponent(StationComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display the Station information', (done: DoneFn) => {
		// Arrange
		const stationFixture = stationFactory.build();

		// Act
		// Assert
		component.station$.subscribe(() => {
			fixture.detectChanges();

			expect(compiled.querySelector('h1')?.textContent).toMatch(stationFixture.name);
			done();
		});

		const query = controller.expectOne('Station');
		query.flush({
			data: {
				station: stationFixture,
			},
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the requested Station', (done: DoneFn) => {
			// Arrange
			const stationFixture = stationFactory.build();

			// Act
			component.ngOnInit();

			// Assert
			component.station$.subscribe(station => {
				expect(query.operation.variables.lineSlug).toEqual('sample-line');
				expect(query.operation.variables.stationSlug).toEqual('sample-station');
				expect(station.station?.name).toMatch(stationFixture.name);
				expect(station.station?.description).toMatch(stationFixture.description!);
				done();
			});

			const query = controller.expectOne('Station');
			query.flush({
				data: {
					station: stationFixture
				}
			});
		});

		it('should redirect to the 404 page if Station not found', (done: DoneFn) => {
			// Arrange

			// Act
			component.ngOnInit();

			// Assert
			component.station$.subscribe(() => {
				expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/404');
				done();
			});

			const query = controller.expectOne('Station');
			query.flush({
				data: {
					station: null
				}
			});
		});
	});
});
