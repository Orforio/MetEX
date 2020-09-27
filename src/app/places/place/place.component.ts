import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

import { PlaceQuery, PlaceGQL } from '../../../generated/graphql';
import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit, OnDestroy {
	public place!: PlaceQuery['place'];
	private placeSubscription!: Subscription;

	constructor(
		private placeGQL: PlaceGQL,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.placeSubscription = this.transferState.useScullyTransferState(
			'place',
			this.placeGQL
				.watch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
				.valueChanges
		)
		.subscribe(data => {
			if (data?.data?.place) {
				this.place = data.data.place;
				this.title.setTitle(`${SITE_TITLE} ${this.place?.name}`);
			} else {
				this.router.navigateByUrl('/404');
			}
		});
	}

	ngOnDestroy(): void {
		this.placeSubscription.unsubscribe();
	}
}
