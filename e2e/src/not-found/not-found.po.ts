import { browser, by, element } from 'protractor';

export class NotFoundPage {
	navigateTo() {
		return browser.get('/404');
	}

	navigateToRandom() {
		return browser.get(`/wrong-page-${Math.floor(Math.random() * 1000)}`);
	}

	getHeading() {
		return element(by.tagName('h1'));
	}
}
