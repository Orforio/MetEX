import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('App Skeleton', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
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
		});

		it('should display', () => {
			// Assert
			expect(page.getNavBar()).toBeDefined();
		});

		it('should link to Home', () => {
			// Assert
			expect(page.getNavBarHomeLink()).toBeDefined();
			expect(page.getNavBarHomeLink().getText()).toMatch('métex');
			expect(page.getNavBarHomeLink().getAttribute('href')).toMatch('/');
		});

		it('should link to Lines', () => {
			// Assert
			expect(page.getNavBarLinesLink()).toBeDefined();
			expect(page.getNavBarLinesLink().getText()).toMatch('lines');
			expect(page.getNavBarLinesLink().getAttribute('href')).toMatch('/lines');
		});

		it('should link to Places', () => {
			// Assert
			expect(page.getNavBarPlacesLink()).toBeDefined();
			expect(page.getNavBarPlacesLink().getText()).toMatch('places');
			expect(page.getNavBarPlacesLink().getAttribute('href')).toMatch('/places');
		});

		it('should link to Github', () => {
			// Assert
			expect(page.getNavBarGithubLink()).toBeDefined();
			expect(page.getNavBarGithubLink().getText()).toMatch('Github');
			expect(page.getNavBarGithubLink().getAttribute('href')).toMatch('https://github.com/PkerUNO/MetEX');
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
