import { browser } from 'protractor';

import { BlogPage } from './blog.po';

describe('Blog Page', () => {
	let page: BlogPage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new BlogPage();
		page.navigateTo();
	});

	it('should display the heading', () => {
		// Assert
		expect(page.getHeading().getText()).toMatch('Development blog');
	});

	it('should display a list of blog posts', () => {
		// Assert
		expect(page.getEntries().count()).toBeGreaterThan(1);
	});

	it('should display title, date, and description for the listed blog post', () => {
		// Assert
		expect(page.getSampleEntry()).toBeDefined();
		expect(page.getSampleEntry().getText()).toMatch(page.sampleEntry.title);
		expect(page.getSampleEntry().getText()).toMatch(page.sampleEntry.date);
		expect(page.getSampleEntry().getText()).toMatch(page.sampleEntry.description);
	});

	it('should link to the listed blog post', () => {
		// Assert
		expect(page.getSampleEntry()).toBeDefined();
		page.getSampleEntry().click();
		expect(browser.getCurrentUrl()).toMatch(`/blog/${page.sampleEntry.urlSlug}`);
	});
});
