import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { MockComponent } from 'ng-mocks';

import { CarouselComponent } from './carousel.component';
import { imageFactory } from '../../fixtures/files.fixtures';

fdescribe('CarouselComponent', () => {
	let compiled: HTMLElement;
	let component: CarouselComponent;
	let fixture: ComponentFixture<CarouselComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				CarouselComponent,
				MockComponent(NgbCarousel)
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(CarouselComponent);
		component = fixture.componentInstance;
		component.images = imageFactory.buildList(3);

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display an ngbCarousel element', () => {
		// Arrange
		expect(compiled.querySelector('ngb-carousel')).toBeTruthy();
	});

	describe('ngOnInit()', () => {
		it('should show navigation arrows if there is more than one image', () => {
			// Arrange
			component.images = imageFactory.buildList(3);

			// Act
			component.ngOnInit();

			// Arrange
			expect(component.showNavigationArrows).toBeTrue();
		});

		it('should not show navigation arrows if there is only one image', () => {
			// Arrange
			component.images = imageFactory.buildList(1);

			// Act
			component.ngOnInit();

			// Arrange
			expect(component.showNavigationArrows).toBeFalse();
		});
	});

});
