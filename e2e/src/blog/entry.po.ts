import { browser, by, element } from 'protractor';

export class EntryPage {
	navigateTo() {
		return browser.get('/blog/about-and-contact');
	}

	sampleEntry = {
		title: 'About & Contact',
		entry: 'Hello, and welcome to MétEX, the Paris Métro Experience',
		date: '25 Nov 2020',
		urlSlug: 'about-and-contact'
	};

	getHeading() {
		return element(by.tagName('h1'));
	}

	getEntry() {
		return element(by.id('content-blog-entry'));
	}

	getEntryTitle() {
		return this.getEntry().element(by.tagName('h2'));
	}

	getEntryContent() {
		return this.getEntry().element(by.tagName('markdown'));
	}
}
