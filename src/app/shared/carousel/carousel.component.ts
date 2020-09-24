import { Component, Input, OnInit } from '@angular/core';

import { Maybe, UploadFile } from '../../../generated/graphql';

type CarouselImages = Maybe<Array<Maybe<(
	{ __typename?: 'UploadFile' }
	& Pick<UploadFile, 'alternativeText' | 'url'>
)>>> | null | undefined;

@Component({
  selector: 'metex-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	@Input() public images: CarouselImages = [];
	public showNavigationArrows = true;

  constructor() { }

  ngOnInit(): void {
		this.showNavigationArrows = !!(this.images?.length && this.images.length > 1);
  }
}
