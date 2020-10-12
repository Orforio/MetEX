import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ HomeComponent ],
			imports: [ RouterTestingModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;

		// Act
		fixture.detectChanges();
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});
});
