import { browser } from 'protractor';

import { LinePage } from './line.po';

describe('Line Page', () => {
	let page: LinePage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new LinePage();
		page.navigateTo();
	});


	it('should display the heading', () => {
		// Assert
		expect(page.getHeading().getText()).toMatch(`Line ${page.sampleLine.name}`);
	});

	it('should display the description', () => {
		// Assert
		expect(page.getDescription().getText()).toMatch(page.sampleLine.description);
	});

	it('should display a list of Stations', () => {
		// Assert
		expect(page.getStations().count()).toBeGreaterThan(1);
	});

	it('should link to the listed Station', () => {
		// Assert
		expect(page.getSampleStation()).toBeDefined();
		page.getSampleStation().click();
		expect(browser.getCurrentUrl()).toMatch(`/lines/${page.sampleLine.urlSlug}/${page.sampleStation.urlSlug}`);
	});
});
