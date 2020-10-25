import { browser, logging } from 'protractor';

import { LinesPage } from './lines.po';

describe('Lines Page', () => {
	let page: LinesPage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new LinesPage();
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
		expect(page.getHeading().getText()).toMatch('Lines');
	});

	it('should display a list of Lines', () => {
		// Assert
		expect(page.getLines().count()).toBeGreaterThan(1);
	});

	it('should link to the listed Line', () => {
		// Assert
		expect(page.getSampleLine()).toBeDefined();
		page.getSampleLine().click();
		expect(browser.getCurrentUrl()).toMatch(`/lines/${page.sampleLine.urlSlug}`);
	});
});
