import { browser, logging } from 'protractor';

import { LinePage } from './line.po';

describe('Line Page', () => {
	let page: LinePage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new LinePage();
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
