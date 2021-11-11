import { Component, Input } from '@angular/core';
import { DeepExtractType } from 'ts-deep-extract-types';

import { StationQuery } from '../../../generated/graphql';

@Component({
	selector: 'metex-nearby-places',
	templateUrl: './nearby-places.component.html',
	styleUrls: ['./nearby-places.component.scss']
})
export class NearbyPlacesComponent {
	@Input() public places: DeepExtractType<StationQuery, ['station', 'places']> | undefined | null = [];

	constructor() { }
}
