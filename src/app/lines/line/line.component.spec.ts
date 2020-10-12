import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { MockComponent } from 'ng-mocks';

import { LineComponent } from './line.component';
import { LineBadgeComponent } from '../../shared/line-badge/line-badge.component';
import { lineFactory } from '../../fixtures/lines.fixtures';
import { stationFactory } from '../../fixtures/stations.fixtures';

describe('LineComponent', () => {
	let activatedRouteMock: ActivatedRoute;
	let compiled: HTMLElement;
	let component: LineComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<LineComponent>;
	let routerMock: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				LineComponent,
				MockComponent(LineBadgeComponent)
			],
			imports: [
				ApolloTestingModule,
				FontAwesomeTestingModule,
				RouterTestingModule
			]
		}).compileComponents();
	});

	beforeEach(() => {
		// Arrange
		activatedRouteMock = TestBed.inject(ActivatedRoute);
		routerMock = TestBed.inject(Router);

		spyOn(activatedRouteMock.snapshot.paramMap, 'get').and.returnValue('sample-line');
		spyOn(routerMock, 'navigateByUrl');

		controller = TestBed.inject(ApolloTestingController);
		fixture = TestBed.createComponent(LineComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display the Line information', (done: DoneFn) => {
		// Arrange
		const lineFixture = lineFactory.build();

		// Act
		// Assert
		component.line$.subscribe(() => {
			fixture.detectChanges();

			expect(compiled.querySelector('h1')?.textContent).toMatch(lineFixture.name);
			done();
		});

		const query = controller.expectOne('Line');
		query.flush({
			data: {
				line: lineFixture,
			},
		});
		controller.verify();
	});

	it('should display a list of Stations on this Line', (done: DoneFn) => {
		// Arrange
		const lineFixture = lineFactory.build();
		const stationFixtures = stationFactory.buildList(3, { line: lineFixture });
		lineFixture.stations = stationFixtures;

		// Act
		// Assert
		component.line$.subscribe(() => {
			fixture.detectChanges();

			expect(compiled.querySelectorAll('a').length).toEqual(lineFixture.stations!.length);
			lineFixture.stations!.forEach((station, i) => {
				expect(compiled.querySelectorAll('a')[i].textContent).toMatch(station!.name);
				expect(compiled.querySelectorAll('a')[i].href).toMatch(station!.slug!);
				done();
			});
		});

		const query = controller.expectOne('Line');
		query.flush({
			data: {
				line: lineFixture,
			},
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the requested Line', (done: DoneFn) => {
			// Arrange
			const lineFixture = lineFactory.build();

			// Act
			component.ngOnInit();

			// Assert
			component.line$.subscribe(line => {
				expect(query.operation.variables.slug).toEqual('sample-line');
				expect(line?.name).toMatch(lineFixture.name);
				expect(line?.description).toMatch(lineFixture.description!);
				done();
			});

			const query = controller.expectOne('Line');
			query.flush({
				data: {
					line: lineFixture
				}
			});
		});

		it('should redirect to the 404 page if Line not found', (done: DoneFn) => {
			// Arrange

			// Act
			component.ngOnInit();

			// Assert
			component.line$.subscribe(() => {
				expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/404');
				done();
			});

			const query = controller.expectOne('Line');
			query.flush({
				data: {
					line: null
				}
			});
		});
	});
});
