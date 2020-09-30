import { Component, Input } from '@angular/core';

import { Maybe, Place } from '../../../generated/graphql';

type NearbyPlaces = Maybe<Array<Maybe<(
	{ __typename?: 'Place' }
	& Pick<Place, 'name' | 'slug'>
)>>> | null | undefined;

@Component({
	selector: 'metex-nearby-places',
	templateUrl: './nearby-places.component.html',
	styleUrls: ['./nearby-places.component.scss']
})
export class NearbyPlacesComponent {
	@Input() public places: NearbyPlaces;

	constructor() { }
}
