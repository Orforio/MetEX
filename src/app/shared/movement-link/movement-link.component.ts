import { Component, Input } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { StationQuery } from '../../../generated/graphql';

@Component({
	selector: 'metex-movement-link',
	templateUrl: './movement-link.component.html',
	styleUrls: ['./movement-link.component.scss']
})
export class MovementLinkComponent {
	@Input() public direction!: 'up' | 'down';
	@Input() public movements!: StationQuery['downMovements'] | StationQuery['upMovements'];
	public faChevronCircleLeft = faChevronCircleLeft;
	public faChevronCircleRight = faChevronCircleRight;
	public faTimesCircle = faTimesCircle;

	constructor() { }
}
