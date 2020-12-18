import { HomePage } from './home.po';

describe('Home Page', () => {
	let page: HomePage;

	beforeEach(() => {
		page = new HomePage();
	});

	it('should display the heading', () => {
		// Arrange
		// Act
		page.navigateTo();

		// Assert
		expect(page.getHeading().getText()).toMatch('métex');
	});
});
