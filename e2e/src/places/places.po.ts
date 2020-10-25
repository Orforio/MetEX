import { browser, by, element } from 'protractor';

export class PlacesPage {
	navigateTo() {
		return browser.get('/places');
	}

	getHeading() {
		return element(by.tagName('h1'));
	}

	getPlaces() {
		return element.all(by.css('a.list-group-item'));
	}

	samplePlace = {
		name: 'Pasteur station',
		urlSlug: 'pasteur-station'
	};

	getSamplePlace() {
		return element(by.linkText(this.samplePlace.name));
	}
}
