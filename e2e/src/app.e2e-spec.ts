import { browser } from 'protractor';

import { AppPage } from './app.po';

describe('App Skeleton', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
		browser.driver.manage().window().setSize(400, 700);
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
			expect(browser.getCurrentUrl()).toMatch('/');
		});

		it('should link to Lines', () => {
			// Assert
			expect(page.getNavBarLinesLink()).toBeDefined();
			expect(page.getNavBarLinesLink().getText()).toMatch('lines');
			page.getNavBarLinesLink().click();
			expect(browser.getCurrentUrl()).toMatch('/lines');
		});

		it('should link to Places', () => {
			// Assert
			expect(page.getNavBarPlacesLink()).toBeDefined();
			expect(page.getNavBarPlacesLink().getText()).toMatch('places');
			page.getNavBarPlacesLink().click();
			expect(browser.getCurrentUrl()).toMatch('/places');
		});

		it('should link to Development blog', () => {
			// Assert
			expect(page.getNavBarBlogLink()).toBeDefined();
			expect(page.getNavBarBlogLink().getText()).toMatch('dev blog');
			page.getNavBarBlogLink().click();
			expect(browser.getCurrentUrl()).toMatch('/blog');
		});

		it('should link to Github', () => {
			// Assert
			expect(page.getNavBarGithubLink()).toBeDefined();
			expect(page.getNavBarGithubLink().getText()).toMatch('Github');
			browser.waitForAngularEnabled(false);
			page.getNavBarGithubLink().click();
			expect(browser.getCurrentUrl()).toMatch('https://github.com/Orforio/MetEX');
			browser.waitForAngularEnabled(true);
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

		it('should link to the contacts page', () => {
			// Assert
			expect(page.getFooterContactLink()).toBeDefined();
			page.getFooterContactLink().click();
			expect(browser.getCurrentUrl()).toMatch('/blog/about-and-contact');
		});
	});
});
