import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { MockModule } from 'ng-mocks';
import { MarkdownModule } from 'ngx-markdown';

import { EntryComponent } from './entry.component';
import { blogFactory } from '../../fixtures/blog.fixtures';

describe('EntryComponent', () => {
	let activatedRouteMock: ActivatedRoute;
	let compiled: HTMLElement;
	let component: EntryComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<EntryComponent>;
	let routerMock: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ EntryComponent ],
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

		spyOn(activatedRouteMock.snapshot.paramMap, 'get').and.returnValue('sample-entry');
		spyOn(routerMock, 'navigateByUrl');

		controller = TestBed.inject(ApolloTestingController);
		fixture = TestBed.createComponent(EntryComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display the Blog entry', (done: DoneFn) => {
		// Arrange
		const blogFixture = blogFactory.build();

		// Act
		// Assert
		component.entry$.subscribe(() => {
			fixture.detectChanges();
			expect(compiled.querySelector('h2')?.textContent).toMatch(blogFixture.title);
			done();
		});

		const query = controller.expectOne('Blog');
		query.flush({
			data: {
				blog: blogFixture
			}
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the requested Blog entry', (done: DoneFn) => {
			// Arrange
			const blogFixture = blogFactory.build();

			// Act
			component.ngOnInit();

			// Assert
			component.entry$.subscribe(entry => {
				expect(query.operation.variables.slug).toEqual('sample-entry');
				expect(entry?.title).toMatch(blogFixture.title);
				expect(entry?.entry).toMatch(blogFixture.entry);
				done();
			});

			const query = controller.expectOne('Blog');
			query.flush({
				data: {
					blog: blogFixture
				}
			});
		});

		it('should redirect to the 404 page if Blog entry not found', (done: DoneFn) => {
			// Arrange

			// Act
			component.ngOnInit();

			// Assert
			component.entry$.subscribe(() => {
				expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/404');
				done();
			});

			const query = controller.expectOne('Blog');
			query.flush({
				data: {
					blog: null
				}
			});
		});
	});
});
