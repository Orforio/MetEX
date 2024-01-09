import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { MockComponent } from 'ng-mocks';

import { SegmentedProgressBarComponent } from './segmented-progress-bar.component';

describe('SegmentedProgressBarComponent', () => {
	let compiled: HTMLElement;
	let component: SegmentedProgressBarComponent;
	let fixture: ComponentFixture<SegmentedProgressBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				MockComponent(NgbProgressbar),
				SegmentedProgressBarComponent
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(SegmentedProgressBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('calculateValue()', () => {
		it('should return 0 if the current segment is not yet active', () => {
			// Arrange
			const segment = 1;
			component.currentProgress = 5;
			component.segments = [10, 20, 30];

			// Act
			const result = component.calculateValue(segment);

			// Assert
			expect(result).toEqual(0);
		});

		it('should return the percentage progress of the currently active segment', () => {
			// Arrange
			const segment = 1;
			component.currentProgress = 15;
			component.segments = [10, 20, 30];

			// Act
			const result = component.calculateValue(segment);

			// Assert
			expect(result).toEqual(25);
		});

		it('should return 100 if the current segment is no longer active', () => {
			// Arrange
			const segment = 1;
			component.currentProgress = 50;
			component.segments = [10, 20, 30];

			// Act
			const result = component.calculateValue(segment);

			// Assert
			expect(result).toEqual(100);
		});
	});

	describe('calculateWidth()', () => {
		it('should return the percentage width of the segment based on the total running time', () => {
			// Arrange
			component.segments = [10, 20, 30];

			// Act
			const result = component.calculateWidth(20);

			// Assert
			expect(result).toBeCloseTo(33, 0);
		})
	});
});
