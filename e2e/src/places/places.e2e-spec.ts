import { browser, logging } from 'protractor';

import { PlacesPage } from './places.po';

describe('Places Page', () => {
	let page: PlacesPage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new PlacesPage();
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
		expect(page.getHeading().getText()).toMatch('Places of interest');
	});

	it('should display a list of Places', () => {
		// Assert
		expect(page.getPlaces().count()).toBeGreaterThan(1);
	});

	it('should link to the listed Place', () => {
		// Assert
		expect(page.getSamplePlace()).toBeDefined();
		page.getSamplePlace().click();
		expect(browser.getCurrentUrl()).toMatch(`/places/${page.samplePlace.urlSlug}`);
	});
});
