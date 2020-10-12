import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { MockComponent } from 'ng-mocks';

import { LinesComponent } from './lines.component';
import { LineBadgeComponent } from '../shared/line-badge/line-badge.component';
import { lineFactory } from '../fixtures/lines.fixtures';

describe('LinesComponent', () => {
	let compiled: HTMLElement;
	let component: LinesComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<LinesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				LinesComponent,
				MockComponent(LineBadgeComponent)
			],
			imports: [
				ApolloTestingModule,
				RouterTestingModule
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		controller = TestBed.inject(ApolloTestingController);
		fixture = TestBed.createComponent(LinesComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display a list of Lines', (done: DoneFn) => {
		// Arrange
		const lineFixtures = lineFactory.buildList(3);

		// Act
		// Assert
		component.lines$.subscribe(() => {
			fixture.detectChanges();
			expect(compiled.querySelectorAll('a').length).toEqual(3);
			lineFixtures.forEach((line, i) => {
				expect(compiled.querySelectorAll('a')[i].textContent).toMatch(`${line?.name}`);
				expect(compiled.querySelectorAll('a')[i].href).toMatch(`${line?.slug}`);
			});
			done();
		});

		const query = controller.expectOne('Lines');
		query.flush({
			data: {
				lines: lineFixtures
			}
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the list of Lines', (done: DoneFn) => {
			// Arrange
			const lineFixtures = lineFactory.buildList(3);

			// Act
			component.ngOnInit();

			// Assert
			component.lines$.subscribe(lines => {
				lines?.forEach((line, i) => {
					expect(line?.name).toMatch(lineFixtures[i].name);
					expect(line?.slug).toMatch(lineFixtures[i].slug!);
					expect(line?.description).toMatch(lineFixtures[i].description!);
				});
				done();
			});

			const query = controller.expectOne('Lines');
			query.flush({
				data: {
					lines: lineFixtures
				}
			});
		});
	});
});
