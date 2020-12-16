import { NotFoundPage } from './not-found.po';

describe('Not Found Page', () => {
	let page: NotFoundPage;

	beforeEach(() => {
		page = new NotFoundPage();
	});

	it('should display the heading', () => {
		// Arrange
		// Act
		page.navigateTo();

		// Assert
		expect(page.getHeading().getText()).toMatch('404');
	});

	it('should appear when browsing to a non-existing page', () => {
		// Arrange
		// Act
		page.navigateToRandom();

		// Assert
		expect(page.getHeading().getText()).toMatch('404');
	});
});
