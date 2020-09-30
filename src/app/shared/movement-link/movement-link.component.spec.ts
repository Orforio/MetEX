import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { MovementLinkComponent } from './movement-link.component';
import { coherentMovementsFactory } from '../../fixtures/movements.fixtures';

describe('MovementLinkComponent', () => {
	let compiled: HTMLElement;
	let component: MovementLinkComponent;
	let fixture: ComponentFixture<MovementLinkComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ MovementLinkComponent ],
			imports: [
				FontAwesomeTestingModule,
				RouterTestingModule
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(MovementLinkComponent);
		component = fixture.componentInstance;
		component.direction = 'up';
		component.movements = coherentMovementsFactory(1, 0);

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display links for each Movement in the array', () => {
		// Arrange
		const movements = coherentMovementsFactory(3, 0);
		component.direction = 'up';
		component.movements = movements;

		// Act
		fixture.detectChanges();

		// Assert
		expect(compiled.querySelectorAll('a').length).toEqual(3);
		movements.forEach((movement, i) => {
			expect(compiled.querySelectorAll('a')[i].href).toMatch(`${movement?.station?.slug}`);
		});
	});

	it('should display on the left for upStations', () => {
		// Arrange
		component.direction = 'up';
		component.movements = coherentMovementsFactory(1, 0);

		// Act
		fixture.detectChanges();

		// Assert
		expect(compiled.textContent).toMatch('Up');
		expect(compiled.querySelector('h2')?.className).toContain('text-left');
	});

	it('should display on the right for downStations', () => {
		// Arrange
		component.direction = 'down';
		component.movements = coherentMovementsFactory(0, 1);

		// Act
		fixture.detectChanges();

		// Assert
		expect(compiled.textContent).toMatch('Down');
		expect(compiled.querySelector('h2')?.className).toContain('text-right');
	});

	it('should display unallowed Movements', () => {
		// Arrange
		component.direction = 'up';
		component.movements = coherentMovementsFactory(1, 0, false);

		// Act
		fixture.detectChanges();

		// Assert
		expect(compiled.textContent).toMatch('(not allowed)');
		expect(compiled.querySelector('a')?.className).toContain('bg-danger');
	});

	it('should display Terminus Movements', () => {
		// Arrange
		component.direction = 'up';
		component.movements = coherentMovementsFactory(1, 0, false, true);

		// Act
		fixture.detectChanges();

		// Assert
		expect(compiled.textContent).toMatch('Terminus');
	});
});
