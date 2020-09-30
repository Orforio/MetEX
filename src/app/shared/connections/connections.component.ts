import { Component, Input } from '@angular/core';

import { Line, Maybe, Station } from '../../../generated/graphql';

type ConnectionsStations = Maybe<Array<Maybe<(
		{ __typename?: 'Station' }
		& Pick<Station, 'id' | 'name' | 'slug'>
		& { line?: Maybe<(
			{ __typename?: 'Line' }
			& Pick<Line, 'id' | 'name' | 'slug'>
		)> }
	)>>> | null | undefined;

@Component({
	selector: 'metex-connections',
	templateUrl: './connections.component.html',
	styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {
	@Input() public currentStation? = '';
	@Input() public stations: ConnectionsStations = [];

	constructor() { }
}
