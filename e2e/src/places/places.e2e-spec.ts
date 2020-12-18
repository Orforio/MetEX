import { browser } from 'protractor';

import { PlacesPage } from './places.po';

describe('Places Page', () => {
	let page: PlacesPage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new PlacesPage();
		page.navigateTo();
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
