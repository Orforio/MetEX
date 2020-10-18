import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getNavBar() {
		return element(by.css('nav.navbar'));
	}

	getNavBarCollapseButton() {
		return this.getNavBar().element(by.tagName('button'));
	}

	getNavBarLinks() {
		!this.getNavBarCollapseButton().getAttribute('aria-expanded') && this.toggleNavBar();
		return this.getNavBar().all(by.tagName('a'));
	}

	getNavBarHomeLink() {
		return this.getNavBarLinks().get(0);
	}

	getNavBarLinesLink() {
		return this.getNavBarLinks().get(1);
	}

	getNavBarPlacesLink() {
		return this.getNavBarLinks().get(2);
	}

	getNavBarGithubLink() {
		return this.getNavBarLinks().get(3);
	}

	getFooter() {
		return element(by.tagName('footer'));
	}

	toggleNavBar() {
		this.getNavBarCollapseButton().click();
	}
}
