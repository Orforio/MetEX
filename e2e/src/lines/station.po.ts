import { browser, by, element } from 'protractor';

export class StationPage {
	navigateTo() {
		return browser.get('/lines/3bis/gambetta');
	}

	navigateToTour() {
		return browser.get('/tour/3bis/gambetta');
	}

	sampleStation = {
		name: 'Gambetta',
		urlSlug: 'gambetta',
		line: '3bis',
		description: 'The tunnel-like nature of this station is a give-away as to its old use',
		upStations: [
			{
				name: 'Pelleport',
				urlSlug: 'pelleport'
			}
		],
		downStations: [
			{
				name: 'Terminus',
				urlSlug: null
			}
		],
		connections: [
			{
				lineSlug: '3',
				stationName: 'Gambetta',
				stationSlug: 'gambetta'
			}
		],
		places: [
			{
				name: 'Gambetta station',
				urlSlug: 'gambetta-station'
			},
			{
				name: 'Old nning tunnels, Gambetta',
				urlSlug: 'old-running-tunnels-gambetta'
			}
		]
	};

	getHeading() {
		return element(by.tagName('h1'));
	}

	getMovements() {
		return element(by.id('nav-station'));
	}

	getUpStations() {
		return this.getMovements().all(by.css('#nav-station-up a'));
	}

	getDownStations() {
		return this.getMovements().all(by.css('#nav-station-down h2'));
	}

	getDescription() {
		return element(by.id('content-station-description'));
	}

	getStationAmbient() {
		return element(by.tagName('audio'));
	}

	getImages() {
		return element(by.id('content-station-photos'));
	}

	getConnections() {
		return element(by.id('nav-station-connections'));
	}

	getConnectionsLinks() {
		return this.getConnections().all(by.tagName('a'));
	}

	getNearbyPlaces() {
		return element(by.id('nav-station-places'));
	}

	getNearbyPlacesLinks() {
		return this.getNearbyPlaces().all(by.tagName('a'));
	}
}
