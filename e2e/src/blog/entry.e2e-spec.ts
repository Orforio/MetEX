import { browser } from 'protractor';

import { EntryPage } from './entry.po';

describe('Entry Page', () => {
	let page: EntryPage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new EntryPage();
		page.navigateTo();
	});

	it('should display the heading', () => {
		// Assert
		expect(page.getHeading().getText()).toMatch('Development blog');
	});

	it('should link back to the Blog list when "Development Blog" is clicked', () => {
		// Act
		page.getHeading().click();

		// Assert
		expect(browser.getCurrentUrl()).toMatch(/\/blog$/);
	});

	it('should display the Entry title', () => {
		// Assert
		expect(page.getEntryTitle().getText()).toMatch(page.sampleEntry.title);
	});

	it('should display the Entry date', () => {
		// Assert
		expect(page.getEntryTitle().getText()).toMatch(page.sampleEntry.date);
	});

	it('should display the Entry content', () => {
		// Assert
		expect(page.getEntryContent().getText()).toMatch(page.sampleEntry.entry);
	});
});
