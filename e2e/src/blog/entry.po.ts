import { browser, by, element } from 'protractor';

export class EntryPage {
	navigateTo() {
		return browser.get('/blog/contact');
	}

	sampleEntry = {
		title: 'Contact',
		entry: 'MétEX was created by Richard Whittaker',
		date: '25 Nov 2020',
		urlSlug: 'contact'
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
