import { browser, logging } from 'protractor';

import { HomePage } from './home.po';

describe('Home Page', () => {
	let page: HomePage;

	beforeEach(() => {
		page = new HomePage();
	});

	afterEach(async () => {
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

	it('should display the heading', () => {
		// Arrange
		// Act
		page.navigateTo();

		// Assert
		expect(page.getHeading().getText()).toMatch('métex');
	});
});
