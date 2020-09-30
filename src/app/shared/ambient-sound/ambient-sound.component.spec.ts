import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { AmbientSoundComponent } from './ambient-sound.component';
import { soundFactory } from '../../fixtures/files.fixtures';

describe('AmbientSoundComponent', () => {
	let compiled: HTMLElement;
	let component: AmbientSoundComponent;
	let fixture: ComponentFixture<AmbientSoundComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AmbientSoundComponent ],
			imports: [ FontAwesomeTestingModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(AmbientSoundComponent);
		component = fixture.componentInstance;
		component.sound = soundFactory.build();

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Arrange
		expect(component).toBeTruthy();
	});

	it('should display a control for the audio', () => {
		// Arrange
		expect(compiled.querySelector('audio')).toBeTruthy();
		expect(compiled.querySelector('audio')?.controls).toBeTrue();
		expect(compiled.querySelector('audio')?.src).toEqual(component.sound?.url);
	});
});
