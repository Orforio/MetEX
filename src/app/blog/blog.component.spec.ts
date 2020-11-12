import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
	let component: BlogComponent;
	let fixture: ComponentFixture<BlogComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ BlogComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});
});
