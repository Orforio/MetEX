import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
	StationGQL,
	StationQuery
} from '../../../generated/graphql';
import { SITE_TITLE } from '../../../settings';

@Component({
	templateUrl: './station.component.html',
	styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
	public station$!: Observable<StationQuery>;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private stationGQL: StationGQL,
		private title: Title,
		private transferState: TransferStateService
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.station$ = this.transferState.useScullyTransferState(
				'station',
				this.stationGQL
					.fetch({
						lineSlug: params.get('lineSlug') ?? '',
						stationSlug: params.get('stationSlug') ?? ''
					})
					.pipe(
						map(data => data.data),
						tap(data => {
							if (data.station) {
								this.title.setTitle(`${SITE_TITLE} (${data.station?.line?.name}) ${data.station?.name}`);
							} else {
								this.router.navigateByUrl('/404');
							}
						})
					)
				);
		});
	}
}
