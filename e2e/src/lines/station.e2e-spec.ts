import { browser, logging } from 'protractor';

import { StationPage } from './station.po';

describe('Station Page', () => {
	let page: StationPage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new StationPage();
		page.navigateTo();
	});

	afterEach(async () => {
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

	it('should redirect when using a legacy URL', () => {
		// Act
		page.navigateToTour();

		// Assert
		expect(browser.getCurrentUrl()).toMatch(`/lines/${page.sampleStation.line}/${page.sampleStation.urlSlug}`);
	});

	it('should display the heading', () => {
		// Assert
		expect(page.getHeading().getText()).toMatch(`${page.sampleStation.line} ${page.sampleStation.name}`);
	});

	describe('station navigation', () => {
		it('should display the Up and Down stations', () => {
			// Assert
			expect(page.getMovements()).toBeDefined();
			expect(page.getUpStations()).toBeDefined();
			expect(page.getUpStations().count()).toEqual(page.sampleStation.upStations.length);
			expect(page.getDownStations()).toBeDefined();
			expect(page.getDownStations().count()).toEqual(page.sampleStation.downStations.length);
		});

		it('should link to the Up stations', () => {
			// Assert
			expect(page.getUpStations().get(0).getText()).toMatch(page.sampleStation.upStations[0].name);
			page.getUpStations().get(0).click();
			expect(browser.getCurrentUrl()).toMatch(`/lines/${page.sampleStation.line}/${page.sampleStation.upStations[0].urlSlug}`);
		});

		it('should display Terminus stations', () => {
			// Assert
			expect(page.getDownStations().get(0).getText()).toMatch(page.sampleStation.downStations[0].name);
		});
	});

	describe('content area', () => {
		it('should display the image carousel', () => {
			// Assert
			expect(page.getImages()).toBeDefined();
		});

		it('should display the ambient sound', () => {
			// Assert
			expect(page.getStationAmbient()).toBeDefined();
		});

		it('should display the description', () => {
			// Assert
			expect(page.getDescription().getText()).toMatch(page.sampleStation.description);
		});
	});

	describe('link area', () => {
		it('should display the connected Lines', () => {
			// Assert
			expect(page.getConnections()).toBeDefined();
			expect(page.getConnectionsLinks().count()).toEqual(page.sampleStation.connections.length);
		});

		it('should link to the connected Lines', () => {
			// Assert
			expect(page.getConnectionsLinks().get(0).getText()).toMatch(page.sampleStation.connections[0].stationName);
			page.getConnectionsLinks().get(0).click();
			expect(browser.getCurrentUrl()).toMatch(`/lines/${page.sampleStation.connections[0].lineSlug}/${page.sampleStation.connections[0].stationSlug}`);
		});

		it('should display the nearby Places', () => {
			// Assert
			expect(page.getNearbyPlaces()).toBeDefined();
			expect(page.getNearbyPlacesLinks().count()).toEqual(page.sampleStation.places.length);
		});

		it('should link to the connected Lines', () => {
			// Assert
			expect(page.getNearbyPlacesLinks().get(0).getText()).toMatch(page.sampleStation.places[0].name);
			page.getNearbyPlacesLinks().get(0).click();
			expect(browser.getCurrentUrl()).toMatch(`/places/${page.sampleStation.places[0].urlSlug}`);
		});
	});
});
