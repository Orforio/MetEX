import { browser, by, element } from 'protractor';

export class LinePage {
	navigateTo() {
		return browser.get('/lines/7bis');
	}

	sampleLine = {
		name: '7bis',
		description: 'Line 7bis was originally part of Line 7 before 1967',
		urlSlug: '7bis'
	};

	sampleStation = {
		name: 'Buttes Chaumont',
		urlSlug: 'buttes-chaumont'
	}

	getHeading() {
		return element(by.tagName('h1'));
	}

	getDescription() {
		return element(by.id('content-line-description'));
	}

	getStations() {
		return element.all(by.css('a.list-group-item'));
	}

	getSampleStation() {
		return element(by.linkText(this.sampleStation.name));
	}
}
