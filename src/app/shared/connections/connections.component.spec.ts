import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { ConnectionsComponent } from './connections.component';
import { LineBadgeComponent } from '../line-badge/line-badge.component';
import { stationFactory } from '../../fixtures/stations.fixtures';
import { Station } from '../../../generated/graphql';

describe('ConnectionComponent', () => {
	let compiled: HTMLElement;
	let component: ConnectionsComponent;
	let fixture: ComponentFixture<ConnectionsComponent>;
	let stationFixtures: Station[];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ConnectionsComponent,
				MockComponent(LineBadgeComponent)
			],
			imports: [ RouterTestingModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		// Arrange
		fixture = TestBed.createComponent(ConnectionsComponent);
		component = fixture.componentInstance;
		stationFixtures = stationFactory.buildList(3);
		component.stations = stationFixtures;

		// Act
		fixture.detectChanges();
		compiled = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should display a list of Stations', () => {
		// Assert
		expect(compiled.querySelectorAll('li').length).toEqual(3);
	});

	it('should link to each Station', () => {
		// Assert
		stationFixtures.forEach((station, i) => {
			expect(compiled.querySelectorAll('a')[i].href).toMatch(`/lines/${station?.line?.slug}/${station?.slug}`);
			expect(compiled.querySelectorAll('a')[i].textContent).toMatch(`${station?.name}`);
			expect(fixture.debugElement.queryAll(By.directive(LineBadgeComponent))[i].componentInstance.line).toEqual(station?.line);
		});
	});

	it('should exclude the current Station from the list if it is specified', () => {
		// Arrange
		component.currentStation = stationFixtures[1].id;

		// Act
		fixture.detectChanges();

		// Assert
		expect(compiled.querySelectorAll('li').length).toEqual(2);
		compiled.querySelectorAll('a').forEach(a => {
			expect(a?.textContent).not.toMatch(stationFixtures[1].name);
		});
	});
});
