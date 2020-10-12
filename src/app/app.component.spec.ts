import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				FontAwesomeTestingModule,
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		// Arrange
		const fixture = TestBed.createComponent(AppComponent);

		// Act
		const app = fixture.componentInstance;

		// Assert
		expect(app).toBeTruthy();
	});
});
