import { browser, by, element } from 'protractor';

export class BlogPage {
	navigateTo() {
		return browser.get('/blog');
	}

	sampleEntry = {
		title: 'Contact',
		description: 'How to contact the author',
		date: '25 Nov 2020',
		urlSlug: 'contact'
	};

	getHeading() {
		return element(by.tagName('h1'));
	}

	getEntries() {
		return element.all(by.css('a.list-group-item'));
	}

	getSampleEntry() {
		return element(by.partialLinkText(this.sampleEntry.title));
	}
}
