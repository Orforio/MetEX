import { browser, logging } from 'protractor';

import { PlacePage } from './place.po';

describe('Place Page', () => {
	let page: PlacePage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new PlacePage();
		page.navigateTo();
	});

	afterEach(async () => {
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

	it('should display the heading', () => {
		// Assert
		expect(page.getHeading().getText()).toMatch(page.samplePlace.name);
	});

	it('should display the image carousel', () => {
		// Assert
		expect(page.getImages()).toBeDefined();
	});

	it('should display the description', () => {
		// Assert
		expect(page.getDescription().getText()).toMatch(page.samplePlace.description);
	});

	it('should display the nearby stations', () => {
		// Assert
		expect(page.getNearbyStations()).toBeDefined();
	});
});
