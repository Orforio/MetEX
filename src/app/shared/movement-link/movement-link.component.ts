import { Component, Input } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Maybe, Movement, Station } from '../../../generated/graphql';

type MovementLinkMovements = Maybe<Array<Maybe<(
	{ __typename?: 'Movement' }
	& { allowed: Movement['down_allowed'] | Movement['up_allowed'] }
	& { station?: Maybe<(
		{ __typename?: 'Station' }
		& Pick<Station, 'name' | 'slug'>
	)> }
)>>> | null | undefined;

@Component({
  selector: 'metex-movement-link',
  templateUrl: './movement-link.component.html',
  styleUrls: ['./movement-link.component.scss']
})
export class MovementLinkComponent {
	@Input() public direction!: 'up' | 'down';
	@Input() public movements!: MovementLinkMovements;
	public faChevronCircleLeft = faChevronCircleLeft;
	public faChevronCircleRight = faChevronCircleRight;
	public faTimesCircle = faTimesCircle;

	constructor() { }
}
