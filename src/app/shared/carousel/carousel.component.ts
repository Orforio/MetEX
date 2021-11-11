import { Component, Input, OnInit } from '@angular/core';
import { DeepExtractType } from 'ts-deep-extract-types';

import { StationQuery } from '../../../generated/graphql';

@Component({
	selector: 'metex-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	@Input() public images: DeepExtractType<StationQuery, ['station', 'images']> | undefined | null = [];
	public showNavigationArrows = true;

	constructor() { }

	ngOnInit(): void {
		this.showNavigationArrows = !!(this.images?.length && this.images.length > 1);
	}
}
