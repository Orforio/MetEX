import { browser, by, element } from 'protractor';

export class PlacePage {
	navigateTo() {
		return browser.get('/places/saint-lazare-station');
	}

	samplePlace = {
		name: 'Saint-Lazare station',
		description: 'Saint-Lazare is the newest station'
	};

	getHeading() {
		return element(by.tagName('h1'));
	}

	getDescription() {
		return element(by.id('content-place-description'));
	}

	getImages() {
		return element(by.id('content-station-photos'));
	}

	getNearbyStations() {
		return element(by.id('nav-place-stations'));
	}
}
