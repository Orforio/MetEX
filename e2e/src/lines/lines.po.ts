import { browser, by, element } from 'protractor';

export class LinesPage {
	navigateTo() {
		return browser.get('/lines');
	}

	sampleLine = {
		name: '6',
		description: "Line 6 is probably one of the network's most interesting lines",
		urlSlug: '6'
	};

	getHeading() {
		return element(by.tagName('h1'));
	}

	getLines() {
		return element.all(by.css('a.list-group-item'));
	}

	getSampleLine() {
		return element(by.partialLinkText(`Line ${this.sampleLine.name}`));
	}
}
