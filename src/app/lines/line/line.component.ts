import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TransferStateService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

import { LineQuery, LineGQL } from '../../../generated/graphql';
import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './line.component.html',
	styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy {
	public faPlusCircle = faPlusCircle;
	public line!: LineQuery['line'];
	private lineSubscription!: Subscription;

	constructor(
		private lineGQL: LineGQL,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.lineSubscription = this.transferState.useScullyTransferState(
			'line',
			this.lineGQL
				.fetch({ slug: this.route.snapshot.paramMap.get('slug') ?? '' })
			)
			.subscribe(data => {
				if (data?.data?.line) {
					this.line = data.data.line;
					this.title.setTitle(`${SITE_TITLE} Line ${this.line?.name}`);
				} else {
					this.router.navigateByUrl('/404');
				}
			});
	}

	ngOnDestroy(): void {
		this.lineSubscription.unsubscribe();
	}
}
