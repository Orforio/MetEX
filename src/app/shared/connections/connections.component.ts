import { Component, Input } from '@angular/core';
import { DeepExtractType } from 'ts-deep-extract-types';

import { StationQuery } from '../../../generated/graphql';

@Component({
	selector: 'metex-connections',
	templateUrl: './connections.component.html',
	styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {
	@Input() public currentStation? = '';
	@Input() public stations: DeepExtractType<StationQuery, ['station', 'interchange', 'stations']> | undefined | null = [];

	constructor() { }
}
