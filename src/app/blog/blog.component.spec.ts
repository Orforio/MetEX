import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { BlogComponent } from './blog.component';
import { blogFactory } from '../fixtures/blog.fixtures';

describe('BlogComponent', () => {
	let compiled: HTMLElement;
	let component: BlogComponent;
	let controller: ApolloTestingController;
	let fixture: ComponentFixture<BlogComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ BlogComponent ],
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
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display a list of Blog entries', (done: DoneFn) => {
		// Arrange
		const blogFixtures = blogFactory.buildList(3);

		// Act
		// Assert
		component.entries$.subscribe(() => {
			fixture.detectChanges();
			expect(compiled.querySelectorAll('a').length).toEqual(3);
			blogFixtures.forEach((entry, i) => {
				expect(compiled.querySelectorAll('a')[i].textContent).toMatch(`${entry?.title}`);
				expect(compiled.querySelectorAll('a')[i].href).toMatch(`${entry?.slug}`);
			});
			done();
		});

		const query = controller.expectOne('Blogs');
		query.flush({
			data: {
				blogs: blogFixtures
			}
		});
		controller.verify();
	});

	describe('ngOnInit()', () => {
		afterEach(() => {
			controller.verify();
		});

		it('should get the list of Blog entries', (done: DoneFn) => {
			// Arrange
			const blogFixtures = blogFactory.buildList(3);

			// Act
			component.ngOnInit();

			// Assert
			component.entries$.subscribe(entries => {
				entries?.forEach((entry, i) => {
					expect(entry?.title).toMatch(blogFixtures[i].title);
					expect(entry?.slug).toMatch(blogFixtures[i].slug!);
				});
				done();
			});

			const query = controller.expectOne('Blogs');
			query.flush({
				data: {
					blogs: blogFixtures
				}
			});
		});
	});
});
