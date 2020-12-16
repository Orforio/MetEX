import { PlacePage } from './place.po';

describe('Place Page', () => {
	let page: PlacePage;

	beforeEach(() => {
		// Arrange
		// Act
		page = new PlacePage();
		page.navigateTo();
	});

	it('should display the heading', () => {
		// Assert
		expect(page.getHeading().getText()).toMatch(page.samplePlace.name);
	});

	it('should display the image carousel', () => {
		// Assert
		expect(page.getImages()).toBeDefined();
	});

	it('should display the description', () => {
		// Assert
		expect(page.getDescription().getText()).toMatch(page.samplePlace.description);
	});

	it('should display the nearby stations', () => {
		// Assert
		expect(page.getNearbyStations()).toBeDefined();
	});
});
