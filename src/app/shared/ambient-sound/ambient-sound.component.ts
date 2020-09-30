import { Component, Input } from '@angular/core';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

import { Maybe, UploadFile } from '../../../generated/graphql';

type AmbientSound = Maybe<(
	{ __typename?: 'UploadFile' }
	& Pick<UploadFile, 'url'>
)> | null | undefined;

@Component({
	selector: 'metex-ambient-sound',
	templateUrl: './ambient-sound.component.html',
	styleUrls: ['./ambient-sound.component.scss']
})
export class AmbientSoundComponent {
	@Input() public sound!: AmbientSound;
	public faHeadphonesAlt = faHeadphonesAlt;

	constructor() { }
}
