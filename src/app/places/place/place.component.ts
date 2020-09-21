import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PlaceQuery, PlaceGQL } from '../../../generated/graphql';

@Component({
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit, OnDestroy {
	public place!: PlaceQuery['placeBySlug'];
	private placeSubscription!: Subscription;

	constructor(
		private placeGQL: PlaceGQL,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.placeSubscription = this.placeGQL
			.watch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
			.valueChanges
			.subscribe(data => {
				if (data?.data?.placeBySlug) {
					this.place = data.data.placeBySlug;
				} else {
					this.router.navigateByUrl('/404');
				}
			});
	}

	ngOnDestroy(): void {
		this.placeSubscription.unsubscribe();
	}
}
