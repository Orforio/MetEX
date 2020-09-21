import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { LineQuery, LineGQL } from '../../../generated/graphql';

@Component({
	templateUrl: './line.component.html',
	styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy {
	public faPlusCircle = faPlusCircle;
	public line!: LineQuery['lineBySlug'];
	private lineSubscription!: Subscription;

	constructor(
		private lineGQL: LineGQL,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.lineSubscription = this.lineGQL
			.fetch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
			.subscribe(data => {
				if (data?.data?.lineBySlug) {
					this.line = data.data.lineBySlug;
				} else {
					this.router.navigateByUrl('/404');
				}
			});
	}

	ngOnDestroy(): void {
		this.lineSubscription.unsubscribe();
	}
}
