import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBadgeComponent } from './line-badge.component';
import { lineFactory } from '../../fixtures/lines.fixtures';
import { Line } from '../../../generated/graphql';

describe('LineBadgeComponent', () => {
	let compiled: HTMLElement;
	let component: LineBadgeComponent;
	let fixture: ComponentFixture<LineBadgeComponent>;
	let lineFixture: Line;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ LineBadgeComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(LineBadgeComponent);
		component = fixture.componentInstance;
		lineFixture = lineFactory.build();
		component.line = lineFixture;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display the line name', () => {
		// Assert
		expect(compiled.textContent).toMatch(lineFixture.name);
	});

	describe('ngOnInit()', () => {
		it('should correctly separate the components of a "full" numbered line', () => {
			// Arrange
			lineFixture = lineFactory.build({ name: '6' });
			component.line = lineFixture;

			// Act
			component.ngOnInit();

			// Assert
			expect(component.lineNumber).toEqual('6');
			expect(component.lineSuffix).toEqual('');
		});

		it('should correctly separate the components of a "bis" numbered line', () => {
			// Arrange
			lineFixture = lineFactory.build({ name: '14bis' });
			component.line = lineFixture;

			// Act
			component.ngOnInit();

			// Assert
			expect(component.lineNumber).toEqual('14');
			expect(component.lineSuffix).toEqual('bis');
		});
	});
});
