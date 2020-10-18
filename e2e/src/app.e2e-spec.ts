import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('App Skeleton', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
		browser.driver.manage().window().setSize(400, 700);
	});

	afterEach(async () => {
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

	describe('site navigation', () => {
		beforeEach(() => {
			// Arrange
			// Act
			page.navigateTo();
			page.toggleNavBar();
		});

		it('should display', () => {
			// Assert
			expect(page.getNavBar()).toBeDefined();
		});

		it('should link to Home', () => {
			// Assert
			expect(page.getNavBarHomeLink()).toBeDefined();
			expect(page.getNavBarHomeLink().getText()).toMatch('métex');
			page.getNavBarHomeLink().click();
			expect(browser.driver.getCurrentUrl()).toMatch('/');
		});

		it('should link to Lines', () => {
			// Assert
			expect(page.getNavBarLinesLink()).toBeDefined();
			expect(page.getNavBarLinesLink().getText()).toMatch('lines');
			page.getNavBarLinesLink().click();
			expect(browser.driver.getCurrentUrl()).toMatch('/lines');
		});

		it('should link to Places', () => {
			// Assert
			expect(page.getNavBarPlacesLink()).toBeDefined();
			expect(page.getNavBarPlacesLink().getText()).toMatch('places');
			page.getNavBarPlacesLink().click();
			expect(browser.driver.getCurrentUrl()).toMatch('/places');
		});

		it('should link to Github', () => {
			// Assert
			expect(page.getNavBarGithubLink()).toBeDefined();
			expect(page.getNavBarGithubLink().getText()).toMatch('Github');
			page.getNavBarGithubLink().click();
			expect(browser.driver.getCurrentUrl()).toMatch('https://github.com/PkerUNO/MetEX');
		});
	});

	describe('site footer', () => {
		beforeEach(() => {
			// Arrange
			// Act
			page.navigateTo();
		});

		it('should display', () => {
			// Assert
			expect(page.getFooter()).toBeDefined();
			expect(page.getFooter().getText()).toMatch('©');
		});
	});
});
