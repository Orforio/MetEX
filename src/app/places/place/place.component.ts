import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PlaceQuery, PlaceGQL } from '../../../generated/graphql';
import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
	public place$!: Observable<PlaceQuery['place']>;

	constructor(
		private placeGQL: PlaceGQL,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.place$ = this.transferState.useScullyTransferState(
			'place',
			this.placeGQL
				.fetch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
				.pipe(
					map(data => data.data.place),
					tap(place => {
						if (place) {
							this.title.setTitle(`${SITE_TITLE} ${place?.name}`);
						} else {
							this.router.navigateByUrl('/404');
						}
					})
				)
		);
	}
}
